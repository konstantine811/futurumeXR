import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/config/route-config";
import { useAuthStore } from "@/stores/authStore";
import { ArrowRight } from "lucide-react";
import { getDashboardPathByRole } from "@/config/roles";
import type { UserRole } from "@/types/user";
import DashboardMockup from "@/components/dashboard/DashboardMockup";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const userName = user?.name?.split(" ")[0] || "Користувач";

  return (
    <div className="relative w-full min-h-screen bg-[#050507]">
      {/* Navbar рендериться в App.tsx */}

      {/* Hero Section (Landing) */}
      <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        ></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-emerald-400 text-xs font-medium mb-8 backdrop-blur-sm">
            Вітаємо, {userName}! Ви авторизовані
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
            Продовжити <br />
            <span className="text-gradient-primary">навчання</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Ваш наступний урок "Анатомія людини" вже готовий до запуску.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-20">
            <button
              onClick={() => {
                const dashboardPath = user
                  ? getDashboardPathByRole(user.role as UserRole)
                  : RoutePath.STUDENT_DASHBOARD;
                navigate(dashboardPath);
              }}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                Перейти до платформи
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Dashboard Preview (Visual only) */}
          <div
            className="relative w-full max-w-5xl mx-auto perspective-[2000px] group cursor-pointer"
            onClick={() => {
              const dashboardPath = user
                ? getDashboardPathByRole(user.role)
                : RoutePath.STUDENT_DASHBOARD;
              navigate(dashboardPath);
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
            <div className="relative bg-[#0A0A0B] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1614741118868-b4ab0a22eed7?q=80&w=3540&auto=format&fit=crop"
                className="w-full h-auto opacity-50 mix-blend-overlay"
                alt="Dashboard Preview"
              />
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
