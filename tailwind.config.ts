import type { Config } from "tailwindcss";

const config: Config = {
content: ["./app/**/*.{ts,tsx}", 
  "./components/**/*.{ts,tsx}"]
,
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FF0303",
          black: "#000000",
          gray: "#404040",
        },
      },
    },
  },
  plugins: [],
};

export default config;
