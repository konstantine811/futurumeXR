import { lazy, Suspense, useEffect, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Preloader from "./components/Preloader";
import { RoutePath } from "./config/route-config";
import { getDashboardPathByRole, isAdminRole } from "./config/roles";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/auth/AuthModal";
import { OnboardingWizard } from "./components/OnboardingWizard";
import { RoleSelectionModal } from "./components/RoleSelectionModal";
import { useAuth } from "./hooks/useAuth";
import {
  getUserProfile,
  saveUserProfile,
  type UserProfile,
} from "./services/userService";
import type { UserData } from "./types/user";
import { useAuthStore } from "./stores/authStore";

// Ліниве завантаження сторінок
const Home = lazy(() => import("./pages/Home"));
const Capabilities = lazy(() => import("./pages/Capabilities"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const ThemeSettings = lazy(() => import("./pages/ThemeSettings"));
const DashboardPage = lazy(() =>
  import("./pages/DashboardPage").then((module) => ({
    default: module.DashboardPage,
  }))
);

function AppContent() {
  const { user: firebaseUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Zustand store
  const {
    user,
    isAuthModalOpen,
    showOnboarding,
    onboardingData,
    loadingProfile,
    showRoleSelection,
    setUser,
    closeAuthModal,
    setShowOnboarding,
    setOnboardingData,
    setShowRoleSelection,
    syncWithFirebase,
  } = useAuthStore();

  const redirectToDashboard = useCallback(
    (role: string) => {
      closeAuthModal();

      // Перенаправляємо на відповідний dashboard
      setTimeout(() => {
        navigate(
          getDashboardPathByRole(role as import("./types/user").UserRole)
        );
      }, 100);
    },
    [navigate, closeAuthModal]
  );

  // Sync with Firebase user using Zustand store
  useEffect(() => {
    if (firebaseUser?.email) {
      syncWithFirebase({ email: firebaseUser.email });
    } else {
      syncWithFirebase(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseUser?.email]);

  // Автоматично показуємо вибір ролі, якщо користувач залогінений, але не має валідної ролі
  useEffect(() => {
    if (user && !showRoleSelection && !showOnboarding) {
      // Якщо роль не встановлена або це гость, показуємо вибір ролі
      const needsRoleSelection = !user.role || user.role === "guest";

      if (needsRoleSelection) {
        setShowRoleSelection(true);
      }
    }
  }, [user, showRoleSelection, showOnboarding, setShowRoleSelection]);

  // Автоматично показуємо onboarding, якщо користувач залогінений, має роль, але не пройшов onboarding
  useEffect(() => {
    if (
      user &&
      user.role &&
      user.role !== "guest" &&
      !user.onboardingCompleted &&
      !isAdminRole(user.role) &&
      !showRoleSelection
    ) {
      // Перевіряємо, чи onboarding вже не показується
      if (!showOnboarding) {
        setOnboardingData(user);
        setShowOnboarding(true);
      }
    }
  }, [
    user,
    showOnboarding,
    showRoleSelection,
    setOnboardingData,
    setShowOnboarding,
  ]);

  // Redirect to dashboard if user completed onboarding and on home page
  // НЕ редіректимо, якщо показується onboarding
  useEffect(() => {
    if (
      user &&
      user.onboardingCompleted &&
      !showOnboarding &&
      location.pathname === RoutePath.HOME
    ) {
      redirectToDashboard(user.role);
    }
  }, [user, showOnboarding, location.pathname, redirectToDashboard]);

  const handleLoginSuccess = async (userData: UserData) => {
    // Закриваємо модальне вікно
    closeAuthModal();

    try {
      // Перевіряємо профіль в Firestore
      const profile = await getUserProfile(userData.email);

      if (profile) {
        // Профіль знайдено - використовуємо його
        setUser(profile);
        // RoleSelectionModal та Onboarding будуть показані автоматично через useEffect, якщо потрібно
      } else {
        // Профіль не знайдено - створюємо новий
        if (isAdminRole(userData.role)) {
          // Адміни - одразу встановлюємо onboardingCompleted: true
          const adminProfile: UserProfile = {
            ...userData,
            onboardingCompleted: true,
          };
          await saveUserProfile(adminProfile);
          setUser(adminProfile);
        } else {
          // Звичайні користувачі - створюємо профіль з роллю "guest" та onboardingCompleted: false
          // RoleSelectionModal автоматично покаже вибір ролі
          const baseProfile: UserProfile = {
            ...userData,
            role: userData.role || "guest", // Використовуємо передану роль або "guest"
            onboardingCompleted: false,
          };
          await saveUserProfile(baseProfile);
          setUser(baseProfile);
          // RoleSelectionModal та Onboarding будуть показані автоматично через useEffect
        }
      }
    } catch (error) {
      console.error("Error handling login success:", error);
      // Fallback: створюємо тимчасовий профіль
      const tempProfile: UserProfile = {
        ...userData,
        role: userData.role || "guest",
        onboardingCompleted: isAdminRole(userData.role || "guest"),
      };
      setUser(tempProfile);
    }
  };

  const handleOnboardingComplete = async (onboardingInfo: {
    age: number;
    selections: string[];
    completedAt: Date;
  }) => {
    if (!onboardingData) return;

    try {
      const finalUserProfile: UserProfile = {
        ...onboardingData,
        onboardingCompleted: true,
        onboardingInfo,
      };

      // Зберігаємо в Firestore
      await saveUserProfile(finalUserProfile);

      // Оновлюємо локальний стан
      setUser(finalUserProfile);

      setShowOnboarding(false);
      setOnboardingData(null);

      // Направляємо на dashboard
      redirectToDashboard(finalUserProfile.role);
    } catch (error) {
      console.error("Error saving onboarding data:", error);
      // Навіть якщо помилка - продовжуємо
      const finalUserProfile: UserProfile = {
        ...onboardingData,
        onboardingCompleted: true,
        onboardingInfo,
      };
      setUser(finalUserProfile);
      setShowOnboarding(false);
      setOnboardingData(null);
      redirectToDashboard(finalUserProfile.role);
    }
  };

  if (authLoading || loadingProfile) {
    return <Preloader text="FUTURUM XR" />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-darker text-slate-600 dark:text-slate-300 font-sans selection:bg-accent selection:text-darker overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <Suspense fallback={<Preloader text="FUTURUM XR" />}>
        <PageTransition>
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.CAPABILITIES} element={<Capabilities />} />
            <Route path={RoutePath.ROADMAP} element={<Roadmap />} />
            <Route
              path={RoutePath.THEME_SETTINGS}
              element={<ThemeSettings />}
            />
            <Route path="/dashboard/:role" element={<DashboardPage />} />
            <Route
              path={RoutePath.STUDENT_DASHBOARD}
              element={<DashboardPage />}
            />
            <Route
              path={RoutePath.TEACHER_DASHBOARD}
              element={<DashboardPage />}
            />
            <Route
              path={RoutePath.ADMIN_DASHBOARD}
              element={<DashboardPage />}
            />
          </Routes>
        </PageTransition>
      </Suspense>
      <Footer />
      {/* Показуємо AuthModal тільки якщо користувач НЕ авторизований та модальне вікно відкрите */}
      {!user && isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={closeAuthModal}
          onSuccess={handleLoginSuccess}
        />
      )}
      {showRoleSelection && user && (
        <RoleSelectionModal
          userEmail={user.email}
          userName={user.name}
          onComplete={() => {
            setShowRoleSelection(false);
            // Після вибору ролі onboarding покажеться автоматично через useEffect
          }}
        />
      )}
      {showOnboarding && onboardingData && (
        <OnboardingWizard
          role={onboardingData.role}
          userName={onboardingData.name}
          onComplete={handleOnboardingComplete}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
