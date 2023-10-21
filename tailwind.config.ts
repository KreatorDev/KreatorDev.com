import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        light: "#EEEEEE",
        dark: "#171717",
        lighter: "#F2F2F2",
        darker: "#0D0D0D",
      },
      height: {
        4.5: "18px",
        18: "72px",
        22: "86px",
      },
      width: {
        4.5: "18px",
        18: "72px",
        22: "86px",
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
        md: "15px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
