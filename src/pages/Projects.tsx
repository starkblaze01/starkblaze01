import { useEffect, useMemo } from "react";
import { Spin } from "antd";
import { loadRepos } from "../store/contentSlice";
import { useAppDispatch, useAppSelector } from "../store";
import type { Repo } from "../api/github";

type PokeType =
  | "electric"
  | "psychic"
  | "steel"
  | "fighting"
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "ghost"
  | "dragon"
  | "dark";

const PIN = "Algorithms-Cheatsheet-Resources";

const TYPE_META: Record<PokeType, { label: string; className: string }> = {
  electric: { label: "Electric", className: "bg-type-electric/15 text-type-electric border-type-electric/40" },
  psychic: { label: "Psychic", className: "bg-type-psychic/15 text-type-psychic border-type-psychic/40" },
  steel: { label: "Steel", className: "bg-type-steel/15 text-type-steel border-type-steel/40" },
  fighting: { label: "Fighting", className: "bg-type-fighting/15 text-type-fighting border-type-fighting/40" },
  normal: { label: "Normal", className: "bg-type-normal/15 text-type-normal border-type-normal/40" },
  fire: { label: "Fire", className: "bg-type-fire/15 text-type-fire border-type-fire/40" },
  water: { label: "Water", className: "bg-type-water/15 text-type-water border-type-water/40" },
  grass: { label: "Grass", className: "bg-type-grass/15 text-type-grass border-type-grass/40" },
  ghost: { label: "Ghost", className: "bg-type-ghost/15 text-type-ghost border-type-ghost/40" },
  dragon: { label: "Dragon", className: "bg-type-dragon/15 text-type-dragon border-type-dragon/40" },
  dark: { label: "Dark", className: "bg-type-dark/15 text-type-dark border-type-dark/40" },
};

function inferType(r: Repo): PokeType {
  const name = r.name.toLowerCase();
  const desc = (r.description ?? "").toLowerCase();
  const blob = `${name} ${desc}`;
  if (/ai|ml|neural|ocr|sentiment|vision|tensor|pytorch|nlp|analyz/.test(blob))
    return "psychic";
  if (/algorithm|cheatsheet|data.?structure|leetcode/.test(blob)) return "fighting";
  if (/dock|deploy|infra|aws|pipeline|cloud|devops|kube/.test(blob)) return "steel";
  if (/iot|mqtt|real.?time|socket|stream|event/.test(blob)) return "electric";
  if (/game|pokemon|fun|bot|discord|tweet/.test(blob)) return "ghost";
  if (/api|server|express|node|backend/.test(blob)) return "water";
  if (/react|next|vue|frontend|ui|dashboard/.test(blob)) return "fire";
  if (/chrome|extension|plugin|hook/.test(blob)) return "dragon";
  return "normal";
}

function RepoCard({ repo, flagship = false }: { repo: Repo; flagship?: boolean }) {
  const type = inferType(repo);
  const meta = TYPE_META[type];
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={`card-surface group block p-5 transition hover:-translate-y-0.5 hover:border-red-pokeball/40 ${
        flagship ? "sm:col-span-2 lg:col-span-3 border-red-pokeball/30 shadow-hot" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg leading-tight text-cream">{repo.name}</h3>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest ${meta.className}`}
        >
          {meta.label}
        </span>
      </div>

      {repo.description && (
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-off/75">
          {repo.description}
        </p>
      )}

      {repo.homepage && (
        <p className="mt-2 truncate font-mono text-xs text-off/50">{repo.homepage}</p>
      )}

      <dl className="mt-4 flex gap-5 font-mono text-xs text-off/60">
        <div>
          <dt className="sr-only">Stars</dt>
          <dd>★ {repo.stargazers_count}</dd>
        </div>
        <div>
          <dt className="sr-only">Forks</dt>
          <dd>⑂ {repo.forks}</dd>
        </div>
      </dl>
    </a>
  );
}

export default function Projects() {
  const dispatch = useAppDispatch();
  const { repos, reposStatus, reposError } = useAppSelector((s) => s.content);

  useEffect(() => {
    if (reposStatus === "idle") dispatch(loadRepos());
  }, [dispatch, reposStatus]);

  const { pinned, rest } = useMemo(() => {
    const visible = repos.filter((r) => !r.fork && !r.private);
    const pin = visible.find((r) => r.name === PIN);
    const others = visible
      .filter((r) => r.name !== PIN)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    return { pinned: pin, rest: others };
  }, [repos]);

  return (
    <div className="space-y-10">
      <header className="max-w-prose">
        <h1 className="font-display text-display-lg font-semibold text-cream">
          Projects
        </h1>
        <p className="mt-3 text-off/75">
          Open-source work, pulled live from GitHub. Each one gets a type — not
          because it&rsquo;s serious, but because it&rsquo;s fun.
        </p>
      </header>

      {reposStatus === "loading" && (
        <div className="flex justify-center py-10">
          <Spin />
        </div>
      )}
      {reposError && (
        <p className="text-sm text-red-pokeball">Failed to load: {reposError}</p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pinned && <RepoCard repo={pinned} flagship />}
        {rest.map((r) => (
          <RepoCard key={r.id} repo={r} />
        ))}
      </div>
    </div>
  );
}
