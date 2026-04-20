import { useEffect, useState } from "react";
import { useKonami } from "../hooks/useKonami";

const STATS = [
  { label: "HP", value: "∞ (persistent curiosity)" },
  { label: "Attack", value: "System design" },
  { label: "Defense", value: "Writing tests" },
  { label: "Sp. Atk", value: "TypeScript" },
  { label: "Sp. Def", value: "Code review" },
  { label: "Speed", value: "CI pipelines" },
];

const META = [
  ["Species", "Full Stack Developer"],
  ["Habitat", "Dubai, UAE"],
  ["Evolution", "Intern → Full Stack Dev → Senior FSD"],
  ["Branch form", "Mentor — GSoC, Outreachy, GCI"],
  ["Abilities", "Architects microservices · ships dashboards · mentors devs"],
  ["Weakness", "Tab hoarding, fourth coffee"],
];

export default function Pokedex() {
  const [open, setOpen] = useState(false);
  useKonami(() => setOpen((v) => !v));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pokedex-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6 backdrop-blur"
      onClick={() => setOpen(false)}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-red-pokeball/40 bg-ink2 p-6 shadow-hot"
      >
        <header className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 animate-pulse rounded-full bg-red-pokeball" />
            <h2 id="pokedex-title" className="font-display text-xl text-cream">
              No. 001 — Mayank
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-mono text-xs text-off/60 hover:text-red-pokeball"
            aria-label="Close Pokédex"
          >
            ESC ✕
          </button>
        </header>

        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
          {META.map(([k, v]) => (
            <div className="contents" key={k}>
              <dt className="font-mono uppercase tracking-wide text-off/50">{k}</dt>
              <dd className="text-off/90">{v}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-5 rounded-lg border border-white/5 bg-white/[0.02] p-4">
          <h3 className="font-mono text-[0.7rem] uppercase tracking-widest text-off/50">
            Base Stats
          </h3>
          <ul className="mt-2 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
            {STATS.map((s) => (
              <li key={s.label} className="flex justify-between gap-3">
                <span className="font-mono text-off/60">{s.label}</span>
                <span className="text-right text-off/90">{s.value}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-4 text-center text-xs italic text-off/50">
          A curious developer from the Pokémon world. Prefers clean APIs and cold coffee.
        </p>
      </article>
    </div>
  );
}
