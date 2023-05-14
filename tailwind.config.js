/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#232946',
      paragraph: "#b8c1ec",
      button: "#f92672"
    },
    // fontFamily: {
    //   Ysabeau: ['Ysabeau', 'sans-serif'], //replace the contents with the correct font family
    //   DidactG: ['Didact Gothic', 'serif'],
    // },
  },
  },
  plugins: [],
}

