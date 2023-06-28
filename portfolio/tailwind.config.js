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
        "silver":"#eee",
        "dark-bg":"#111",
        "item-dark":"#2b2a2a",
        "item-mobile":"#444",
        "black-05":"#252525",
        "border-light":"#ddd"
      },
      boxShadow:{
        "nav-shadow":"0 0 47px #dedede;"
      },
      screens:{
        "mobile-lg":"576px"
      },
      width:{
        "main-text":"15px"
      },
    },
  },
  plugins: [],
}

