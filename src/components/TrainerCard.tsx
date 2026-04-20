const ORIGIN = [
  "Varanasi",
  "Gurgaon",
  "Delhi",
  "Gandhinagar",
  "Mumbai",
  "Pune",
  "Dubai",
];

function PokeballMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="absolute -right-5 -top-5 h-16 w-16 opacity-95 drop-shadow-[0_6px_18px_rgba(230,57,70,0.35)] sm:h-20 sm:w-20"
    >
      <defs>
        <clipPath id="pb-clip">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
      </defs>
      <g clipPath="url(#pb-clip)">
        <rect x="0" y="0" width="100" height="50" fill="#e63946" />
        <rect x="0" y="50" width="100" height="50" fill="#f2ead3" />
        <rect x="0" y="46" width="100" height="8" fill="#0a0a0f" />
      </g>
      <circle cx="50" cy="50" r="46" fill="none" stroke="#0a0a0f" strokeWidth="3" />
      <circle cx="50" cy="50" r="11" fill="#f2ead3" stroke="#0a0a0f" strokeWidth="3" />
      <circle cx="50" cy="50" r="4" fill="#14141c" />
    </svg>
  );
}

export default function TrainerCard() {
  return (
    <article
      aria-label="Trainer card"
      className="relative overflow-hidden rounded-2xl border border-red-pokeball/30 bg-gradient-to-br from-ink2 via-ink to-ink2 p-6 shadow-card sm:p-8"
    >
      <PokeballMark />

      <div className="pr-16 sm:pr-20">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-red-pokeball/80">
          Trainer Card
        </p>
        <h1 className="mt-2 font-display text-display-lg font-semibold text-cream">
          Mayank Pathela
        </h1>
        <p className="mt-1 text-lg text-off/80">
          Full Stack Developer · <span className="text-off/60">Dubai, UAE</span>
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-6">
        <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-off/50">
          Class
        </dt>
        <dd className="text-off/90">
          Full Stack Developer at Derq · MSCS candidate, Georgia Tech
        </dd>

        <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-off/50">
          Origin
        </dt>
        <dd className="flex flex-wrap items-center gap-x-2 gap-y-1 text-off/85">
          {ORIGIN.map((o, i) => (
            <span key={o} className="inline-flex items-center gap-2">
              <span>{o}</span>
              {i < ORIGIN.length - 1 && (
                <span aria-hidden="true" className="text-red-pokeball/60">→</span>
              )}
            </span>
          ))}
        </dd>

        <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-off/50">
          Languages
        </dt>
        <dd className="text-off/85">
          English · Hindi · Punjabi{" "}
          <span className="text-off/55">(understand)</span> · Japanese{" "}
          <span className="text-off/55">(elementary)</span>
        </dd>
      </dl>

      <p className="mt-6 border-t border-white/5 pt-3 font-mono text-[0.7rem] uppercase tracking-widest text-off/40">
        Card est. 2019 · v2 2026
      </p>
    </article>
  );
}
