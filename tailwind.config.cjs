/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white-01": "#C1C0E5",
        "white-02": "#919EAB",
        "black-01": "#15141B",
        "black-02": "#1F1E24",
        "black-03": "#191922",
        "black-04": "#201E2C",
        "blackLanding-01": "#111928",
        "blackLanding-02": "rgb(31 42 55)",
        "blackLanding-03": "rgb(17 25 40)",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
