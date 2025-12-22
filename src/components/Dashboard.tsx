import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/config/route-config";
import type { UserProfile } from "@/services/userService";
import { useAuthStore } from "@/stores/authStore";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Users,
  Globe,
  Bell,
  Play,
  Clock,
  CheckCircle2,
  Flame,
  Target,
  Atom,
  FlaskConical,
  ChevronRight,
  Lock,
  Sparkles,
  ArrowUp,
  Box,
  LogOut,
} from "lucide-react";

interface DashboardProps {
  userProfile: UserProfile;
}

export const Dashboard: React.FC<DashboardProps> = ({ userProfile }) => {
  const navigate = useNavigate();
  const { reset: resetAuthStore } = useAuthStore();
  const { logout: firebaseLogout } = useAuth();
  const userName = userProfile?.name || "Користувач";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = async () => {
    try {
      await firebaseLogout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      resetAuthStore();
      navigate(RoutePath.HOME);
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 fixed h-screen border-r border-white/[0.08] bg-[#050507] z-40 flex flex-col">
        <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Box className="text-emerald-400 w-5 h-5 stroke-[1.5]" />
            </div>
            <span className="text-white font-bold text-sm tracking-tight hidden lg:block">
              Futurum XR
            </span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-white bg-white/[0.05] rounded-lg border border-white/[0.05] transition-all">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:block">Огляд</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/[0.02] rounded-lg transition-all">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:block">
              Мої курси
            </span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/[0.02] rounded-lg transition-all">
            <Trophy className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:block">
              Досягнення
            </span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/[0.02] rounded-lg transition-all">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:block">Група</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/[0.08]">
          {/* Back to Landing Page Link */}
          <button
            onClick={() => navigate(RoutePath.HOME)}
            className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/5 rounded-lg transition-all mb-2"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:block">На сайт</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-all mb-2"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:block">Вийти</span>
          </button>

          <div className="flex items-center gap-3 px-2 py-2 mt-2">
            {userProfile.photoURL ? (
              <img
                src={userProfile.photoURL}
                alt={userName}
                className="w-8 h-8 rounded-full border border-white/10"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                {userInitials}
              </div>
            )}
            <div className="hidden lg:block overflow-hidden">
              <div className="text-sm text-white truncate">{userName}</div>
              <div className="text-[10px] text-slate-500">
                {userProfile.role === "student"
                  ? "Учень"
                  : userProfile.role === "educator" ||
                    userProfile.role === "teacher"
                  ? "Вчитель"
                  : "Користувач"}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 lg:ml-64 relative">
        {/* Header */}
        <header className="h-16 border-b border-white/[0.08] flex items-center justify-between px-8 sticky top-0 bg-[#050507]/80 backdrop-blur-xl z-30">
          <div className="flex items-center gap-4">
            <h2 className="text-white font-medium">Dashboard</h2>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-sm">Огляд</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-slate-400 hover:text-white transition cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold px-4 py-2 rounded-full transition">
              + Новий проект
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Welcome Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-[#0A0A0B]"></div>
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            ></div>
            <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Поточний урок
                </div>
                <h2 className="text-3xl text-white font-bold mb-2">
                  Біологія: Клітинна структура
                </h2>
                <p className="text-slate-400 max-w-xl text-sm">
                  Ви зупинились на етапі мітохондрій. Ваш AI-ментор підготував
                  3D-візуалізацію.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-slate-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Play className="w-4 h-4 fill-current" />
                Продовжити
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard
              icon={<Clock className="w-5 h-5 text-blue-400" />}
              value="24.5 год"
              label="Час навчання"
              trend="+12%"
              trendUp={true}
              bgColor="bg-blue-500/10"
            />
            <StatCard
              icon={<CheckCircle2 className="w-5 h-5 text-purple-400" />}
              value="12"
              label="Завершено уроків"
              trend="+4"
              trendUp={true}
              bgColor="bg-purple-500/10"
            />
            <StatCard
              icon={<Flame className="w-5 h-5 text-orange-400" />}
              value="5 днів"
              label="Без перерв"
              trend={null}
              trendUp={false}
              bgColor="bg-orange-500/10"
            />
            <StatCard
              icon={<Target className="w-5 h-5 text-emerald-400" />}
              value="98/100"
              label="Відмінно"
              trend={null}
              trendUp={false}
              bgColor="bg-emerald-500/10"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Courses */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Мої курси</h3>
                <button className="text-xs text-emerald-400 hover:text-emerald-300">
                  Всі курси
                </button>
              </div>

              {/* Course Card 1 */}
              <CourseCard
                icon={<Atom className="w-8 h-8 text-blue-400 opacity-80" />}
                title="Квантова фізика"
                subtitle="Модуль 3: Корпускулярно-хвильовий дуалізм"
                progress={75}
                color="blue"
                locked={false}
              />

              {/* Course Card 2 */}
              <CourseCard
                icon={
                  <FlaskConical className="w-8 h-8 text-purple-400 opacity-80" />
                }
                title="Органічна хімія"
                subtitle="Лабораторна робота: Етери"
                progress={0}
                color="purple"
                locked={true}
              />
            </div>

            {/* AI Mentor Sidebar */}
            <div className="glass-panel rounded-xl p-6 flex flex-col h-full bg-gradient-to-b from-[#0A0A0B] to-emerald-900/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-white font-medium">AI Ментор</h3>
              </div>

              <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-[300px] pr-2">
                <div className="flex gap-3">
                  <div className="p-3 rounded-2xl rounded-tl-none bg-white/10 text-xs text-slate-200 leading-relaxed">
                    Привіт, {userName.split(" ")[0]}! Тобі варто повторити тему
                    "Будова атома" перед тестом.
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="p-3 rounded-2xl rounded-tr-none bg-emerald-500/20 border border-emerald-500/20 text-xs text-emerald-100 leading-relaxed">
                    Добре, покажи основні формули.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-3 rounded-2xl rounded-tl-none bg-white/10 text-xs text-slate-200 leading-relaxed">
                    Ось ключові рівняння Резерфорда...
                    <div className="mt-2 h-16 bg-black/30 rounded border border-white/5"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Запитати AI..."
                  className="w-full bg-black/50 border border-white/10 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition pr-10"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-400 transition">
                  <ArrowUp className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({
  icon,
  value,
  label,
  trend,
  trendUp,
  bgColor,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend: string | null;
  trendUp: boolean;
  bgColor: string;
}) => (
  <div className="glass-panel p-5 rounded-xl">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 ${bgColor} rounded-lg`}>{icon}</div>
      {trend && (
        <span
          className={`text-xs flex items-center gap-1 ${
            trendUp ? "text-green-400" : "text-slate-500"
          }`}
        >
          {trend} {trendUp && <ArrowUp className="w-3 h-3" />}
        </span>
      )}
    </div>
    <div className="text-2xl text-white font-bold mb-1">{value}</div>
    <div className="text-xs text-slate-500">{label}</div>
  </div>
);

const CourseCard = ({
  icon,
  title,
  subtitle,
  progress,
  color,
  locked,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  progress: number;
  color: "blue" | "purple";
  locked: boolean;
}) => {
  const colorClasses = {
    blue: {
      bg: "bg-blue-500/20",
      hover: "group-hover:bg-blue-500/30",
      progress: "bg-blue-500",
    },
    purple: {
      bg: "bg-purple-500/20",
      hover: "group-hover:bg-purple-500/30",
      progress: "bg-purple-500",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="glass-panel p-4 rounded-xl flex gap-4 hover:bg-white/[0.02] transition cursor-pointer group">
      <div
        className={`w-32 h-24 rounded-lg bg-black relative overflow-hidden flex-shrink-0 border border-white/10 ${colors.bg} ${colors.hover} transition`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="text-white font-medium mb-1">{title}</h4>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            {locked ? (
              <Lock className="w-4 h-4 text-slate-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-slate-400" />
            )}
          </div>
        </div>
        <div className="w-full bg-white/5 rounded-full h-1.5 mt-2">
          <div
            className={`${colors.progress} h-1.5 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Helper class for glass panel
