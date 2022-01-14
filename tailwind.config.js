module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
          "host":"url('https://bit.ly/3IV09zr')",
          
          "movie":"url('https://bit.ly/3JceDel')",

          "marvel":"url('https://bit.ly/3Jf6wh9')",

          "disney":"url('https://bit.ly/3H7mfx4')",

          "pixar":"url('https://bit.ly/3sv5KGR')",

          "natgeo":"url('https://bit.ly/3HeawNj')",

          "starwars":"url('https://bit.ly/3Eo5qMo')",
          
      }),
      height: {
        "120vh": "120vh",
      },
      fontFamily: {
        fontpopins:['Poppins']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("tailwindcss-scrollbar"),
    // ...
  ],
  variants: {
    scrollbar: ["dark"],
    extend: {},
  },
};
