/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['var(--font-comfortaa)'],
        exo2: ['var(--font-exo2)'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: '#d1677c',
        secondary: '#77a8cf'
      }
    },
  },
  plugins: [],
}