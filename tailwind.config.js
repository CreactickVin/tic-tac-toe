/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald, ui-serif', // Adds a new `font-oswald` class
      }
    },
  },
  plugins: [],
}

