import React from "react";
import { Calculator, Dna, Globe2, PlayCircle } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui/Section";

interface GamifiedExamplesProps {
  onOpenLesson?: (id: string) => void;
}

export const GamifiedExamples: React.FC<GamifiedExamplesProps> = ({
  onOpenLesson,
}) => {
  return (
    <Section className="bg-slate-100 dark:bg-darker/50 transition-colors duration-300">
      <SectionTitle subtitle="Навчання стає грою, де знання — це інструмент перемоги. Спробуйте демо-версії уроків прямо зараз.">
        Гейміфіковані приклади
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Math */}
        <div
          onClick={() => onOpenLesson?.("math")}
          className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all cursor-pointer overflow-hidden shadow-lg dark:shadow-none hover:-translate-y-2"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
            <Calculator size={100} className="text-slate-900 dark:text-white" />
          </div>
          <div className="mb-6 flex justify-between items-start">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>{" "}
              Математика
            </h3>
            <div className="bg-blue-500/10 p-2 rounded-full text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle size={24} />
            </div>
          </div>
          <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-6">
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span> Побудуй фігуру
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span> Знайди помилку
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span> Візуалізація
              площі
            </li>
          </ul>
          <span className="text-sm font-bold text-blue-500 uppercase tracking-wider group-hover:underline decoration-blue-500/30 underline-offset-4">
            Запустити урок &rarr;
          </span>
        </div>

        {/* Biology */}
        <div
          onClick={() => onOpenLesson?.("bio")}
          className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-green-500 transition-all cursor-pointer overflow-hidden shadow-lg dark:shadow-none hover:-translate-y-2"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
            <Dna size={100} className="text-slate-900 dark:text-white" />
          </div>
          <div className="mb-6 flex justify-between items-start">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-green-500 rounded-full"></span>{" "}
              Біологія
            </h3>
            <div className="bg-green-500/10 p-2 rounded-full text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle size={24} />
            </div>
          </div>
          <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-6">
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">•</span> Інтерактивна
              клітина
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">•</span> Симуляція
              органел
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">•</span> Квест "Збери
              клітину"
            </li>
          </ul>
          <span className="text-sm font-bold text-green-500 uppercase tracking-wider group-hover:underline decoration-green-500/30 underline-offset-4">
            Запустити урок &rarr;
          </span>
        </div>

        {/* Geography */}
        <div
          onClick={() => onOpenLesson?.("geo")}
          className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-all cursor-pointer overflow-hidden shadow-lg dark:shadow-none hover:-translate-y-2"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
            <Globe2 size={100} className="text-slate-900 dark:text-white" />
          </div>
          <div className="mb-6 flex justify-between items-start">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>{" "}
              Географія
            </h3>
            <div className="bg-yellow-500/10 p-2 rounded-full text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle size={24} />
            </div>
          </div>
          <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-6">
            <li className="flex gap-2">
              <span className="text-yellow-500 font-bold">•</span> Тектонічні
              плити
            </li>
            <li className="flex gap-2">
              <span className="text-yellow-500 font-bold">•</span> Симулятор
              землетрусу
            </li>
            <li className="flex gap-2">
              <span className="text-yellow-500 font-bold">•</span> Пазл-карта
            </li>
          </ul>
          <span className="text-sm font-bold text-yellow-500 uppercase tracking-wider group-hover:underline decoration-yellow-500/30 underline-offset-4">
            Запустити урок &rarr;
          </span>
        </div>
      </div>
    </Section>
  );
};
