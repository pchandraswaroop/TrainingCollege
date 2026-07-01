/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Space Grotesk"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px -32px rgba(13, 18, 28, 0.45)",
      },
    },
  },
  plugins: [],
};
