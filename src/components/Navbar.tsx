import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { RoutePath } from "@/config/route-config";
import { txtConfig } from "@/config/txt-config";
import { setTheme, getTheme, THEMES, THEME_LABELS, type Theme } from "@/utils/theme";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Initialize state from DOM or localStorage
    const savedTheme = getTheme();
    setCurrentTheme(savedTheme);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 dark:bg-darker/90 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to={RoutePath.HOME}
          className="flex items-center gap-2 font-display font-bold text-2xl text-slate-900 dark:text-white tracking-wider"
        >
          <Cpu className="text-accent" />
          {txtConfig.title}
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link
            to={RoutePath.CAPABILITIES}
            className="hover:text-accent transition-colors"
          >
            Можливості
          </Link>
          <Link
            to={RoutePath.ROADMAP}
            className="hover:text-accent transition-colors"
          >
            Roadmap
          </Link>
          <Link
            to={RoutePath.THEME_SETTINGS}
            className="hover:text-accent transition-colors"
          >
            Тема
          </Link>

          <Menubar className="border-none bg-transparent shadow-none h-auto">
            <MenubarMenu>
              <MenubarTrigger className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 flex items-center gap-2 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 h-auto">
                <Palette size={20} />
                <span className="text-sm hidden lg:inline">{THEME_LABELS[currentTheme]}</span>
              </MenubarTrigger>
              <MenubarContent align="end" className="w-40">
                <MenubarRadioGroup value={currentTheme}>
                  {THEMES.map((themeOption) => (
                    <MenubarRadioItem
                      key={themeOption}
                      value={themeOption}
                      onSelect={() => handleThemeChange(themeOption)}
                    >
                      {THEME_LABELS[themeOption]}
                    </MenubarRadioItem>
                  ))}
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="hidden md:block">
          <button className="px-5 py-2 border border-accent/50 text-accent hover:bg-accent hover:text-darker transition-all rounded-full text-sm font-bold uppercase tracking-wide">
            Отримати демо
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Menubar className="border-none bg-transparent shadow-none h-auto">
            <MenubarMenu>
              <MenubarTrigger className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 h-auto">
                <Palette size={20} />
              </MenubarTrigger>
              <MenubarContent align="end" className="w-40">
                <MenubarRadioGroup value={currentTheme}>
                  {THEMES.map((themeOption) => (
                    <MenubarRadioItem
                      key={themeOption}
                      value={themeOption}
                      onSelect={() => handleThemeChange(themeOption)}
                    >
                      {THEME_LABELS[themeOption]}
                    </MenubarRadioItem>
                  ))}
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <button
            className="text-slate-900 dark:text-slate-300"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-darker border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          <a
            href="#features"
            className="text-slate-900 dark:text-slate-300 hover:text-accent"
            onClick={() => setIsMobileOpen(false)}
          >
            Можливості
          </a>
          <a
            href="#teacher"
            className="text-slate-900 dark:text-slate-300 hover:text-accent"
            onClick={() => setIsMobileOpen(false)}
          >
            Для вчителів
          </a>
          <a
            href="#xr"
            className="text-slate-900 dark:text-slate-300 hover:text-accent"
            onClick={() => setIsMobileOpen(false)}
          >
            XR Future
          </a>
          <button className="w-full py-3 bg-accent text-darker font-bold rounded-lg mt-4">
            Отримати демо
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
