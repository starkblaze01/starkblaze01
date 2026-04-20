import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-md space-y-4 pt-10 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-off/50">
        Error 404
      </p>
      <h1 className="font-display text-display-lg font-semibold text-cream">
        Wild page fled!
      </h1>
      <p className="text-off/75">
        That URL isn&rsquo;t in the Pokédex. Let&rsquo;s head back to town.
      </p>
      <Link to="/" className="link-underline inline-block pt-2">
        Return to Home →
      </Link>
    </section>
  );
}
