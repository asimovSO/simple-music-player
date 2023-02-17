/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx,}",],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['League Spartan', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'side-card': '18px',
        'track-name': '32px',
        'track-author': '24px',
        'track-duration': '12px'
      }
    },
  },
  plugins: [],
}
