type Badge = {
  name: string;
  year: string;
  note: string;
  color: string;
  glyph: string;
};

const BADGES: Badge[] = [
  { name: "GSoC Mentor", year: "2019 · 2020", note: "Public Lab (twice)", color: "#c8a227", glyph: "◈" },
  { name: "Outreachy Mentor", year: "2019", note: "Public Lab", color: "#c97a9a", glyph: "✦" },
  { name: "GCI Mentor", year: "2018 · 2019", note: "SCoRe Lab, Public Lab", color: "#d9693a", glyph: "◆" },
  { name: "MS Student Ambassador", year: "2020", note: "Microsoft", color: "#4d7ba8", glyph: "◊" },
  { name: "IIT Bombay Research", year: "2019–20", note: "Attention-OCR, ANPR", color: "#6b9a52", glyph: "◉" },
  { name: "ICDCIT Publication", year: "2020", note: "Auditing outsourced data", color: "#7060a0", glyph: "✧" },
  { name: "Georgia Tech MSCS", year: "2024–26", note: "In progress", color: "#b84a3e", glyph: "▲" },
  { name: "Employee of the Quarter", year: "Derq", note: "Team honor", color: "#8a97a4", glyph: "★" },
];

export default function Badges() {
  return (
    <section aria-labelledby="badges-heading" className="space-y-5">
      <header className="flex items-baseline justify-between">
        <h2 id="badges-heading" className="font-display text-display-md text-cream">
          Badges earned
        </h2>
        <p className="font-mono text-xs uppercase tracking-widest text-off/50">
          {BADGES.length}/8
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {BADGES.map((b) => (
          <li
            key={b.name}
            className="card-surface group relative p-4 transition hover:-translate-y-0.5 hover:border-white/15"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-lg"
                style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}55` }}
              >
                {b.glyph}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[0.95rem] leading-tight text-cream">
                  {b.name}
                </h3>
                <p className="mt-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-off/50">
                  {b.year}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-off/75">{b.note}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
