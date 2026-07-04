import { useEffect, useRef, type ReactNode } from "react";

/**
 * Holo-foil tilt: the card leans toward the pointer and a foil sheen
 * follows it, like a holographic trading card catching light. Everything
 * is driven through CSS variables set on the element directly — no
 * re-renders on pointermove.
 */
function useHoloTilt() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onMove(e: PointerEvent) {
      if (!el || e.pointerType === "touch") return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--rx", `${((py - 0.5) * -7).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((px - 0.5) * 9).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      el.style.setProperty("--sheen", "1");
    }
    function onLeave() {
      if (!el) return;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--sheen", "0");
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return ref;
}

const ORIGIN = [
  "Varanasi",
  "Gurgaon",
  "Delhi",
  "Gandhinagar",
  "Mumbai",
  "Pune",
  "Dubai",
];

function PokeballMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <clipPath id="pb-clip">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
      </defs>
      <g clipPath="url(#pb-clip)">
        <rect x="0" y="0" width="100" height="50" fill="#e63946" />
        <rect x="0" y="50" width="100" height="50" fill="#f2ead3" />
        <rect x="0" y="46" width="100" height="8" fill="#1a120d" />
      </g>
      <circle cx="50" cy="50" r="46" fill="none" stroke="#1a120d" strokeWidth="4" />
      <circle cx="50" cy="50" r="11" fill="#f2ead3" stroke="#1a120d" strokeWidth="4" />
      <circle cx="50" cy="50" r="4" fill="#1a120d" />
    </svg>
  );
}

function CardRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-y-1 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-x-4">
      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cardink/55 sm:pt-0.5">
        {label}
      </dt>
      <dd className="text-[0.92rem] leading-relaxed text-cardink/90">{children}</dd>
    </div>
  );
}

export default function TrainerCard() {
  const tiltRef = useHoloTilt();
  return (
    <div className="deal-in [perspective:1100px]">
      <article
        ref={tiltRef}
        aria-label="Trainer card"
        className="holo-tilt relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-cardink/20 bg-card text-cardink shadow-[0_2px_0_rgba(26,18,13,0.25),0_24px_50px_-20px_rgba(0,0,0,0.65)]"
      >
      {/* Red header band, like the top half of a pokéball */}
      <header className="relative flex items-center justify-between bg-red-pokeball px-6 py-3 sm:px-8">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-cardink">
          Trainer Card
        </p>
        <p className="pr-14 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cardink/80 sm:pr-16">
          No. 001
        </p>
      </header>
      {/* Band seam — the pokéball's equator line */}
      <div aria-hidden="true" className="h-[3px] bg-cardink" />

      {/* Pokéball chip straddling the seam */}
      <PokeballMark className="absolute right-5 top-6 h-14 w-14 drop-shadow-[0_3px_8px_rgba(26,18,13,0.35)] sm:right-7 sm:h-16 sm:w-16" />

      <div className="px-6 pb-5 pt-5 sm:px-8 sm:pb-6">
        <h1 className="font-display text-[clamp(2rem,4vw+0.75rem,3.25rem)] font-extrabold leading-[1.02] tracking-tight">
          Mayank Pathela
        </h1>
        <p className="mt-1 text-base text-cardink/70">
          Senior Software Engineer · Dubai, UAE
        </p>

        <dl className="mt-5 divide-y divide-dotted divide-cardink/25 border-y border-dotted border-cardink/25">
          <CardRow label="Class">
            Senior Software Engineer at Derq · MSCS candidate, Georgia Tech
          </CardRow>
          <CardRow label="Origin">
            <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
              {ORIGIN.map((o, i) => (
                <span key={o} className="inline-flex items-center gap-2">
                  <span>{o}</span>
                  {i < ORIGIN.length - 1 && (
                    <span aria-hidden="true" className="text-red-pokeball">→</span>
                  )}
                </span>
              ))}
            </span>
          </CardRow>
          <CardRow label="Languages">
            English · Hindi · Punjabi{" "}
            <span className="text-cardink/55">(understand)</span> · Japanese{" "}
            <span className="text-cardink/55">(elementary)</span>
          </CardRow>
        </dl>

        <footer className="mt-4 flex items-center justify-between">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-cardink/50">
            Est. 2019 · v2 2026
          </p>
          <p
            aria-hidden="true"
            className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-cardink/40"
          >
            starkblaze01
          </p>
        </footer>
      </div>

      {/* Foil layer — catches the light as the card tilts */}
      <div aria-hidden="true" className="holo-sheen" />
      </article>
    </div>
  );
}
