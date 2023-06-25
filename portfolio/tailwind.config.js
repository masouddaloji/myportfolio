/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontFamily:{
      "iran":"iran",
      "iran-bold":"iran-bold"
    },
    extend: {
      colors:{
        "primary":"#FFB400",
        "txt-gray":"#666",
        "btn-bg":"#eee",
        "dark-bg":"#111",
        "item-dark":"#2b2a2a",
        "item-mobile":"#444"
      },
      boxShadow:{
        "nav-shadow":"0 0 47px #dedede;"
      }
    },
  },
  plugins: [],
}

