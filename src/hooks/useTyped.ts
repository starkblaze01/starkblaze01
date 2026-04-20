import { useEffect, useState } from "react";

export function useTyped(text: string, speedMs = 90, startDelayMs = 200) {
  const [out, setOut] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      return;
    }
    setOut("");
    let i = 0;
    const start = window.setTimeout(() => {
      const id = window.setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) window.clearInterval(id);
      }, speedMs);
    }, startDelayMs);
    return () => window.clearTimeout(start);
  }, [text, speedMs, startDelayMs]);

  return out;
}
