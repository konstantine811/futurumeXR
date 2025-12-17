import { Section, SectionTitle } from "@/components/ui/Section";
import React from "react";

const ModuleCard: React.FC<{ title: string; color?: string }> = ({
  title,
  color = "border-slate-300 dark:border-slate-700",
}) => (
  <div
    className={`bg-white dark:bg-darker p-4 rounded-xl border ${color} text-center shadow-lg`}
  >
    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
      {title}
    </span>
  </div>
);

export const Architecture: React.FC = () => {
  return (
    <Section gridBg>
      <SectionTitle
        subtitle="Інтелектуальна, модульна, готова до XR"
        align="center"
      >
        Архітектура Системи
      </SectionTitle>

      <div className="max-w-4xl mx-auto mt-12 relative">
        {/* Connecting Lines (Simulated) */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
        <div className="absolute top-12 bottom-12 left-1/2 w-1 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Core Layer */}
          <div className="space-y-4 flex flex-col justify-center">
            <div className="text-xs text-slate-500 uppercase tracking-widest text-center mb-2">
              Core Modules
            </div>
            <ModuleCard title="Lesson Builder" color="border-accent" />
            <ModuleCard title="Materials Hub" />
            <ModuleCard title="Study Mode" color="border-accent" />
          </div>

          {/* Brain Layer */}
          <div className="space-y-4 flex flex-col justify-center py-12 md:py-0">
            <div className="aspect-square rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse"></div>
              <div className="text-center p-6">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                  AI Mentor
                </h4>
                <span className="text-xs text-accent">
                  Central Intelligence
                </span>
              </div>
            </div>
          </div>

          {/* Interface & Expansion Layer */}
          <div className="space-y-4 flex flex-col justify-center">
            <div className="text-xs text-slate-500 uppercase tracking-widest text-center mb-2">
              Interfaces
            </div>
            <ModuleCard title="Dashboards (T/S/A)" />
            <ModuleCard title="Communication Hub" />
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-4 rounded-xl border border-purple-500/50 text-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <span className="text-purple-700 dark:text-purple-200 font-bold text-sm">
                XR Expansion Layer
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
