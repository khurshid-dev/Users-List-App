module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1700px" },
      lg: { max: "1200px" },
      md: { max: "990px" },
      sm: { max: "768px" },
      ss: { max: "500px" },
      xs: { max: "420px" },
    },
    container: {
      padding: "15px",
      center: true,
    },
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#cf0000",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        Labrada: ["Labrada", "sans-serif"],
      },
    },
  },
  plugins: [],
};
