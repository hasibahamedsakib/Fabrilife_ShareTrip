/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1882FF",
        secondary: {
          600: "#5A6573",
          700: "#77818C",
          800: "#1A2B3D",
        },
        success: "#03a629",
      },

      fontFamily: {
        Murecho: ["Murecho", "serif"],
      },
    },
  },
  plugins: [],
};
