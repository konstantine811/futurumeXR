import React from "react";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  "Інтерактивні уроки нового покоління",
  "Потужний Lesson Builder",
  "AI Mentor для кожного учня",
  "Адаптивний Study Mode",
  "Детальна аналітика прогресу",
  "XR-ready архітектура",
];

export const Solution: React.FC = () => {
  return (
    <section
      id="solutions"
      className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="glass rounded-[40px] p-8 md:p-16 border border-border/50 relative overflow-hidden shadow-2xl bg-popover/50">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Наше рішення
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tighter leading-tight">
                FuturumXR — це <br />
                <span className="text-gradient-primary">
                  відповідь на виклики
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                Ми створили екосистему, де технології служать педагогіці, а
                навчання стає захоплюючою пригодою.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2 className="text-accent" size={14} />
                    </div>
                    <span className="text-foreground font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="aspect-square rounded-3xl bg-popover border border-border/50 p-2 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700 overflow-hidden">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-muted/50 to-popover relative flex items-center justify-center">
                  <div className="absolute inset-0 grid-pattern opacity-20"></div>
                  <div className="text-center p-6 relative z-10">
                    <div className="text-7xl font-display font-bold text-foreground mb-2 tracking-tighter">
                      100%
                    </div>
                    <div className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold">
                      Залученість учнів
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
