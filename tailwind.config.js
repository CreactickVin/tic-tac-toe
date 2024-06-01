/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit, sans-serif", // Adds a new `font-oswald` class
      },
      content: {
        'path-o': 'url("src/assets/icon-o.svg")',
        'path-x': 'url("src/assets/icon-x.svg")'
      },
    },
  },
  plugins: [],
}

