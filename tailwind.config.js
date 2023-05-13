/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-red':'rgb(217, 34, 40)',
        'primary-red-hover':'rgb(184, 29, 34)'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}