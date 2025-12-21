/**
 * Ініціалізація теми додатку
 * Перевіряє localStorage та встановлює темну тему за замовчуванням
 */
import { setTheme, getTheme, type Theme } from "./theme";

export function initTheme() {
  const savedTheme = localStorage.theme as Theme | undefined;
  const theme = savedTheme || "dark";
  setTheme(theme);
}
