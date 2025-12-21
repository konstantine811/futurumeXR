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
    <section id="features" className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="bg-popover rounded-3xl p-8 md:p-16 border border-border relative overflow-hidden shadow-2xl glass-panel">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                FuturumXR — це <br />
                <span className="text-gradient-primary">відповідь на виклики</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ми створили екосистему, де технології служать педагогіці, а
                навчання стає захоплюючою пригодою.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${idx * 100}ms` }}>
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300">
              {/* Abstract Graphic Representation */}
              <div className="aspect-square rounded-2xl bg-popover border border-border p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-muted/50 to-popover relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-pattern opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                  <div className="text-center p-6 relative z-10">
                    <div className="text-6xl font-display font-bold text-gradient-primary mb-2">
                      100%
                    </div>
                    <div className="text-muted-foreground uppercase tracking-widest text-sm">
                      Залученість
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
