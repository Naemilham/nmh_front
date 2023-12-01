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
      notosanskr: ["NotoSansKR"],
      PretendardRegular: ["Pretendard-Regular"],
      NotoSerifKR: ["NotoSerifKR"],
      DovemayoMedium: ["Dovemayo-Medium"],
      NPSfontBold: ["NPSfontBold"],
      KimjungchulMyungjoBold: ["KimjungchulMyungjo-Bold"],
    },
  },
  plugins: [],
};

export default colors;
