import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProfile } from "@/services/userService";
import type { UserData } from "@/types/user";
import { getUserProfile } from "@/services/userService";
import { isAdminRole } from "@/config/roles";

interface AuthState {
  // State
  user: UserProfile | null;
  isAuthModalOpen: boolean;
  showOnboarding: boolean;
  onboardingData: UserData | null;
  loadingProfile: boolean;
  isSyncing: boolean; // Прапорець для відстеження синхронізації
  showRoleSelection: boolean; // Показувати вибір ролі

  // Actions
  setUser: (user: UserProfile | null) => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  setShowOnboarding: (show: boolean) => void;
  setOnboardingData: (data: UserData | null) => void;
  setLoadingProfile: (loading: boolean) => void;
  setShowRoleSelection: (show: boolean) => void;

  // Reset
  reset: () => void;

  // Sync with Firebase
  syncWithFirebase: (firebaseUser: { email: string } | null) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthModalOpen: false,
      showOnboarding: false,
      onboardingData: null,
      loadingProfile: false,
      isSyncing: false,
      showRoleSelection: false,

      // Simple actions
      setUser: (user) => set({ user }),

      openAuthModal: () => {
        // Не відкриваємо модальне вікно, якщо вже йде синхронізація або є користувач
        const state = get();
        if (!state.isSyncing && !state.user) {
          set({ isAuthModalOpen: true });
        }
      },
      closeAuthModal: () => set({ isAuthModalOpen: false }),

      setShowOnboarding: (show) => set({ showOnboarding: show }),
      setOnboardingData: (data) => set({ onboardingData: data }),
      setLoadingProfile: (loading) => set({ loadingProfile: loading }),
      setShowRoleSelection: (show: boolean) => set({ showRoleSelection: show }),

      // Reset all state (useful for logout)
      reset: () =>
        set({
          user: null,
          isAuthModalOpen: false,
          showOnboarding: false,
          onboardingData: null,
          loadingProfile: false,
          isSyncing: false,
          showRoleSelection: false,
        }),

      // Sync with Firebase user
      syncWithFirebase: async (firebaseUser) => {
        const state = get();

        // Якщо вже йде синхронізація, пропускаємо
        if (state.isSyncing) return;

        // Якщо немає Firebase користувача і є локальний - очищаємо
        if (!firebaseUser && state.user) {
          get().reset();
          return;
        }

        // Якщо немає Firebase користувача - виходимо
        if (!firebaseUser || !firebaseUser.email) {
          // Якщо немає Firebase користувача, закриваємо модальне вікно (якщо воно відкрите)
          // і не відкриваємо його автоматично
          if (state.isAuthModalOpen) {
            set({ isAuthModalOpen: false });
          }
          return;
        }

        const firebaseEmail = firebaseUser.email;

        // Перевіряємо, чи користувач вже завантажений і email співпадає
        if (state.user && state.user.email === firebaseEmail) {
          // Закриваємо модальне вікно на випадок, якщо воно відкрите
          if (state.isAuthModalOpen) {
            set({ isAuthModalOpen: false });
          }
          // Не перезаписуємо onboarding стан, якщо він вже встановлений
          return; // Користувач вже завантажений
        }

        // Якщо вже йде процес onboarding, не синхронізуємо (не перезаписуємо стан)
        if (
          state.showOnboarding &&
          state.onboardingData?.email === firebaseEmail
        ) {
          // Закриваємо модальне вікно на випадок, якщо воно відкрите
          if (state.isAuthModalOpen) {
            set({ isAuthModalOpen: false });
          }
          return; // Не перезаписуємо onboarding стан
        }

        // Якщо є user з таким email (навіть якщо не повністю співпадає), і вже йде onboarding
        // не синхронізуємо, щоб не перезаписати стан
        if (state.user?.email === firebaseEmail && state.showOnboarding) {
          if (state.isAuthModalOpen) {
            set({ isAuthModalOpen: false });
          }
          return;
        }

        // Починаємо синхронізацію
        set({ isSyncing: true, loadingProfile: true });

        try {
          // Завантажуємо профіль з Firestore
          const profile = await getUserProfile(firebaseEmail);

          if (profile) {
            // Якщо профіль знайдено в Firestore - використовуємо його
            // Але не перезаписуємо onboarding стан, якщо він вже встановлений
            const currentState = get();
            const updates: Partial<AuthState> = {
              user: profile,
              isAuthModalOpen: false, // Закриваємо модальне вікно
            };

            // Якщо onboarding не завершено - показуємо onboarding (якщо не адмін)
            // Але тільки якщо onboarding ще не встановлений
            if (
              !profile.onboardingCompleted &&
              !isAdminRole(profile.role) &&
              !currentState.showOnboarding
            ) {
              updates.onboardingData = profile;
              updates.showOnboarding = true;
            }

            set(updates);
          } else {
            // Якщо профіль не знайдено в Firestore, але є user з таким email в store
            // Це означає, що користувач тільки що увійшов і профіль ще не збережено
            // Або профіль був встановлений через handleLoginSuccess
            // Не перезаписуємо стан user - залишаємо як є
            // Тільки закриваємо модальне вікно
            set({ isAuthModalOpen: false });
          }
        } catch (error) {
          console.error("Error syncing with Firebase:", error);
          // При помилці також закриваємо модальне вікно
          set({ isAuthModalOpen: false });
        } finally {
          set({ isSyncing: false, loadingProfile: false });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
