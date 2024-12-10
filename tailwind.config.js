/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BD273",
        black: "#141414",
        "gray-600": "#333333",
        "gray-500": "#6D6D6D",
        "gray-400": "#999999",
        "gray-300": "#B5B5B5",
        "gray-200": "#CCCCCC",
        "gray-100": "#EBEBEB",
        "gray-50": "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "pt-anbo": ["PT Anbo", "sans-serif"],
      },
      width: {
        layout: "393px",
      },
      height: {
        layout: "calc(100dvh - 64px)",
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
