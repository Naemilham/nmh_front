// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/@material-tailwind/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "nemil-blue": "#0078F0",
        "nemil-sky": "#E5F1FD",
      },
    },
    fontFamily: {
      notosanskr: ["Noto Sans KR"],
      notoSerifkr: ["Noto Serif KR"],
    },
  },
  plugins: [],
};

export default colors;
