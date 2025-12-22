import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

interface HeroProps {
  onGetStarted?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/30 border border-border/50 text-accent text-xs font-medium mb-8 backdrop-blur-sm animate-float">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
          </span>
          WEB-LMS 2.0 вже доступна
        </div>

        <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground tracking-tighter mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700">
          FuturumXR <span className="text-gradient-primary">LMS</span>
        </h1>

        <h2 className="text-xl md:text-3xl font-light text-muted-foreground mb-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-foreground font-semibold">
            AI + Learning + XR
          </span>{" "}
          для сучасної школи та академії
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Перетворюємо пасивне навчання на інтерактивний досвід. Платформа, що
          об'єднує класичну освіту з технологіями майбутнього.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <button
            onClick={onGetStarted}
            className="group relative px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              Спробувати демо
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 text-muted-foreground hover:text-foreground font-medium transition-all flex items-center gap-2">
            <PlayCircle className="w-5 h-5" />
            Як це працює
          </button>
        </div>

        {/* Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
};
