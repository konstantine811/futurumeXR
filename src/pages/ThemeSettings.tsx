import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import {
  getTheme,
  setTheme,
  THEMES,
  THEME_LABELS,
  type Theme,
} from "@/utils/theme";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar";

type TokenFormat = "HEX" | "CSS Vars";

interface ColorToken {
  name: string;
  key: string;
  light: string;
  dark: string;
  kids: string;
  highcontrast: string;
  exam: string;
  code: string;
}

const COLOR_TOKENS: ColorToken[] = [
  {
    name: "Фон",
    key: "background",
    light: "#FFFFFF",
    dark: "#0B0D0C",
    kids: "#1A1F2E",
    highcontrast: "#000000",
    exam: "#FFFFFF",
    code: "#0F1419",
  },
  {
    name: "Поверхня",
    key: "surface",
    light: "#F5F5F5",
    dark: "#141716",
    kids: "#252B3D",
    highcontrast: "#1A1A1A",
    exam: "#F5F5F5",
    code: "#1A1F26",
  },
  {
    name: "Акцент",
    key: "accent",
    light: "#0066CC",
    dark: "#34E1A1",
    kids: "#FF6B9D",
    highcontrast: "#FFFF00",
    exam: "#0066CC",
    code: "#00D9FF",
  },
  {
    name: "Текст",
    key: "text",
    light: "#1A1A1A",
    dark: "#E8F9F0",
    kids: "#FFFFFF",
    highcontrast: "#FFFFFF",
    exam: "#1A1A1A",
    code: "#E8F0F5",
  },
  {
    name: "Текст вторинний",
    key: "text-secondary",
    light: "#666666",
    dark: "#B8D4C5",
    kids: "#C8D0E8",
    highcontrast: "#FFFFFF",
    exam: "#666666",
    code: "#A8B8C8",
  },
  {
    name: "Межа",
    key: "border",
    light: "#E0E0E0",
    dark: "#1F2321",
    kids: "#2F3547",
    highcontrast: "#FFFFFF",
    exam: "#E0E0E0",
    code: "#252A33",
  },
  {
    name: "Успіх",
    key: "success",
    light: "#00AA44",
    dark: "#34E1A1",
    kids: "#4ECDC4",
    highcontrast: "#00FF00",
    exam: "#00AA44",
    code: "#00FF88",
  },
  {
    name: "Попередження",
    key: "warning",
    light: "#FF8800",
    dark: "#FFB84D",
    kids: "#FFE66D",
    highcontrast: "#FFAA00",
    exam: "#FF8800",
    code: "#FFB84D",
  },
  {
    name: "Помилка",
    key: "error",
    light: "#CC0000",
    dark: "#FF6B6B",
    kids: "#FF6B6B",
    highcontrast: "#FF0000",
    exam: "#CC0000",
    code: "#FF4757",
  },
  {
    name: "Інформація",
    key: "info",
    light: "#0066CC",
    dark: "#4DABF7",
    kids: "#95E1D3",
    highcontrast: "#00AAFF",
    exam: "#0066CC",
    code: "#5B8DEF",
  },
];

function ThemeSettings() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const [tokenFormat, setTokenFormat] = useState<TokenFormat>("HEX");

  useEffect(() => {
    const savedTheme = getTheme();
    setCurrentTheme(savedTheme);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const getColorForTheme = (token: ColorToken, theme: Theme): string => {
    return token[theme];
  };

  const getCssVar = (key: string): string => {
    return `var(--color-${key})`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-darker pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">
            Токени дизайну
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Налаштуйте тему та перегляньте кольорову палітру
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Playground Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-lg sticky top-28">
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Playground
              </h2>

              <div className="space-y-6">
                {/* Theme Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Mode
                  </label>
                  <Menubar className="border-none bg-transparent shadow-none h-auto w-full">
                    <MenubarMenu>
                      <MenubarTrigger className="w-full justify-between hover:bg-slate-100 dark:hover:bg-slate-800">
                        <span className="flex items-center gap-2">
                          <Palette size={16} />
                          {THEME_LABELS[currentTheme]}
                        </span>
                      </MenubarTrigger>
                      <MenubarContent
                        align="start"
                        className="w-full min-w-[200px]"
                      >
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

                {/* Token Format */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Show tokens as
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTokenFormat("HEX")}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        tokenFormat === "HEX"
                          ? "bg-accent text-darker font-bold"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      HEX
                    </button>
                    <button
                      onClick={() => setTokenFormat("CSS Vars")}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        tokenFormat === "CSS Vars"
                          ? "bg-accent text-darker font-bold"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      CSS Vars
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Кольорова палітра
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COLOR_TOKENS.map((token) => {
                  const color = getColorForTheme(token, currentTheme);
                  const displayValue =
                    tokenFormat === "HEX" ? color : getCssVar(token.key);

                  return (
                    <div
                      key={token.key}
                      className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                    >
                      <div
                        className="w-16 h-16 rounded-lg border-2 border-slate-200 dark:border-slate-700 flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                          {token.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-mono break-all">
                          {displayValue}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
