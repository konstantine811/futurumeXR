import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-bold tracking-widest uppercase mb-8 animate-float">
          <Sparkles size={14} /> Web-LMS нового покоління
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
          FuturumXR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400 glow-text">
            LMS
          </span>
        </h1>

        <h2 className="text-xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          <span className="text-slate-900 dark:text-white font-semibold">
            AI + Learning + XR
          </span>{" "}
          для сучасної школи та академії
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Перетворюємо пасивне навчання на інтерактивний досвід. Платформа, що
          об'єднує класичну освіту з технологіями майбутнього.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-accent text-darker font-bold text-lg rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(52,225,161,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              Дізнатися більше{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>

          <button className="px-8 py-4 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-lg rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            Стати партнером
          </button>
        </div>
      </div>

      {/* Visual Grid Floor */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white dark:from-darker to-transparent z-20 pointer-events-none" />
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52, 225, 161, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 225, 161, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          transform:
            "perspective(500px) rotateX(60deg) translateY(100px) scale(2)",
        }}
      />
    </div>
  );
};
