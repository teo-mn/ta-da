/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      indigo: {
        50: "#eaecf8",
        75: "#d6daf1",
        100: "#c1c7eb",
        200: "#adb4e4",
        300: "#98a2dd",
        400: "#838fd6",
        500: "#6f7dcf",
        600: "#5a6ac8",
        700: "#4657c2",
        800: "#3b4cb1",
        900: "#2d3a88",
      },
      aqua: {
        50: "#f1ffff",
        75: "#e3feff",
        100: "#d4fdff",
        200: "#c6fdfe",
        300: "#b8fcfe",
        400: "#aafcfe",
        500: "#9cfbfe",
        600: "#8efbfe",
        700: "#80fafd",
        800: "#71fafd",
        900: "#55f9fd",
      },
      gray: {
        50: "#ffffff",
        75: "#fdfdfd",
        100: "#f8f8f8",
        200: "#e6e6e6",
        300: "#d5d5d5",
        400: "b1b1b1",
        500: "#909090",
        600: "#6d6d6d",
        700: "#464646",
        800: "#222222",
        900: "#000000",
      },
      blue: {
        100: "#e0f2ff",
        200: "#cae8ff",
        300: "#b5deff",
        400: "#96cefd",
        500: "#78bbfa",
        600: "#59a7f6",
        700: "#3892f3",
        800: "#147af3",
        900: "#0265dc",
        1000: "#0054b6",
        1100: "#004491",
        1200: "#003571",
        1300: "#002754",
      },
      green: {
        100: "#cef8e0",
        200: "#adf4ce",
        300: "#89ecbc",
        400: "#67dea8",
        500: "#49cc93",
        600: "#2fb880",
        700: "#15a46e",
        800: "#008f5d",
        900: "#007a4d",
        1000: "#00653e",
        1100: "#005132",
        1200: "#053f27",
        1300: "#0a2e1d",
      },
      red: {
        100: "#ffebe7",
        200: "#ffddd6",
        300: "#ffcfc3",
        400: "#ffb7a9",
        500: "#ff9b88",
        600: "#ff7c65",
        700: "#f75c46",
        800: "#ea3829",
        900: "#d31510",
        1000: "#640000",
        1100: "#930000",
        1200: "#740000",
        1300: "#590000",
      },
      orange: {
        100: "#ffeccc",
        200: "#ffdfad",
        300: "#fdd291",
        400: "#ffbb63",
        500: "#ffa037",
        600: "#f68511",
        700: "#e46f00",
        800: "#cb5d00",
        900: "#b14c00",
        1000: "#953d00",
        1100: "#7a2f00",
        1200: "#612300",
        1300: "#491901",
      },
      yellow: {
        100: "#fbf198",
        200: "#f8e750",
        300: "#f8d904",
        400: "#e8c600",
        500: "#d7b300",
        600: "#c49f00",
        700: "#b08c00",
        800: "#9b7800",
        900: "#856600",
        1000: "#705300",
        1100: "#5b4300",
        1200: "#483300",
        1300: "#362500",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "cursive"],
        Manrope: ['"Manrope"', "cursive"],
      },
    },
  },
  plugins: [],
};
