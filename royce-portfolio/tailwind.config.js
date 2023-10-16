/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville"],
        outfit: ["'Outfit', sans-serif"],
        azeret: ["'Azeret Mono', sans-serif"],
        clash: ["'Clash Display', sans-serif"], // Removed the extra semicolon here
      },
      height: {
        50: "50px",
        150: "150px",
        300: "300px",
      },
      gridRow: {
        2.5: "span 2.5",
      },
      colors: {
        rosered: "#844444",
      },
      fontWeight: {
        light: "200",
        regular: "400",
        medium: "500",
        bold: "600",
        heavy: "700",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "slide-left": "slide-left 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      textShadow: {
        xs: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        sm: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
