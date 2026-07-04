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
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) window.clearInterval(interval);
      }, speedMs);
    }, startDelayMs);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [text, speedMs, startDelayMs]);

  return out;
}
