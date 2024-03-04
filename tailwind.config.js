/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_1: '#D9C5A6',
        primary_2: '#0E0E0E',
        secondary: {
          100: '#22211E',
          200: '#7F7366'
        },
      },
      fontFamily: {
        comfortaa: ['comfortaa']
      }
    },
  },
  plugins: [],
};
