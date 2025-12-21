import React from "react";
import {
  Box,
  Play,
  FileText,
  Image,
  Wand2,
  Lock,
  ArrowRight,
} from "lucide-react";

interface BuilderFeatureProps {
  title: string;
  desc: string;
}

const BuilderFeature: React.FC<BuilderFeatureProps> = ({ title, desc }) => (
  <div className="flex items-start gap-4 group">
    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(52,225,161,0.5)] group-hover:scale-150 transition-transform"></div>
    <div>
      <h4 className="text-foreground font-bold text-base mb-1 tracking-tight">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm font-light leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

export const LessonBuilder: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Lesson Builder
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Конструктор, що перетворює підготовку до уроку на творчий процес.
            Web-first, але готовий до майбутнього.
          </p>
          <div className="h-1 w-24 bg-accent mt-6 mx-auto rounded-full" />
        </div>

        <div className="glass rounded-[40px] p-2 overflow-hidden shadow-2xl bg-popover/50">
          <div className="bg-popover rounded-[38px] p-6 md:p-12 transition-all duration-500 border border-border/50">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visual UI Mockup */}
              <div className="bg-muted/40 rounded-3xl border border-border/50 p-6 relative min-h-[400px] flex flex-col shadow-inner group">
                <div className="flex items-center justify-between mb-6 border-b border-border/30 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/50"></div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-muted/30 rounded-full border border-border/30">
                    <Lock className="w-3 h-3 text-accent" />
                    <span className="text-[10px] text-muted-foreground font-mono">
                      lesson_builder_v2.0
                    </span>
                  </div>
                </div>

                <div className="flex-1 border-2 border-dashed border-border/50 rounded-2xl flex flex-col items-center justify-center text-muted-foreground gap-4 group-hover:border-accent/30 group-hover:text-accent/70 transition-all cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-muted/30 border border-border/30 flex items-center justify-center">
                    <Box className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest">
                    Перетягніть блоки сюди
                  </span>
                </div>

                <div className="mt-8 flex gap-3 overflow-x-auto py-2">
                  {[FileText, Image, Play, Box].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-2xl bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-background transition-all shrink-0 cursor-grab active:cursor-grabbing"
                    >
                      <Icon size={24} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col justify-center gap-8 text-left">
                <h3 className="text-3xl font-display font-bold text-foreground flex items-center gap-4 tracking-tight">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-background shadow-[0_0_20px_rgba(52,225,161,0.3)]">
                    <Wand2 size={20} />
                  </div>
                  Від WEB до XR
                </h3>
                <div className="space-y-6">
                  <BuilderFeature
                    title="Гейміфіковані блоки"
                    desc="Тести, опитування, квізи в один клік."
                  />
                  <BuilderFeature
                    title="Мультимедіа"
                    desc="Проста інтеграція відео, зображень та 3D-моделей."
                  />
                  <BuilderFeature
                    title="AI-підказки"
                    desc="Генератор ідей для структури уроку."
                  />
                  <BuilderFeature
                    title="XR-Core"
                    desc="Створені сьогодні уроки автоматично адаптуються для VR у майбутньому."
                  />
                </div>
                <button className="self-start px-8 py-4 bg-foreground text-background rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                  Спробувати редактор <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
