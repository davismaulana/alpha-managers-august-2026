/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#E5C88A',
          500: '#D4AF6A',
          600: '#C9A05F',
          700: '#B8860B', // Added for darker shade
        },
        dark: {
          950: '#000000',
          900: '#0A0A0A',
          850: '#111827',
          800: '#1A1A1A',
          700: '#1F2937'
        }
      },
    },
  },
  plugins: [],
}
