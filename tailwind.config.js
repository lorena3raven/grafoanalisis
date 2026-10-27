/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0a0807', coal: '#14100d', gold: '#e8934a', amber: '#f2b36f', cream: '#e9e1d6' },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], serif: ['Cormorant Garamond', 'serif'], script: ['Great Vibes', 'cursive'] },
    },
  },
  plugins: [],
}
