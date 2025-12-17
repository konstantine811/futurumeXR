import React from "react";
import { Users, Presentation, HeartHandshake } from "lucide-react";
import { Section } from "@/components/ui/Section";

export const TeacherRole: React.FC = () => {
  return (
    <Section id="teacher">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-accent/20 glow-box shadow-xl">
            <img
              src="https://picsum.photos/800/600?grayscale"
              alt="Teacher using technology"
              className="w-full h-auto opacity-90 dark:opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white dark:from-darker to-transparent h-32" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 p-4 rounded-xl shadow-lg">
                <p className="text-slate-900 dark:text-accent font-bold">
                  Педагог — архітектор знань
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  AI лише асистент, який бере на себе рутину.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Вчитель у центрі <span className="text-accent">платформи</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-10">
            Система не замінює вчителя, а надає йому суперсилу. Ми автоматизуємо
            рутину, щоб ви могли присвятити час найголовнішому — учням.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shrink-0">
                <Presentation />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Креативні уроки
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Створення цікавих презентацій та інтерактивів за хвилини.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Users />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Автоматизація рутини
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Миттєва перевірка тестів та домашніх завдань AI-алгоритмами.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 dark:text-pink-400 shrink-0">
                <HeartHandshake />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Посилення ролі педагога
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Більше часу на менторство, підтримку та індивідуальний підхід.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
