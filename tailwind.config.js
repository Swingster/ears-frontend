/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        denim: {
          50: "#f2f7fd",
          100: "#e4ecfa",
          200: "#c3d8f4",
          300: "#8eb8eb",
          400: "#5193df",
          500: "#2b76cc",
          600: "#1e62ba",
          700: "#18498c",
          800: "#183f74",
          900: "#193761",
          950: "#112240",
          },
      },
      screens: {
        xs: '480px',
      },
      width: {
        420: '420px',
        465: '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
