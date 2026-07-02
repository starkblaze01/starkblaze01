import type { ReactNode } from "react";

type Props = {
  entry?: string;
  title: string;
  children?: ReactNode;
};

/**
 * Standard page header: dex-entry kicker, display title, optional lede.
 * Entry numbers match the nav order so visitors always know where they are.
 */
export default function PageHeader({ entry, title, children }: Props) {
  return (
    <header className="max-w-prose">
      {entry && <p className="kicker">Entry {entry}</p>}
      <h1 className="mt-2 font-display text-display-lg font-extrabold text-cream">
        {title}
      </h1>
      {children && <div className="mt-3 text-off/75">{children}</div>}
    </header>
  );
}
