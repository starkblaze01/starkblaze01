export type Theme = "dark" | "light";

export const THEME_KEY = "sb-theme";

/**
 * Day/night cycle: an explicit user choice always wins; otherwise the
 * theme follows the visitor's clock like the games do — light 07:00–18:59,
 * dark at night. Keep in sync with the inline script in index.html.
 */
export function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}
