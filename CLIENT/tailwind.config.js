/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background":"#F8F6E3",
        "dark-teal":"#006769",
        "light-teal":"#40A578"
      },
      fontFamily: {
        "poppins": "Poppins, sans-serif",
        "raleway": "Raleway, sans-serif"
      }
    },
  },
  plugins: [],
}

