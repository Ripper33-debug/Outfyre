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
        void: "#0A0A0A",
        ember: "#FF4500",
        flame: "#C41E3A",
        muted: "#888888",
        surface: "#111111",
        "surface-elevated": "#161616",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-fire": "linear-gradient(135deg, #FF4500 0%, #C41E3A 100%)",
        "gradient-horizon":
          "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,69,0,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        ember: "0 0 40px rgba(255, 69, 0, 0.25)",
        "ember-lg": "0 20px 60px rgba(255, 69, 0, 0.35)",
        glow: "0 0 80px rgba(255, 69, 0, 0.15)",
      },
      animation: {
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
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
      },
    },
  },
  plugins: [],
};

export default config;
