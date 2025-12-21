import React from "react";
import { ArrowRight, PlayCircle, Lock, Heart, Sparkles } from "lucide-react";

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
          FuturumXR{" "}
          <span className="text-gradient-primary">LMS</span>
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
        <div className="relative w-full max-w-6xl mx-auto perspective-[2000px] group animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
          <div className="relative bg-popover border border-border rounded-xl overflow-hidden shadow-2xl transform rotate-x-6 group-hover:rotate-x-0 transition-all duration-700 ease-out origin-center">
            <div className="h-12 border-b border-border/60 flex items-center px-4 justify-between bg-popover/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-muted border border-border/50"></div>
                <div className="w-3 h-3 rounded-full bg-muted border border-border/50"></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted/30 rounded-full border border-border/50">
                <Lock className="w-3 h-3 text-accent" />
                <span className="text-[10px] text-muted-foreground font-mono">futurum-xr.edu</span>
              </div>
              <div className="w-6"></div>
            </div>
            
            <div className="p-6 grid grid-cols-12 gap-6 min-h-[400px]">
              <div className="col-span-12 md:col-span-2 hidden md:flex flex-col gap-2 border-r border-border/60 pr-6">
                <div className="h-10 w-full bg-muted/50 rounded-lg mb-6"></div>
                <div className="space-y-1">
                  <div className="h-8 w-full bg-accent/10 border border-accent/20 rounded-lg"></div>
                  <div className="h-8 w-full hover:bg-muted/20 rounded-lg transition"></div>
                  <div className="h-8 w-full hover:bg-muted/20 rounded-lg transition"></div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-10 text-left">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-xs text-accent font-mono mb-2 uppercase tracking-widest">Study Mode • Active</div>
                    <h2 className="text-2xl text-foreground font-medium">Анатомія людини: Серце</h2>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-foreground text-[10px] font-bold">AI</div>
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-bold text-[10px]">XR</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2 h-64 rounded-2xl border border-border bg-gradient-to-b from-muted/20 to-transparent relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 grid-pattern opacity-20"></div>
                    <div className="w-32 h-32 rounded-full bg-red-500/20 blur-[40px] animate-pulse"></div>
                    <Heart className="relative z-10 w-24 h-24 text-red-500/80 stroke-1 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                  </div>
                  <div className="col-span-1 h-64 rounded-2xl border border-border bg-popover/40 p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      AI Mentor
                    </div>
                    <div className="space-y-3 overflow-hidden flex-1">
                      <div className="p-3 rounded-lg rounded-tl-none bg-muted/50 text-[11px] text-muted-foreground">
                        Зверни увагу на лівий шлуночок. Як думаєш, чому він масивніший?
                      </div>
                      <div className="p-3 rounded-lg rounded-tr-none bg-accent/10 border border-accent/20 text-[11px] text-accent ml-auto w-4/5">
                        Тому що він качає кров по всьому тілу?
                      </div>
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
