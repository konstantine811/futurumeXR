import React from "react";
import { PlayCircle, AlertCircle, Award } from "lucide-react";

interface StudyItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const StudyItem: React.FC<StudyItemProps> = ({ icon, title, desc }) => (
  <div className="flex gap-5 group p-5 rounded-2xl hover:bg-muted/30 border border-transparent hover:border-border/50 transition-all">
    <div className="w-10 h-10 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-foreground font-bold text-lg mb-1 tracking-tight">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm font-light leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

export const StudyMode: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
              Study Mode
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Режим активного навчання, де помилка — це не вирок, а можливість
              навчитися.
            </p>
            <div className="space-y-6">
              <StudyItem
                icon={<PlayCircle className="text-accent" />}
                title="Інтерактивний потік"
                desc="Учень не просто читає, а постійно взаємодіє з контентом через мікро-завдання."
              />
              <StudyItem
                icon={<AlertCircle className="text-accent" />}
                title="Аналіз помилок"
                desc="Миттєвий фідбек: система пояснює, чому відповідь неправильна, і дає підказку."
              />
              <StudyItem
                icon={<Award className="text-accent" />}
                title="Персональний досвід"
                desc="Адаптивна складність завдань залежно від успішності учня."
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-3xl opacity-50"></div>
            <div className="relative glass border-border/50 rounded-[40px] p-2 shadow-2xl overflow-hidden">
              <div className="bg-popover rounded-[38px] p-8 aspect-square md:aspect-video flex flex-col relative overflow-hidden border border-border/30">
                <div className="absolute inset-0 grid-pattern opacity-10"></div>

                <div className="h-2 w-full bg-muted/50 rounded-full mb-6 overflow-hidden relative z-10">
                  <div className="h-full w-[65%] bg-accent transition-all duration-500"></div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center z-10">
                  <h3 className="text-foreground text-xl font-medium mb-4">
                    Що є основною структурною одиницею живих організмів?
                  </h3>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                    <button className="p-3 rounded-lg border border-border/50 text-muted-foreground hover:border-destructive/30 hover:text-destructive transition-colors text-sm">
                      Атом
                    </button>
                    <button className="p-3 rounded-lg border border-accent bg-accent/10 text-foreground transition-colors text-sm shadow-[0_0_15px_rgba(52,225,161,0.2)]">
                      Клітина
                    </button>
                    <button className="p-3 rounded-lg border border-border/50 text-muted-foreground hover:border-destructive/30 hover:text-destructive transition-colors text-sm">
                      Молекула
                    </button>
                    <button className="p-3 rounded-lg border border-border/50 text-muted-foreground hover:border-destructive/30 hover:text-destructive transition-colors text-sm">
                      Тканина
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 w-full text-center z-10">
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
