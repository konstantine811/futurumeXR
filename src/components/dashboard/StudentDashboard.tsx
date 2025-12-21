import React from "react";
import type { UserProfile } from "@/services/userService";
import {
  Play,
  BookOpen,
  Calendar,
  Zap,
  Trophy,
  Activity,
  Bot,
  Sparkles,
  Globe,
} from "lucide-react";
import { RoutePath } from "@/config/route-config";

interface StudentDashboardProps {
  userProfile?: UserProfile | null;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  userProfile,
}) => {
  // Використовуємо дані з профілю користувача
  const userName = userProfile?.name || "Учень";
  const userEmail = userProfile?.email || "";
  const onboardingInfo = userProfile?.onboardingInfo;

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-700">
      {/* Привітальний блок з інформацією користувача */}
      {userProfile && (
        <div className="glass rounded-[32px] p-6 border border-border/50 mb-6">
          <div className="flex items-center gap-5 mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-blue-500 rounded-full blur opacity-40 animate-pulse"></div>
              {userProfile.photoURL ? (
                <img
                  src={userProfile.photoURL}
                  alt={userName}
                  className="relative w-20 h-20 rounded-full border border-border object-cover"
                />
              ) : (
                <div className="relative w-20 h-20 rounded-full bg-accent/20 border border-border flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">
                    {userName[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-foreground mb-1">
                Привіт, {userName}! 👋
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

      {/* Top Welcome Glass */}
      <div className="glass rounded-[32px] p-8 flex flex-col lg:flex-row justify-between items-center gap-8 border border-border/50 relative overflow-hidden group">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/15 transition-all"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-blue-500 rounded-full blur opacity-40 animate-pulse"></div>
            <div className="w-20 h-20 rounded-full bg-popover border border-border flex items-center justify-center overflow-hidden">
              <img
                src="https://picsum.photos/seed/student-marco/150/150"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">
              Навчальний простір
            </h2>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-popover/40 border border-border rounded-2xl backdrop-blur-xl">
              <Bot size={18} className="text-accent" />
              <p className="text-xs text-muted-foreground font-medium">
                Сьогодні ти можеш пройти{" "}
                <span className="text-accent font-bold">
                  2 рівні математики
                </span>{" "}
                і випередити графік.
              </p>
            </div>
          </div>
        </div>

        <button className="relative z-10 group flex items-center gap-4 pl-8 pr-3 py-3 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
          <span className="text-xs uppercase tracking-widest">
            Продовжити навчання
          </span>
          <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-background transition-all">
            <Play fill="currentColor" size={14} />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Subjects & Lessons */}
        <div className="lg:col-span-2 space-y-8">
          {/* Subjects Grid */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight flex items-center gap-2">
                <BookOpen size={18} className="text-blue-400" /> Мої Предмети
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <StudentSubjectCard
                title="Математика"
                progress={78}
                color="blue"
                next="Площі фігур"
              />
              <StudentSubjectCard
                title="Біологія"
                progress={45}
                color="emerald"
                next="Клітина"
              />
              <StudentSubjectCard
                title="Географія"
                progress={92}
                color="yellow"
                next="Літосфера"
              />
            </div>
          </section>

          {/* Daily Schedule */}
          <section className="glass rounded-[32px] overflow-hidden border border-border/50">
            <div className="p-6 border-b border-border/50 flex justify-between items-center">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <Calendar size={18} className="text-accent" /> Уроки на сьогодні
              </h3>
            </div>
            <div className="divide-y divide-border/50">
              <StudentLessonRow
                time="09:00"
                subject="Математика"
                topic="Площі складених фігур"
                status="active"
              />
              <StudentLessonRow
                time="10:30"
                subject="Біологія"
                topic="Будова клітини (Практика)"
                status="pending"
              />
              <StudentLessonRow
                time="12:00"
                subject="Географія"
                topic="Тектонічні плити"
                status="locked"
              />
            </div>
          </section>
        </div>

        {/* Right Column: Stats & AI */}
        <div className="space-y-8">
          {/* Study Mode AI CTA */}
          <div className="glass rounded-[32px] p-8 border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-foreground shadow-lg shadow-indigo-500/20">
                <Sparkles size={20} />
              </div>
              <h3 className="text-foreground font-bold tracking-tight">
                Study Mode
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-8 relative z-10">
              Застряг на темі? AI Mentor готовий пояснити складне простими
              словами або згенерувати тренувальні вправи.
            </p>
            <button className="w-full py-4 rounded-2xl bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all relative z-10 flex items-center justify-center gap-2">
              <Zap size={14} className="fill-current" /> Вивчати з AI
            </button>
          </div>

          {/* Progress Visualization */}
          <div className="glass rounded-[32px] p-8 border border-border/50">
            <h3 className="text-foreground font-bold mb-8 flex items-center gap-2">
              <Activity size={18} className="text-accent" /> Мій Прогрес
            </h3>
            <div className="relative w-full aspect-square flex items-center justify-center mb-8">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #34d399 1px, transparent 1px)",
                  backgroundSize: "15px 15px",
                }}
              ></div>
              {/* Data Polygon Sim */}
              <svg
                viewBox="0 0 100 100"
                className="w-3/4 h-3/4 drop-shadow-[0_0_15px_rgba(52,225,161,0.2)]"
              >
                <polygon
                  points="50,15 85,50 50,85 15,50"
                  fill="rgba(52, 225, 161, 0.1)"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="15" r="2" fill="#34d399" />
                <circle cx="85" cy="50" r="2" fill="#34d399" />
                <circle cx="50" cy="85" r="2" fill="#34d399" />
                <circle cx="15" cy="50" r="2" fill="#34d399" />
              </svg>
              <div className="absolute top-0 text-[9px] font-bold text-muted-foreground tracking-tighter uppercase">
                Теорія
              </div>
              <div className="absolute bottom-0 text-[9px] font-bold text-muted-foreground tracking-tighter uppercase">
                Логіка
              </div>
            </div>
            <div className="bg-popover/40 border border-border/50 p-4 rounded-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Trophy className="text-yellow-500" size={16} />
                <span className="text-xs font-bold text-foreground">
                  Top 10%
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                в класі
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Посилання "На сайт" */}
      <div className="mt-8 pt-8 border-t border-border/50">
        <a
          href={RoutePath.HOME}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
        >
          <Globe size={16} />
          На сайт
        </a>
      </div>
    </div>
  );
};

const StudentSubjectCard = ({
  title,
  progress,
  color,
  next,
}: {
  title: string;
  progress: number;
  color: string;
  next: string;
}) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<
      string,
      { text: string; border: string; bg: string; accent: string }
    > = {
      blue: {
        text: "text-blue-400",
        border: "border-blue-500/20",
        bg: "bg-blue-500/5",
        accent: "#3b82f6",
      },
      emerald: {
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        bg: "bg-emerald-500/5",
        accent: "#10b981",
      },
      yellow: {
        text: "text-yellow-400",
        border: "border-yellow-500/20",
        bg: "bg-yellow-500/5",
        accent: "#eab308",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(color);

  return (
    <div className="glass rounded-[24px] p-6 border border-border/50 hover:bg-popover/40 transition-all group relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-1.5 h-6 rounded-full ${colors.text} shadow-[0_0_10px_currentColor]`}
          style={{ color: colors.accent }}
        ></div>
        <h4 className="text-foreground font-bold tracking-tight">{title}</h4>
      </div>
      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-4">
        Наступний: {next}
      </p>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <span className="text-muted-foreground">Прогрес</span>
          <span className={colors.text}>{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-1000"
            style={{
              width: `${progress}%`,
              backgroundColor: colors.accent,
              boxShadow: `0 0 10px ${colors.accent}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const StudentLessonRow = ({
  time,
  subject,
  topic,
  status,
}: {
  time: string;
  subject: string;
  topic: string;
  status: string;
}) => (
  <div className="p-4 flex items-center justify-between hover:bg-popover/40 transition-colors group">
    <div className="flex items-center gap-5">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xs tracking-tighter shadow-inner
                ${
                  status === "active"
                    ? "bg-accent text-background shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    : "bg-popover/40 border border-border/50 text-muted-foreground"
                }
            `}
      >
        {time}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold text-foreground tracking-tight">
            {subject}
          </h4>
          {status === "active" && (
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          )}
        </div>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
          {topic}
        </p>
      </div>
    </div>
    <button
      className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
            ${
              status === "active"
                ? "bg-foreground text-background hover:scale-105"
                : status === "pending"
                ? "bg-popover/40 border border-border text-muted-foreground hover:text-foreground"
                : "text-muted-foreground/50 cursor-not-allowed"
            }
        `}
    >
      {status === "active"
        ? "Почати"
        : status === "pending"
        ? "Доробити"
        : "Заблоковано"}
    </button>
  </div>
);
