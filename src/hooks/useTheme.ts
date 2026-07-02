import { useEffect, useState } from "react";
import { resolveInitialTheme, THEME_KEY, type Theme } from "../lib/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#120e0c" : "#f7f2e7");
  }, [theme]);

  return {
    theme,
    toggle: () =>
      setTheme((t) => {
        const next: Theme = t === "dark" ? "light" : "dark";
        // Only an explicit toggle is stored; untouched visitors stay on the clock.
        window.localStorage.setItem(THEME_KEY, next);
        return next;
      }),
  };
}
