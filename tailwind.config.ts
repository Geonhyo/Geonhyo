import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        shake: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        shake: "shake 1s ease-in-out infinite",
      },
      padding: {
        0.5: "2px",
      },
      borderWidth: {
        base: "0.5px",
      },
      colors: {
        red: "#E30404",
        blue: "#1D74F8",
        green: "#36CE45",
        lightGray: "#D9D9D9",
        darkGray: "#9F9F9F",
        orange: "#FF971E",
        background: "#F5F5F5",
        yellow: "#FFE81E",
        white: "#F9F9F9",
        black: "#2A3545",
        light: "#FFFFFF",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
