import { NavLink, Outlet } from "react-router-dom";
import Pokedex from "./Pokedex";
import { useDocumentHead } from "../hooks/useDocumentHead";
import { useTheme } from "../hooks/useTheme";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/writing", label: "Writing" },
  { to: "/timeline", label: "Timeline" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  useDocumentHead();
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-ink text-off">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-red-pokeball focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <header className="border-b border-white/5 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <NavLink to="/" className="font-mono text-sm tracking-tight">
            <span className="text-red-pokeball">●</span>{" "}
            <span className="text-off">starkblaze01</span>
          </NavLink>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded-sm transition hover:text-red-pokeball ${
                      isActive ? "text-red-pokeball" : "text-off/70"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-off/70 transition hover:border-red-pokeball/60 hover:text-red-pokeball"
            >
              <span aria-hidden="true" className="text-sm leading-none">
                {theme === "dark" ? "☾" : "☀"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl px-6 py-16">
        <Outlet />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-off/50">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="mailto:mp.pathela@gmail.com" className="link-underline">
              Mayank Pathela
            </a>{" "}
            · Dubai, UAE
          </p>
          <p className="mt-1 text-[0.7rem] text-off/40">
            Try <span className="kbd">↑ ↑ ↓ ↓ ← → ← → B A</span>
          </p>
        </div>
      </footer>

      <Pokedex />
    </div>
  );
}
