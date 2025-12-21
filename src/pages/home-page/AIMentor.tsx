import React from "react";
import { Bot, MessageSquare, BrainCircuit, BarChart3 } from "lucide-react";

export const AIMentor: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-[0_0_40px_rgba(99,102,241,0.3)] animate-pulse-slow">
            <Bot size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center">
            AI Mentor
          </h2>
          <p className="text-muted-foreground mt-4 text-center max-w-xl">
            Персональний тьютор, який доступний 24/7. Він не втомлюється
            пояснювати і завжди знаходить підхід.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: MessageSquare,
              title: "Розумні пояснення",
              desc: "Пояснює складні теми простими словами, наводячи життєві аналогії.",
            },
            {
              icon: BrainCircuit,
              title: "Генерація вправ",
              desc: "Створює унікальні завдання на основі поточного рівня знань учня.",
            },
            {
              icon: BarChart3,
              title: "Аналіз прогресу",
              desc: "Виявляє прогалини у знаннях та пропонує шляхи їх усунення.",
            },
            {
              icon: Bot,
              title: "Study Mode Companion",
              desc: "Супроводжує учня під час виконання завдань, даючи контекстні підказки.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-popover/80 p-6 rounded-xl border border-border backdrop-blur-sm hover:shadow-lg hover:border-purple-500/30 transition-all group animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative z-10">
                  <Icon className="text-purple-500 mb-4" size={28} />
                  <h4 className="text-foreground font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
