import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"'],
        Thai: ["Noto Sans Thai"],
        Pinyon_Script: ["Pinyon Script"],
        Cinzel_Decorative: ["Cinzel Decorative"],
        Figerona: ["Figerona"],
        Montserrat: ["Montserrat"],
        Bodwars: ["Bodwars"],
        Inter: ["Inter"],
      },
      screens: {
        sm: "300px",
        lg: "1280px",
        xl: "1440px",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.95)",
          "0 0px 65px rgba(255, 255,255, 0.4)",
        ],
      },
      textShadow: {
        default: "0 2px 0 #000",
        md: "0 2px 2px #000",
        glow: "0 0 10px rgba(255, 83, 197, 0.1), 0 0 25px rgba(255, 255,255, 0.4)",
      },
      gridTemplateRows: {
        "10": "repeat(10, minmax(0, 1fr))",
        "30": "repeat(30, minmax(0, 1fr))",
        "70": "repeat(70, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("tailwindcss-textshadow"),
  ],
};
export default config;
