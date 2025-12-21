import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import type { UserRole } from "@/types/user";
import { PUBLIC_ROLES } from "./auth/config/publicRoles";
import { saveUserProfile, type UserProfile } from "@/services/userService";
import { useAuthStore } from "@/stores/authStore";

interface RoleSelectionModalProps {
  userEmail: string;
  userName: string;
  onComplete: () => void;
}

export const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({
  userEmail,
  userName,
  onComplete,
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthStore();

  const handleSubmit = async () => {
    if (!selectedRole) return;

    setIsLoading(true);
    try {
      // Створюємо профіль з вибраною роллю
      const profile: UserProfile = {
        email: userEmail,
        name: userName,
        role: selectedRole,
        onboardingCompleted: false,
      };

      // Зберігаємо в Firestore
      await saveUserProfile(profile);

      // Оновлюємо user в store
      setUser(profile);

      // Викликаємо callback
      onComplete();
    } catch (error) {
      console.error("Error saving role:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[115] flex items-center justify-center p-4 bg-background/95 backdrop-blur-2xl animate-in fade-in duration-500">
      <div className="relative w-full max-w-xl glass border border-border/50 rounded-[48px] overflow-hidden shadow-2xl">
        {/* Close Button - не показуємо, бо це обов'язковий крок */}

        <div className="p-10 md:p-14">
          <div className="text-center animate-in slide-in-from-bottom-8 duration-500">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Оберіть вашу роль
            </h2>
            <p className="text-muted-foreground text-sm mb-10">
              Це визначить ваш інтерфейс та доступні інструменти.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {PUBLIC_ROLES.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-5 rounded-[24px] border transition-all flex flex-col items-center gap-3 group relative
                                ${
                                  selectedRole === role.id
                                    ? "border-border bg-popover/40 shadow-xl"
                                    : "border-border/30 bg-popover/10 hover:border-border/50 hover:bg-popover/20"
                                }`}
                  >
                    <Icon
                      size={24}
                      className={
                        selectedRole === role.id
                          ? role.color
                          : "text-muted-foreground group-hover:text-foreground"
                      }
                    />
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-widest ${
                          selectedRole === role.id
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {role.label}
                      </p>
                      <p className="text-[9px] text-muted-foreground mt-1 hidden md:block">
                        {role.desc}
                      </p>
                    </div>
                    {selectedRole === role.id && (
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(52,225,161,0.5)]"></div>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleSubmit}
              disabled={!selectedRole || isLoading}
              className="w-full py-4 bg-accent text-background rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all disabled:opacity-30 mt-10 shadow-[0_0_30px_rgba(52,225,161,0.2)]"
            >
              {isLoading ? (
                <RefreshCw className="animate-spin mx-auto" size={20} />
              ) : (
                "Продовжити"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
