import React from "react";
import type { UserProfile } from "@/services/userService";
import {
  Plus,
  Calendar,
  Bell,
  Search,
  MoreVertical,
  Users,
  Star,
  Bot,
  Clock,
  FileText,
  BarChart3,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface TeacherDashboardProps {
  userProfile?: UserProfile | null;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  userProfile,
}) => {
  // Використовуємо дані з профілю користувача
  const userName = userProfile?.name || "Вчитель";
  const userEmail = userProfile?.email || "";
  const onboardingInfo = userProfile?.onboardingInfo;

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-700">
      {/* Привітальний блок з інформацією користувача */}
      {userProfile && (
        <div className="glass rounded-[32px] p-6 border border-border/50 mb-6">
          <div className="flex items-center gap-5 mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-full blur opacity-40"></div>
              {userProfile.photoURL ? (
                <img
                  src={userProfile.photoURL}
                  alt={userName}
                  className="relative w-14 h-14 rounded-full border border-border object-cover"
                />
              ) : (
                <div className="relative w-14 h-14 rounded-full bg-accent/20 border border-border flex items-center justify-center">
                  <span className="text-xl font-bold text-foreground">
                    {userName[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">
                Вітаємо, {userName}! 👋
              </h1>
              <p className="text-sm text-muted-foreground">
                Email: {userEmail}
              </p>
            </div>
          </div>
          {onboardingInfo && (
            <div className="flex flex-wrap gap-4 text-sm pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Вік:</span>
                <span className="text-foreground font-medium">
                  {onboardingInfo.age} років
                </span>
              </div>
              {onboardingInfo.selections &&
                onboardingInfo.selections.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Інтереси:</span>
                    <span className="text-foreground font-medium">
                      {onboardingInfo.selections.join(", ")}
                    </span>
                  </div>
                )}
            </div>
          )}
        </div>
      )}

      {/* Top Header Glass */}
      <div className="glass rounded-[32px] p-6 flex flex-col md:flex-row justify-between items-center gap-6 border border-border/50">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-full blur opacity-40"></div>
            <img
              src="https://picsum.photos/seed/teacher/120/120"
              alt="Teacher"
              className="relative w-14 h-14 rounded-full border border-border object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground tracking-tight">
              Панель вчителя
            </h2>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
              Вчитель біології та хімії
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent transition-colors"
              size={16}
            />
            <input
              type="text"
              placeholder="Пошук учнів, уроків..."
              className="bg-popover/40 border border-border rounded-full py-2.5 pl-12 pr-6 text-sm text-foreground focus:outline-none focus:border-accent/50 w-64 transition-all"
            />
          </div>
          <button className="p-3 glass rounded-full text-muted-foreground hover:text-foreground transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
          </button>
          <button className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-all">
            <Plus size={18} /> Створити урок
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile
          icon={<BarChart3 className="text-emerald-400" />}
          label="Середній прогрес"
          value="78%"
          trend="+12%"
          trendUp={true}
          warning={false}
          sub=""
        />
        <StatTile
          icon={<Users className="text-blue-400" />}
          label="Потребують уваги"
          value="3 учні"
          trend="+12%"
          trendUp={true}
          warning={true}
          sub="Прогрес < 50%"
        />
        <StatTile
          icon={<Star className="text-yellow-400" />}
          label="Топ урок тижня"
          value="Будова Клітини"
          sub="92% залучення"
          trend="+12%"
          trendUp={true}
          warning={false}
        />
        <div className="glass rounded-[24px] p-5 border-accent/20 bg-accent/[0.02] flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-background shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <Bot size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">
              AI Recommendation
            </p>
            <p className="text-[11px] text-muted-foreground leading-snug">
              "Додайте інтерактив до теми 'Площі фігур', успішність падає."
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Classes & Lessons */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight">
                Мої Класи
              </h3>
              <button className="text-xs font-bold text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest">
                Дивитись всі
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ClassCard
                name="7-А Біологія"
                students={24}
                progress={78}
                next="Завтра, 09:00"
                topic="Фотосинтез"
              />
              <ClassCard
                name="8-Б Хімія"
                students={28}
                progress={65}
                next="Сьогодні, 14:00"
                topic="Валентність"
              />
            </div>
          </section>

          <section className="glass rounded-[32px] overflow-hidden border border-border/50">
            <div className="p-6 border-b border-border/50 flex justify-between items-center">
              <h3 className="font-bold text-foreground">Останні уроки</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-full bg-popover/60 text-[10px] font-bold text-foreground">
                  ВСІ
                </button>
                <button className="px-3 py-1 rounded-full text-[10px] font-bold text-muted-foreground hover:text-foreground">
                  ЧЕРНЕТКИ
                </button>
              </div>
            </div>
            <div className="divide-y divide-border/50">
              <LessonRow
                title="Будова клітини: Інтерактив"
                date="20.10.2024"
                views={142}
                status="Published"
              />
              <LessonRow
                title="Тектонічні плити (VR)"
                date="18.10.2024"
                views={0}
                status="Draft"
              />
              <LessonRow
                title="Основи генетики"
                date="15.10.2024"
                views={89}
                status="Published"
              />
            </div>
          </section>
        </div>

        {/* Schedule & Sidebar */}
        <div className="space-y-8">
          <section className="glass rounded-[32px] p-6 border border-border/50">
            <h3 className="text-foreground font-bold mb-6 flex items-center gap-2">
              <Calendar size={18} className="text-accent" />
              Розклад
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border/50"></div>
              <ScheduleItem
                time="09:00"
                title="Біологія (7-А)"
                type="Урок"
                active={true}
              />
              <ScheduleItem
                time="10:30"
                title="Вільний час"
                type="Перерва"
                active={false}
              />
              <ScheduleItem
                time="11:45"
                title="Хімія (8-Б)"
                type="Лабораторна"
                active={true}
              />
            </div>
          </section>

          <section className="glass rounded-[32px] p-6 border-indigo-500/20 bg-indigo-500/[0.02] relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-foreground shadow-lg">
                <Sparkles size={20} />
              </div>
              <h3 className="text-foreground font-bold tracking-tight">
                AI Assistant
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
              Я проаналізував успішність 7-А. Тема "Мітоз" викликає труднощі у
              15% учнів.
            </p>
            <div className="space-y-2">
              <button className="w-full py-2.5 rounded-xl bg-popover/40 border border-border text-[10px] font-bold text-muted-foreground hover:border-indigo-500/50 hover:text-foreground transition-all text-left px-4">
                Згенерувати тест "Мітоз"
              </button>
              <button className="w-full py-2.5 rounded-xl bg-popover/40 border border-border text-[10px] font-bold text-muted-foreground hover:border-indigo-500/50 hover:text-foreground transition-all text-left px-4">
                Пояснити тему для 7-А
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const StatTile = ({
  icon,
  label,
  value,
  trend,
  trendUp,
  warning,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  warning: boolean;
  sub: string;
}) => (
  <div className="glass rounded-[24px] p-5 border border-border/50 hover:bg-popover/40 transition-colors relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      {icon}
    </div>
    <div className="flex justify-between items-start mb-3">
      <div className="w-9 h-9 rounded-xl bg-popover/40 flex items-center justify-center border border-border/50">
        {icon}
      </div>
      {trend && (
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            trendUp
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {trend}
        </span>
      )}
    </div>
    <h4
      className={`text-2xl font-bold mb-1 tracking-tight ${
        warning ? "text-red-400" : "text-foreground"
      }`}
    >
      {value}
    </h4>
    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
      {label}
    </p>
    {sub && <p className="text-[10px] text-muted-foreground/80 mt-1">{sub}</p>}
  </div>
);

const ClassCard = ({
  name,
  students,
  progress,
  next,
  topic,
}: {
  name: string;
  students: number;
  progress: number;
  next: string;
  topic: string;
}) => (
  <div className="glass rounded-[24px] p-5 border border-border/50 hover:border-accent/30 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center font-bold text-accent group-hover:bg-accent group-hover:text-background transition-colors">
          {name.split("-")[0]}
        </div>
        <div>
          <h4 className="text-foreground font-bold text-sm tracking-tight">
            {name}
          </h4>
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            {students} УЧНІВ
          </p>
        </div>
      </div>
      <button className="text-muted-foreground hover:text-foreground transition-colors">
        <MoreVertical size={16} />
      </button>
    </div>

    <div className="space-y-4">
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-accent shadow-[0_0_10px_rgba(16,185,129,0.4)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
        <Calendar size={12} className="text-accent" />
        <span>
          Наступний: <span className="text-foreground font-bold">{next}</span> (
          {topic})
        </span>
      </div>
    </div>
  </div>
);

const LessonRow = ({
  title,
  date,
  views,
  status,
}: {
  title: string;
  date: string;
  views: number;
  status: string;
}) => (
  <div className="p-4 flex items-center justify-between hover:bg-popover/40 transition-colors group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-popover/40 flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
        <FileText size={18} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-foreground tracking-tight">
          {title}
        </h4>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
          Оновлено: {date}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-8">
      <div className="hidden md:flex flex-col items-end">
        <span className="text-xs font-bold text-foreground">{views}</span>
        <span className="text-[9px] text-muted-foreground uppercase tracking-widest">
          Переглядів
        </span>
      </div>
      <span
        className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${
          status === "Published"
            ? "bg-emerald-500/10 text-emerald-500"
            : "bg-yellow-500/10 text-yellow-500"
        }`}
      >
        {status}
      </span>
      <ChevronRight
        size={16}
        className="text-muted-foreground group-hover:text-foreground transition-colors"
      />
    </div>
  </div>
);

const ScheduleItem = ({
  time,
  title,
  type,
  active,
}: {
  time: string;
  title: string;
  type: string;
  active: boolean;
}) => (
  <div className="flex gap-4 relative z-10">
    <div
      className={`w-8 h-8 rounded-full border-4 border-background flex items-center justify-center shrink-0 shadow-lg
      ${active ? "bg-accent text-background" : "bg-muted text-muted-foreground"}
    `}
    >
      <Clock size={14} />
    </div>
    <div className="flex flex-col">
      <span
        className={`text-[10px] font-bold ${
          active ? "text-accent" : "text-muted-foreground"
        }`}
      >
        {time}
      </span>
      <h4
        className={`text-sm font-bold ${
          active ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {title}
      </h4>
      <span className="text-[10px] text-muted-foreground/80 font-medium uppercase tracking-widest">
        {type}
      </span>
    </div>
  </div>
);
