const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FF764D",
        lemonade: "#FBFFA7",
        spearmint: "#B6FFC0",
        lavender: "#D5B3FF",
        periwinkle: "#B1C5FF",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
