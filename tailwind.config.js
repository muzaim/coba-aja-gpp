/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        page2: "url('./img/bg/6.jpg')",
        pageMap: "url('./img/bg/map.jpg')",
        barn: "url('./img/bg/1.jpg')",
        caffe: "url('./img/bg/shop.jpg')",
        outFarm: "url('./img/bg/outfarm.jpg')",
        farmBarn: "url('./img/bg/farmbarn.jpg')",
      },
      animation: {
        running: "fill 3.5s linear",
      },
      keyframes: {
        fill: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
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
