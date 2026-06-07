import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0A0A0B",
        void: "#0A0A0B",
        cream: "#F5F5F4",
        ember: "#FF6A3D",
        magenta: "#FF2D78",
        muted: "#A1A1AA",
        surface: "#111113",
        "surface-elevated": "#18181B",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-ember": "linear-gradient(135deg, #FF6A3D 0%, #FF2D78 100%)",
        "gradient-horizon":
          "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,106,61,0.12) 0%, rgba(255,45,120,0.06) 40%, transparent 70%)",
        "gradient-glow":
          "radial-gradient(circle at 50% 50%, rgba(255,106,61,0.15) 0%, transparent 60%)",
      },
      boxShadow: {
        ember: "0 0 40px rgba(255, 106, 61, 0.25)",
        "ember-lg": "0 0 60px rgba(255, 106, 61, 0.35), 0 0 100px rgba(255, 45, 120, 0.15)",
        glow: "0 0 80px rgba(255, 106, 61, 0.12)",
      },
      animation: {
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
