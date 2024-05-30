/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit, sans-serif", // Adds a new `font-oswald` class
      }
    },
  },
  plugins: [],
}

