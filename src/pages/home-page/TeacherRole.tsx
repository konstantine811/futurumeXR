import React from "react";
import { Users, Presentation, HeartHandshake } from "lucide-react";

interface RoleItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const RoleItem: React.FC<RoleItemProps> = ({ icon, title, desc }) => (
  <div className="flex gap-5 group">
    <div className="w-12 h-12 rounded-2xl bg-muted/30 border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-all">
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

export const TeacherRole: React.FC = () => {
  return (
    <section
      id="teacher"
      className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-[32px] blur-xl opacity-50"></div>
            <div className="relative rounded-[32px] overflow-hidden border border-border/50 glass shadow-2xl">
              <img
                src="./images/teacher-role.png"
                alt="Teacher using technology"
                className="w-full h-auto opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass border-border/50 p-5 rounded-2xl backdrop-blur-xl">
                  <p className="text-foreground font-bold text-sm tracking-tight mb-1 uppercase">
                    Педагог — архітектор знань
                  </p>
                  <p className="text-[11px] text-muted-foreground font-light">
                    AI лише асистент, який бере на себе рутину.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 text-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight leading-tight">
              Вчитель у центрі <br />
              <span className="text-gradient-primary">платформи</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Система не замінює вчителя, а надає йому суперсилу. Ми
              автоматизуємо рутину, щоб ви могли присвятити час найголовнішому —
              учням.
            </p>

            <div className="space-y-6">
              <RoleItem
                icon={<Presentation className="text-accent" />}
                title="Креативні уроки"
                desc="Створення цікавих презентацій та інтерактивів за хвилини."
              />
              <RoleItem
                icon={<Users className="text-blue-400" />}
                title="Автоматизація рутини"
                desc="Миттєва перевірка тестів та домашніх завдань AI-алгоритмами."
              />
              <RoleItem
                icon={<HeartHandshake className="text-purple-400" />}
                title="Посилення ролі педагога"
                desc="Більше часу на менторство, підтримку та індивідуальний підхід."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
