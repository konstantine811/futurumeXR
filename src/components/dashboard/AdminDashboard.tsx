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
} from "lucide-react";

export const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19] w-full min-h-[800px] rounded-3xl overflow-hidden flex flex-col transition-colors duration-300 border border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* --- HEADER --- */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Shield className="text-purple-500" /> Admin Panel
          </h2>
          <p className="text-slate-500 text-sm">Центр управління закладом</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
            <Settings size={16} /> Налаштування
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20">
            <UserPlus size={16} /> Додати користувача
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        {/* --- A. MAIN ANALYTICS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users size={24} />}
            title="Всього Учнів"
            value="1,248"
            trend="+12%"
            color="blue"
          />
          <StatCard
            icon={<Book size={24} />}
            title="Активні Курси"
            value="36"
            trend="+4"
            color="green"
          />
          <StatCard
            icon={<Activity size={24} />}
            title="Середній Прогрес"
            value="72%"
            trend="+3.5%"
            color="accent"
          />
          <StatCard
            icon={<AlertCircle size={24} />}
            title="Проблемні Групи"
            value="2"
            trend="-1"
            color="red"
            trendGood={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT MAIN CONTENT --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* SCHOOL PERFORMANCE CHART SIMULATION */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <BarChart2 className="text-slate-400" /> Активність Школи
                </h3>
                <div className="flex gap-2">
                  <select className="bg-slate-100 dark:bg-slate-800 border-none text-xs rounded-lg p-2 outline-none">
                    <option>Цей Тиждень</option>
                    <option>Цей Місяць</option>
                  </select>
                </div>
              </div>

              {/* Fake Chart */}
              <div className="h-64 w-full flex items-end gap-2 md:gap-4 justify-between px-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative group overflow-hidden"
                    >
                      <div
                        className="absolute bottom-0 w-full bg-purple-500/80 group-hover:bg-accent transition-all duration-500 rounded-t-lg"
                        style={{ height: `${h}%` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-400 px-2">
                <span>01</span>
                <span>05</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
                <span>25</span>
                <span>30</span>
              </div>
            </section>

            {/* B. USERS & C. CLASSES MANAGEMENT */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Керування Користувачами
                </h3>
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5">
                  <Search size={16} className="text-slate-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Пошук..."
                    className="bg-transparent border-none outline-none text-sm w-32 md:w-48"
                  />
                </div>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
                  <tr>
                    <th className="p-4 font-medium">Ім'я</th>
                    <th className="p-4 font-medium">Роль</th>
                    <th className="p-4 font-medium">Група / Предмет</th>
                    <th className="p-4 font-medium">Статус</th>
                    <th className="p-4 font-medium text-right">Дії</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <UserRow
                    name="Анна Шевченко"
                    role="Вчитель"
                    details="Біологія"
                    status="Active"
                  />
                  <UserRow
                    name="Марко Вовчок"
                    role="Учень"
                    details="7-А"
                    status="Active"
                  />
                  <UserRow
                    name="Іван Франко"
                    role="Учень"
                    details="8-Б"
                    status="Away"
                  />
                  <UserRow
                    name="Леся Українка"
                    role="Менеджер"
                    details="Адмін"
                    status="Active"
                  />
                </tbody>
              </table>
              <div className="p-4 text-center border-t border-slate-100 dark:border-slate-800">
                <button className="text-sm font-medium text-purple-500 hover:text-purple-400">
                  Показати всіх
                </button>
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="space-y-8">
            {/* F. AI PANEL - SCHOOL INSIGHTS */}
            <section className="bg-gradient-to-b from-slate-800 to-slate-900 text-white p-6 rounded-2xl border border-slate-700 relative overflow-hidden shadow-xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-2 mb-6 font-bold text-purple-400 uppercase tracking-widest text-xs">
                <TrendingUp size={16} /> AI Insights
              </div>

              <h3 className="text-xl font-bold mb-4">Аналітика Ефективності</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h4 className="font-bold text-sm mb-1 text-red-300">
                    Увага: 8-Б Клас
                  </h4>
                  <p className="text-xs text-slate-400">
                    Зниження активності на 15% за останній тиждень.
                    Рекомендовано переглянути навантаження.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h4 className="font-bold text-sm mb-1 text-accent">
                    Топ Вчитель: Анна Ш.
                  </h4>
                  <p className="text-xs text-slate-400">
                    Найвищий рівень залучення учнів у Study Mode (94%).
                  </p>
                </div>
              </div>

              <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                <FileText size={16} /> Згенерувати Звіт
              </button>
            </section>

            {/* D. COURSES QUICK ACCESS */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Програми
                </h3>
                <button className="text-purple-500 hover:text-purple-400">
                  <PlusCircle size={20} />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      Біологія 7 клас
                    </h4>
                    <p className="text-xs text-slate-500">
                      12 Модулів • 48 Уроків
                    </p>
                  </div>
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      Фізика 9 клас (VR)
                    </h4>
                    <p className="text-xs text-slate-500">
                      8 Модулів • 32 Уроки
                    </p>
                  </div>
                  <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                    Draft
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  icon,
  title,
  value,
  trend,
  color,
  trendGood = true,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  color: string;
  trendGood?: boolean;
}) => {
  const colors: Record<string, string> = {
    blue: "text-blue-500 bg-blue-500/10",
    green: "text-green-500 bg-green-500/10",
    accent: "text-accent bg-accent/10",
    red: "text-red-500 bg-red-500/10",
  };

  const isTrendPositive = trend.startsWith("+");
  const trendColor = trendGood
    ? isTrendPositive
      ? "text-green-500"
      : "text-red-500"
    : isTrendPositive
    ? "text-red-500"
    : "text-green-500";

  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
        <div className={`p-2 rounded-lg ${colors[color]}`}>{icon}</div>
        <span
          className={`text-xs font-bold ${trendColor} bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded`}
        >
          {trend}
        </span>
      </div>
      <div>
        <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
          {value}
        </h4>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          {title}
        </p>
      </div>
    </div>
  );
};

const UserRow = ({
  name,
  role,
  details,
  status,
}: {
  name: string;
  role: string;
  details: string;
  status: string;
}) => (
  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-500 dark:text-slate-300">
          {name.substring(0, 2)}
        </div>
        <span className="font-bold text-slate-900 dark:text-white text-sm">
          {name}
        </span>
      </div>
    </td>
    <td className="p-4 text-slate-500">{role}</td>
    <td className="p-4 text-slate-500">{details}</td>
    <td className="p-4">
      <span
        className={`px-2 py-1 rounded text-xs font-bold ${
          status === "Active"
            ? "bg-green-500/10 text-green-500"
            : "bg-yellow-500/10 text-yellow-500"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="p-4 text-right">
      <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white">
        <MoreHorizontal size={16} />
      </button>
    </td>
  </tr>
);
