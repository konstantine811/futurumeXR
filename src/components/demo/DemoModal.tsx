import React, { useState } from 'react';
import { X, MessageSquare, ChevronRight, CheckCircle2, Bot, BrainCircuit, Menu, ChevronLeft } from 'lucide-react';
import { MathLesson } from './MathLesson';
import { BioLesson } from './BioLesson';
import { GeoLesson } from './GeoLesson';

interface DemoModalProps {
  lessonId: string;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ lessonId, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAiOpen, setIsAiOpen] = useState(true);

  // Lesson Configuration
  const getLessonConfig = () => {
    switch (lessonId) {
      case 'math':
        return {
          title: "Площі фігур: Deep Dive",
          subject: "Математика, 7 клас",
          steps: [
            "1. Мотивація: Навіщо це?",
            "2. Теорія: Прямокутник",
            "3. Інтерактив: Grid Master",
            "4. Теорія: Квадрат",
            "5. Інтерактив: Builder",
            "6. Теорія: Складені фігури",
            "7. Інтерактив: Splitting",
            "8. Практикум (5 задач)",
            "9. Міні-проєкт: Architect",
            "10. Фінальний Тест",
            "11. Рефлексія",
            "12. Домашнє завдання"
          ],
          color: "blue"
        };
      case 'bio':
        return {
          title: "Клітина: Фабрика Життя",
          subject: "Біологія, 7 клас",
          steps: [
            "1. Вступ: Основа життя",
            "2. Теорія: Типи клітин",
            "3. Інтерактив: Мікроскоп",
            "4. Теорія: Органели",
            "5. Інтерактив: Збери клітину",
            "6. Теорія: Виробництво білка",
            "7. Інтерактив: Конвеєр",
            "8. Симуляція: Стрес",
            "9. Практикум",
            "10. Міні-проєкт: Майбутнє",
            "11. Фінальний Тест",
            "12. Рефлексія",
            "13. Домашнє завдання"
          ],
          color: "green"
        };
      case 'geo':
        return {
          title: "Тектоніка: Жива Планета",
          subject: "Географія, 7 клас",
          steps: [
            "1. Вступ: Рух планети",
            "2. Теорія: Літосфера",
            "3. Інтерактив: Пангєя",
            "4. Теорія: Рух плит",
            "5. Інтерактив: Наслідки руху",
            "6. Симуляція: Землетрус",
            "7. Інтерактив: Зони ризику",
            "8. Практикум",
            "9. Міні-проєкт: Сейсмолог",
            "10. Фінальний Тест",
            "11. Рефлексія",
            "12. Домашнє завдання"
          ],
          color: "yellow"
        };
      default:
        return { title: "", subject: "", steps: [], color: "slate" };
    }
  };

  const config = getLessonConfig();
  const progress = ((activeStep + 1) / config.steps.length) * 100;

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; progress: string; button: string }> = {
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-500',
        border: 'border-blue-500/20',
        progress: 'bg-blue-500',
        button: 'bg-blue-500'
      },
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-500',
        border: 'border-green-500/20',
        progress: 'bg-green-500',
        button: 'bg-green-500'
      },
      yellow: {
        bg: 'bg-yellow-500/10',
        text: 'text-yellow-500',
        border: 'border-yellow-500/20',
        progress: 'bg-yellow-500',
        button: 'bg-yellow-500'
      },
      slate: {
        bg: 'bg-muted',
        text: 'text-muted-foreground',
        border: 'border-border',
        progress: 'bg-muted-foreground',
        button: 'bg-muted'
      }
    };
    return colorMap[color] || colorMap.slate;
  };

  const colors = getColorClasses(config.color);

  const renderContent = () => {
    switch (lessonId) {
      case 'math': return <MathLesson step={activeStep} />;
      case 'bio': return <BioLesson step={activeStep} />;
      case 'geo': return <GeoLesson step={activeStep} />;
      default: return <div>Unknown Lesson</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col text-foreground animate-in fade-in duration-300">
      {/* Header */}
      <div className="h-16 border-b border-border bg-popover flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg lg:hidden">
                <Menu size={20} />
            </button>
            <div>
                <h2 className="font-bold text-lg leading-tight hidden md:block">{config.title}</h2>
                <h2 className="font-bold text-lg leading-tight md:hidden truncate max-w-[150px]">{config.title}</h2>
                <p className="text-xs text-muted-foreground">{config.subject}</p>
            </div>
        </div>

        {/* Progress Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 mx-12 flex-col gap-2 max-w-xl">
             <div className="flex justify-between text-xs text-muted-foreground font-mono">
                <span>START</span>
                <span>FINISH</span>
             </div>
             <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div 
                    className={`h-full ${colors.progress} transition-all duration-500 ease-out`} 
                    style={{ width: `${progress}%` }} 
                />
             </div>
        </div>

        <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full text-accent text-xs font-bold border border-accent/20">
                <Bot size={14} /> AI Mentor Active
             </div>
             <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground">
                <X size={24} />
             </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
         {/* Sidebar Navigation */}
         <div className="w-72 border-r border-border bg-popover/50 hidden lg:flex flex-col p-6 overflow-y-auto custom-scrollbar">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">План уроку</h3>
            <div className="space-y-2">
                {config.steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isCompleted = activeStep > idx;
                  
                  return (
                    <button 
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3
                            ${isActive 
                                ? `${colors.bg} ${colors.text} ${colors.border} border`
                                : isCompleted 
                                    ? 'text-muted-foreground hover:text-foreground' 
                                    : 'text-muted-foreground/50 hover:text-muted-foreground'
                            }`}
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 border
                            ${isActive 
                                ? `${colors.button} text-background border-transparent`
                                : isCompleted
                                    ? 'bg-accent text-background border-transparent'
                                    : 'border-border bg-muted'
                            }`}>
                            {isCompleted ? <CheckCircle2 size={14} /> : idx + 1}
                        </div>
                        <span className="truncate">{step}</span>
                    </button>
                  );
                })}
            </div>
         </div>

         {/* Content Area */}
         <div className="flex-1 overflow-y-auto bg-gradient-to-br from-background via-background to-background/80 p-4 md:p-12 relative flex flex-col items-center">
            <div className="w-full max-w-5xl min-h-[500px] flex flex-col pb-20">
                {renderContent()}
            </div>

            {/* Navigation Controls */}
            <div className="fixed bottom-0 left-0 lg:left-72 right-0 md:right-80 bg-background/90 border-t border-border p-4 md:bg-transparent md:border-none md:bottom-8 md:right-auto md:left-auto md:w-full md:max-w-5xl md:pointer-events-none flex justify-between items-center z-50">
                <button 
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(p => Math.max(0, p - 1))}
                    className="md:pointer-events-auto px-6 py-3 rounded-full border border-border bg-popover text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                    <ChevronLeft size={18} /> <span className="hidden md:inline">Назад</span>
                </button>
                
                {/* Mobile Progress */}
                <span className="md:hidden text-xs text-muted-foreground font-mono">
                    {activeStep + 1} / {config.steps.length}
                </span>

                <button 
                    disabled={activeStep === config.steps.length - 1}
                    onClick={() => setActiveStep(p => Math.min(config.steps.length - 1, p + 1))}
                    className={`md:pointer-events-auto px-8 py-3 rounded-full ${colors.button} text-background font-bold hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg`}
                >
                    <span className="hidden md:inline">Далі</span> <ChevronRight size={18} />
                </button>
            </div>
         </div>

         {/* AI Sidebar */}
         <div className={`fixed inset-y-0 right-0 z-40 bg-popover border-l border-border transition-all duration-300 flex flex-col md:relative md:flex
            ${isAiOpen ? 'w-80 translate-x-0 shadow-2xl' : 'w-0 translate-x-full opacity-0 overflow-hidden'}
         `}>
             <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-accent">
                    <BrainCircuit size={18} /> AI Mentor
                </div>
                <button onClick={() => setIsAiOpen(false)} className="md:hidden text-muted-foreground">
                    <X size={18} />
                </button>
             </div>
             
             {/* Chat Interface Mock */}
             <div className="flex-1 p-4 space-y-4 overflow-y-auto font-sans text-sm">
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background shrink-0">
                        <Bot size={16} />
                    </div>
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border">
                        <p className="text-muted-foreground">Привіт! Я слідкую за твоїм прогресом. Якщо щось незрозуміло — я тут.</p>
                    </div>
                </div>
                
                {lessonId === 'math' && activeStep === 0 && (
                     <div className="flex gap-3 animate-in slide-in-from-bottom-2 fade-in duration-500">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background shrink-0">
                            <Bot size={16} />
                        </div>
                        <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border">
                            <p className="text-muted-foreground">
                                Сьогодні ми розберемося, як не переплатити за плитку в ванній кімнаті! 😉
                            </p>
                        </div>
                    </div>
                )}
                 {lessonId === 'bio' && activeStep === 0 && (
                     <div className="flex gap-3 animate-in slide-in-from-bottom-2 fade-in duration-500">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background shrink-0">
                            <Bot size={16} />
                        </div>
                        <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border">
                            <p className="text-muted-foreground">
                                Клітина - це як мініатюрне місто. Готовий стати його мером?
                            </p>
                        </div>
                    </div>
                )}
                {lessonId === 'geo' && activeStep === 0 && (
                     <div className="flex gap-3 animate-in slide-in-from-bottom-2 fade-in duration-500">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background shrink-0">
                            <Bot size={16} />
                        </div>
                        <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border">
                            <p className="text-muted-foreground">
                                Сьогодні ми з'ясуємо, чому земля тікає з-під ніг. Тектоніка — це круто!
                            </p>
                        </div>
                    </div>
                )}
             </div>

             <div className="p-4 border-t border-border bg-popover z-10">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Запитай AI..." 
                        className="w-full bg-muted border border-border rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-accent text-foreground"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-accent rounded-full text-background hover:brightness-110 transition-colors">
                        <MessageSquare size={14} />
                    </button>
                </div>
             </div>
         </div>

         {/* AI Toggle Button */}
         {!isAiOpen && (
             <button 
                onClick={() => setIsAiOpen(true)}
                className="absolute right-6 bottom-24 w-12 h-12 bg-accent text-background rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all z-20"
             >
                <Bot size={24} />
             </button>
         )}
      </div>
    </div>
  );
};
