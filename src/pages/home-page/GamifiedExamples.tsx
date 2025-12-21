import React from "react";
import { Calculator, Dna, Globe2, ArrowRight } from "lucide-react";

interface GamifiedExamplesProps {
  onOpenLesson?: (id: string) => void;
}

interface ExampleCardProps {
  id: string;
  title: string;
  color: "blue" | "green" | "yellow";
  icon: React.ReactNode;
  features: string[];
  onClick: () => void;
}

const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  color,
  icon,
  features,
  onClick,
}) => {
  const colorMap = {
    blue: {
      text: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/5",
      dot: "bg-blue-500",
      bar: "bg-blue-500",
    },
    green: {
      text: "text-green-400",
      border: "border-green-500/30",
      bg: "bg-green-500/5",
      dot: "bg-green-500",
      bar: "bg-green-500",
    },
    yellow: {
      text: "text-yellow-400",
      border: "border-yellow-500/30",
      bg: "bg-yellow-500/5",
      dot: "bg-yellow-500",
      bar: "bg-yellow-500",
    },
  };

  const colors = colorMap[color];

  return (
    <div
      onClick={onClick}
      className="group relative glass rounded-[32px] p-8 hover:bg-popover/40 transition-all duration-500 cursor-pointer border border-border/50 hover:border-border"
    >
      <div
        className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${colors.text}`}
      >
        {icon}
      </div>

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className={`w-1.5 h-8 rounded-full ${colors.bar}`}></div>
        <h3 className="text-2xl font-bold text-foreground tracking-tight">
          {title}
        </h3>
      </div>

      <ul className="space-y-4 mb-10 relative z-10">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-muted-foreground text-sm group-hover:text-foreground transition-colors"
          >
            <div className={`w-1 h-1 rounded-full ${colors.dot}`}></div>
            {f}
          </li>
        ))}
      </ul>

      <div
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${colors.text} group-hover:gap-4 relative z-10`}
      >
        Запустити урок <ArrowRight size={14} />
      </div>
    </div>
  );
};

export const GamifiedExamples: React.FC<GamifiedExamplesProps> = ({
  onOpenLesson,
}) => {
  return (
    <section
      id="examples"
      className="relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Гейміфіковані приклади
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Навчання стає грою, де знання — це інструмент перемоги. Спробуйте
            демо-версії уроків прямо зараз.
          </p>
          <div className="h-1 w-24 bg-accent mt-6 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ExampleCard
            id="math"
            title="Математика"
            color="blue"
            icon={<Calculator size={40} />}
            features={[
              "Побудуй фігуру",
              "Знайди помилку",
              "Візуалізація площі",
            ]}
            onClick={() => onOpenLesson?.("math")}
          />
          <ExampleCard
            id="bio"
            title="Біологія"
            color="green"
            icon={<Dna size={40} />}
            features={[
              "Інтерактивна клітина",
              "Симуляція органел",
              'Квест "Збери клітину"',
            ]}
            onClick={() => onOpenLesson?.("bio")}
          />
          <ExampleCard
            id="geo"
            title="Географія"
            color="yellow"
            icon={<Globe2 size={40} />}
            features={[
              "Тектонічні плити",
              "Симулятор землетрусу",
              "Пазл-карта",
            ]}
            onClick={() => onOpenLesson?.("geo")}
          />
        </div>
      </div>
    </section>
  );
};
