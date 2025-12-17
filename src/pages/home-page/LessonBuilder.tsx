import React from "react";
import { Box, Play, FileText, Image, Wand2 } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui/Section";

export const LessonBuilder: React.FC = () => {
  return (
    <Section className="border-t border-slate-200 dark:border-slate-900">
      <SectionTitle subtitle="Конструктор, що перетворює підготовку до уроку на творчий процес. Web-first, але готовий до майбутнього.">
        Lesson Builder
      </SectionTitle>

      <div className="glass-panel rounded-3xl p-1 overflow-hidden shadow-2xl dark:shadow-none">
        <div className="bg-slate-50 dark:bg-darker/50 rounded-[20px] p-6 md:p-10 transition-colors duration-300">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Visual UI Mockup */}
            <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 relative min-h-[300px] flex flex-col shadow-inner">
              <div className="flex items-center justify-between mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  LESSON_EDITOR_V1.0
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="flex-1 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-600 gap-2 hover:border-accent/50 hover:text-accent transition-colors cursor-pointer">
                <Box /> Drag & Drop Blocks Here
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto py-2">
                {[FileText, Image, Play, Box].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-accent hover:text-darker transition-colors shrink-0"
                  >
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-accent text-darker flex items-center justify-center font-bold text-sm">
                  LB
                </span>
                Web-first → XR-ready
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#34E1A1]"></div>
                  <p className="text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      Гейміфіковані блоки:
                    </strong>{" "}
                    тести, опитування, квізи в один клік.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#34E1A1]"></div>
                  <p className="text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      Мультимедіа:
                    </strong>{" "}
                    проста інтеграція відео, зображень та 3D-моделей.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#34E1A1]"></div>
                  <p className="text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      AI-підказки:
                    </strong>{" "}
                    генератор ідей для структури уроку.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#34E1A1]"></div>
                  <p className="text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
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
    </Section>
  );
};
