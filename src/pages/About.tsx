import { useTyped } from "../hooks/useTyped";

const INTERESTS = [
  "Physics",
  "AI",
  "Anime",
  "Sci-fi & thrillers",
  "Markets",
  "Travel",
  "Japan",
  "Marvel",
];

const TRAVEL = {
  countries: ["India", "UAE (all 7 emirates)", "Japan ×2", "Vietnam"],
  indiaNote:
    "Almost every state in India — Uttarakhand, Himachal, Kashmir and beyond — minus the northeast and Rajasthan, still on the list.",
};

export default function About() {
  const typed = useTyped("Hi There!", 95, 250);

  return (
    <div className="mx-auto max-w-prose space-y-12">
      <header>
        <h1
          className="font-display text-display-lg font-semibold text-cream"
          aria-label="Hi There!"
        >
          <span aria-hidden="true">{typed}</span>
          <span aria-hidden="true" className="cursor text-red-pokeball" />
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-off/50">
          About me
        </p>
      </header>

      <section className="prose-ink">
        <p>
          I&rsquo;m a full-stack developer who keeps exploring new stuff and reads
          Physics in leisure. I love figuring out how systems actually work — the
          messy, interesting parts where hardware meets software meets people.
          Most of what I ship is a dashboard, an API, or an integration holding
          together a few of those layers.
        </p>
        <p>
          I studied Computer Science at IIIT Vadodara, finished a Deep Learning
          Nanodegree at Udacity, and I&rsquo;m now a part-time MSCS candidate at
          Georgia Tech. In my twenties I somehow ended up mentoring in Google
          Summer of Code (twice), Google Code-In (twice), and Outreachy. It turns
          out the quickest way to see the holes in your own understanding is to
          try and teach.
        </p>
      </section>

      <section aria-labelledby="believe-heading" className="space-y-3">
        <h2 id="believe-heading" className="font-display text-display-md text-cream">
          What I believe
        </h2>
        <div className="prose-ink">
          <p>
            Good software is quiet. It respects the person using it, stays out of
            their way, and doesn&rsquo;t cost the world more than it gives back.
            I try to build that way — honestly, with room for the next engineer to
            understand what I did and why.
          </p>
        </div>
      </section>

      <section aria-labelledby="outside-heading" className="space-y-3">
        <h2 id="outside-heading" className="font-display text-display-md text-cream">
          Outside work
        </h2>
        <ul className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <li
              key={i}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-xs tracking-wide text-off/80"
            >
              {i}
            </li>
          ))}
        </ul>
        <div className="prose-ink space-y-3 pt-2 text-sm text-off/75">
          <p>
            I read a lot about markets outside work — portfolios across UAE,
            India and the US, plus some crypto, REITs and bonds. It&rsquo;s the
            long-running side project I never get bored of.
          </p>
          <p>
            When I&rsquo;m not at a keyboard I&rsquo;m usually on the road:{" "}
            {TRAVEL.countries.join(" · ")}. {TRAVEL.indiaNote}
          </p>
          <p>
            I watch a lot of sci-fi, thriller and suspense, and I film bits of
            the travel on{" "}
            <a
              href="https://www.youtube.com/@MayankPathela"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              YouTube
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
