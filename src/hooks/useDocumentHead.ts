import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Meta = { title: string; description: string };

const SITE = "Mayank Pathela";
const SUFFIX = " — Mayank Pathela";

const ROUTES: Record<string, Meta> = {
  "/": {
    title: `${SITE} — Full Stack Developer`,
    description:
      "Mayank Pathela — Full Stack Developer at Derq, Dubai. MSCS candidate at Georgia Tech. Past GSoC + Outreachy mentor. Writes about JavaScript, systems, and AI.",
  },
  "/about": {
    title: `About${SUFFIX}`,
    description:
      "Who I am beyond the résumé: what I care about, what I read, and how I try to build software.",
  },
  "/work": {
    title: `Work history${SUFFIX}`,
    description:
      "Full Stack Developer at Derq (Dubai). Past: Tvarit GmbH, freelance MERN, IIT Bombay research intern. GSoC + Outreachy + GCI mentor.",
  },
  "/projects": {
    title: `Projects${SUFFIX}`,
    description:
      "Open-source projects and experiments — pulled live from GitHub. ~1000 stars across 69 repos.",
  },
  "/writing": {
    title: `Writing${SUFFIX}`,
    description:
      "Essays and posts on JavaScript, systems, and developer tooling — syndicated from dev.to.",
  },
  "/timeline": {
    title: `Timeline${SUFFIX}`,
    description:
      "What I've shipped on this site since 2019, kept as a log rather than deleted.",
  },
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useDocumentHead(override?: Partial<Meta>) {
  const { pathname } = useLocation();
  useEffect(() => {
    const base = ROUTES[pathname] ?? ROUTES["/"];
    const meta = { ...base, ...override };
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
  }, [pathname, override?.title, override?.description]);
}
