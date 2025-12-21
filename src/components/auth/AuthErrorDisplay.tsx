import React from "react";

interface AuthErrorDisplayProps {
  error: string | null;
}

export const AuthErrorDisplay: React.FC<AuthErrorDisplayProps> = ({ error }) => {
  if (!error) return null;

  return (
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
  );
};

