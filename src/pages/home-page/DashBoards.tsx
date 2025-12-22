import React, { useState } from "react";
import { Section, SectionTitle } from "@/components/ui/Section";
import { TeacherDashboard } from "@/components/dashboard/TeacherDashboard";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { Presentation, GraduationCap, Shield } from "lucide-react";

type Tab = "teacher" | "student" | "admin";

export const Dashboards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("teacher");

  return (
    <Section id="dashboards">
      <SectionTitle subtitle="Ми створили зручні та функціональні інтерфейси для кожної ролі в освітньому процесі.">
        Центри управління
      </SectionTitle>

      <div className="flex justify-center mb-12">
        <div className="glass rounded-full p-1.5 flex gap-1 border border-border/50">
          <TabButton
            active={activeTab === "teacher"}
            onClick={() => setActiveTab("teacher")}
            icon={<Presentation size={14} />}
            label="Вчитель"
          />
          <TabButton
            active={activeTab === "student"}
            onClick={() => setActiveTab("student")}
            icon={<GraduationCap size={14} />}
            label="Учень"
          />
          <TabButton
            active={activeTab === "admin"}
            onClick={() => setActiveTab("admin")}
            icon={<Shield size={14} />}
            label="Адмін"
          />
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-[40px] blur-3xl opacity-50"></div>
        <div className="relative glass border border-border/50 rounded-[40px] overflow-hidden shadow-2xl bg-popover/40">
          <div className="p-1 overflow-y-auto custom-scrollbar">
            {activeTab === "teacher" && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <TeacherDashboard />
              </div>
            )}
            {activeTab === "student" && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <StudentDashboard />
              </div>
            )}
            {activeTab === "admin" && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <AdminDashboard />
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

const TabButton: React.FC<{
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2.5 rounded-full font-bold text-xs transition-all flex items-center gap-2
          ${
            active
              ? "bg-foreground text-background shadow-lg"
              : "text-muted-foreground hover:text-foreground hover:bg-popover"
          }`}
  >
    {icon} {label}
  </button>
);
