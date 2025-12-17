import React from "react";

import { Frown, Clock, Layers, BatteryWarning } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui/Section";

const problems = [
  {
    icon: <BatteryWarning size={32} />,
    title: "Пасивні уроки",
    desc: "Учні — лише слухачі. Низький рівень залучення призводить до швидкої втрати уваги.",
  },
  {
    icon: <Layers size={32} />,
    title: "Відсутність інтерактивності",
    desc: "Статичні підручники та PDF-файли не відповідають кліповому мисленню сучасного покоління.",
  },
  {
    icon: <Clock size={32} />,
    title: "Перевантажені вчителі",
    desc: "Величезна кількість паперової роботи та рутинної перевірки забирає час на творчість.",
  },
  {
    icon: <Frown size={32} />,
    title: "Слабка мотивація",
    desc: "Застарілі методики не надихають учнів досягати нових вершин у навчанні.",
  },
];

export const Problem: React.FC = () => {
  return (
    <Section className="bg-slate-50 dark:bg-darker transition-colors duration-300">
      <SectionTitle subtitle="Традиційна система освіти стикається з критичними викликами, які неможливо ігнорувати.">
        Проблема сучасної освіти
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none hover:border-red-500/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 mb-6 group-hover:bg-red-500/10 group-hover:text-red-500 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
