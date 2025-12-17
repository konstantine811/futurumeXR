import React from "react";
import {
  Plus,
  Calendar,
  Bell,
  Search,
  MoreVertical,
  Users,
  TrendingUp,
  AlertTriangle,
  Star,
  Bot,
  Clock,
  FileText,
  BarChart3,
  ChevronRight,
} from "lucide-react";

export const TeacherDashboard: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19] w-full min-h-[800px] rounded-3xl overflow-hidden flex flex-col transition-colors duration-300 border border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* --- A. TOP BAR --- */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/teacher/100/100"
              alt="Teacher Profile"
              className="w-12 h-12 rounded-full border-2 border-accent object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
          </div>
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight">
              Вітаємо, Анна! 👋
            </h3>
            <p className="text-slate-500 text-xs">Вчитель біології та хімії</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Пошук..."
              className="bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-accent outline-none text-slate-900 dark:text-white w-48 transition-all focus:w-64"
            />
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          <button className="p-2 text-slate-500 hover:text-accent transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="flex items-center gap-2 bg-accent text-darker px-4 py-2 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(52,225,161,0.3)]">
            <Plus size={16} /> <span>Створити урок</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        {/* --- D. TEACHER INSIGHTS (Analytics Strip) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Stat 1 */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp size={80} />
            </div>
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <BarChart3 size={20} />
              </div>
              <span className="text-green-500 text-xs font-bold flex items-center">
                +12% ↗
              </span>
            </div>
            <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              78%
            </h4>
            <p className="text-slate-500 text-xs">Середній прогрес класу</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <AlertTriangle size={80} className="text-red-500" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                <Users size={20} />
              </div>
            </div>
            <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              3 учні
            </h4>
            <p className="text-slate-500 text-xs">Потребують уваги (&lt;50%)</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Star size={80} className="text-yellow-500" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                <Star size={20} />
              </div>
            </div>
            <div className="truncate w-full">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 truncate">
                Будова Клітини
              </h4>
            </div>
            <p className="text-slate-500 text-xs">
              Топ урок тижня (92% залучення)
            </p>
          </div>

          {/* Stat 4 (AI Tip) */}
          <div className="bg-gradient-to-br from-accent/20 to-transparent p-5 rounded-2xl border border-accent/30 shadow-sm flex items-center gap-4">
            <div className="min-w-[40px] h-10 rounded-full bg-accent flex items-center justify-center text-darker">
              <Bot size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-bold uppercase">
                AI Порада
              </p>
              <p className="text-xs text-slate-900 dark:text-white leading-snug font-medium">
                "Додайте інтерактив до теми 'Площі фігур', успішність падає."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN (Wider) --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* B. MY CLASSES */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Мої Класи
                </h3>
                <button className="text-xs text-accent font-bold hover:underline">
                  Дивитись всі
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "7-А Біологія",
                    count: 24,
                    progress: 78,
                    next: "Завтра, 09:00",
                    topic: "Фотосинтез",
                  },
                  {
                    name: "8-Б Хімія",
                    count: 28,
                    progress: 65,
                    next: "Сьогодні, 14:00",
                    topic: "Валентність",
                  },
                ].map((cls, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-accent transition-colors group cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500 group-hover:bg-accent group-hover:text-darker transition-colors">
                          {cls.name.substring(0, 2)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            {cls.name}
                          </h4>
                          <p className="text-xs text-slate-500">
                            {cls.count} учнів
                          </p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-white">
                        <MoreVertical size={16} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-500">Прогрес</span>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {cls.progress}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent"
                            style={{ width: `${cls.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                        <Calendar size={12} className="text-accent" />
                        <span>
                          Наступний:{" "}
                          <span className="text-slate-900 dark:text-white font-medium">
                            {cls.next}
                          </span>{" "}
                          ({cls.topic})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* C. MY LESSONS */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Останні Уроки
                </h3>
                <div className="flex gap-2">
                  <button className="text-xs bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">
                    Всі
                  </button>
                  <button className="text-xs hover:bg-slate-200 dark:hover:bg-slate-800 px-3 py-1 rounded-full text-slate-500">
                    Drafts
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                {[
                  {
                    name: "Будова клітини: Інтерактив",
                    date: "20.10.2024",
                    status: "Published",
                    views: 142,
                  },
                  {
                    name: "Тектонічні плити (VR)",
                    date: "18.10.2024",
                    status: "Draft",
                    views: 0,
                  },
                  {
                    name: "Основи генетики",
                    date: "15.10.2024",
                    status: "Published",
                    views: 89,
                  },
                ].map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-slate-500">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                          {lesson.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          Оновлено: {lesson.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          lesson.status === "Published"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {lesson.status}
                      </span>
                      <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500">
                        <Users size={12} /> {lesson.views}
                      </div>
                      <button className="text-slate-400 hover:text-accent">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* F. HOMEWORK */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Домашні завдання
                </h3>
                <button className="text-xs text-accent border border-accent/50 px-3 py-1 rounded-full hover:bg-accent hover:text-darker transition-colors">
                  Перевірити все
                </button>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
                    <tr>
                      <th className="p-4 font-medium">Завдання</th>
                      <th className="p-4 font-medium">Клас</th>
                      <th className="p-4 font-medium">Дедлайн</th>
                      <th className="p-4 font-medium">Виконання</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="p-4 font-medium text-slate-900 dark:text-white">
                        Тест: Органели
                      </td>
                      <td className="p-4 text-slate-500">7-А</td>
                      <td className="p-4 text-red-400 font-bold">Сьогодні</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-green-500 font-bold">
                            85%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900 dark:text-white">
                        Есе: Екологія
                      </td>
                      <td className="p-4 text-slate-500">8-Б</td>
                      <td className="p-4 text-slate-500">Завтра</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-500"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-yellow-500 font-bold">
                            40%
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN (Narrower) --- */}
          <div className="space-y-8">
            {/* G. SCHEDULE */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Calendar className="text-accent" size={20} /> Розклад
              </h3>

              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-800"></div>

                {[
                  {
                    time: "09:00",
                    title: "Біологія (7-А)",
                    type: "Урок",
                    active: true,
                  },
                  {
                    time: "10:30",
                    title: "Вікно",
                    type: "Вільний час",
                    active: false,
                  },
                  {
                    time: "11:45",
                    title: "Хімія (8-Б)",
                    type: "Лабораторна",
                    active: false,
                  },
                  {
                    time: "14:00",
                    title: "Нарада",
                    type: "Zoom",
                    active: false,
                  },
                ].map((event, i) => (
                  <div key={i} className="relative flex gap-4">
                    <div
                      className={`w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shrink-0 z-10 
                           ${
                             event.active
                               ? "bg-accent text-darker"
                               : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                           }`}
                    >
                      <Clock size={16} />
                    </div>
                    <div>
                      <span
                        className={`text-xs font-bold ${
                          event.active ? "text-accent" : "text-slate-500"
                        }`}
                      >
                        {event.time}
                      </span>
                      <h4
                        className={`font-bold text-sm ${
                          event.active
                            ? "text-slate-900 dark:text-white"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {event.title}
                      </h4>
                      <span className="text-xs text-slate-400">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* E. AI SECTION */}
            <section className="bg-gradient-to-b from-indigo-500/10 to-purple-500/10 p-6 rounded-2xl border border-indigo-500/20 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <Bot size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  AI Assistant
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Я проаналізував успішність 7-А. Тема "Мітоз" викликає труднощі.
              </p>

              <div className="space-y-2 mb-6">
                <button className="w-full text-left p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-accent transition-colors text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-accent"></span>
                  Згенерувати тест на тему "Мітоз"
                </button>
                <button className="w-full text-left p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-accent transition-colors text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-accent"></span>
                  Пояснити простими словами
                </button>
              </div>

              <button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                Запитати AI
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
