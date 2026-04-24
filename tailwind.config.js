/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // 1. Specific Transition Period Definition
      transitionDuration: {
        'premium': '2200ms',
        "interactive": '1000ms',
      },
      // 2. Color Groups
      colors: {
        well: {
          cyan: {
            400: '#22d3ee',
            600: '#0891b2',
          },
          blue: {
            500: '#3b82f6',
            700: '#1d4ed8',
          },
          indigo: {
            400: '#818cf8',
            800: '#3730a3',
          },
          slate: {
            200: '#e2e8f0',
            400: '#94a3b8',
            500: '#64748b',
            700: '#334155',
            800: '#1e293b',
          },
          glass: {
            light: 'rgba(255, 255, 255, 0.6)',
            dark: 'rgba(30, 41, 59, 0.1)',
          }
        }
      },
      backgroundImage: {
        'well-bg-light': 'linear-gradient(to top right, #cffafe, #f8fafc, #ffffff)',
        'well-bg-dark': 'linear-gradient(to top right, #020617, #0f172a, #1e293b)',
      },
      boxShadow: {
        'well-premium': '0 35px 70px -15px rgba(15, 23, 42, 0.15)',
        'well-premium-dark': '0 35px 70px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}