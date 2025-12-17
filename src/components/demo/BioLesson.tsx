import React, { useState } from "react";
import {
  RefreshCw,
  Info,
  CheckCircle2,
  AlertTriangle,
  Dna,
  Microscope,
  Zap,
  ShieldAlert,
  Award,
  Bot,
  FlaskConical,
} from "lucide-react";

export const BioLesson: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="h-full w-full">
      {step === 0 && <IntroductionSection />}
      {step === 1 && <CellTypesSection />}
      {step === 2 && <MicroscopeSection />}
      {step === 3 && <OrganellesTheorySection />}
      {step === 4 && <BuildCellSection />}
      {step === 5 && <ProteinProductionTheory />}
      {step === 6 && <ProteinOrderInteractive />}
      {step === 7 && <StressSimulation />}
      {step === 8 && <PracticeSection />}
      {step === 9 && <MiniProjectSection />}
      {step === 10 && <FinalTestSection />}
      {step === 11 && <ReflectionSection />}
      {step === 12 && <HomeworkSection />}
    </div>
  );
};

// --- 1. Introduction ---
const IntroductionSection = () => (
  <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in-95 p-4">
    <div className="relative w-48 h-48 mb-8">
      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="relative w-full h-full rounded-full border-4 border-green-500 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm shadow-[0_0_50px_rgba(34,197,94,0.3)] animate-float">
        <Dna size={80} className="text-green-400" />
      </div>
    </div>
    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
      Клітина: <span className="text-green-500">Фабрика Життя</span>
    </h1>
    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
      Ти складаєшся з трильйонів маленьких "цеглинок". Але це не просто цеглини
      — це складні, автономні роботи, які дихають, їдять, будують і захищаються.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
        <Microscope className="mx-auto mb-4 text-accent" size={32} />
        <h3 className="font-bold text-white mb-2">Невидимий світ</h3>
        <p className="text-sm text-slate-400">
          Більшість клітин неможливо побачити без приладів.
        </p>
      </div>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
        <Zap className="mx-auto mb-4 text-yellow-500" size={32} />
        <h3 className="font-bold text-white mb-2">Енергія</h3>
        <p className="text-sm text-slate-400">
          Кожна клітина — це міні-електростанція.
        </p>
      </div>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
        <ShieldAlert className="mx-auto mb-4 text-red-500" size={32} />
        <h3 className="font-bold text-white mb-2">Захист</h3>
        <p className="text-sm text-slate-400">
          Вони постійно борються з вірусами.
        </p>
      </div>
    </div>
  </div>
);

// --- 2. Theory: Cell Types ---
const CellTypesSection = () => {
  return (
    <div className="flex flex-col h-full animate-in fade-in">
      <h2 className="text-4xl font-bold text-center mb-12">
        Три Царства Клітин
      </h2>
      <div className="grid md:grid-cols-3 gap-8 flex-1">
        {/* Animal */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center hover:border-pink-500/50 transition-colors group">
          <div className="w-32 h-32 rounded-full bg-pink-500/10 border-2 border-pink-500 mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-shadow">
            <div className="absolute w-12 h-12 bg-purple-500/50 rounded-full blur-md"></div>
            <span className="relative z-10 font-bold text-pink-500">
              Тваринна
            </span>
          </div>
          <ul className="text-sm text-slate-400 space-y-2 w-full">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Немає
              клітинної стінки
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Є дрібні
              вакуолі
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Гетеротрофна
              (їсть готове)
            </li>
          </ul>
        </div>

        {/* Plant */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center hover:border-green-500/50 transition-colors group">
          <div
            className="w-32 h-32 bg-green-500/10 border-2 border-green-500 mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-shadow"
            style={{ borderRadius: "10px" }}
          >
            <div className="absolute w-20 h-20 bg-green-500/20 rounded-full blur-md"></div>
            <span className="relative z-10 font-bold text-green-500">
              Рослинна
            </span>
          </div>
          <ul className="text-sm text-slate-400 space-y-2 w-full">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Тверда
              стінка (целюлоза)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Велика
              центральна вакуоля
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Хлоропласти
              (фотосинтез)
            </li>
          </ul>
        </div>

        {/* Bacterial */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col items-center hover:border-yellow-500/50 transition-colors group">
          <div className="w-48 h-24 rounded-full bg-yellow-500/10 border-2 border-yellow-500 mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-shadow">
            <div className="absolute w-full h-1 bg-yellow-500/30 rotate-45"></div>
            <span className="relative z-10 font-bold text-yellow-500">
              Бактеріальна
            </span>
          </div>
          <ul className="text-sm text-slate-400 space-y-2 w-full">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Прокаріот
              (без ядра)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> ДНК кільцева
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Є джгутики
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- 3. Interactive: Microscope ---
const MicroscopeSection = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const parts = [
    {
      id: "membrane",
      name: "Мембрана",
      desc: "Кордон і митниця клітини. Вирішує, кого пускати.",
      x: "50%",
      y: "5%",
      w: "90%",
      h: "90%",
      type: "border",
    },
    {
      id: "nucleus",
      name: "Ядро",
      desc: "Мозок клітини. Містить інструкції (ДНК).",
      x: "50%",
      y: "50%",
      w: "25%",
      h: "25%",
      bg: "bg-purple-500",
    },
    {
      id: "mito",
      name: "Мітохондрія",
      desc: "Електростанція. Спалює цукор, дає енергію.",
      x: "25%",
      y: "25%",
      w: "12%",
      h: "8%",
      bg: "bg-orange-500",
    },
    {
      id: "golgi",
      name: "Апарат Гольджі",
      desc: "Пошта. Пакує білки і відправляє їх.",
      x: "75%",
      y: "60%",
      w: "15%",
      h: "10%",
      bg: "bg-yellow-500",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-full gap-8 animate-in fade-in">
      <div className="flex-1 relative bg-black rounded-full border-8 border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center group cursor-crosshair">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.1)_0%,rgba(0,0,0,1)_90%)] z-0"></div>

        {/* Cell Body */}
        <div className="w-3/4 h-3/4 bg-green-900/20 border-2 border-green-500/50 rounded-[40%_60%_70%_30%] relative transition-all duration-1000 animate-pulse-slow">
          {parts.map((part) => (
            <button
              key={part.id}
              onClick={() => setSelectedPart(part.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110
                                ${
                                  part.type === "border"
                                    ? "w-full h-full rounded-[40%_60%_70%_30%] border-4 border-transparent hover:border-white/50"
                                    : `${part.bg} rounded-full shadow-lg`
                                }
                            `}
              style={{
                left: part.x,
                top: part.y,
                width: part.w,
                height: part.h,
              }}
            >
              {selectedPart === part.id && (
                <div className="absolute inset-0 ring-4 ring-white rounded-inherit animate-ping"></div>
              )}
            </button>
          ))}
        </div>

        {/* Microscope HUD */}
        <div className="absolute inset-0 pointer-events-none border-[50px] border-black/80 rounded-full z-20"></div>
        <div className="absolute top-4 right-8 text-green-500 font-mono text-sm z-30">
          ZOOM: 2000x
        </div>
      </div>

      <div className="w-full md:w-80 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col">
        <h3 className="text-slate-500 uppercase font-bold text-xs mb-4">
          Аналіз об'єкта
        </h3>
        {selectedPart ? (
          <div className="animate-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-bold text-white mb-2">
              {parts.find((p) => p.id === selectedPart)?.name}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {parts.find((p) => p.id === selectedPart)?.desc}
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-600">
            <Info size={48} className="mb-4 opacity-50" />
            <p className="text-center">
              Наведи мікроскоп на органелу та натисни для аналізу.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 4. Theory: Organelles Detailed ---
const OrganellesTheorySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full animate-in fade-in overflow-y-auto">
    {[
      {
        name: "Ядро",
        role: "Директор",
        desc: "Зберігає креслення (ДНК) і керує всім заводом.",
        color: "purple",
      },
      {
        name: "Мітохондрії",
        role: "Електростанція",
        desc: "Перетворюють їжу (глюкозу) на енергію (АТФ).",
        color: "orange",
      },
      {
        name: "Рибосоми",
        role: "Робітники",
        desc: "Маленькі точки, що збирають білки за інструкцією.",
        color: "red",
      },
      {
        name: "ЕПС",
        role: "Конвеєр",
        desc: "Транспортна мережа тунелів. Буває шорстка (з рибосомами) і гладка.",
        color: "blue",
      },
      {
        name: "Апарат Гольджі",
        role: "Служба доставки",
        desc: "Сортує, пакує і відправляє білки туди, де вони потрібні.",
        color: "yellow",
      },
      {
        name: "Лізосоми",
        role: "Утилізатор",
        desc: "Містять кислоту, перетравлюють сміття і старі деталі.",
        color: "green",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-${item.color}-500 transition-colors`}
      >
        <div
          className={`text-${item.color}-500 font-bold uppercase text-xs tracking-widest mb-2`}
        >
          {item.role}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
        <p className="text-slate-400 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
);

// --- 5. Interactive: Build Cell ---
const BuildCellSection = () => {
  const [placed, setPlaced] = useState<string[]>([]);
  const items = [
    { id: "nucleus", label: "Ядро" },
    { id: "mito", label: "Мітохондрія" },
    { id: "ribo", label: "Рибосоми" },
    { id: "er", label: "ЕПС" },
    { id: "golgi", label: "Гольджі" },
    { id: "lysosome", label: "Лізосома" },
  ];

  const togglePlace = (id: string) => {
    if (placed.includes(id)) return;
    setPlaced([...placed, id]);
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Конструктор: Збери клітину
      </h2>
      <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Cell Container */}
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-green-900/10 border-4 border-dashed border-green-500/30 rounded-[40%_60%_70%_30%] relative flex items-center justify-center transition-all duration-500">
          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-green-500/30 font-bold uppercase">
            Цитоплазма
          </span>

          {placed.includes("nucleus") && (
            <div className="absolute w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center animate-in zoom-in font-bold text-xs text-white">
              Ядро
            </div>
          )}
          {placed.includes("mito") && (
            <div className="absolute top-1/4 left-1/4 w-12 h-8 bg-orange-500 rounded-full rotate-45 animate-in zoom-in"></div>
          )}
          {placed.includes("mito") && (
            <div className="absolute bottom-1/4 right-1/3 w-12 h-8 bg-orange-500 rounded-full -rotate-12 animate-in zoom-in"></div>
          )}
          {placed.includes("er") && (
            <div className="absolute w-32 h-32 border-4 border-blue-400 rounded-full opacity-50 animate-in zoom-in"></div>
          )}
          {placed.includes("golgi") && (
            <div className="absolute bottom-10 right-10 w-16 h-10 bg-yellow-500 rounded-lg animate-in zoom-in"></div>
          )}
          {placed.includes("ribo") && (
            <>
              <div className="absolute top-10 right-20 w-2 h-2 bg-red-500 rounded-full animate-in fade-in"></div>
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-in fade-in"></div>
              <div className="absolute top-1/2 left-10 w-2 h-2 bg-red-500 rounded-full animate-in fade-in"></div>
            </>
          )}
        </div>

        {/* Parts Palette */}
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <button
              key={item.id}
              disabled={placed.includes(item.id)}
              onClick={() => togglePlace(item.id)}
              className={`p-4 rounded-xl border font-bold text-sm transition-all
                                ${
                                  placed.includes(item.id)
                                    ? "bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed"
                                    : "bg-slate-900 border-slate-600 hover:border-green-400 hover:bg-green-500/10 text-white"
                                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {placed.length === items.length && (
        <div className="text-center text-green-400 animate-bounce font-bold mt-4">
          Клітина зібрана і готова до роботи!
        </div>
      )}
    </div>
  );
};

// --- 6. Theory: Protein Production ---
const ProteinProductionTheory = () => (
  <div className="flex flex-col items-center justify-center h-full animate-in fade-in">
    <h2 className="text-3xl font-bold mb-8">
      Головна місія клітини: Створення Білка
    </h2>
    <div className="space-y-6 max-w-2xl w-full">
      <div className="flex items-center gap-6 p-4 bg-slate-900 rounded-xl border border-slate-800 relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-800 -z-10"></div>
        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 z-10">
          1
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-400">Ядро (Директор)</h3>
          <p className="text-slate-400">
            Видає копію інструкції (РНК) з головного архіву (ДНК).
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 p-4 bg-slate-900 rounded-xl border border-slate-800 relative">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 z-10">
          2
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-400">
            Рибосома (Робітник)
          </h3>
          <p className="text-slate-400">
            Читає РНК і збирає ланцюжок амінокислот (сирий білок).
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 p-4 bg-slate-900 rounded-xl border border-slate-800 relative">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 z-10">
          3
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-400">ЕПС (Транспорт)</h3>
          <p className="text-slate-400">Перевозить білок до цеху пакування.</p>
        </div>
      </div>
      <div className="flex items-center gap-6 p-4 bg-slate-900 rounded-xl border border-slate-800 relative">
        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 z-10">
          4
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-400">
            Гольджі (Пакування)
          </h3>
          <p className="text-slate-400">
            Надає білку фінальну форму і відправляє за адресою.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- 7. Interactive: Protein Order ---
const ProteinOrderInteractive = () => {
  const correctOrder = ["dna", "rna", "ribo", "golgi"];
  const [userOrder, setUserOrder] = useState<string[]>([]);

  const items = [
    { id: "ribo", label: "Рибосома збирає ланцюжок", color: "bg-red-500" },
    { id: "golgi", label: "Гольджі пакує", color: "bg-yellow-500" },
    { id: "dna", label: "ДНК зберігає код", color: "bg-purple-900" },
    { id: "rna", label: "Копія РНК виходить з ядра", color: "bg-purple-500" },
  ];

  const handleSelect = (id: string) => {
    if (!userOrder.includes(id)) {
      setUserOrder([...userOrder, id]);
    }
  };

  const isCorrect =
    userOrder.length === 4 &&
    userOrder.every((val, index) => val === correctOrder[index]);
  const isFull = userOrder.length === 4;

  return (
    <div className="flex flex-col h-full animate-in fade-in items-center">
      <h2 className="text-2xl font-bold mb-6">Віднови хронологію</h2>

      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {items.map((item) => (
          <button
            key={item.id}
            disabled={userOrder.includes(item.id)}
            onClick={() => handleSelect(item.id)}
            className={`p-4 rounded-xl font-bold shadow-lg transition-transform hover:scale-105 active:scale-95
                            ${
                              userOrder.includes(item.id)
                                ? "bg-slate-800 opacity-20"
                                : item.color
                            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl bg-slate-900 rounded-2xl p-6 min-h-[100px] border border-slate-800 flex flex-col gap-2">
        <span className="text-xs text-slate-500 uppercase font-bold text-center">
          Конвеєр (натискай зверху)
        </span>
        {userOrder.map((id, idx) => {
          const item = items.find((i) => i.id === id);
          return (
            <div
              key={id}
              className="flex items-center gap-4 animate-in slide-in-from-left"
            >
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <div
                className={`flex-1 p-3 rounded-lg ${item?.color} text-white font-medium`}
              >
                {item?.label}
              </div>
            </div>
          );
        })}
      </div>

      {isFull && (
        <div
          className={`mt-6 text-xl font-bold ${
            isCorrect ? "text-green-500" : "text-red-500"
          }`}
        >
          {isCorrect
            ? "Все вірно! Процес налагоджено."
            : "Помилка в алгоритмі. Скинь і спробуй ще раз."}
        </div>
      )}
      {isFull && !isCorrect && (
        <button
          onClick={() => setUserOrder([])}
          className="mt-2 flex items-center gap-2 text-slate-400 hover:text-white"
        >
          <RefreshCw size={14} /> Скинути
        </button>
      )}
    </div>
  );
};

// --- 8. Simulation: Cell under Stress ---
const StressSimulation = () => {
  const [health, setHealth] = useState(100);
  const [energy, setEnergy] = useState(100);
  const [status, setStatus] = useState("Норма");

  const applyStress = (type: "virus" | "toxin" | "no_oxygen") => {
    if (type === "virus") {
      setHealth((h) => Math.max(0, h - 30));
      setStatus("Вірусна атака! Лізосоми активні!");
    }
    if (type === "toxin") {
      setHealth((h) => Math.max(0, h - 20));
      setEnergy((e) => Math.max(0, e - 20));
      setStatus("Токсини! Мембрана пошкоджена.");
    }
    if (type === "no_oxygen") {
      setEnergy((e) => Math.max(0, e - 50));
      setStatus("Гіпоксія! Мітохондрії зупиняються.");
    }
  };

  const heal = () => {
    setHealth(100);
    setEnergy(100);
    setStatus("Відновлення завершено.");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full animate-in fade-in">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-red-500 flex items-center gap-2">
          <AlertTriangle /> Стрес-тест
        </h2>
        <p className="text-slate-300">
          Що станеться з клітиною у критичних умовах? Обери загрозу.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => applyStress("virus")}
            className="p-4 bg-purple-900/50 border border-purple-500/50 rounded-xl hover:bg-purple-900 hover:border-purple-500 transition-all text-left"
          >
            <h4 className="font-bold text-purple-300">Вірусна атака</h4>
            <p className="text-xs text-slate-400">
              Вірус проникає всередину і намагається захопити ядро.
            </p>
          </button>
          <button
            onClick={() => applyStress("toxin")}
            className="p-4 bg-green-900/50 border border-green-500/50 rounded-xl hover:bg-green-900 hover:border-green-500 transition-all text-left"
          >
            <h4 className="font-bold text-green-300">Хімічні токсини</h4>
            <p className="text-xs text-slate-400">
              Руйнують білки та цілісність мембрани.
            </p>
          </button>
          <button
            onClick={() => applyStress("no_oxygen")}
            className="p-4 bg-blue-900/50 border border-blue-500/50 rounded-xl hover:bg-blue-900 hover:border-blue-500 transition-all text-left"
          >
            <h4 className="font-bold text-blue-300">Нестача кисню</h4>
            <p className="text-xs text-slate-400">Блокує роботу мітохондрій.</p>
          </button>
        </div>

        <button
          onClick={heal}
          className="mt-auto py-3 border border-slate-600 rounded-lg hover:bg-slate-800 text-slate-400"
        >
          Скинути симуляцію
        </button>
      </div>

      <div className="flex-1 bg-black rounded-2xl border border-slate-800 p-8 flex flex-col items-center justify-between relative overflow-hidden">
        {/* Status Bars */}
        <div className="w-full space-y-4 z-10">
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-red-400">Цілісність (HP)</span>
              <span className="text-white">{health}%</span>
            </div>
            <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-500"
                style={{ width: `${health}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-yellow-400">Енергія (ATP)</span>
              <span className="text-white">{energy}%</span>
            </div>
            <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 transition-all duration-500"
                style={{ width: `${energy}%` }}
              ></div>
            </div>
          </div>
          <div className="text-center py-2 bg-slate-900/80 rounded-lg border border-slate-700 text-sm font-mono text-cyan-400">
            STATUS: {status}
          </div>
        </div>

        {/* Visual Cell Representation */}
        <div
          className={`mt-8 w-48 h-48 rounded-full transition-all duration-1000 relative
                    ${
                      health < 50
                        ? "bg-red-900/20 border-red-500 animate-pulse"
                        : "bg-green-900/20 border-green-500"
                    }
                    border-4
                 `}
        >
          {energy < 30 && (
            <div className="absolute inset-0 bg-black/50 backdrop-grayscale transition-all"></div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 9. Practice Section ---
const PracticeSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const questions = [
    {
      q: "Яка органела є 'електростанцією' клітини?",
      opts: ["Ядро", "Мітохондрія", "Лізосома"],
      a: 1,
    },
    {
      q: "Де зберігається ДНК?",
      opts: ["В ядрі", "В вакуолі", "В Гольджі"],
      a: 0,
    },
    {
      q: "Чим відрізняється рослинна клітина?",
      opts: ["Має ядро", "Має хлоропласти", "Має мембрану"],
      a: 1,
    },
    {
      q: "Хто збирає білки?",
      opts: ["Рибосоми", "Лізосоми", "Мітохондрії"],
      a: 0,
    },
    {
      q: "Що робить лізосома?",
      opts: ["Виробляє енергію", "Перетравлює сміття", "Зберігає воду"],
      a: 1,
    },
  ];
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    if (idx === questions[currentQ].a) setScore((s) => s + 1);
    setAnswered(true);
  };

  const next = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setAnswered(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full animate-in fade-in max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Бліц-Практика</h2>
      <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <div className="text-slate-500 text-sm mb-4">
          Питання {currentQ + 1} з {questions.length}
        </div>
        <h3 className="text-xl font-bold text-white mb-6">
          {questions[currentQ].q}
        </h3>
        <div className="space-y-3">
          {questions[currentQ].opts.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className={`w-full p-4 rounded-xl text-left transition-colors
                                ${
                                  answered
                                    ? i === questions[currentQ].a
                                      ? "bg-green-500/20 border border-green-500 text-green-400"
                                      : "bg-slate-800 border border-transparent opacity-50"
                                    : "bg-slate-800 hover:bg-slate-700 border border-slate-700"
                                }
                            `}
            >
              {opt}
            </button>
          ))}
        </div>
        {answered && currentQ < questions.length - 1 && (
          <button
            onClick={next}
            className="mt-6 w-full py-3 bg-accent text-darker font-bold rounded-lg hover:bg-white"
          >
            Далі
          </button>
        )}
        {answered && currentQ === questions.length - 1 && (
          <div className="mt-6 text-center font-bold text-accent">
            Тест завершено! Результат: {score}/5
          </div>
        )}
      </div>
    </div>
  );
};

// --- 10. Mini Project ---
const MiniProjectSection = () => {
  return (
    <div className="flex flex-col items-center h-full animate-in fade-in max-w-2xl mx-auto text-center">
      <FlaskConical size={64} className="text-purple-500 mb-6" />
      <h2 className="text-3xl font-bold mb-4">Біоінженерія Майбутнього</h2>
      <p className="text-slate-300 mb-8">
        Уяви, що ти вчений у 2077 році. Тобі потрібно створити нову органелу для
        клітини людини, щоб вона могла вижити на Марсі або під водою.
      </p>

      <div className="w-full bg-slate-900 p-6 rounded-2xl border border-slate-800 text-left">
        <label className="block text-sm font-bold text-slate-400 mb-2">
          Назва Органели
        </label>
        <input
          type="text"
          placeholder="Наприклад: Оксигенатор-3000"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white mb-4 focus:border-accent outline-none"
        />

        <label className="block text-sm font-bold text-slate-400 mb-2">
          Функція
        </label>
        <textarea
          placeholder="Що вона робить? Як допомагає клітині?"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white h-32 focus:border-accent outline-none"
        ></textarea>

        <button className="mt-4 flex items-center gap-2 text-accent text-sm font-bold uppercase hover:gap-3 transition-all">
          <Bot size={16} /> Попросити AI оцінити ідею
        </button>
      </div>
    </div>
  );
};

// --- 11. Final Test ---
const FinalTestSection = () => (
  <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in">
    <div className="w-24 h-24 bg-green-900/20 rounded-full flex items-center justify-center mb-6 border-4 border-green-500/50">
      <Award size={48} className="text-green-500" />
    </div>
    <h2 className="text-3xl font-bold text-white mb-4">Фінальний Екзамен</h2>
    <p className="text-slate-300 max-w-md mb-8">
      Ти пройшов шлях від мембрани до ядра. Час підтвердити кваліфікацію
      цитолога. 10 запитань, 1 спроба.
    </p>
    <button className="px-10 py-4 bg-green-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(34,197,94,0.4)]">
      Розпочати
    </button>
  </div>
);

// --- 12. Reflection ---
const ReflectionSection = () => (
  <div className="flex flex-col items-center justify-center h-full animate-in fade-in max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Рефлексія</h2>
    <div className="space-y-6 w-full">
      <div>
        <p className="text-slate-300 mb-2 font-bold">Що здивувало найбільше?</p>
        <div className="flex gap-4">
          <button className="flex-1 p-3 bg-slate-800 rounded hover:bg-slate-700 text-sm">
            Складність процесів
          </button>
          <button className="flex-1 p-3 bg-slate-800 rounded hover:bg-slate-700 text-sm">
            Схожість на завод
          </button>
          <button className="flex-1 p-3 bg-slate-800 rounded hover:bg-slate-700 text-sm">
            Розміри
          </button>
        </div>
      </div>
      <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20 flex gap-4">
        <Bot className="text-green-500 shrink-0" />
        <p className="text-sm text-slate-300 italic">
          "Ти сьогодні чудово впорався з симуляцією стресу. Пам'ятай: навіть
          найменша клітина — це цілий всесвіт."
        </p>
      </div>
    </div>
  </div>
);

// --- 13. Homework ---
const HomeworkSection = () => (
  <div className="h-full flex flex-col animate-in fade-in">
    <h2 className="text-3xl font-bold mb-8 text-center">Домашнє завдання</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors group">
        <div className="text-green-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 1
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Дослідник</h3>
        <p className="text-slate-400 text-sm mb-6">
          Знайди вдома 3 продукти, які складаються з рослинних клітин, і 3 — з
          тваринних.
        </p>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-green-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group relative overflow-hidden">
        <div className="text-blue-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 2
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Моделювальник</h3>
        <p className="text-slate-400 text-sm mb-6">
          Створи 3D-модель клітини з підручних матеріалів (пластилін, желе,
          лего) і завантаж фото.
        </p>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors group">
        <div className="text-purple-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 3
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Письменник</h3>
        <p className="text-slate-400 text-sm mb-6">
          Напиши коротку розповідь "Один день з життя Лізосоми".
        </p>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-purple-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>
    </div>
  </div>
);
