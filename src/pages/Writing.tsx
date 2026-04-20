import { useEffect, useMemo } from "react";
import { Spin } from "antd";
import { loadBlogs } from "../store/contentSlice";
import { useAppDispatch, useAppSelector } from "../store";

export default function Writing() {
  const dispatch = useAppDispatch();
  const { blogs, blogsStatus, blogsError } = useAppSelector((s) => s.content);

  useEffect(() => {
    if (blogsStatus === "idle") dispatch(loadBlogs());
  }, [dispatch, blogsStatus]);

  const posts = useMemo(
    () =>
      [...blogs].sort((a, b) => {
        const ad = +new Date(a.published_at ?? a.edited_at);
        const bd = +new Date(b.published_at ?? b.edited_at);
        return bd - ad;
      }),
    [blogs],
  );

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header className="max-w-prose">
        <h1 className="font-display text-display-lg font-semibold text-cream">
          Writing
        </h1>
        <p className="mt-3 text-off/75">
          Occasional essays on JavaScript, front-end, and the weird bits of web
          development. Syndicated from{" "}
          <a
            className="link-underline"
            href="https://dev.to/starkblaze01"
            target="_blank"
            rel="noreferrer"
          >
            dev.to/starkblaze01
          </a>
          .
        </p>
      </header>

      {blogsStatus === "loading" && (
        <div className="flex justify-center py-10">
          <Spin />
        </div>
      )}
      {blogsError && (
        <p className="text-sm text-red-pokeball">Couldn&rsquo;t load posts: {blogsError}</p>
      )}
      {blogsStatus === "success" && posts.length === 0 && (
        <p className="text-sm text-off/70">No posts yet.</p>
      )}

      <ul className="divide-y divide-white/5 border-t border-b border-white/5">
        {posts.map((p) => {
          const when = p.published_at ?? p.edited_at;
          return (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block py-6 transition hover:bg-white/[0.02]"
              >
                <article className="flex flex-col gap-3 px-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <time
                    dateTime={when}
                    className="w-36 shrink-0 font-mono text-xs uppercase tracking-widest text-off/50"
                  >
                    {new Date(when).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-xl leading-tight text-cream group-hover:text-red-pokeball">
                      {p.title}
                    </h2>
                    {p.description && (
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-off/70">
                        {p.description}
                      </p>
                    )}
                    <footer className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.7rem] text-off/50">
                      <span>{p.reading_time_minutes} min read</span>
                      <span>♥ {p.public_reactions_count}</span>
                      {p.tag_list && p.tag_list.length > 0 && (
                        <span className="truncate">
                          {p.tag_list.slice(0, 4).map((t) => `#${t}`).join("  ")}
                        </span>
                      )}
                    </footer>
                  </div>
                </article>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
