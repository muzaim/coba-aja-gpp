/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        page1: "url('./img/bg/4.jpg')",
        page2: "url('./img/bg/6.jpg')",
        pageMap: "url('./img/bg/map.jpg')",
        barn: "url('./img/bg/1.jpg')",
      },
      fontFamily: {
        bukhari: ["Bukhari Script"],
        openSans: ["Open Sans"],
      },
      rotate: {
        17: "17deg",
      },
    },
  },
  plugins: [],
};
