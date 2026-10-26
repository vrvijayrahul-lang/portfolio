/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#040406',
          900: '#08080d',
          850: '#0d0d15',
          800: '#12121e',
          750: '#171726',
          700: '#1e1e32',
          600: '#2a2a44',
        },
        violet: {
          glow: '#9d72ff',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        lavender: {
          100: '#f5f3ff',
          200: '#ede9fe',
          300: '#ddd6fe',
          400: '#c4b5fd',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'fluid': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'glow-violet': '0 0 40px -10px rgba(139, 92, 246, 0.35)',
        'glow-lavender': '0 0 35px -8px rgba(196, 181, 253, 0.25)',
        'double-bezel': 'inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'subtle-rim': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 3s infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
