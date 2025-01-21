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
      },
    },
  },
  plugins: [],
} satisfies Config;
