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
          950: '#030304',
          900: '#070709',
          850: '#0c0c10',
          800: '#111116',
          750: '#16161c',
          700: '#1c1c24',
          600: '#262632',
        },
        crimson: {
          glow: '#ff1f44',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        bone: '#f5f5f7',
      },
      fontFamily: {
        monument: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
        tech: ['"Space Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'fluid': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'glow-crimson': '0 0 50px -10px rgba(220, 38, 38, 0.45)',
        'glow-crimson-lg': '0 0 80px -15px rgba(220, 38, 38, 0.6)',
        'glow-white': '0 0 35px -5px rgba(255, 255, 255, 0.25)',
        'double-bezel': 'inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.85)',
        'double-bezel-crimson': 'inset 0 1px 1px rgba(239, 68, 68, 0.25), 0 20px 45px -15px rgba(220, 38, 38, 0.25)',
        'subtle-rim': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 3s infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-reverse': 'spin 50s linear infinite reverse',
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
