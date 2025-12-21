import React from "react";
import { RefreshCw } from "lucide-react";

interface AuthLoginStepProps {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  onGoToRegister: () => void;
}

export const AuthLoginStep: React.FC<AuthLoginStepProps> = ({
  email,
  password,
  isLoading,
  error,
  onEmailChange,
  onPasswordChange,
  onBack,
  onSubmit,
  onGoToRegister,
}) => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Вхід</h2>
        <p className="text-muted-foreground text-sm">
          Введіть ваші облікові дані
        </p>
      </div>

      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="w-full px-4 py-3 bg-popover/40 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Пароль
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            className="w-full px-4 py-3 bg-popover/40 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3 bg-popover/40 border border-border/50 text-foreground rounded-xl font-medium text-sm hover:bg-popover/60 transition-all"
        >
          Назад
        </button>
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="flex-1 py-3 bg-accent text-background rounded-xl font-bold text-sm hover:opacity-90 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <RefreshCw className="animate-spin mx-auto" size={18} />
          ) : (
            "Увійти"
          )}
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={onGoToRegister}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Немає акаунту? <span className="font-bold">Зареєструватися</span>
        </button>
      </div>
    </div>
  );
};
