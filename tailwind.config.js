/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#ff0336',
      black: '#000000b1',
      white: '#ffffff',
      grayTxt: '#646464',
      lightbg: '#efefef',
      border: '#D7D7D7'
    },
  },
  plugins: [],
};
