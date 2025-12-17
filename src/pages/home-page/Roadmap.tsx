import React from "react";
import { Section } from "@/components/ui/Section";
import { CheckCircle, ArrowDown } from "lucide-react";

export const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap">
      <div className="grid md:grid-cols-2 gap-16">
        {/* MVP Section */}
        <div>
          <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            MVP{" "}
            <span className="text-sm font-normal text-slate-500 ml-2">
              (Current Version)
            </span>
          </h3>
          <div className="space-y-4">
            {[
              "Lesson Builder v1",
              "Student View",
              "Study Mode",
              "Teacher Dashboard",
              "Admin Dashboard",
              "AI-пояснення",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
              >
                <CheckCircle className="text-accent" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-xl">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Перша версія фокусується на створенні якісного контенту та
              впровадженні AI-асистентів для вчителів та учнів.
            </p>
          </div>
        </div>

        {/* Roadmap Section */}
        <div>
          <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            Roadmap{" "}
            <span className="text-sm font-normal text-slate-500 ml-2">
              (Future)
            </span>
          </h3>
          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 space-y-8 pb-4">
            <div className="pl-8 relative">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-darker"></span>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg">
                XR Scene Builder
              </h4>
              <p className="text-slate-500 text-sm">
                Інструмент для створення 3D сцен без коду.
              </p>
            </div>
            <div className="pl-8 relative">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-darker"></span>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg">
                Віртуальні класи
              </h4>
              <p className="text-slate-500 text-sm">
                Спільне навчання в одному віртуальному просторі.
              </p>
            </div>
            <div className="pl-8 relative">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-darker"></span>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg">
                Мобільні додатки
              </h4>
              <p className="text-slate-500 text-sm">
                Нативний досвід для iOS та Android.
              </p>
            </div>
            <div className="pl-8 relative opacity-50">
              <ArrowDown
                className="text-slate-400 dark:text-slate-600"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
