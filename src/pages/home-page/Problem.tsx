import React from "react";

import { Frown, Clock, Layers, BatteryWarning } from "lucide-react";

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
    <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Проблема сучасної освіти
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Традиційна система освіти стикається з критичними викликами, які неможливо ігнорувати.
          </p>
          <div className="h-1 w-24 bg-destructive mt-6 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-popover border border-border shadow-lg hover:border-destructive/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-muted-foreground mb-6 group-hover:bg-destructive/10 group-hover:text-destructive transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
