
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ab8aff",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#211d3a",
          foreground: "#cfc8ff",
        },
        accent: {
          DEFAULT: "#b7aaff",
          foreground: "#1A1F2C",
        },
        muted: {
          DEFAULT: "#251e3e",
          foreground: "#b7aaff",
        },
        card: {
          DEFAULT: "#23213d",
          foreground: "#c3c0e3",
        },
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.5rem",
      },
      boxShadow: {
        modern: "0 4px 24px 2px rgba(155,135,245,0.07)",
        glass: "0 6px 50px 0 rgba(155,135,245,0.12), 0 2px 8px 0 rgba(30,24,68,0.10)",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.39,0.575,0.565,1) both",
        "fade-in": "fade-in 0.8s ease both",
        "scale-in": "scale-in 0.5s cubic-bezier(.39,.575,.565,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


