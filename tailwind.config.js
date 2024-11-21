/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Figtree: ['"Figtree", sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}