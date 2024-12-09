/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BD273",
        gray: "#6D6D6D",
        lightGray: "#96A2A9",
        lightLightGray: "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "pt-anbo": ["PT Anbo", "sans-serif"],
      },
      width: {
        layout: "393px",
      },
      height: {
        layout: "852px",
      },
    },
  },
  plugins: [],
};
