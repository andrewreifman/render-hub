/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animateGrid: {
          "0%": { transform: "rotateX(50deg) translateY(-50%)" },
          "100%": { transform: "rotateX(50deg) translateY(0)" },
        },
        marqueeScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      textFillColor: (theme) => theme("borderColor"),
      textStrokeColor: (theme) => theme("borderColor"),
      textStrokeWidth: (theme) => theme("borderWidth"),
      paintOrder: {
        fsm: { paintOrder: "fill stroke markers" },
        fms: { paintOrder: "fill markers stroke" },
        sfm: { paintOrder: "stroke fill markers" },
        smf: { paintOrder: "stroke markers fill" },
        mfs: { paintOrder: "markers fill stroke" },
        msf: { paintOrder: "markers stroke fill" },
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
};
