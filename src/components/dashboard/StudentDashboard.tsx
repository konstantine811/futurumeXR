import React from "react";
import {
  Play,
  BookOpen,
  Calendar,
  CheckCircle2,
  Target,
  Zap,
  Trophy,
  BrainCircuit,
  ArrowRight,
  Activity,
} from "lucide-react";

export const StudentDashboard: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19] w-full min-h-[800px] rounded-3xl overflow-hidden flex flex-col transition-colors duration-300 border border-slate-200 dark:border-slate-800 shadow-2xl">
      {/* --- A. HERO SECTION --- */}
      <div className="relative bg-slate-900 overflow-hidden p-8 md:p-12">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Привіт, Марко! 👋
            </h2>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 max-w-lg">
              <BotAvatar />
              <p className="text-slate-200 text-sm font-medium">
                "Сьогодні чудовий день! Ти можеш пройти{" "}
                <span className="text-accent">2 рівні математики</span> і
                випередити графік."
              </p>
            </div>
          </div>

          <button className="group flex items-center gap-4 pl-6 pr-2 py-2 bg-accent hover:bg-white text-darker rounded-full font-bold transition-all shadow-[0_0_20px_rgba(52,225,161,0.3)]">
            <span className="text-sm uppercase tracking-wide">
              Продовжити навчання
            </span>
            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play fill="currentColor" size={16} />
            </div>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* B. MY SUBJECTS */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-500" /> Мої Предмети
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Математика",
                    progress: 78,
                    color: "blue",
                    next: "Площі фігур",
                  },
                  {
                    title: "Біологія",
                    progress: 45,
                    color: "green",
                    next: "Клітина",
                  },
                  {
                    title: "Географія",
                    progress: 92,
                    color: "yellow",
                    next: "Літосфера",
                  },
                ].map((sub, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-accent transition-colors group cursor-pointer relative overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 right-0 p-6 opacity-5 bg-${sub.color}-500/20 blur-xl rounded-full w-24 h-24 -mr-8 -mt-8`}
                    ></div>

                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 relative z-10">
                      {sub.title}
                    </h4>
                    <p className="text-xs text-slate-500 mb-4 relative z-10">
                      Наступний: {sub.next}
                    </p>

                    <div className="space-y-2 relative z-10">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Прогрес</span>
                        <span className={`text-${sub.color}-500`}>
                          {sub.progress}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${sub.color}-500`}
                          style={{ width: `${sub.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* C. LESSONS FOR TODAY */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-orange-500" /> Уроки на
                сьогодні
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                {[
                  {
                    time: "09:00",
                    subject: "Математика",
                    topic: "Площі складених фігур",
                    status: "active",
                    action: "Пройти",
                  },
                  {
                    time: "10:30",
                    subject: "Біологія",
                    topic: "Будова клітини (Практика)",
                    status: "pending",
                    action: "Доробити",
                  },
                  {
                    time: "12:00",
                    subject: "Географія",
                    topic: "Тектонічні плити",
                    status: "locked",
                    action: "Заплановано",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0
                                        ${
                                          item.status === "active"
                                            ? "bg-accent text-darker"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                                        }
                                    `}
                      >
                        {item.time}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {item.subject}
                          </span>
                          {item.status === "active" && (
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500">{item.topic}</p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors
                                    ${
                                      item.status === "active"
                                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90"
                                        : item.status === "pending"
                                        ? "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                                    }
                                `}
                    >
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* E. HOMEWORK */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" /> Домашні
                завдання
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
                    <tr>
                      <th className="p-4 font-medium">Предмет</th>
                      <th className="p-4 font-medium">Завдання</th>
                      <th className="p-4 font-medium">Дедлайн</th>
                      <th className="p-4 font-medium">Статус</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="p-4 font-bold text-blue-500">
                        Математика
                      </td>
                      <td className="p-4 text-slate-900 dark:text-white">
                        Тест: Квадратні рівняння
                      </td>
                      <td className="p-4 text-red-400 font-bold">
                        Сьогодні, 23:59
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded text-xs font-bold">
                          В процесі
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-green-500">Біологія</td>
                      <td className="p-4 text-slate-900 dark:text-white">
                        Есе: "Моя улюблена органела"
                      </td>
                      <td className="p-4 text-slate-500">Завтра</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-500 rounded text-xs font-bold">
                          Не почато
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="space-y-8">
            {/* D. STUDY MODE QUICK ACCESS */}
            <section className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 font-bold uppercase tracking-wider text-xs text-indigo-200">
                  <BrainCircuit size={16} /> Study Mode
                </div>
                <h3 className="text-2xl font-bold mb-2">Застряг на темі?</h3>
                <p className="text-indigo-100 text-sm mb-6">
                  AI Mentor готовий пояснити складне простими словами або
                  згенерувати тренувальні вправи.
                </p>

                <button className="w-full py-3 bg-white text-indigo-900 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                  <Zap size={16} className="text-yellow-500 fill-current" />{" "}
                  Вивчати з AI
                </button>
              </div>
            </section>

            {/* F. MY PROGRESS (Radar Chart Sim) */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Activity size={20} className="text-purple-500" /> Мій Прогрес
              </h3>

              <div className="relative w-full aspect-square max-w-[250px] mx-auto mb-6">
                {/* Simulated Radar Chart Background */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full opacity-20 dark:opacity-40"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-slate-400"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-slate-400"
                  />
                  <line
                    x1="50"
                    y1="10"
                    x2="50"
                    y2="90"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-slate-400"
                  />
                  <line
                    x1="10"
                    y1="50"
                    x2="90"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-slate-400"
                  />
                </svg>

                {/* Data Polygon */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full drop-shadow-lg"
                >
                  <polygon
                    points="50,15 85,50 50,80 20,50"
                    fill="rgba(52, 225, 161, 0.2)"
                    stroke="#34E1A1"
                    strokeWidth="2"
                  />
                </svg>

                {/* Labels */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-[10px] font-bold text-slate-500 bg-white dark:bg-slate-900 px-1">
                  Логіка
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-[10px] font-bold text-slate-500 bg-white dark:bg-slate-900 px-1">
                  Пам'ять
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 text-[10px] font-bold text-slate-500 bg-white dark:bg-slate-900 px-1">
                  Практика
                </div>
                <div className="absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 text-[10px] font-bold text-slate-500 bg-white dark:bg-slate-900 px-1">
                  Теорія
                </div>
              </div>

              <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-yellow-500" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Top 10%
                  </span>
                </div>
                <span className="text-xs text-slate-500">у класі</span>
              </div>
            </section>

            {/* G. AI RECOMMENDATIONS */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Target size={20} className="text-red-500" /> Рекомендації
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                      Повтори дроби
                    </p>
                    <p className="text-xs text-slate-500">
                      Ти часто помиляєшся у задачах з діленням.
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate-400 mt-1 ml-auto"
                  />
                </li>
                <li className="flex gap-3 items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                      Відео: Тектоніка
                    </p>
                    <p className="text-xs text-slate-500">
                      Подивись 5хв відео перед завтрашнім уроком.
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-slate-400 mt-1 ml-auto"
                  />
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const BotAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
    <BrainCircuit size={16} />
  </div>
);
