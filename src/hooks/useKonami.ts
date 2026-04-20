import { useEffect, useRef } from "react";

const SEQ = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonami(onUnlock: () => void) {
  const pos = useRef(0);
  useEffect(() => {
    function handle(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === SEQ[pos.current]) {
        pos.current += 1;
        if (pos.current === SEQ.length) {
          pos.current = 0;
          onUnlock();
        }
      } else {
        pos.current = key === SEQ[0] ? 1 : 0;
      }
    }
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onUnlock]);
}
