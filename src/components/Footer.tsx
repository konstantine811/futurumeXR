import React from "react";
import { Cpu, Github, Twitter, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-32 border-t border-white/5 pt-8 text-center pb-8 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <Cpu className="text-accent" />
          FuturumXR LMS
        </div>

        <div className="text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} FuturumXR. © 2024 Futurum XR. Всі
            права захищені.
          </p>
          <p className="mt-2">Створено для освіти майбутнього.</p>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
