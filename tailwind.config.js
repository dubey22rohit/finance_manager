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
        primaryGradient : "linear-gradient(232deg, var(--bg-accent-primary) 0%, var(--bg-accent-secondary) 42%)"
      },
      backgroundColor : {
        transparent : "transparent",
      },
      borderColor:{
        transparent : "#ffffff80",
      },
    },
  },
  plugins: [],
};
