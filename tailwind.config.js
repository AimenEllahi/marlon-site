module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        scrollbarThumb: "#4a5568", // thumb color
        scrollbarTrack: "#2d3748", // track color
      },
    },
  },
  plugins: [],
};
