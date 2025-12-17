import React, { useState } from "react";
import {
  CheckCircle2,
  RefreshCw,
  LayoutGrid,
  Box,
  Scissors,
  Award,
  ArrowRight,
  Home,
  Calculator,
  Target,
  Bot,
} from "lucide-react";

export const MathLesson: React.FC<{ step: number }> = ({ step }) => {
  // Global lesson state can be kept here if needed to persist between steps,
  // but for this demo, local state inside sub-components is often cleaner.

  return (
    <div className="h-full w-full">
      {step === 0 && <MotivationSection />}
      {step === 1 && <TheoryRectSection />}
      {step === 2 && <InteractiveColoringSection />}
      {step === 3 && <TheorySquareSection />}
      {step === 4 && <InteractiveBuilderSection />}
      {step === 5 && <TheoryCompositeSection />}
      {step === 6 && <InteractiveSplitSection />}
      {step === 7 && <PracticeSection />}
      {step === 8 && <MiniProjectSection />}
      {step === 9 && <FinalTestSection />}
      {step === 10 && <ReflectionSection />}
      {step === 11 && <HomeworkSection />}
    </div>
  );
};

// --- 1. Motivation Section ---
const MotivationSection = () => (
  <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in-95 p-4">
    <div className="bg-blue-500/10 p-6 rounded-full mb-8 animate-float">
      <Target size={64} className="text-blue-500" />
    </div>
    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
      Чому <span className="text-blue-500">площа</span> важлива?
    </h1>
    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
      Це не просто цифри в зошиті. Це розмір твоєї кімнати, кількість фарби для
      стін, розмір екрану телефону і навіть кількість пікселів у твоїй улюбленій
      грі.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
        <Home className="mx-auto mb-4 text-accent" size={32} />
        <h3 className="font-bold text-white mb-2">Ремонт та Дизайн</h3>
        <p className="text-sm text-slate-400">
          Скільки ламінату купити, щоб не переплатити?
        </p>
      </div>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
        <LayoutGrid className="mx-auto mb-4 text-purple-500" size={32} />
        <h3 className="font-bold text-white mb-2">Земельні ділянки</h3>
        <p className="text-sm text-slate-400">
          Як чесно розділити землю або виміряти футбольне поле?
        </p>
      </div>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
        <Box className="mx-auto mb-4 text-yellow-500" size={32} />
        <h3 className="font-bold text-white mb-2">Кодинг</h3>
        <p className="text-sm text-slate-400">
          Розрахунок колізій та графіки в іграх базується на геометрії.
        </p>
      </div>
    </div>
  </div>
);

// --- 2. Theory: Rectangle ---
const TheoryRectSection = () => {
  const [w, setW] = useState(6);
  const [h, setH] = useState(4);

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center h-full animate-in fade-in">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-display font-bold text-blue-500">
          Площа Прямокутника
        </h2>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <code className="text-5xl font-mono font-bold text-white block mb-4">
            S = a × b
          </code>
          <p className="text-slate-300 text-lg">
            Щоб знайти площу, треба помножити{" "}
            <span className="text-blue-400 font-bold">довжину (a)</span> на{" "}
            <span className="text-green-400 font-bold">ширину (b)</span>.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Довжина (a): {w} см</span>
            <input
              type="range"
              min="1"
              max="10"
              value={w}
              onChange={(e) => setW(+e.target.value)}
              className="w-40"
            />
          </div>
          <div className="flex justify-between text-sm text-slate-400">
            <span>Ширина (b): {h} см</span>
            <input
              type="range"
              min="1"
              max="8"
              value={h}
              onChange={(e) => setH(+e.target.value)}
              className="w-40"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-slate-900/50 rounded-2xl border border-slate-800 p-8 flex items-center justify-center relative min-h-[400px]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div
          style={{ width: w * 30, height: h * 30 }}
          className="bg-blue-500/20 border-2 border-blue-500 relative transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
        >
          <span className="absolute -top-6 text-blue-400 font-mono font-bold">
            {w}
          </span>
          <span className="absolute -left-6 text-green-400 font-mono font-bold -rotate-90 top-1/2">
            {h}
          </span>

          <div
            className="grid w-full h-full"
            style={{
              gridTemplateColumns: `repeat(${w}, 1fr)`,
              gridTemplateRows: `repeat(${h}, 1fr)`,
            }}
          >
            {Array.from({ length: w * h }).map((_, i) => (
              <div
                key={i}
                className="border border-blue-500/10 hover:bg-white/20 transition-colors"
                title="1 од²"
              ></div>
            ))}
          </div>
          <span className="absolute text-white font-bold text-2xl drop-shadow-md z-10">
            {w * h} см²
          </span>
        </div>
      </div>
    </div>
  );
};

// --- 3. Interactive: Grid Coloring ---
const InteractiveColoringSection = () => {
  // 5x5 grid
  const [grid, setGrid] = useState<boolean[]>(Array(25).fill(false));
  const targetArea = 12;
  const currentArea = grid.filter(Boolean).length;
  const isSuccess = currentArea === targetArea;

  const toggleCell = (index: number) => {
    const newGrid = [...grid];
    newGrid[index] = !newGrid[index];
    setGrid(newGrid);
  };

  return (
    <div className="flex flex-col items-center h-full animate-in fade-in">
      <h2 className="text-3xl font-bold mb-2">Місія: Розфарбуй Площу</h2>
      <p className="text-slate-400 mb-8 text-center max-w-md">
        Зафарбуй рівно{" "}
        <span className="text-accent font-bold text-xl">{targetArea}</span>{" "}
        квадратних одиниць. Форма не має значення!
      </p>

      <div className="grid grid-cols-5 gap-2 mb-8 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl">
        {grid.map((active, i) => (
          <button
            key={i}
            onClick={() => toggleCell(i)}
            className={`w-12 h-12 md:w-16 md:h-16 rounded-lg border-2 transition-all duration-200 
                            ${
                              active
                                ? "bg-accent border-accent shadow-[0_0_15px_rgba(52,225,161,0.5)] scale-105"
                                : "bg-slate-900 border-slate-700 hover:bg-slate-800"
                            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`text-2xl font-mono font-bold ${
            currentArea > targetArea
              ? "text-red-500"
              : isSuccess
              ? "text-accent"
              : "text-slate-300"
          }`}
        >
          {currentArea} / {targetArea} од²
        </div>
        {isSuccess && (
          <div className="flex items-center gap-2 text-accent animate-bounce">
            <CheckCircle2 /> Чудово!
          </div>
        )}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        AI: Зверни увагу, що 12 клітинок можуть утворити прямокутник 3х4 або
        2х6.
      </p>
    </div>
  );
};

// --- 4. Theory: Square ---
const TheorySquareSection = () => (
  <div className="flex flex-col md:flex-row gap-8 h-full items-center animate-in fade-in">
    <div className="flex-1">
      <h2 className="text-4xl font-display font-bold text-purple-500 mb-6">
        Площа Квадрата
      </h2>
      <p className="text-slate-300 text-lg mb-6">
        Квадрат — це особливий прямокутник, у якого всі сторони рівні. Тому нам
        не потрібні <span className="font-mono">a</span> і{" "}
        <span className="font-mono">b</span>. Достатньо лише{" "}
        <span className="font-mono text-purple-400">a</span>.
      </p>
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-6">
        <code className="text-4xl font-mono font-bold text-white block mb-2">
          S = a × a = a²
        </code>
      </div>
      <div className="p-4 bg-purple-500/10 border-l-4 border-purple-500 rounded-r-lg">
        <p className="text-sm text-slate-300">
          <span className="font-bold">Задача:</span> Якщо сторона квадрата 5 см,
          то його площа?
        </p>
        <p className="text-xl font-bold text-white mt-1">5² = 25 см²</p>
      </div>
    </div>
    <div className="flex-1 flex justify-center">
      <div className="relative w-64 h-64 bg-purple-500/20 border-4 border-purple-500 flex items-center justify-center rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]">
        <span className="absolute -top-8 text-purple-400 font-bold">a = 5</span>
        <span className="absolute -left-8 text-purple-400 font-bold top-1/2 -translate-y-1/2">
          a = 5
        </span>
        <span className="text-4xl font-bold text-white">a²</span>
      </div>
    </div>
  </div>
);

// --- 5. Interactive: Builder ---
const InteractiveBuilderSection = () => {
  const [target] = useState(
    Math.floor(Math.random() * 3) === 0
      ? 16
      : Math.floor(Math.random() * 2) === 0
      ? 20
      : 24
  ); // 16, 20, or 24
  const [w, setW] = useState(1);
  const [h, setH] = useState(1);
  const current = w * h;
  const isSuccess = current === target;

  return (
    <div className="flex flex-col items-center h-full animate-in fade-in">
      <h2 className="text-3xl font-bold mb-4">Архітектор: Побудуй кімнату</h2>
      <div className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700 mb-8">
        Завдання: Створити прямокутник площею{" "}
        <span className="text-accent font-bold text-xl">{target} м²</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl items-center justify-center">
        <div className="space-y-6 w-64">
          <div>
            <label className="text-slate-400 block mb-2">Ширина: {w} м</label>
            <input
              type="range"
              min="1"
              max="10"
              value={w}
              onChange={(e) => setW(+e.target.value)}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
          <div>
            <label className="text-slate-400 block mb-2">Довжина: {h} м</label>
            <input
              type="range"
              min="1"
              max="10"
              value={h}
              onChange={(e) => setH(+e.target.value)}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
          <div className="text-center pt-4 border-t border-slate-700">
            <div className="text-xs text-slate-500 uppercase">
              Поточна площа
            </div>
            <div
              className={`text-4xl font-bold ${
                isSuccess ? "text-accent" : "text-white"
              }`}
            >
              {current} м²
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[300px] bg-slate-900 border border-slate-800 rounded-xl relative flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          ></div>
          <div
            style={{ width: w * 25, height: h * 25 }}
            className={`transition-all duration-300 border-2 flex items-center justify-center relative backdrop-blur-sm
                            ${
                              isSuccess
                                ? "bg-accent/30 border-accent"
                                : "bg-blue-500/20 border-blue-500"
                            }`}
          >
            {isSuccess && (
              <CheckCircle2 className="text-white drop-shadow-md w-8 h-8" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 6. Theory: Composite Shapes ---
const TheoryCompositeSection = () => (
  <div className="flex flex-col items-center h-full text-center animate-in fade-in max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-6">Складені Фігури</h2>
    <p className="text-xl text-slate-300 mb-12">
      Що робити, якщо кімната має форму літери "L"? <br />
      <span className="text-accent font-bold">
        Стратегія: Розділяй та володарюй!
      </span>
    </p>

    <div className="grid md:grid-cols-2 gap-12 w-full">
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
        <h3 className="font-bold text-white mb-4">Спосіб 1: Розбиття</h3>
        <div className="h-40 relative flex items-center justify-center">
          {/* L shape split vertically */}
          <div className="relative">
            <div className="flex items-end">
              <div className="w-12 h-24 bg-blue-500/40 border border-blue-400 flex items-center justify-center text-xs">
                S1
              </div>
              <div className="w-20 h-12 bg-green-500/40 border border-green-400 flex items-center justify-center text-xs">
                S2
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-2">
          Розрізаємо на два прямокутники. <br />S = S1 + S2
        </p>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
        <h3 className="font-bold text-white mb-4">Спосіб 2: Доповнення</h3>
        <div className="h-40 relative flex items-center justify-center">
          {/* L shape completed to rectangle */}
          <div className="relative w-32 h-24 border border-dashed border-slate-400">
            <div className="absolute bottom-0 left-0 w-12 h-24 bg-blue-500/40 border-r border-blue-400"></div>
            <div className="absolute bottom-0 right-0 w-20 h-12 bg-blue-500/40 border-t border-blue-400"></div>
            <div className="absolute top-0 right-0 w-20 h-12 bg-red-500/10 flex items-center justify-center text-xs text-red-400">
              Пусто
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-2">
          Доповнюємо до великого прямокутника і віднімаємо пусте. <br />S =
          S(велика) - S(пуста)
        </p>
      </div>
    </div>
  </div>
);

// --- 7. Interactive: Splitting ---
const InteractiveSplitSection = () => {
  const [isCut, setIsCut] = useState(false);

  return (
    <div className="flex flex-col items-center h-full animate-in fade-in">
      <h2 className="text-3xl font-bold mb-4">Практика розбиття</h2>
      <p className="text-slate-400 mb-8">
        Натисни на ножиці, щоб правильно розділити фігуру на прості
        прямокутники.
      </p>

      <div className="relative w-64 h-64">
        {/* The L Shape Container */}
        <div
          className="absolute bottom-0 left-0 w-24 h-64 bg-slate-700 border-2 border-slate-500 transition-all duration-500"
          style={{ borderRightColor: isCut ? "#34E1A1" : "#64748b" }}
        >
          <span className="absolute top-4 left-8 text-white font-bold">A</span>
        </div>
        <div
          className="absolute bottom-0 right-0 w-40 h-24 bg-slate-700 border-2 border-slate-500 transition-all duration-500"
          style={{
            borderLeft: "none",
            borderLeftColor: isCut ? "#34E1A1" : "transparent",
          }}
        >
          <span className="absolute top-8 right-16 text-white font-bold">
            B
          </span>
        </div>

        {/* The Cut Line / Button */}
        {!isCut && (
          <button
            onClick={() => setIsCut(true)}
            className="absolute bottom-24 left-0 w-24 h-1 bg-dashed border-t-2 border-dashed border-yellow-400 cursor-pointer hover:border-white group z-10 flex items-center justify-center"
          >
            <div className="bg-yellow-400 text-black p-1 rounded-full absolute -right-3 -top-3 group-hover:scale-110 transition-transform">
              <Scissors size={14} />
            </div>
          </button>
        )}

        {isCut && (
          <div className="absolute bottom-24 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_#34E1A1] z-20 animate-in slide-in-from-left duration-300"></div>
        )}
      </div>

      {isCut && (
        <div className="mt-8 bg-slate-800 p-4 rounded-xl border border-slate-700 animate-in fade-in slide-in-from-bottom-4">
          <p className="text-white font-bold mb-2">Площа = S(A) + S(B)</p>
          <p className="text-sm text-slate-400">
            Тепер у нас є два простих прямокутника, які легко обчислити!
          </p>
          <button
            onClick={() => setIsCut(false)}
            className="mt-3 text-xs text-accent hover:underline flex items-center gap-1"
          >
            <RefreshCw size={12} /> Скинути
          </button>
        </div>
      )}
    </div>
  );
};

// --- 8. Practice Section ---
const PracticeSection = () => {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = [
    {
      q: "Знайди площу прямокутника зі сторонами 8 см і 3 см.",
      options: [11, 24, 16, 22],
      ans: 1,
    },
    {
      q: "Площа квадрата 36 см². Яка довжина його сторони?",
      options: [4, 9, 6, 12],
      ans: 2,
    },
    {
      q: "Одна сторона 10м, площа 50м². Яка друга сторона?",
      options: [5, 500, 40, 25],
      ans: 0,
    },
    {
      q: "Прямокутник 5х4 розрізали навпіл. Яка площа половини?",
      options: [20, 10, 9, 5],
      ans: 1,
    },
    {
      q: "Логічна: Периметр квадрата 20 см. Яка його площа?",
      options: [20, 25, 100, 16],
      ans: 1,
    }, // side=5, area=25
  ];

  const handleSelect = (idx: number) => {
    if (isCorrect !== null) return;
    setSelected(idx);
    setIsCorrect(idx === questions[qIndex].ans);
  };

  const nextQ = () => {
    if (qIndex < questions.length - 1) {
      setQIndex(qIndex + 1);
      setSelected(null);
      setIsCorrect(null);
    }
  };

  const q = questions[qIndex];

  return (
    <div className="flex flex-col items-center h-full max-w-2xl mx-auto animate-in fade-in">
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Практикум</h2>
        <span className="text-slate-500 font-mono text-sm">
          Питання {qIndex + 1} з {questions.length}
        </span>
      </div>

      <div className="w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg min-h-[300px] flex flex-col justify-between">
        <div>
          <h3 className="text-xl text-white font-medium mb-8 leading-relaxed">
            {q.q}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isCorrect !== null}
                className={`p-4 rounded-xl border text-left font-bold transition-all
                                    ${
                                      selected === idx
                                        ? isCorrect
                                          ? "bg-green-500/20 border-green-500 text-green-400"
                                          : "bg-red-500/20 border-red-500 text-red-400"
                                        : "bg-slate-900 border-slate-700 hover:bg-slate-700 text-slate-300"
                                    }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {isCorrect !== null && (
          <div className="mt-6 pt-6 border-t border-slate-700 flex justify-between items-center animate-in fade-in">
            <div className={isCorrect ? "text-green-400" : "text-red-400"}>
              {isCorrect ? "Правильно!" : "Спробуй ще подумати..."}
            </div>
            {isCorrect && qIndex < questions.length - 1 && (
              <button
                onClick={nextQ}
                className="px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-500"
              >
                Далі
              </button>
            )}
            {isCorrect && qIndex === questions.length - 1 && (
              <div className="text-accent font-bold">
                Всі завдання виконано!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- 9. Mini Project: Architect ---
const MiniProjectSection = () => {
  // 6x6 grid
  const [blocks, setBlocks] = useState<boolean[]>(Array(36).fill(false));

  const toggleBlock = (i: number) => {
    const n = [...blocks];
    n[i] = !n[i];
    setBlocks(n);
  };

  const area = blocks.filter(Boolean).length;

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full animate-in fade-in">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Calculator className="text-yellow-500" /> Архітектор
        </h2>
        <p className="text-slate-300 mb-6">
          Намалюй будь-яку фігуру на сітці. Система автоматично обчислить її
          площу, підраховуючи блоки.
        </p>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">
            Загальна Площа
          </p>
          <p className="text-5xl font-mono font-bold text-accent">
            {area} <span className="text-lg text-slate-400">од²</span>
          </p>
        </div>
        <button
          onClick={() => setBlocks(Array(36).fill(false))}
          className="mt-4 text-slate-400 hover:text-white flex items-center gap-2 text-sm"
        >
          <RefreshCw size={14} /> Очистити поле
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center bg-slate-900 rounded-2xl border border-slate-800 p-6">
        <div className="grid grid-cols-6 gap-1 w-full max-w-[300px] aspect-square">
          {blocks.map((active, i) => (
            <div
              key={i}
              onMouseEnter={(e) => {
                if (e.buttons === 1) toggleBlock(i);
              }}
              onMouseDown={() => toggleBlock(i)}
              className={`rounded-sm cursor-pointer transition-colors duration-100 border border-white/5
                                ${
                                  active
                                    ? "bg-yellow-500 shadow-[0_0_10px_#eab308]"
                                    : "bg-slate-800 hover:bg-slate-700"
                                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 10. Final Test ---
const FinalTestSection = () => (
  <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in">
    <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 border-4 border-slate-700">
      <Award size={48} className="text-slate-400" />
    </div>
    <h2 className="text-3xl font-bold text-white mb-4">Фінальний Тест</h2>
    <p className="text-slate-300 max-w-md mb-8">
      Ти пройшов усі етапи. Готовий перевірити свої знання на справжньому
      іспиті? 10 питань, які охоплюють весь матеріал.
    </p>
    <button className="px-10 py-4 bg-accent text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(52,225,161,0.4)]">
      Розпочати Тест
    </button>
    <p className="mt-4 text-xs text-slate-500">
      Результати будуть збережені у твоєму профілі.
    </p>
  </div>
);

// --- 11. Reflection ---
const ReflectionSection = () => (
  <div className="flex flex-col items-center justify-center h-full animate-in fade-in max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Рефлексія</h2>

    <div className="w-full space-y-6">
      <div>
        <label className="block text-slate-300 mb-2 font-medium">
          Що було найскладнішим?
        </label>
        <div className="flex gap-4">
          {["Формули", "Складені фігури", "Задачі"].map((opt) => (
            <button
              key={opt}
              className="flex-1 py-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-accent hover:text-accent transition-colors text-sm"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-300 mb-2 font-medium">
          Як ти оцінюєш свій прогрес?
        </label>
        <input
          type="range"
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>Нічого не зрозумів</span>
          <span>Я — майстер площі!</span>
        </div>
      </div>

      <div className="bg-accent/10 p-4 rounded-xl border border-accent/20 flex gap-4 items-start">
        <Bot className="text-accent shrink-0 mt-1" />
        <p className="text-sm text-slate-300 italic">
          "Ти сьогодні чудово попрацював над складеними фігурами. Раджу звернути
          увагу на одиниці вимірювання в домашньому завданні."
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
        <h3 className="text-xl text-white font-bold mb-4">Базовий</h3>
        <ul className="text-slate-400 text-sm space-y-3 mb-6">
          <li className="flex gap-2">
            <ArrowRight size={14} className="mt-1 shrink-0" /> Обчисли площу
            столу в своїй кімнаті.
          </li>
          <li className="flex gap-2">
            <ArrowRight size={14} className="mt-1 shrink-0" /> 3 прості задачі
            на формули.
          </li>
        </ul>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-green-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
          РЕКОМЕНДОВАНО
        </div>
        <div className="text-blue-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 2
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Середній</h3>
        <ul className="text-slate-400 text-sm space-y-3 mb-6">
          <li className="flex gap-2">
            <ArrowRight size={14} className="mt-1 shrink-0" /> План твоєї
            квартири: намалюй схему.
          </li>
          <li className="flex gap-2">
            <ArrowRight size={14} className="mt-1 shrink-0" /> 2 задачі на
            складені фігури.
          </li>
        </ul>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors group">
        <div className="text-purple-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Рівень 3
        </div>
        <h3 className="text-xl text-white font-bold mb-4">Pro</h3>
        <ul className="text-slate-400 text-sm space-y-3 mb-6">
          <li className="flex gap-2">
            <ArrowRight size={14} className="mt-1 shrink-0" /> Проєкт "Ремонт":
            розрахуй вартість плитки для ванної.
          </li>
          <li className="flex gap-2">
            <ArrowRight size={14} className="mt-1 shrink-0" /> Олімпіадна
            задача.
          </li>
        </ul>
        <button className="w-full py-2 rounded-lg bg-slate-700 group-hover:bg-purple-600 group-hover:text-white transition-colors text-sm font-bold">
          Обрати
        </button>
      </div>
    </div>
  </div>
);
