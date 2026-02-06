import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "576": "576px",
      "476": "476px",
      "376": "376px",
      "887": "887px",
      "997": "997px",
    },
    extend: {
      colors: {
        light: {
          50: "#ffffff",
          100: "#f1f3f5",
        },
        blue: {
          50: "#1569ae",
        },
        dark: {
          50: "#232323",
          100: "#333333",
          200: "#000000",
        },
        red: {
          50: "#fa5252",
          100: "#e03131",
        },
        yellow: {
          50: "#FFBE19",
        },
      },
      backgroundColor: {
        light: {
          50: "#ffffff",
          100: "#f1f3f5",
        },
        blue: {
          50: "#1569ae",
        },
        dark: {
          50: "#232323",
          100: "#333333",
          200: "#000000",
        },
        red: {
          50: "#fa5252",
          100: "#e03131",
        },
        yellow: {
          50: "#FFBE19",
        },
      },
      backgroundImage: {
        cta4bg:
          "linear-gradient(40deg,rgb(0,0,0,0.6),rgb(0,0,0,0.6)),url('/img4.jpg')",
        covidbg:
          "linear-gradient(40deg,rgb(0,0,0,0.6),rgb(0,0,0,0.6)),url('/covid-page-bg.jpg')",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
        circle: "circle",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
