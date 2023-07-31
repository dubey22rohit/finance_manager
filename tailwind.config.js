/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    colors: {
      transparent: "transparent",
      cinder: "#0e0a12",
      heliotrope: "#de2af8",
      cerise: "#da2eb3",
      niagara: "#08b2a3",
      carnation: "#f05b5b",
      crusta: "#f66c42",
      viking: "#4ac9db",
      chambray: "#3f4890",
      fireBush: "#e08936",
      amaranth: "#eb3b57",
      bittersweet: "#f97966",
      spray: "#53f4ef",
      purpleHeart: "#7025c6",
      amaranth: "#e7384a",
      outrageousOrange: "#fc663a",
      bgaccent2: "#1f1439",
      bgaccent1: "#130e29",
    },
  },
  plugins: [],
};
