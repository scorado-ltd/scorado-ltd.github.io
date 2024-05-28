/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#19191A",
        secondary: "#292929",
        tertiary: "#4FD97F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
