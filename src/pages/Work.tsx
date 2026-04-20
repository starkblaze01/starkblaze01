type Role = {
  company: string;
  role: string;
  span: string;
  place: string;
  body: string[];
  link?: { href: string; label: string };
};

const ROLES: Role[] = [
  {
    company: "Derq",
    role: "Full Stack Developer",
    span: "Feb 2023 — Present",
    place: "Dubai, UAE",
    body: [
      "Designed and shipped the offline/online configuration-sync architecture from scratch. Edge units run on low-bandwidth links in the field; the same configuration is mirrored to an online platform, and either side can edit. The system reconciles them both ways — not one file, but a large map of runtime-generated configs — and includes a healer that auto-repairs divergent or malformed state during sync rather than rejecting it.",
      "Architecting and deploying AWS-based microservices for device and thing-management: IoT Core, MQTT, message queues, and custom ETL pipelines that carry data from sensors in the field all the way to analytics dashboards.",
      "The online/offline config tooling plus a new CI/CD pipeline together cut end-to-end configuration time by roughly 80%.",
      "Built client-facing dashboards that automate insight generation and help customers put initial ML models into production.",
      "Write the technical documentation and architecture notes the next engineer will actually need.",
    ],
  },
  {
    company: "Tvarit GmbH",
    role: "Full Stack Developer (prev. Senior Frontend Developer)",
    span: "Feb 2021 — Feb 2023",
    place: "Mumbai, India",
    body: [
      "Led end-to-end delivery of custom Industry-4.0 solutions: Grafana plugins, monitoring dashboards, and ETL pipelines pulling live data from manufacturing plants over SQL, MQTT, PLC, and OPC.",
      "Set up the development framework, roadmap, and onboarding guidelines for the technical team; ran workshops for new developers joining the stack.",
      "Partnered with the data science team to annotate live data streams and build the zones they actually needed to train against.",
      "Led open-source engagements and proofread the team's technical blog posts.",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    span: "Aug 2020 — Feb 2021",
    place: "Remote",
    body: [
      "MERN-stack projects for small clients: custom front-ends, cloud and on-prem deployments, a little mentorship of junior developers along the way.",
    ],
  },
  {
    company: "IIT Bombay",
    role: "Research Intern, under Prof. Ganesh Ramakrishnan",
    span: "Dec 2019 — Jun 2020",
    place: "Mumbai, India",
    body: [
      "Developed an ANPR model using Attention-OCR in TensorFlow; wrote bash scripts to automate the fine-tuning loop.",
      "Built a React dashboard to monitor live streams and Attention-OCR results, plus a Node server persisting results into MongoDB. Dockerised the deployments.",
    ],
  },
  {
    company: "Shipsy",
    role: "Software Engineer Intern",
    span: "Jun — Jul 2019",
    place: "Gurgaon, India",
    body: [
      "Built new components and HOCs, added redux actions and reducers for a supply-chain monitoring dashboard, and helped port an internal portal from Angular to React.",
    ],
  },
];

const TEACHING = [
  { where: "Google Summer of Code · Public Lab", years: "2019, 2020" },
  { where: "Google Code-In · SCoRe Lab, Public Lab", years: "2018, 2019" },
  { where: "Outreachy · Public Lab", years: "2019–2020" },
  { where: "Microsoft Student Ambassador / Partner", years: "2020" },
];

export default function Work() {
  return (
    <div className="mx-auto max-w-3xl space-y-14">
      <header>
        <h1 className="font-display text-display-lg font-semibold text-cream">
          Work history
        </h1>
        <p className="mt-3 max-w-prose text-off/75">
          The short version: sensors, dashboards, and the pipelines between them.
          The long version is below.
        </p>
      </header>

      <section className="space-y-10">
        {ROLES.map((r) => (
          <article key={`${r.company}-${r.span}`} className="space-y-3">
            <header>
              <h2 className="font-display text-xl text-cream">
                {r.role} · <span className="text-red-pokeball">{r.company}</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest text-off/50">
                {r.span} · {r.place}
              </p>
            </header>
            <div className="prose-ink space-y-3 border-l border-white/5 pl-5">
              {r.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section aria-labelledby="teaching-heading" className="space-y-4">
        <h2 id="teaching-heading" className="font-display text-display-md text-cream">
          Teaching &amp; open source
        </h2>
        <p className="prose-ink">
          Between 2018 and 2020 I mentored a small stream of students through
          Google&rsquo;s Summer of Code and Code-In programs, and through
          Outreachy. Most of it was with{" "}
          <a className="link-underline" href="https://publiclab.org/" target="_blank" rel="noreferrer">
            Public Lab
          </a>
          . It was the best apprenticeship I didn&rsquo;t realise I was getting.
        </p>
        <ul className="space-y-1.5 font-mono text-sm text-off/80">
          {TEACHING.map((t) => (
            <li key={t.where} className="flex flex-wrap gap-x-3">
              <span className="text-off/60">{t.years}</span>
              <span>{t.where}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="study-heading" className="space-y-3">
        <h2 id="study-heading" className="font-display text-display-md text-cream">
          Study
        </h2>
        <ul className="space-y-2 text-sm text-off/85">
          <li>
            <span className="font-mono text-off/60">2024 — 2026 ·</span> MSCS
            (OMSCS), Georgia Institute of Technology — in progress.
          </li>
          <li>
            <span className="font-mono text-off/60">2016 — 2020 ·</span> B.Tech,
            Computer Science, IIIT Vadodara.
          </li>
          <li>
            <span className="font-mono text-off/60">2019 — 2020 ·</span>{" "}
            Nanodegree in Deep Learning, Udacity.
          </li>
        </ul>
      </section>

      <section aria-labelledby="pub-heading" className="space-y-2">
        <h2 id="pub-heading" className="font-display text-display-md text-cream">
          Publication
        </h2>
        <p className="prose-ink">
          <span className="font-mono text-off/60">ICDCIT 2020</span> —{" "}
          <em>Distributed and Lazy Auditing of Outsourced Data.</em>
        </p>
      </section>
    </div>
  );
}
