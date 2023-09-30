/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville"],
      },
      colors: {
        rosered: "#844444",
      },
    },
  },
  plugins: [],
};
