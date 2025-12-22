import { Heart, Lock, Sparkles } from "lucide-react";

function DashboardMockup() {
  return (
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
            <span className="text-[10px] text-muted-foreground font-mono">
              futurum-xr.edu
            </span>
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
                <div className="text-xs text-accent font-mono mb-2 uppercase tracking-widest">
                  Study Mode • Active
                </div>
                <h2 className="text-2xl text-foreground font-medium">
                  Анатомія людини: Серце
                </h2>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-foreground text-[10px] font-bold">
                  AI
                </div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-bold text-[10px]">
                  XR
                </div>
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
                    Зверни увагу на лівий шлуночок. Як думаєш, чому він
                    масивніший?
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
  );
}

export default DashboardMockup;
