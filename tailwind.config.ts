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
        navy: {
          950: "#0A1628",
          900: "#0D1F3C",
          800: "#112244",
          700: "#1a2f55",
          600: "#1e3a6e",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4B96B",
          dark: "#A8832A",
          subtle: "rgba(201, 168, 76, 0.15)",
        },
        cream: "#F8F4EC",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1" }],
        display: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15" }],
        heading: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #D4B96B 50%, #A8832A 100%)",
        "navy-gradient": "linear-gradient(135deg, #0A1628 0%, #0D1F3C 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        gold: "0 0 20px rgba(201, 168, 76, 0.3)",
        "gold-lg": "0 0 40px rgba(201, 168, 76, 0.4)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
