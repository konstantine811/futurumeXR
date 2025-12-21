import React from "react";
import { Mail, Chrome, RefreshCw } from "lucide-react";

interface AuthInitialStepProps {
  isLoading: boolean;
  error: string | null;
  onGoogleLogin: () => void;
  onEmailLogin: () => void;
}

export const AuthInitialStep: React.FC<AuthInitialStepProps> = ({
  isLoading,
  error,
  onGoogleLogin,
  onEmailLogin,
}) => {
  return (
    <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mx-auto border border-accent/20 shadow-[0_0_30px_rgba(52,225,161,0.1)]">
        <Mail size={40} />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
          Вхід до FuturumXR
        </h2>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
          Авторизуйтесь, щоб отримати доступ до вашого навчального простору.
        </p>
      </div>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm space-y-2">
          <p className="font-medium">{error}</p>
          {error.includes("configuration-not-found") && (
            <div className="text-xs text-muted-foreground/80 mt-2 pt-2 border-t border-destructive/20">
              <p className="font-semibold mb-1">Як увімкнути Google Sign-In:</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Відкрийте Firebase Console</li>
                <li>Перейдіть до Authentication → Sign-in method</li>
                <li>Увімкніть "Google" провайдер</li>
                <li>Збережіть налаштування</li>
              </ol>
            </div>
          )}
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={onGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-4 py-4 bg-foreground text-background rounded-2xl font-bold text-sm hover:opacity-90 transition-all shadow-xl shadow-black/10 active:scale-95 disabled:opacity-50"
        >
          {isLoading ? (
            <RefreshCw className="animate-spin" size={20} />
          ) : (
            <>
              <Chrome size={20} />
              Увійти через Google
            </>
          )}
        </button>
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-border/50"></div>
          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
            Або через систему
          </span>
          <div className="h-px flex-1 bg-border/50"></div>
        </div>
        <button
          onClick={onEmailLogin}
          className="w-full py-4 bg-popover/40 border border-border/50 text-muted-foreground rounded-2xl font-bold text-sm hover:bg-popover/60 hover:text-foreground transition-all flex items-center justify-center gap-2"
        >
          <Mail size={18} /> Корпоративна пошта
        </button>
      </div>

      <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-loose">
        Продовжуючи, ви погоджуєтесь з <br />
        <a href="#" className="text-foreground hover:underline">
          Правилами використання
        </a>
      </p>
    </div>
  );
};
