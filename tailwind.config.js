/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      mb: "350px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
    extend: {
      fontFamily: {
        germalt: ["Germalt", "sans-serif"],
      },
      visibility: ["group-hover"],
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",

            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",

            transform: "translateY(0)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        fade: "fadeOut 5s ease-in-out",
      },
      gridTemplateRows: {
        new3: "repeat(3, minmax(100px, 200px))", //width, height
      },
      gridTemplateColumns: {
        nav1: "repeat(1, minmax(0, 0.5fr) 1fr)",
        login1: "repeat(1, minmax(0, 1fr) 0.5fr)",
      },
      backgroundImage: {
        techstack: "url('/teckstack_bg.png')",
      },
    },
  },
  plugins: [],
};
