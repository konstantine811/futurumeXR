import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";

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
    <Section gridBg id="features">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-card dark:to-slate-900 rounded-3xl p-8 md:p-16 border border-slate-700 dark:border-slate-800 relative overflow-hidden shadow-2xl">
        {/* Decorative glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              FuturumXR — це <br />
              <span className="text-accent">відповідь на виклики</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Ми створили екосистему, де технології служать педагогіці, а
              навчання стає захоплюючою пригодою.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Abstract Graphic Representation */}
            <div className="aspect-square rounded-2xl bg-slate-950 border border-slate-800 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-900 to-black relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/800/800?grayscale&blur=2')] opacity-20 mix-blend-overlay"></div>
                <div className="text-center p-6">
                  <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-tr from-accent to-white mb-2">
                    100%
                  </div>
                  <div className="text-slate-400 uppercase tracking-widest text-sm">
                    Залученість
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
