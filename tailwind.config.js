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
        assistant: ['var(--font-assistant)'],
        tourney: ['var(--font-tourney)'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: '#de657e',
        secondary: '#73a9d8'
      },
    },
  },
  plugins: [],
}