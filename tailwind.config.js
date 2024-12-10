/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BD273",
        black: "#141414",
        gray600: "#333333",
        gray500: "#6D6D6D",
        gray400: "#999999",
        gray300: "#B5B5B5",
        gray200: "#CCCCCC",
        gray100: "#EBEBEB",
        gray50: "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "pt-anbo": ["PT Anbo", "sans-serif"],
      },
      width: {
        layout: "393px",
      },
      height: {
        layout: "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
};
