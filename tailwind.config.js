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
        borderButton: "F0F0F0",
        disabledButton: "",
        primaryText: "#FFFFFF",
        secondaryText: "#A9A9A9",
        accentText: "",
        danger: "#bb2124",
      },
    },
  },
  plugins: [],
};
