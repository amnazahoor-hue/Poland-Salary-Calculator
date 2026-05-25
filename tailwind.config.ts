import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary-rgb) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary-rgb) / <alpha-value>)",
        border: "rgb(var(--color-border-rgb) / <alpha-value>)",
        success: "rgb(var(--color-success-rgb) / <alpha-value>)",
        error: "rgb(var(--color-error-rgb) / <alpha-value>)",
        bg: "rgb(var(--color-bg-rgb) / <alpha-value>)",
        "card-bg": "rgb(var(--color-card-bg-rgb) / <alpha-value>)",
        btn: "rgb(var(--color-btn-rgb) / <alpha-value>)",
        "btn-hover": "rgb(var(--color-btn-hover-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        gold: "rgb(var(--color-gold-rgb) / <alpha-value>)",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 45px rgba(16, 24, 40, 0.08)",
        elevated: "0 28px 80px rgba(16, 24, 40, 0.14)",
        glow: "0 22px 60px rgba(79, 70, 229, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
