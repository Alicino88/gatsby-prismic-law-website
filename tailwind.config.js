/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      blue: {
        dark: "#071838",
        light: "#ECF3FF",
        transparent: "#071838CC",
      },
      gold: "#D6AD60",
      /*https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4*/
      greyTransparent: "#F4F7FBD9",
      grey: "#595757",
    },
    extend: {
      keyframes: {
        zoomin: {
          "0%": {
            transform: "scale(1)",

            "transform-origin": "50% 50%",
          },
          "100%": {
            transform: "scale(1.28)",

            "transform-origin": "50% 50%",
          },
        },
      },
      animation: {
        zoomin:
          "zoomin 15s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite normal both running",
      },
    },
  },

  plugins: [],
};
