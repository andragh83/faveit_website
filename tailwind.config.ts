import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        primaryLight: "var(--primary-light)",
        primaryText: "var(--primary-text)",
        textLighter: "var(--text-lighter)",
        baseText: "var(--base-text)",
        primaryLighter: "var(--primary-lighter)",
      },
      keyframes: {
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "scroll-bounce": "scroll-bounce 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
