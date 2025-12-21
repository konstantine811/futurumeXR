import React from "react";
import { Box, Play, FileText, Image, Wand2 } from "lucide-react";

export const LessonBuilder: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Lesson Builder
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Конструктор, що перетворює підготовку до уроку на творчий процес. Web-first, але готовий до майбутнього.
          </p>
          <div className="h-1 w-24 bg-accent mt-6 mx-auto rounded-full" />
        </div>

        <div className="glass-panel rounded-3xl p-1 overflow-hidden shadow-2xl">
          <div className="bg-popover/50 rounded-[20px] p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Visual UI Mockup */}
              <div className="flex-1 bg-popover rounded-xl border border-border p-4 relative min-h-[300px] flex flex-col shadow-inner animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
                  <span className="text-xs font-mono text-muted-foreground">
                    LESSON_EDITOR_V1.0
                  </span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex-1 border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground gap-2 hover:border-accent/50 hover:text-accent transition-colors cursor-pointer">
                  <Box /> Drag & Drop Blocks Here
                </div>
                <div className="mt-4 flex gap-2 overflow-x-auto py-2">
                  {[FileText, Image, Play, Box].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-background transition-colors shrink-0"
                    >
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 flex flex-col justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-accent text-background flex items-center justify-center font-bold text-sm">
                    LB
                  </span>
                  Web-first → XR-ready
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(52,225,161,0.5)]"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        Гейміфіковані блоки:
                      </strong>{" "}
                      тести, опитування, квізи в один клік.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(52,225,161,0.5)]"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        Мультимедіа:
                      </strong>{" "}
                      проста інтеграція відео, зображень та 3D-моделей.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(52,225,161,0.5)]"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        AI-підказки:
                      </strong>{" "}
                      генератор ідей для структури уроку.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(52,225,161,0.5)]"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        XR-Core:
                      </strong>{" "}
                      створені сьогодні уроки автоматично адаптуються для VR у
                      майбутньому.
                    </p>
                  </li>
                </ul>
                <button className="self-start flex items-center gap-2 text-accent text-sm font-bold uppercase hover:gap-3 transition-all">
                  Спробувати демо <Wand2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
