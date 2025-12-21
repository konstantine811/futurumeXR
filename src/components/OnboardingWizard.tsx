import React, { useState } from "react";
import { Check, ArrowRight, Brain, Sparkles } from "lucide-react";
import type { UserRole } from "@/types/user";
import { USER_ROLES } from "@/config/roles";

interface OnboardingProps {
  role: UserRole;
  userName: string;
  onComplete: (data: {
    age: number;
    selections: string[];
    completedAt: Date;
  }) => void;
}

export const OnboardingWizard: React.FC<OnboardingProps> = ({
  role,
  userName,
  onComplete,
}) => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState(role === USER_ROLES.STUDENT ? 12 : 30);
  const [selections, setSelections] = useState<string[]>([]);

  const totalSteps = 3;

  const isStudent = role === USER_ROLES.STUDENT;

  const handleToggle = (id: string) => {
    setSelections((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete({ age, selections, completedAt: new Date() });
    }
  };

  const interests = [
    "Космос 🚀",
    "Техно 🤖",
    "Природа 🌿",
    "Код 💻",
    "Арт 🎨",
    "Ігри 🎮",
  ];

  return (
    <div className="fixed inset-0 z-[120] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-2xl w-full glass border border-border/50 rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-border/50">
          <div
            className="h-full bg-accent transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {step === 1 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mx-auto mb-6 shadow-[0_0_30px_rgba(52,225,161,0.2)]">
                <Sparkles size={40} />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Привіт, {userName}!
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Майже готово. Скільки тобі років?
              </p>

              <div className="flex flex-col items-center gap-6 mb-10">
                <div className="text-6xl font-display font-black text-accent animate-pulse">
                  {age}
                </div>
                <input
                  type="range"
                  min={isStudent ? 6 : 18}
                  max={isStudent ? 25 : 70}
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full max-w-sm h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <p className="text-muted-foreground text-sm">
                  {isStudent
                    ? "Це допоможе AI підібрати завдання твого рівня"
                    : "Це допоможе нам адаптувати методичні рекомендації"}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="px-10 py-4 bg-accent text-background font-bold rounded-2xl hover:opacity-90 transition-all flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(52,225,161,0.2)]"
              >
                Продовжити <ArrowRight size={20} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                {isStudent ? "Що тобі цікаво?" : "Що ви викладаєте?"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 mt-8">
                {interests.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleToggle(opt)}
                    className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3
                      ${
                        selections.includes(opt)
                          ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(52,225,161,0.2)]"
                          : "border-border/50 bg-popover/40 hover:border-accent/50 hover:bg-popover/60"
                      }`}
                  >
                    <span
                      className={`font-bold text-sm ${
                        selections.includes(opt)
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  disabled={selections.length === 0}
                  onClick={handleNext}
                  className="px-8 py-3 bg-accent text-background font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(52,225,161,0.2)]"
                >
                  Далі <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent mx-auto mb-6 shadow-[0_0_30px_rgba(52,225,161,0.2)]">
                <Brain size={40} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Налаштування завершено!
              </h3>
              <div className="space-y-3 max-w-sm mx-auto mb-10">
                <div className="flex items-center gap-3 p-4 bg-popover/40 border border-border/50 rounded-2xl">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-background shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-sm text-foreground">
                    Профіль: {userName} ({age} р.)
                  </span>
                </div>
                {selections.length > 0 && (
                  <div className="flex items-center gap-3 p-4 bg-popover/40 border border-border/50 rounded-2xl">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-background shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-sm text-foreground">
                      Інтереси: {selections.join(", ")}
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={handleNext}
                className="w-full py-4 bg-accent text-background font-bold rounded-2xl hover:opacity-90 transition-all shadow-[0_0_30px_rgba(52,225,161,0.4)]"
              >
                Увійти в кабінет
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
