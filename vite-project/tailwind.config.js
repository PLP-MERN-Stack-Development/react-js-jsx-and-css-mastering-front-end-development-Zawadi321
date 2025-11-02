/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'card': '#ffffff',
        'card-dark': '#1f2937',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}