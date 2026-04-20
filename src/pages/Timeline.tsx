type Entry = {
  year: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
};

const ENTRIES: Entry[] = [
  {
    year: "2018",
    title: "v0 — the very first one",
    body: "A small single-page portfolio built in college. One route, a short intro, a few links out. It was the warm-up for everything that came after.",
  },
  {
    year: "2019",
    title: "v1 — the 2019 build",
    body: "Shipped the first serious portfolio. Create React App, React 16, class components, Redux + redux-thunk, react-jss, Ant Design 4, react-particles-js. Deployed on Netlify.",
    link: {
      label: "Browse the v1 source (git tag)",
      href: "https://github.com/starkblaze01/starkblaze01/tree/legacy/v1-2019",
    },
  },
  {
    year: "2020",
    title: "Dark-mode toggle + particle backdrop",
    body: "Added a light/dark toggle and swapped between two particle configurations — the first piece of identity on the site.",
  },
  {
    year: "2021",
    title: "Projects page wired to GitHub",
    body: "Live-fetched repos from the GitHub REST API, sorted by stars, filtered out forks and private repos. First real async + Redux work in the app.",
  },
  {
    year: "2025",
    title: "Blog feed from dev.to",
    body: "Added a Blog page backed by an AWS Lambda proxying dev.to, caching responses server-side. Last feature shipped on the v1 stack.",
  },
  {
    year: "2026",
    title: "v2 — the Trainer Card",
    body: "Rewrote from scratch: Vite + React 18 + TypeScript 5. Class components → hooks. Redux → Redux Toolkit. react-jss → Tailwind. Ant Design 4 → 5. Particles out. Editorial layout in. Badges for mentoring and academic credentials. A Konami-code easter egg. SEO baked in.",
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <header className="max-w-prose">
        <h1 className="font-display text-display-lg font-semibold text-cream">
          Timeline
        </h1>
        <p className="mt-3 text-off/75">
          What I&rsquo;ve shipped on this site, in order. Old versions aren&rsquo;t
          deleted — they&rsquo;re tagged.
        </p>
      </header>

      <ol className="relative space-y-10 border-l border-white/10 pl-6">
        {ENTRIES.map((e) => (
          <li key={e.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-red-pokeball ring-4 ring-ink"
            />
            <p className="font-mono text-xs uppercase tracking-widest text-off/50">
              {e.year}
            </p>
            <h2 className="mt-1 font-display text-xl text-cream">{e.title}</h2>
            <p className="prose-ink mt-2">{e.body}</p>
            {e.link && (
              <a
                href={e.link.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-2 inline-block text-sm"
              >
                {e.link.label} →
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
