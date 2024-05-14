/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'getintouch': "url('../src/assets/images/getintouch.jpg')",
      }
    },
  },
  plugins: [],
}