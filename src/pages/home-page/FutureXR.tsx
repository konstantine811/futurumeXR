import React from "react";
import { Section } from "@/components/ui/Section";
import { Glasses } from "lucide-react";

export const FutureXR: React.FC = () => {
  return (
    <Section id="xr" className="overflow-hidden">
      <div className="relative rounded-[40px] bg-slate-900 overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/1200/800?grayscale&blur=2"
            alt="VR Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent dark:from-darker dark:via-darker/80"></div>
        </div>

        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-widest uppercase mb-4">
            <Glasses size={20} /> Coming Soon
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Майбутнє{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              XR-освіти
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Урок перетворюється на імерсивний досвід. Те, що учень бачив на
            пласкій картинці, стає об'ємною моделлю в його кімнаті.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-l-2 border-purple-500 pl-4">
              <h4 className="text-white font-bold text-lg">Симуляції</h4>
              <p className="text-slate-400 text-sm">
                Безпечні експерименти з хімії та фізики у віртуальній
                лабораторії.
              </p>
            </div>
            <div className="border-l-2 border-pink-500 pl-4">
              <h4 className="text-white font-bold text-lg">3D Практика</h4>
              <p className="text-slate-400 text-sm">
                Вивчення анатомії чи механіки через розбір об'єктів у просторі.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
