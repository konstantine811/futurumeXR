import React from "react";
import { Users, Presentation, HeartHandshake } from "lucide-react";

export const TeacherRole: React.FC = () => {
  return (
    <section id="teacher" className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="relative rounded-2xl overflow-hidden border border-accent/20 shadow-xl group">
              <img
                src="https://picsum.photos/800/600?grayscale"
                alt="Teacher using technology"
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent h-32" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-popover/90 backdrop-blur-md border border-border/50 p-4 rounded-xl shadow-lg glass-panel">
                  <p className="text-foreground font-bold">
                    Педагог — архітектор знань
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    AI лише асистент, який бере на себе рутину.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Вчитель у центрі <span className="text-gradient-primary">платформи</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Система не замінює вчителя, а надає йому суперсилу. Ми автоматизуємо
              рутину, щоб ви могли присвятити час найголовнішому — учням.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <Presentation />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    Креативні уроки
                  </h4>
                  <p className="text-muted-foreground">
                    Створення цікавих презентацій та інтерактивів за хвилини.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Users />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    Автоматизація рутини
                  </h4>
                  <p className="text-muted-foreground">
                    Миттєва перевірка тестів та домашніх завдань AI-алгоритмами.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <HeartHandshake />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    Посилення ролі педагога
                  </h4>
                  <p className="text-muted-foreground">
                    Більше часу на менторство, підтримку та індивідуальний підхід.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
