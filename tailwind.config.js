/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        ink2: "rgb(var(--c-ink2) / <alpha-value>)",
        red: {
          pokeball: "#e63946",
        },
        cream: "rgb(var(--c-cream) / <alpha-value>)",
        off: "rgb(var(--c-off) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        type: {
          electric: "#c8a227",
          psychic: "#c97a9a",
          steel: "#8a97a4",
          fighting: "#b84a3e",
          normal: "#a8a199",
          fire: "#d9693a",
          water: "#4d7ba8",
          grass: "#6b9a52",
          ghost: "#7060a0",
          dragon: "#6a5aa8",
          dark: "#4a4148",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(2.5rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(1.75rem, 2.5vw + 1rem, 2.5rem)", { lineHeight: "1.1" }],
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 10px 30px -15px rgba(0,0,0,0.7)",
        hot: "0 8px 24px -12px rgba(230,57,70,0.5)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
