// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #0891b2, #1d4ed8)', // cyan-600 to blue-700
        'light-gradient': 'linear-gradient(to top right, #cffafe, #f8fafc, #ffffff)', // cyan-100, slate-50, white
        'dark-gradient': 'linear-gradient(to top right, #020617, #0f172a, #1e293b)', // slate-950, 900, 800
      },
      backgroundColor: {
        'card-light': 'rgba(255, 255, 255, 0.6)',
        'card-dark': 'rgba(30, 41, 59, 0.1)',
      },
      boxShadow: {
        'premium': '0 25px 60px -12px rgba(15, 23, 42, 0.18)',
        'premium-dark': '0 20px 50px -12px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}