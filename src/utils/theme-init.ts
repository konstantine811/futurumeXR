/**
 * Ініціалізація теми додатку
 * Перевіряє localStorage та встановлює темну тему за замовчуванням
 */
export function initTheme() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && true)) {
    // default to dark
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
