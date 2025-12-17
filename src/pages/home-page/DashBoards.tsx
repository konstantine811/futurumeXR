import React, { useState } from "react";

import { TeacherDashboard } from "@/components/dashboard/TeacherDashboard";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { Section, SectionTitle } from "@/components/ui/Section";

type Tab = "teacher" | "student" | "admin";

export const Dashboards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("teacher");

  return (
    <Section>
      <SectionTitle subtitle="Зручні інтерфейси для кожної ролі в освітньому процесі.">
        Панелі платформи
      </SectionTitle>

      <div className="flex justify-center mb-8 gap-2">
        <button
          onClick={() => setActiveTab("teacher")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            activeTab === "teacher"
              ? "bg-accent text-darker"
              : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          Teacher
        </button>
        <button
          onClick={() => setActiveTab("student")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            activeTab === "student"
              ? "bg-accent text-darker"
              : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setActiveTab("admin")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            activeTab === "admin"
              ? "bg-accent text-darker"
              : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          Admin
        </button>
      </div>

      <div className="w-full flex justify-center">
        {activeTab === "teacher" && (
          <div className="w-full animate-in fade-in zoom-in-95 duration-500">
            <TeacherDashboard />
          </div>
        )}

        {activeTab === "student" && (
          <div className="w-full animate-in fade-in zoom-in-95 duration-500">
            <StudentDashboard />
          </div>
        )}

        {activeTab === "admin" && (
          <div className="w-full animate-in fade-in zoom-in-95 duration-500">
            <AdminDashboard />
          </div>
        )}
      </div>
    </Section>
  );
};
