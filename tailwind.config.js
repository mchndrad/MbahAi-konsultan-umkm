/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mbah-cream': '#FDF6E3',
        'mbah-terracotta': '#C1440E',
        'mbah-terracotta-light': '#D4602B',
        'mbah-sage': '#87A96B',
        'mbah-brown': '#3D2914',
        'mbah-gold': '#D4A574',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}