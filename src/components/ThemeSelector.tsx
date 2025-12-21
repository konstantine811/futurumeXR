import React, { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import {
  getTheme,
  setTheme,
  THEMES,
  THEME_LABELS,
  type Theme,
} from "@/utils/theme";

interface ThemeSelectorProps {
  variant?: "dropdown" | "mobile";
  onSelect?: () => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  variant = "dropdown",
  onSelect,
}) => {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [themeMenuTimeout, setThemeMenuTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = getTheme();
    setCurrentTheme(savedTheme);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
    if (onSelect) {
      onSelect();
    }
  };

  const handleThemeMenuEnter = () => {
    // Clear any pending timeout
    if (themeMenuTimeout) {
      clearTimeout(themeMenuTimeout);
      setThemeMenuTimeout(null);
    }
    setIsThemeMenuOpen(true);
  };

  const handleThemeMenuLeave = () => {
    // Add delay before closing to allow cursor to move to menu
    const timeout = setTimeout(() => {
      setIsThemeMenuOpen(false);
    }, 150); // 150ms delay
    setThemeMenuTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (themeMenuTimeout) {
        clearTimeout(themeMenuTimeout);
      }
    };
  }, [themeMenuTimeout]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isThemeMenuOpen && !target.closest(".theme-menu-container")) {
        setIsThemeMenuOpen(false);
      }
    };

    if (isThemeMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isThemeMenuOpen]);

  if (variant === "mobile") {
    return (
      <div className="px-4 py-2">
        <div className="text-xs font-medium navbar-text-secondary mb-2">
          Тема
        </div>
        <div className="flex flex-wrap gap-2">
          {THEMES.map((themeOption) => (
            <button
              key={themeOption}
              onClick={() => handleThemeChange(themeOption)}
              className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all ${
                currentTheme === themeOption
                  ? "bg-emerald-500 text-black"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {THEME_LABELS[themeOption]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative theme-menu-container"
      onMouseEnter={handleThemeMenuEnter}
      onMouseLeave={handleThemeMenuLeave}
    >
      <button className="p-1.5 rounded-full hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 exam:hover:bg-black/5 transition-colors navbar-text-secondary navbar-text-hover">
        <Palette size={16} />
      </button>

      {/* Theme Dropdown */}
      {isThemeMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 glass backdrop-blur-xl rounded-xl shadow-2xl py-2 overflow-hidden theme-menu-dropdown border">
          <div className="px-1">
            {THEMES.map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => handleThemeChange(themeOption)}
                className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-all duration-150 ${
                  currentTheme === themeOption
                    ? "theme-menu-item-active font-medium"
                    : "theme-menu-item"
                }`}
              >
                <div className="flex items-center gap-2">
                  {currentTheme === themeOption && (
                    <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                  )}
                  <span>{THEME_LABELS[themeOption]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


