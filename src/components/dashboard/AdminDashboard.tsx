import React from "react";
import {
  Users,
  Book,
  BarChart2,
  AlertCircle,
  Shield,
  Settings,
  Search,
  MoreHorizontal,
  PlusCircle,
  TrendingUp,
  Activity,
  UserPlus,
  FileText,
  ChevronRight,
} from "lucide-react";

export const AdminDashboard: React.FC = () => {
  return (
    <div className="w-full space-y-8 animate-in fade-in duration-700">
      {/* Admin Top Header */}
      <div className="glass rounded-[32px] p-6 flex flex-col md:flex-row justify-between items-center gap-6 border border-border/50">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-foreground shadow-xl shadow-purple-500/20">
            <Shield size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground tracking-tight">
              Admin Control Center
            </h2>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
              Керування закладом • v2.4.0
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-3 glass rounded-full text-muted-foreground hover:text-foreground transition-colors">
            <Settings size={18} />
          </button>
          <button className="flex items-center gap-2 bg-purple-600 text-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20">
            <UserPlus size={18} /> Додати користувача
          </button>
        </div>
      </div>

      {/* Admin Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatTile
          icon={<Users className="text-blue-400" />}
          label="Всього учнів"
          value="1,248"
          trend="+12%"
          warning={false}
        />
        <AdminStatTile
          icon={<Book className="text-emerald-400" />}
          label="Активні курси"
          value="36"
          trend="+4"
          warning={false}
        />
        <AdminStatTile
          icon={<Activity className="text-purple-400" />}
          label="Прогрес закладу"
          value="72%"
          trend="+3.5%"
          warning={false}
        />
        <AdminStatTile
          icon={<AlertCircle className="text-red-400" />}
          label="Потребують уваги"
          value="2 групи"
          trend="-1"
          warning
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Analytics Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Activity Chart Sim */}
          <section className="glass rounded-[32px] p-8 border border-border/50">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-bold text-foreground tracking-tight flex items-center gap-2">
                <BarChart2 size={18} className="text-muted-foreground" />{" "}
                Активність платформи
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-full bg-popover/60 text-[10px] font-bold text-foreground">
                  ТИЖДЕНЬ
                </button>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-3 px-2 relative">
              <div className="absolute inset-0 border-b border-border/50 pointer-events-none"></div>
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                <div key={i} className="flex-1 group relative">
                  <div
                    className="w-full bg-gradient-to-t from-purple-500/40 to-indigo-500/80 rounded-t-lg transition-all duration-700 hover:to-accent"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 text-[10px] text-muted-foreground uppercase font-black tracking-widest px-2">
              <span>Пн</span>
              <span>Вт</span>
              <span>Ср</span>
              <span>Чт</span>
              <span>Пт</span>
              <span>Сб</span>
              <span>Нд</span>
            </div>
          </section>

          {/* Users Table */}
          <section className="glass rounded-[32px] overflow-hidden border border-border/50">
            <div className="p-6 border-b border-border/50 flex justify-between items-center">
              <h3 className="font-bold text-foreground">
                Керування користувачами
              </h3>
              <div className="flex items-center bg-popover/40 border border-border rounded-full px-4 py-1.5">
                <Search size={14} className="text-muted-foreground mr-2" />
                <input
                  type="text"
                  placeholder="Пошук..."
                  className="bg-transparent border-none outline-none text-xs text-foreground w-32"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] font-medium">
                <thead className="bg-popover/40 text-muted-foreground">
                  <tr>
                    <th className="p-4 uppercase tracking-widest">
                      Користувач
                    </th>
                    <th className="p-4 uppercase tracking-widest">Роль</th>
                    <th className="p-4 uppercase tracking-widest">Статус</th>
                    <th className="p-4 uppercase tracking-widest text-right">
                      Дії
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  <AdminUserRow
                    name="Анна Шевченко"
                    role="Вчитель"
                    status="Active"
                  />
                  <AdminUserRow
                    name="Марко Вовчок"
                    role="Учень"
                    status="Active"
                  />
                  <AdminUserRow name="Іван Франко" role="Учень" status="Away" />
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Admin Sidebar */}
        <div className="space-y-8">
          {/* AI Insights Card */}
          <section className="glass rounded-[32px] p-8 border-purple-500/20 bg-purple-500/[0.02] relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-foreground shadow-lg shadow-purple-500/20">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-foreground font-bold tracking-tight">
                AI Insights
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-popover/40 border border-border/50 rounded-2xl">
                <h4 className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">
                  Увага: 8-Б Клас
                </h4>
                <p className="text-[11px] text-muted-foreground">
                  Зниження активності на 15% за останній тиждень.
                </p>
              </div>
              <div className="p-4 bg-popover/40 border border-border/50 rounded-2xl">
                <h4 className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">
                  Успіх: Програма XR
                </h4>
                <p className="text-[11px] text-muted-foreground">
                  Залученість зросла до 94% після впровадження симуляцій.
                </p>
              </div>
            </div>
            <button className="w-full py-4 rounded-2xl bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <FileText size={14} /> Згенерувати звіт
            </button>
          </section>

          {/* Courses Snapshot */}
          <section className="glass rounded-[32px] p-8 border border-border/50">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-foreground font-bold">Програми</h3>
              <PlusCircle
                size={18}
                className="text-purple-400 cursor-pointer"
              />
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-popover/40 border border-border/50 rounded-2xl hover:bg-popover/60 transition-colors flex justify-between items-center group cursor-pointer">
                <div>
                  <h4 className="text-xs font-bold text-foreground mb-1">
                    Біологія 7 клас
                  </h4>
                  <p className="text-[9px] text-muted-foreground uppercase font-black">
                    12 Модулів • 48 Уроків
                  </p>
                </div>
                <ChevronRight
                  size={14}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </div>
              <div className="p-4 bg-popover/40 border border-border/50 rounded-2xl hover:bg-popover/60 transition-colors flex justify-between items-center group cursor-pointer">
                <div>
                  <h4 className="text-xs font-bold text-foreground mb-1">
                    Фізика 9 клас (VR)
                  </h4>
                  <p className="text-[9px] text-muted-foreground uppercase font-black">
                    8 Модулів • 32 Уроки
                  </p>
                </div>
                <ChevronRight
                  size={14}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const AdminStatTile = ({
  icon,
  label,
  value,
  trend,
  warning,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  warning: boolean;
}) => (
  <div className="glass rounded-[24px] p-6 border border-border/50 hover:bg-popover/40 transition-colors relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-5 opacity-5 group-hover:opacity-10 transition-opacity">
      {icon}
    </div>
    <div className="w-10 h-10 rounded-xl bg-popover/40 flex items-center justify-center border border-border/50 mb-5">
      {icon}
    </div>
    <div className="flex justify-between items-end">
      <div>
        <h4
          className={`text-2xl font-bold tracking-tight mb-1 ${
            warning ? "text-red-400" : "text-foreground"
          }`}
        >
          {value}
        </h4>
        <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.2em]">
          {label}
        </p>
      </div>
      <span
        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
          trend.startsWith("+")
            ? "bg-emerald-500/10 text-emerald-500"
            : "bg-red-500/10 text-red-500"
        }`}
      >
        {trend}
      </span>
    </div>
  </div>
);

const AdminUserRow = ({
  name,
  role,
  status,
}: {
  name: string;
  role: string;
  status: string;
}) => (
  <tr className="hover:bg-popover/40 transition-colors group">
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-popover/40 flex items-center justify-center text-[10px] font-black text-muted-foreground border border-border/50">
          {name.substring(0, 2).toUpperCase()}
        </div>
        <span className="text-foreground font-bold">{name}</span>
      </div>
    </td>
    <td className="p-4 text-muted-foreground uppercase tracking-widest text-[9px] font-black">
      {role}
    </td>
    <td className="p-4">
      <span
        className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${
          status === "Active"
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-yellow-500/10 text-yellow-400"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="p-4 text-right">
      <button className="text-muted-foreground hover:text-foreground transition-colors">
        <MoreHorizontal size={14} />
      </button>
    </td>
  </tr>
);
