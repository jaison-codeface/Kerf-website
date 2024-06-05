import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kerf: {
          blue: {
            DEFAULT: "#148FBC",
            dark: "#000033",
            light: "#98cbe5",
          },
          teal: {
            DEFAULT: "#33CCCC",
            light: "#99FFFF",
          },
          off: {
            gray: "#e9eef2",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
