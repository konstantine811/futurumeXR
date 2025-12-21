import React from "react";
import { Calculator, Dna, Globe2, PlayCircle } from "lucide-react";

interface GamifiedExamplesProps {
  onOpenLesson?: (id: string) => void;
}

export const GamifiedExamples: React.FC<GamifiedExamplesProps> = ({
  onOpenLesson,
}) => {
  const examples = [
    {
      id: "math",
      icon: Calculator,
      title: "Математика",
      color: "blue",
      items: ["Побудуй фігуру", "Знайди помилку", "Візуалізація площі"],
    },
    {
      id: "bio",
      icon: Dna,
      title: "Біологія",
      color: "green",
      items: ["Інтерактивна клітина", "Симуляція органел", 'Квест "Збери клітину"'],
    },
    {
      id: "geo",
      icon: Globe2,
      title: "Географія",
      color: "yellow",
      items: ["Тектонічні плити", "Симулятор землетрусу", "Пазл-карта"],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Гейміфіковані приклади
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Навчання стає грою, де знання — це інструмент перемоги. Спробуйте демо-версії уроків прямо зараз.
          </p>
          <div className="h-1 w-24 bg-accent mt-6 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, idx) => {
            const Icon = example.icon;
            const colorClasses = {
              blue: {
                border: "hover:border-blue-500",
                bg: "bg-blue-500",
                text: "text-blue-500",
                bgLight: "bg-blue-500/10",
              },
              green: {
                border: "hover:border-green-500",
                bg: "bg-green-500",
                text: "text-green-500",
                bgLight: "bg-green-500/10",
              },
              yellow: {
                border: "hover:border-yellow-500",
                bg: "bg-yellow-500",
                text: "text-yellow-500",
                bgLight: "bg-yellow-500/10",
              },
            };
            const colors = colorClasses[example.color as keyof typeof colorClasses];

            return (
              <div
                key={example.id}
                onClick={() => onOpenLesson?.(example.id)}
                className={`group relative p-8 rounded-3xl bg-popover border border-border ${colors.border} transition-all cursor-pointer overflow-hidden shadow-lg hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon size={100} className="text-foreground" />
                </div>
                <div className="relative z-10 mb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span className={`w-2 h-8 ${colors.bg} rounded-full`}></span>{" "}
                    {example.title}
                  </h3>
                  <div className={`${colors.bgLight} p-2 rounded-full ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <PlayCircle size={24} />
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground mb-6 relative z-10">
                  {example.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2">
                      <span className={`${colors.text} font-bold`}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <span className={`text-sm font-bold ${colors.text} uppercase tracking-wider group-hover:underline underline-offset-4 relative z-10`} style={{ textDecorationColor: 'currentColor', textDecorationOpacity: 0.3 }}>
                  Запустити урок &rarr;
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
