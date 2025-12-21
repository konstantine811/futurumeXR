/**
 * Утиліти для роботи з темою
 */

export type Theme = "light" | "dark" | "kids" | "highcontrast" | "exam" | "code";

export const THEMES: Theme[] = ["light", "dark", "kids", "highcontrast", "exam", "code"];

export const THEME_LABELS: Record<Theme, string> = {
  light: "Світла",
  dark: "Темна",
  kids: "Kids",
  highcontrast: "High Contrast",
  exam: "Exam",
  code: "Code",
};

export function setTheme(theme: Theme) {
  // Видаляємо всі класи тем
  document.documentElement.classList.remove("light", "dark", "kids", "highcontrast", "exam", "code");
  // Додаємо новий клас теми
  document.documentElement.classList.add(theme);
  // Для темних тем також додаємо клас dark для сумісності з існуючими dark: варіантами
  const darkThemes: Theme[] = ["dark", "kids", "highcontrast", "code"];
  if (darkThemes.includes(theme)) {
    document.documentElement.classList.add("dark");
  }
  localStorage.theme = theme;
}

export function getTheme(): Theme {
  const savedTheme = localStorage.theme as Theme;
  if (savedTheme && THEMES.includes(savedTheme)) {
    return savedTheme;
  }
  // Перевіряємо класи на HTML елементі
  const allThemes: Theme[] = ["light", "dark", "kids", "highcontrast", "exam", "code"];
  for (const theme of allThemes) {
    if (document.documentElement.classList.contains(theme)) {
      return theme;
    }
  }
  // За замовчуванням повертаємо темну тему
  return "dark";
}
