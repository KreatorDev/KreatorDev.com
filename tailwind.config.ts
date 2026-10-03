import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        light: "#ECEAE5",
        dark: "#181716",
        lighter: "#F5F4F0",
        darker: "#0E0D0C",
        surface: "#FDFDFB",
        ink: "#1A1917",
        accent: "#E8512A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      height: {
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
        8.5: "34px",
        18: "72px",
        22: "86px",
        23: "88px",
        26: "104px",
        27: "108px",
      },
      width: {
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
        8.5: "34px",
        18: "72px",
        22: "86px",
        23: "88px",
        26: "104px",
        27: "108px",
      },
      screens: {
        "2xs": "320px",
        "2.5xs": "380px",
        "3xs": "460px",
        xs: "480px",
        "3sm": "700px",
        "2md": "840px",
        "3md": "960px",
        "2lg": "1140px",
        "8xl": "1340px",
      },
      fontSize: {
        "2xs": "13px",
        md: "15px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
