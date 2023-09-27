/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#FFFFFF",
        secondaryBackground: "#2D2D2D",
        accentBackground: "#50577A",
        primaryButton: "#FF4C3B",
        successButton: "",
        dangerButton: "",
        borderButton: "#F0F0F0",
        disabledButton: "",
        primaryText: "#FFFFFF",
        secondaryText: "#707070",
        accentText: "",
        inputBack: "#F0F0F0",
        inputBackground:"#F0F0F0",
        inputText:"#707070",
        danger: "#bb2124",
      },
    },
  },
  plugins: [],
};
