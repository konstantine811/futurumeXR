import React from "react";
import { Bot, MessageSquare, BrainCircuit, BarChart3 } from "lucide-react";
import { Section } from "@/components/ui/Section";

export const AIMentor: React.FC = () => {
  return (
    <Section
      gridBg
      className="bg-gradient-to-b from-white to-slate-50 dark:from-darker dark:to-[#0B0F19] transition-colors duration-300"
    >
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-[0_0_40px_rgba(99,102,241,0.3)] animate-pulse-slow">
          <Bot size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white text-center">
          AI Mentor
        </h2>
        <p className="text-slate-600 dark:text-indigo-200 mt-4 text-center max-w-xl">
          Персональний тьютор, який доступний 24/7. Він не втомлюється
          пояснювати і завжди знаходить підхід.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/80 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:shadow-lg dark:hover:bg-slate-800 transition-all">
          <MessageSquare
            className="text-purple-500 dark:text-purple-400 mb-4"
            size={28}
          />
          <h4 className="text-slate-900 dark:text-white font-bold mb-2">
            Розумні пояснення
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Пояснює складні теми простими словами, наводячи життєві аналогії.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:shadow-lg dark:hover:bg-slate-800 transition-all">
          <BrainCircuit
            className="text-purple-500 dark:text-purple-400 mb-4"
            size={28}
          />
          <h4 className="text-slate-900 dark:text-white font-bold mb-2">
            Генерація вправ
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Створює унікальні завдання на основі поточного рівня знань учня.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:shadow-lg dark:hover:bg-slate-800 transition-all">
          <BarChart3
            className="text-purple-500 dark:text-purple-400 mb-4"
            size={28}
          />
          <h4 className="text-slate-900 dark:text-white font-bold mb-2">
            Аналіз прогресу
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Виявляє прогалини у знаннях та пропонує шляхи їх усунення.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:shadow-lg dark:hover:bg-slate-800 transition-all">
          <Bot
            className="text-purple-500 dark:text-purple-400 mb-4"
            size={28}
          />
          <h4 className="text-slate-900 dark:text-white font-bold mb-2">
            Study Mode Companion
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Супроводжує учня під час виконання завдань, даючи контекстні
            підказки.
          </p>
        </div>
      </div>
    </Section>
  );
};
