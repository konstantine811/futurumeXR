import React from "react";

import { PlayCircle, AlertCircle, Award } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui/Section";

export const StudyMode: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <SectionTitle
            align="left"
            subtitle="Режим активного навчання, де помилка — це не вирок, а можливість навчитися."
          >
            Study Mode
          </SectionTitle>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none">
              <PlayCircle className="text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold">
                  Інтерактивний потік
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Учень не просто читає, а постійно взаємодіє з контентом через
                  мікро-завдання.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none">
              <AlertCircle className="text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold">
                  Аналіз помилок
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Миттєвий фідбек: система пояснює, чому відповідь неправильна,
                  і дає підказку.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none">
              <Award className="text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold">
                  Персональний досвід
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Адаптивна складність завдань залежно від успішності учня.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          {/* Abstract Interface Representation */}
          <div className="bg-white dark:bg-card rounded-2xl border border-slate-200 dark:border-slate-700 p-2 shadow-2xl">
            <div className="bg-slate-50 dark:bg-darker rounded-xl p-6 aspect-[4/3] flex flex-col relative overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full mb-6 overflow-hidden">
                <div className="h-full w-[65%] bg-accent"></div>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center text-center z-10">
                <h3 className="text-slate-800 dark:text-white text-xl font-medium mb-4">
                  Що є основною структурною одиницею живих організмів?
                </h3>
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                  <button className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-500 transition-colors text-sm">
                    Атом
                  </button>
                  <button className="p-3 rounded-lg border border-accent bg-accent/10 text-slate-900 dark:text-white transition-colors text-sm shadow-[0_0_15px_rgba(52,225,161,0.2)]">
                    Клітина
                  </button>
                  <button className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-500 transition-colors text-sm">
                    Молекула
                  </button>
                  <button className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-500 transition-colors text-sm">
                    Тканина
                  </button>
                </div>
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="text-accent text-xs font-mono animate-pulse">
                  AI Mentor аналізує відповідь...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
