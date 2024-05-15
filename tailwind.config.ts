import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0d0f30",
        "light-blue": "#4266b0",
        "jci-yellow": "#edbe38",
        "jci-green": "#56bda3",
      },
    },
  },
  plugins: [],
};
export default config;
