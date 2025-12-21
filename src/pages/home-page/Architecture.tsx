import React from "react";
import { Section, SectionTitle } from "@/components/ui/Section";

const ModuleCard: React.FC<{
  title: string;
  color?: string;
  accent?: string;
}> = ({ title, color = "border-border/50", accent = "bg-popover/40" }) => (
  <div
    className={`glass p-4 rounded-2xl border ${color} ${accent} text-center shadow-lg hover:scale-105 transition-transform duration-500`}
  >
    <span className="text-foreground font-bold text-xs uppercase tracking-widest">
      {title}
    </span>
  </div>
);

export const Architecture: React.FC = () => {
  return (
    <Section gridBg>
      <SectionTitle
        subtitle="Інтелектуальна, модульна та повністю готова до XR-майбутнього."
        align="center"
      >
        Архітектура Системи
      </SectionTitle>

      <div className="max-w-5xl mx-auto mt-20 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent -translate-y-1/2 z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Core Layer */}
          <div className="space-y-4 flex flex-col gap-2">
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em] text-center mb-4">
              Core Engines
            </div>
            <ModuleCard
              title="Lesson Builder"
              color="border-accent/30"
              accent="bg-accent/5"
            />
            <ModuleCard title="Materials Hub" />
            <ModuleCard
              title="Study Mode"
              color="border-accent/30"
              accent="bg-accent/5"
            />
          </div>

          {/* Brain Layer */}
          <div className="flex justify-center py-12 md:py-0">
            <div className="w-56 h-56 rounded-full glass border border-border/50 flex items-center justify-center relative shadow-[0_0_60px_rgba(52,225,161,0.15)] group">
              <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse group-hover:bg-accent/10 transition-all"></div>
              <div className="text-center p-6 relative z-10">
                <div className="text-xs text-accent font-bold uppercase tracking-widest mb-1">
                  Central
                </div>
                <h4 className="text-2xl font-bold text-foreground tracking-tight">
                  AI Mentor
                </h4>
                <div className="mt-2 h-1 w-12 bg-accent mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Interface Layer */}
          <div className="space-y-4 flex flex-col gap-2">
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em] text-center mb-4">
              Interfaces
            </div>
            <ModuleCard title="Dashboards 2.0" />
            <ModuleCard title="LMS Sync" />
            <div className="glass p-5 rounded-2xl border border-purple-500/40 bg-purple-500/5 text-center shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <span className="text-purple-400 font-black text-xs uppercase tracking-[0.2em]">
                XR Expansion Layer
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
