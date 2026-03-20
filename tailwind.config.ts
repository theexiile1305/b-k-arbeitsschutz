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
        "bk-dark": "#00205a",
        "bk-mid": "#004f9e",
        "bk-light": "#009ee3",
        "bk-gray": "#7b7f83",
        "bk-text": "#414042",
      },
      fontFamily: {
        "bk-heading": ["Inter", "system-ui", "sans-serif"],
        "bk-body": ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
