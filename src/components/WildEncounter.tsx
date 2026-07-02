import { useEffect, useMemo, useState } from "react";
import { loadRepos } from "../store/contentSlice";
import { useAppDispatch, useAppSelector } from "../store";

const SESSION_KEY = "sb-wild-encounter";
const APPEAR_AFTER_MS = 25_000;
const AUTO_DISMISS_MS = 15_000;

/**
 * A wild project appears! Once per session, a little while after the
 * visitor settles in, a random repo rustles up from the bottom corner.
 * Rarity is the point — it should feel like the tall grass moved.
 */
export default function WildEncounter() {
  const dispatch = useAppDispatch();
  const { repos, reposStatus } = useAppSelector((s) => s.content);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const id = window.setTimeout(() => setArmed(true), APPEAR_AFTER_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (armed && reposStatus === "idle") dispatch(loadRepos());
  }, [armed, reposStatus, dispatch]);

  const wild = useMemo(() => {
    const candidates = repos.filter(
      (r) => !r.fork && !r.private && r.stargazers_count > 0,
    );
    if (!candidates.length) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }, [repos]);

  useEffect(() => {
    if (!armed || !wild || visible) return;
    setVisible(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    const id = window.setTimeout(() => setVisible(false), AUTO_DISMISS_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armed, wild]);

  if (!visible || !wild) return null;

  return (
    <aside
      role="status"
      className="rustle-up fixed bottom-5 left-5 z-40 w-[calc(100%-2.5rem)] max-w-sm rounded-xl border border-red-pokeball/40 bg-ink2 p-4 shadow-hot"
    >
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-red-pokeball">
        A wild project appeared!
      </p>
      <p className="mt-1.5 font-display text-lg leading-tight text-cream">
        {wild.name}
        <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-wide text-off/50">
          Lv. {wild.stargazers_count}
        </span>
      </p>
      {wild.description && (
        <p className="mt-1 line-clamp-2 text-sm text-off/70">{wild.description}</p>
      )}
      <div className="mt-3 flex items-center gap-4 text-sm">
        <a
          href={wild.html_url}
          target="_blank"
          rel="noreferrer"
          className="link-underline font-medium text-cream"
          onClick={() => setVisible(false)}
        >
          Throw a Pokéball →
        </a>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-off/55 transition hover:text-red-pokeball"
        >
          Run away
        </button>
      </div>
    </aside>
  );
}
