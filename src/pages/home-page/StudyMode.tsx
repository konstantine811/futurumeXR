import React from "react";

import { PlayCircle, AlertCircle, Award } from "lucide-react";

export const StudyMode: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
                Study Mode
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Режим активного навчання, де помилка — це не вирок, а можливість навчитися.
              </p>
              <div className="h-1 w-24 bg-accent mt-6 rounded-full" />
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: PlayCircle,
                  title: "Інтерактивний потік",
                  desc: "Учень не просто читає, а постійно взаємодіє з контентом через мікро-завдання.",
                },
                {
                  icon: AlertCircle,
                  title: "Аналіз помилок",
                  desc: "Миттєвий фідбек: система пояснює, чому відповідь неправильна, і дає підказку.",
                },
                {
                  icon: Award,
                  title: "Персональний досвід",
                  desc: "Адаптивна складність завдань залежно від успішності учня.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl bg-popover border border-border shadow-md hover:border-accent/30 transition-all group"
                  >
                    <Icon className="text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2 w-full animate-in fade-in zoom-in-95 duration-1000 delay-300">
            {/* Abstract Interface Representation */}
            <div className="bg-popover rounded-2xl border border-border p-2 shadow-2xl">
              <div className="bg-muted/50 rounded-xl p-6 aspect-[4/3] flex flex-col relative overflow-hidden border border-border">
                <div className="h-2 w-full bg-muted rounded-full mb-6 overflow-hidden">
                  <div className="h-full w-[65%] bg-accent transition-all duration-500"></div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center z-10">
                  <h3 className="text-foreground text-xl font-medium mb-4">
                    Що є основною структурною одиницею живих організмів?
                  </h3>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                    <button className="p-3 rounded-lg border border-border text-muted-foreground hover:border-destructive hover:text-destructive transition-colors text-sm">
                      Атом
                    </button>
                    <button className="p-3 rounded-lg border border-accent bg-accent/10 text-foreground transition-colors text-sm shadow-[0_0_15px_rgba(52,225,161,0.2)]">
                      Клітина
                    </button>
                    <button className="p-3 rounded-lg border border-border text-muted-foreground hover:border-destructive hover:text-destructive transition-colors text-sm">
                      Молекула
                    </button>
                    <button className="p-3 rounded-lg border border-border text-muted-foreground hover:border-destructive hover:text-destructive transition-colors text-sm">
                      Тканина
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <span className="text-accent text-xs font-mono animate-pulse">
                    AI Mentor аналізує відповідь...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
