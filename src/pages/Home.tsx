import { Link } from "react-router-dom";
import TrainerCard from "../components/TrainerCard";
import Badges from "../components/Badges";

const MENU: Array<{ to: string; label: string; hint: string }> = [
  { to: "/work", label: "Work history", hint: "Derq, Tvarit, research" },
  { to: "/projects", label: "Projects", hint: "Live from GitHub" },
  { to: "/writing", label: "Writing", hint: "Essays on dev.to" },
  { to: "/about", label: "About", hint: "Beyond the résumé" },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <TrainerCard />

      <section className="prose-ink">
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

      <Badges />

      <nav aria-label="Sections" className="space-y-3">
        <h2 className="font-display text-display-md text-cream">Choose your path</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {MENU.map((m) => (
            <li key={m.to}>
              <Link
                to={m.to}
                className="card-surface flex items-baseline justify-between p-5 transition hover:-translate-y-0.5 hover:border-red-pokeball/40"
              >
                <span>
                  <span className="block font-display text-xl text-cream">
                    {m.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-off/60">{m.hint}</span>
                </span>
                <span aria-hidden="true" className="font-mono text-red-pokeball">
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
