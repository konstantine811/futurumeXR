import React, { useState } from "react";
import {
  Activity,
  MoveHorizontal,
  Globe2,
  Layers,
  Mountain,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Bot,
  MapPin,
  Award,
} from "lucide-react";

export const GeoLesson: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="h-full w-full">
      {step === 0 && <IntroSection />}
      {step === 1 && <TheoryLithosphere />}
      {step === 2 && <PangeaPuzzle />}
      {step === 3 && <TheoryPlateMovement />}
      {step === 4 && <InteractivePlateMovement />}
      {step === 5 && <EarthquakeSimulation />}
      {step === 6 && <RiskZonesMap />}
      {step === 7 && <PracticeSection />}
      {step === 8 && <MiniProjectSection />}
      {step === 9 && <FinalTestSection />}
      {step === 10 && <ReflectionSection />}
      {step === 11 && <HomeworkSection />}
    </div>
  );
};

// --- 1. Intro ---
const IntroSection = () => (
  <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in-95 p-4">
    <div className="relative w-64 h-64 mb-8 group">
      <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-2xl animate-pulse"></div>
      <Globe2
        size={200}
        className="text-slate-700 animate-[spin_20s_linear_infinite]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Activity
          size={80}
          className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] animate-pulse"
        />
      </div>
    </div>
    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
      Тектоніка: <span className="text-yellow-500">Жива Планета</span>
    </h1>
    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
      Тобі здається, що земля під ногами нерухома? Це ілюзія. Просто зараз під
      тобою рухаються гігантські кам'яні плити, що несуть цілі континенти.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-colors">
        <Layers className="mx-auto mb-4 text-accent" size={32} />
        <h3 className="font-bold text-white mb-2">Літосфера</h3>
        <p className="text-sm text-slate-400">
          Тверда оболонка Землі, розбита на шматки.
        </p>
      </div>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-colors">
        <Mountain className="mx-auto mb-4 text-orange-500" size={32} />
        <h3 className="font-bold text-white mb-2">Рельєф</h3>
        <p className="text-sm text-slate-400">
          Гори ростуть саме завдяки руху плит.
        </p>
      </div>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-colors">
        <Activity className="mx-auto mb-4 text-red-500" size={32} />
        <h3 className="font-bold text-white mb-2">Землетруси</h3>
        <p className="text-sm text-slate-400">
          Що стається, коли плити зачіпають одна одну?
        </p>
      </div>
    </div>
  </div>
);

// --- 2. Theory: Lithosphere ---
const TheoryLithosphere = () => (
  <div className="flex flex-col md:flex-row gap-8 h-full animate-in fade-in items-center">
    <div className="flex-1 space-y-6">
      <h2 className="text-4xl font-display font-bold text-white">
        Земля як Пазл
      </h2>
      <p className="text-lg text-slate-300">
        Літосфера — це верхня тверда оболонка Землі. Вона не цілісна, а розбита
        на величезні блоки —{" "}
        <span className="text-yellow-500 font-bold">літосферні плити</span>.
      </p>
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
        <h3 className="font-bold text-white mb-4">Основні гіганти:</h3>
        <ul className="grid grid-cols-2 gap-3 text-sm text-slate-400">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
            Євразійська
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
            Африканська
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
            Північноамериканська
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
            Тихоокеанська
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
            Індо-Австралійська
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>{" "}
            Антарктична
          </li>
        </ul>
      </div>
    </div>
    <div className="flex-1">
      <div className="relative w-full aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_blank_gmt.svg/2560px-World_map_blank_gmt.svg.png')] bg-cover opacity-20 invert"></div>

        {/* Simplified Plates Overlay using SVG paths */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <path
            d="M 200 100 Q 300 150 400 100 T 600 200"
            fill="none"
            stroke="#eab308"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse-slow"
          />
          <path
            d="M 100 300 Q 250 250 400 350"
            fill="none"
            stroke="#eab308"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse-slow"
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 px-4 py-2 rounded-xl backdrop-blur-md text-center">
          <p className="text-yellow-500 font-bold">Карта Плит</p>
          <p className="text-xs text-slate-400">
            Вони плавають на в'язкій мантії
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. Interactive: Pangea Puzzle ---
const PangeaPuzzle = () => {
  const [assembled, setAssembled] = useState(false);

  return (
    <div className="flex flex-col items-center h-full animate-in fade-in">
      <h2 className="text-3xl font-bold mb-4">Машина Часу: Збери Пангєю</h2>
      <p className="text-slate-400 mb-8 max-w-xl text-center">
        250 мільйонів років тому всі материки були одним суперконтинентом.
        Натисни кнопку, щоб запустити процес дрейфу материків у зворотному
        напрямку.
      </p>

      <div className="relative w-full max-w-2xl h-[400px] bg-sky-900/30 rounded-3xl border border-slate-700 overflow-hidden flex items-center justify-center">
        {/* Modern Layout */}
        {!assembled && (
          <>
            <div className="absolute top-10 left-10 w-32 h-24 bg-stone-600 rounded-lg opacity-80 transition-all duration-1000 rotate-12 flex items-center justify-center text-xs font-bold">
              Пн. Америка
            </div>
            <div className="absolute top-10 right-20 w-40 h-32 bg-stone-500 rounded-lg opacity-80 transition-all duration-1000 -rotate-6 flex items-center justify-center text-xs font-bold">
              Євразія
            </div>
            <div className="absolute bottom-20 left-20 w-24 h-40 bg-stone-600 rounded-lg opacity-80 transition-all duration-1000 rotate-0 flex items-center justify-center text-xs font-bold">
              Пд. Америка
            </div>
            <div className="absolute bottom-20 right-40 w-32 h-40 bg-stone-500 rounded-lg opacity-80 transition-all duration-1000 rotate-12 flex items-center justify-center text-xs font-bold">
              Африка
            </div>
          </>
        )}

        {/* Pangea Layout */}
        {assembled && (
          <div className="relative animate-in zoom-in duration-1000">
            <div className="w-64 h-64 bg-stone-600 rounded-full blur-md opacity-50 absolute inset-0 m-auto"></div>
            <div className="relative z-10 grid grid-cols-2 gap-1 p-4 bg-stone-800/50 rounded-3xl border-4 border-yellow-500/50">
              <div className="w-24 h-24 bg-stone-600 rounded-lg flex items-center justify-center text-[10px] font-bold">
                Лавразія
              </div>
              <div className="w-24 h-24 bg-stone-500 rounded-lg flex items-center justify-center text-[10px] font-bold">
                Гондвана
              </div>
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-yellow-500 font-bold text-xl drop-shadow-md">
              ПАНГЄЯ
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => setAssembled(true)}
          disabled={assembled}
          className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
        >
          З'єднати материки
        </button>
        {assembled && (
          <button
            onClick={() => setAssembled(false)}
            className="px-8 py-3 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            <RefreshCw size={16} /> Скинути
          </button>
        )}
      </div>
      {assembled && (
        <div className="mt-4 flex items-center gap-2 text-green-400 animate-in slide-in-from-bottom">
          <CheckCircle2 size={18} />
          <span className="text-sm font-bold">
            AI: Абсолютно вірно! Материки ідеально пасують один до одного, як
            пазл.
          </span>
        </div>
      )}
    </div>
  );
};

// --- 4. Theory: Movements ---
const TheoryPlateMovement = () => (
  <div className="flex flex-col items-center h-full animate-in fade-in">
    <h2 className="text-3xl font-bold mb-8">Танець Гігантів: Види Руху</h2>
    <div className="grid md:grid-cols-3 gap-6 w-full">
      {/* Divergent */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition-colors group">
        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
          <MoveHorizontal size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Розходження</h3>
        <p className="text-sm text-slate-400 mb-4">
          Плити рухаються в різні боки. Утворюються розломи та нові океани.
        </p>
        <div className="text-xs font-mono text-blue-400 bg-blue-500/10 p-2 rounded">
          Приклад: Серединно-Атлантичний хребет
        </div>
      </div>

      {/* Convergent */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-red-500 transition-colors group">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
          <div className="flex gap-[-5px]">
            <ArrowRight size={24} />
            <ArrowRight size={24} className="rotate-180" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Зіткнення (Субдукція)
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          Одна плита "пірнає" під іншу. Утворюються гори та вулкани.
        </p>
        <div className="text-xs font-mono text-red-400 bg-red-500/10 p-2 rounded">
          Приклад: Гімалаї, Анди
        </div>
      </div>

      {/* Transform */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-yellow-500 transition-colors group">
        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
          <div className="flex flex-col gap-0">
            <ArrowRight size={20} />
            <ArrowRight size={20} className="rotate-180" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Ковзання</h3>
        <p className="text-sm text-slate-400 mb-4">
          Плити труться одна об одну боками. Викликають сильні землетруси.
        </p>
        <div className="text-xs font-mono text-yellow-400 bg-yellow-500/10 p-2 rounded">
          Приклад: Розлом Сан-Андреас
        </div>
      </div>
    </div>
  </div>
);

// --- 5. Interactive: Consequences ---
const InteractivePlateMovement = () => {
  const [mode, setMode] = useState<
    "convergent" | "divergent" | "transform" | null
  >(null);

  return (
    <div className="flex flex-col h-full animate-in fade-in">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Лабораторія: "Що станеться, якщо...?"
          </h2>
          <p className="text-slate-400 text-sm">
            Обери тип руху і спостерігай за народженням рельєфу.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMode("divergent")}
            className={`px-3 py-2 rounded-lg border text-sm font-bold transition-all ${
              mode === "divergent"
                ? "bg-blue-500 text-white border-blue-500"
                : "border-slate-700 hover:bg-slate-800"
            }`}
          >
            Розходження
          </button>
          <button
            onClick={() => setMode("convergent")}
            className={`px-3 py-2 rounded-lg border text-sm font-bold transition-all ${
              mode === "convergent"
                ? "bg-red-500 text-white border-red-500"
                : "border-slate-700 hover:bg-slate-800"
            }`}
          >
            Зіткнення
          </button>
          <button
            onClick={() => setMode("transform")}
            className={`px-3 py-2 rounded-lg border text-sm font-bold transition-all ${
              mode === "transform"
                ? "bg-yellow-500 text-black border-yellow-500"
                : "border-slate-700 hover:bg-slate-800"
            }`}
          >
            Ковзання
          </button>
        </div>
      </div>

      {/* Simulation Viewport */}
      <div className="flex-1 bg-gradient-to-b from-sky-900/40 to-slate-900 rounded-2xl border border-slate-700 relative overflow-hidden flex flex-col justify-end">
        {!mode && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-500">
            Обери режим для запуску симуляції
          </div>
        )}

        {/* Sky */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-sky-500/10 to-transparent"></div>

        {/* Plates */}
        <div className="relative w-full h-1/2 flex items-end justify-center">
          {/* Left Plate */}
          <div
            className={`w-[45%] h-32 bg-stone-700 border-r-2 border-stone-800 transition-all duration-1000 relative z-10
                        ${mode === "divergent" ? "-translate-x-12" : ""}
                        ${mode === "convergent" ? "translate-x-8" : ""}
                     `}
          >
            <div className="absolute top-0 left-0 w-full h-4 bg-green-800/50"></div>{" "}
            {/* Grass */}
          </div>

          {/* Right Plate */}
          <div
            className={`w-[45%] h-32 bg-stone-600 border-l-2 border-stone-800 transition-all duration-1000 relative z-10
                        ${mode === "divergent" ? "translate-x-12" : ""}
                        ${mode === "convergent" ? "-translate-x-8" : ""}
                     `}
          >
            <div className="absolute top-0 left-0 w-full h-4 bg-green-800/50"></div>
          </div>

          {/* Magma (Divergent) */}
          {mode === "divergent" && (
            <div className="absolute bottom-0 w-24 h-40 bg-orange-600 blur-md animate-pulse z-0"></div>
          )}

          {/* Mountain (Convergent) */}
          {mode === "convergent" && (
            <div className="absolute bottom-32 w-0 h-0 border-l-[40px] border-l-transparent border-b-[80px] border-b-stone-500 border-r-[40px] border-r-transparent animate-in slide-in-from-bottom duration-1000 z-20">
              <div className="absolute -left-[15px] top-[25px] w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-white border-r-[15px] border-r-transparent opacity-80"></div>
            </div>
          )}

          {/* Friction Sparks (Transform) */}
          {mode === "transform" && (
            <div className="absolute bottom-20 w-20 h-20 flex items-center justify-center z-30">
              <div className="text-4xl animate-bounce">⚡</div>
            </div>
          )}
        </div>

        {/* Mantle */}
        <div className="w-full h-16 bg-red-900/50 relative z-20 flex items-center justify-center text-xs font-bold text-red-400 tracking-widest uppercase">
          Мантія
        </div>
      </div>

      {/* Explanation Text */}
      {mode && (
        <div className="mt-4 p-4 bg-slate-800 rounded-xl border border-slate-700 animate-in slide-in-from-bottom">
          {mode === "divergent" && (
            <p>
              Плити розходяться. Магма піднімається, застигає і утворює нову
              земну кору (рифтові зони).
            </p>
          )}
          {mode === "convergent" && (
            <p>
              Зіткнення! Одна плита насувається на іншу. Земна кора зминається в
              складки, утворюючи гори.
            </p>
          )}
          {mode === "transform" && (
            <p>
              Ковзання. Плити чіпляються нерівностями. Напруга зростає, поки не
              станеться різкий ривок — землетрус.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// --- 6. Simulation: Earthquake ---
const EarthquakeSimulation = () => {
  const [tension, setTension] = useState(0);
  const [isQuaking, setIsQuaking] = useState(false);

  const releaseTension = () => {
    setIsQuaking(true);
    setTimeout(() => {
      setIsQuaking(false);
      setTension(0);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center h-full animate-in fade-in max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Симулятор Землетрусу</h2>

      <div
        className={`w-full aspect-video bg-slate-900 rounded-2xl border-2 relative overflow-hidden flex items-center justify-center transition-all duration-100
                ${
                  isQuaking
                    ? "border-red-500 animate-[pulse_0.1s_ease-in-out_infinite]"
                    : "border-slate-700"
                }
             `}
      >
        {/* City Skyline */}
        <div
          className={`flex items-end gap-1 transition-transform duration-100 ${
            isQuaking ? "translate-x-1 translate-y-1" : ""
          }`}
        >
          <div className="w-12 h-24 bg-slate-700"></div>
          <div className="w-16 h-40 bg-slate-600 relative overflow-hidden">
            {/* Windows */}
            <div className="grid grid-cols-2 gap-1 p-1">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 bg-yellow-100/20 ${
                      isQuaking ? "animate-pulse" : ""
                    }`}
                  ></div>
                ))}
            </div>
          </div>
          <div className="w-10 h-16 bg-slate-700"></div>
          <div className="w-20 h-32 bg-slate-600"></div>
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-12 bg-stone-800 border-t border-stone-600"></div>

        {isQuaking && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-500/20 z-10 backdrop-blur-[2px]">
            <span className="text-6xl font-black text-red-500 animate-ping">
              MAGNITUDE {Math.ceil(tension / 10)}
            </span>
          </div>
        )}
      </div>

      <div className="w-full mt-8 p-6 bg-slate-800 rounded-2xl border border-slate-700">
        <div className="flex justify-between mb-2">
          <span className="font-bold text-white">Напруга в розломі</span>
          <span
            className={`font-mono font-bold ${
              tension > 80 ? "text-red-500" : "text-yellow-500"
            }`}
          >
            {tension}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={tension}
          onChange={(e) => setTension(+e.target.value)}
          disabled={isQuaking}
          className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
        <p className="text-xs text-slate-500 mt-2">
          Перетягни повзунок вправо, щоб збільшити напругу між плитами.
        </p>

        <button
          onClick={releaseTension}
          disabled={tension < 10 || isQuaking}
          className="mt-6 w-full py-4 bg-red-600 hover:bg-red-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
        >
          <Activity /> Вивільнити енергію
        </button>
      </div>
    </div>
  );
};

// --- 7. Interactive: Risk Zones ---
const RiskZonesMap = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const zones = [
    {
      id: "ring",
      name: "Тихоокеанське вогняне коло",
      desc: "Тут відбувається 90% всіх землетрусів на Землі. Оточує Тихий океан.",
      top: "40%",
      left: "80%",
      color: "bg-red-500",
    },
    {
      id: "med",
      name: "Середземноморський пояс",
      desc: "Тягнеться від Європи до Азії. Зіткнення Африки та Євразії.",
      top: "35%",
      left: "55%",
      color: "bg-orange-500",
    },
    {
      id: "mid",
      name: "Атлантичний хребет",
      desc: "Місце народження нової кори на дні океану.",
      top: "50%",
      left: "42%",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Зони Сейсмічного Ризику
      </h2>
      <p className="text-slate-400 text-center mb-8">
        Натисни на маркери, щоб дізнатися про найнебезпечніші місця планети.
      </p>

      <div className="flex-1 relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_blank_gmt.svg/2560px-World_map_blank_gmt.svg.png')] bg-cover opacity-30 invert"></div>

        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setSelectedZone(zone.id)}
            className={`absolute w-6 h-6 rounded-full ${zone.color} shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse hover:scale-125 transition-transform cursor-pointer border-2 border-white`}
            style={{ top: zone.top, left: zone.left }}
          ></button>
        ))}

        {selectedZone && (
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl border border-slate-600 animate-in slide-in-from-bottom">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-white text-lg">
                {zones.find((z) => z.id === selectedZone)?.name}
              </h3>
              <button
                onClick={() => setSelectedZone(null)}
                className="text-slate-400 hover:text-white"
              >
                <CheckCircle2 size={16} />
              </button>
            </div>
            <p className="text-slate-300 text-sm">
              {zones.find((z) => z.id === selectedZone)?.desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 8. Practice ---
const PracticeSection = () => {
  const [q, setQ] = useState(0);
  const questions = [
    {
      title: "Гімалаї ростуть...",
      opts: [
        "Бо плити розходяться",
        "Бо Індія тисне на Євразію",
        "Через вітер",
      ],
      ans: 1,
    },
    {
      title: "Що таке епіцентр?",
      opts: [
        "Точка під землею",
        "Точка на поверхні над вогнищем",
        "Сила землетрусу",
      ],
      ans: 1,
    },
    {
      title: "Яка плита найбільша?",
      opts: ["Тихоокеанська", "Африканська", "Карибська"],
      ans: 0,
    },
    {
      title: "Прилад для вимірювання?",
      opts: ["Барометр", "Сейсмограф", "Термометр"],
      ans: 1,
    },
    {
      title: "Цунамі виникає через...",
      opts: ["Вітер", "Підводний землетрус", "Припливи"],
      ans: 1,
    },
  ];
  const [feedback, setFeedback] = useState<boolean | null>(null);

  const handleAns = (idx: number) => {
    setFeedback(idx === questions[q].ans);
    setTimeout(() => {
      setFeedback(null);
      if (q < questions.length - 1 && idx === questions[q].ans) setQ(q + 1);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full animate-in fade-in max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-8">Бліц-Опитування</h2>
      <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
        <div className="text-slate-500 text-sm mb-4">Питання {q + 1}</div>
        <h3 className="text-xl font-bold text-white mb-6 min-h-[60px]">
          {questions[q].title}
        </h3>

        <div className="space-y-3">
          {questions[q].opts.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAns(i)}
              className="w-full p-4 rounded-xl text-left bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>

        {feedback !== null && (
          <div
            className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 transition-all ${
              feedback ? "text-green-500" : "text-red-500"
            }`}
          >
            <div className="text-4xl font-bold animate-bounce">
              {feedback ? "Правильно!" : "Помилка!"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 9. Mini Project ---
const MiniProjectSection = () => (
  <div className="flex flex-col items-center h-full animate-in fade-in max-w-2xl mx-auto">
    <MapPin size={64} className="text-yellow-500 mb-6" />
    <h2 className="text-3xl font-bold mb-4">Проєкт: Сейсмолог-Дослідник</h2>
    <p className="text-slate-300 text-center mb-8">
      Обери один відомий землетрус (наприклад, Японія 2011 або Туреччина 2023).
      Спробуй визначити, які саме плити там зіткнулися.
    </p>

    <div className="w-full bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <input
        type="text"
        placeholder="Назва та рік події"
        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white mb-4 outline-none focus:border-yellow-500"
      />
      <textarea
        placeholder="Опис причин (які плити? який тип руху?)"
        className="w-full h-32 bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-yellow-500"
      ></textarea>
      <button className="mt-4 flex items-center gap-2 text-yellow-500 text-sm font-bold uppercase hover:gap-3 transition-all">
        <Bot size={16} /> Попросити AI перевірити дані
      </button>
    </div>
  </div>
);

// --- 10. Final Test ---
const FinalTestSection = () => (
  <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in">
    <div className="w-24 h-24 bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 border-4 border-yellow-500/50">
      <Award size={48} className="text-yellow-500" />
    </div>
    <h2 className="text-3xl font-bold text-white mb-4">Фінальний Екзамен</h2>
    <p className="text-slate-300 max-w-md mb-8">
      Ти знаєш, як рухається планета. Тепер доведи це! 10 запитань про плити,
      вулкани та безпеку.
    </p>
    <button className="px-10 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(234,179,8,0.4)]">
      Розпочати
    </button>
  </div>
);

// --- 11. Reflection ---
const ReflectionSection = () => (
  <div className="flex flex-col items-center justify-center h-full animate-in fade-in max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Рефлексія</h2>
    <div className="space-y-6 w-full">
      <div>
        <p className="text-slate-300 mb-2 font-bold">
          Чи боїшся ти тепер землетрусів?
        </p>
        <input
          type="range"
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>Панікую</span>
          <span>Знаю як діяти</span>
        </div>
      </div>
      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/20 flex gap-4">
        <Bot className="text-yellow-500 shrink-0" />
        <p className="text-sm text-slate-300 italic">
          "Знання — це найкращий захист. Тепер ти розумієш природу цих явищ і
          знаєш, що робити."
        </p>
      </div>
    </div>
  </div>
);

// --- 12. Homework ---
const HomeworkSection = () => (
  <div className="h-full flex flex-col animate-in fade-in">
    <h2 className="text-3xl font-bold mb-8 text-center">Домашнє завдання</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors group">
        <div className="text-green-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 1
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Спостерігач</h3>
        <p className="text-slate-400 text-sm mb-6">
          Знайди на карті України найбільш сейсмічно активні зони (підказка:
          Карпати).
        </p>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-green-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group relative overflow-hidden">
        <div className="text-blue-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 2
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Аналітик</h3>
        <p className="text-slate-400 text-sm mb-6">
          Склади "Тривожну валізку": список з 10 речей, необхідних при
          землетрусі.
        </p>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors group">
        <div className="text-purple-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 3
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Футуролог</h3>
        <p className="text-slate-400 text-sm mb-6">
          Напиши есе: "Як виглядатиме карта світу через 50 мільйонів років?".
        </p>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-purple-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>
    </div>
  </div>
);
