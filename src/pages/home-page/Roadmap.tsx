import React from "react";
import { Section, SectionTitle } from "@/components/ui/Section";
import { CheckCircle2, Rocket, Sparkles, Globe } from "lucide-react";

export const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap">
      <SectionTitle subtitle="Наш шлях до створення ідеального освітнього середовища.">
        Дорожня карта
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-16 mt-12">
        {/* MVP Section */}
        <div className="glass p-8 rounded-[40px] border border-border/50 bg-popover/40">
          <h3 className="text-2xl font-bold text-foreground mb-8 border-b border-border/50 pb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Rocket size={20} />
            </div>
            MVP{" "}
            <span className="text-xs font-light text-muted-foreground ml-auto uppercase tracking-widest">
              (Current)
            </span>
          </h3>
          <div className="space-y-4">
            {[
              "Lesson Builder v2.0",
              "Student & Teacher Dashboards",
              "AI Mentor (Text & Audio)",
              "Study Mode Core",
              "Basic Gamification",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-muted-foreground group"
              >
                <CheckCircle2
                  className="text-accent group-hover:scale-110 transition-transform"
                  size={18}
                />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Future Section */}
        <div className="glass p-8 rounded-[40px] border border-border/50 bg-popover/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Globe size={100} className="text-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-8 border-b border-border/50 pb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Sparkles size={20} />
            </div>
            Future{" "}
            <span className="text-xs font-light text-muted-foreground ml-auto uppercase tracking-widest">
              (Roadmap)
            </span>
          </h3>
          <div className="relative border-l border-border/50 ml-2.5 space-y-10 pb-4">
            <RoadmapStep
              title="XR Scene Builder"
              desc="Створення 3D сцен без знання коду безпосередньо в браузері."
            />
            <RoadmapStep
              title="Віртуальні класи 3.0"
              desc="Спільне навчання в одному XR просторі з аватарами."
            />
            <RoadmapStep
              title="Global Education Hub"
              desc="Платформа для обміну уроками між вчителями всього світу."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const RoadmapStep = ({ title, desc }: { title: string; desc: string }) => (
  <div className="pl-8 relative group">
    <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted border-2 border-border group-hover:border-purple-500 group-hover:bg-purple-500 transition-all"></div>
    <h4 className="text-foreground font-bold text-base mb-1 tracking-tight">
      {title}
    </h4>
    <p className="text-muted-foreground text-sm font-light leading-relaxed">
      {desc}
    </p>
  </div>
);
