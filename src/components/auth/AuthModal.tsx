import React, { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import type { UserRole, UserData } from "@/types/user";
import { AuthInitialStep } from "./steps/AuthInitialStep";
import { AuthLoginStep } from "./steps/AuthLoginStep";
import { AuthRegisterStep } from "./steps/AuthRegisterStep";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: UserData) => void;
}

type AuthStep = "initial" | "email_login" | "email_register";

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { loginWithGoogle, getUserRoleFromEmail, login, register } = useAuth();
  const [step, setStep] = useState<AuthStep>("initial");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    // Захист від подвійного натискання
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const googleUser = await loginWithGoogle();
      if (!googleUser.email) {
        throw new Error("Не вдалося отримати email з Google");
      }

      // Перевірка на адміна
      const adminRole = getUserRoleFromEmail(googleUser.email);
      if (adminRole) {
        onSuccess({
          email: googleUser.email,
          name: googleUser.name,
          role: adminRole,
          uid: googleUser.uid,
          photoURL: googleUser.photoURL,
        });
        onClose();
        return;
      }

      // Якщо не адмін — передаємо дані з role: "guest", щоб RoleSelectionModal показався автоматично
      onSuccess({
        email: googleUser.email,
        name: googleUser.name,
        role: "guest" as UserRole, // Role буде вибрана в RoleSelectionModal
        uid: googleUser.uid,
        photoURL: googleUser.photoURL,
      });
      onClose();
    } catch (err: unknown) {
      // Показуємо помилку з useAuth hook, яка вже перекладена
      const errorMessage =
        (err as Error).message ||
        "Помилка входу через Google. Переконайтеся, що Google Sign-In увімкнено в Firebase Console.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async (isRegister: boolean) => {
    if (!email || !password) {
      setError("Будь ласка, заповніть всі поля");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (isRegister) {
        if (!name) {
          setError("Будь ласка, введіть ім'я");
          setIsLoading(false);
          return;
        }
        await register(email, password, name);
      } else {
        await login(email, password);
      }

      // Після успішного входу/реєстрації перевіряємо роль
      const adminRole = getUserRoleFromEmail(email);
      if (adminRole) {
        // Якщо адмін - одразу входимо
        onSuccess({
          email,
          name: name || email.split("@")[0],
          role: adminRole,
        });
        onClose();
        return;
      }

      // Якщо не адмін — передаємо дані з role: "guest", щоб RoleSelectionModal показався автоматично
      onSuccess({
        email,
        name: name || email.split("@")[0],
        role: "guest" as UserRole, // Role буде вибрана в RoleSelectionModal
      });
      onClose();
    } catch (err: unknown) {
      setError((err as Error).message || "Помилка авторизації");
    } finally {
      setIsLoading(false);
    }
  };

  const resetModal = () => {
    setStep("initial");
    setName("");
    setEmail("");
    setPassword("");
    setError(null);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-background/95 backdrop-blur-2xl animate-in fade-in duration-500">
      <div className="relative w-full max-w-xl glass border border-border/50 rounded-[48px] overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="p-10 md:p-14">
          {step === "initial" && (
            <AuthInitialStep
              isLoading={isLoading}
              error={error}
              onGoogleLogin={handleGoogleLogin}
              onEmailLogin={() => {
                setStep("email_login");
                setError(null);
              }}
            />
          )}

          {step === "email_login" && (
            <AuthLoginStep
              email={email}
              password={password}
              isLoading={isLoading}
              error={error}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onBack={() => {
                setStep("initial");
                setError(null);
              }}
              onSubmit={() => handleEmailAuth(false)}
              onGoToRegister={() => {
                setStep("email_register");
                setError(null);
              }}
            />
          )}

          {step === "email_register" && (
            <AuthRegisterStep
              name={name}
              email={email}
              password={password}
              isLoading={isLoading}
              error={error}
              onNameChange={setName}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onBack={() => {
                setStep("email_login");
                setError(null);
              }}
              onSubmit={() => handleEmailAuth(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
