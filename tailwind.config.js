/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      logo: ['Monoton', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#9a8a78',
        secondary: '#cfc8c0',
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'fade-in' : 'customTranslateY .3s ease-in-out',
      },
      keyframes: {
        customTranslateY: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}

