import { Link } from "react-router-dom";
import TrainerCard from "../components/TrainerCard";
import Badges from "../components/Badges";

const MENU: Array<{ to: string; num: string; label: string; hint: string }> = [
  { to: "/work", num: "01", label: "Work history", hint: "Derq, Tvarit, research" },
  { to: "/projects", num: "02", label: "Projects", hint: "Live from GitHub" },
  { to: "/writing", num: "03", label: "Writing", hint: "Essays on dev.to" },
  { to: "/timeline", num: "04", label: "Timeline", hint: "This site since 2018" },
  { to: "/about", num: "05", label: "About", hint: "Beyond the résumé" },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <TrainerCard />

      <section className="prose-ink rise-in" style={{ animationDelay: "0.15s" }}>
        <p className="text-lg text-off/90">
          I&rsquo;m Mayank — a full-stack engineer in Dubai. I build software that reads
          data from physical things — sensors, cameras, cars — and turns it into
          dashboards people actually use. I&rsquo;m currently at{" "}
          <span className="font-medium text-cream">Derq</span>, and studying
          part-time toward an MSCS at Georgia Tech.
        </p>
        <p>
          Before Derq I built Industry-4.0 dashboards at Tvarit, freelanced on MERN
          stacks, and spent a year as a research intern at IIT Bombay working on
          Attention-OCR. On the side I&rsquo;ve mentored in Google Summer of Code,
          Google Code-In, and Outreachy — teaching is how I learn.
        </p>
        <p>
          When the laptop closes I read Physics for the feel of it and follow the
          markets the same way — portfolios across the UAE, India and the US,
          plus some crypto, REITs and bonds. Long-running hobbies that keep me
          honest about systems I don&rsquo;t control.
        </p>
      </section>

      <div className="rise-in" style={{ animationDelay: "0.25s" }}>
        <Badges />
      </div>

      <nav
        aria-label="Sections"
        className="rise-in space-y-3"
        style={{ animationDelay: "0.35s" }}
      >
        <h2 className="font-display text-display-md text-cream">Choose your path</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {MENU.map((m, i) => (
            <li key={m.to} className={i === MENU.length - 1 ? "sm:col-span-2" : ""}>
              <Link
                to={m.to}
                className="card-surface group flex items-baseline justify-between gap-4 p-5 transition hover:-translate-y-0.5 hover:border-red-pokeball/40"
              >
                <span className="flex min-w-0 items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="font-mono text-[0.65rem] tracking-tight text-off/35 transition group-hover:text-red-pokeball/70"
                  >
                    {m.num}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl text-cream">
                      {m.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-off/60">{m.hint}</span>
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-red-pokeball transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
