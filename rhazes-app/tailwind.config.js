/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#00f403",
          200: "#006508",
          300: "#204321",
        },
      },
    },
    backgroundImage: {
      bg: "url('../public/imgs/bg.png')",
    },
    screens: {
      xs: { max: "450px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
