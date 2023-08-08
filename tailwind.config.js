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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradientBlueBlack: "linear-gradient(232deg, var(--haiti) 12%, var(--ebony) 42%)",
        gradientBlackBlue: "linear-gradient(232deg, var(--ebony) 12%, var(--haiti) 42%)",
      },
      backgroundColor: {
        transparent: "transparent",
      },
      borderColor: {
        transparent: "#ffffff80",
      },
    },
  },
  plugins: [],
};
