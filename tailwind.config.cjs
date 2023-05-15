/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heroGradient:
          'radial-gradient(circle, rgba(20,42,62,1) 0%, rgba(45,212,191,1) 0%, rgba(20,42,62,1) 78%)',
        heroGradientSm:
          'linear-gradient(36deg, rgb(10, 21, 31) 0%, rgb(27, 153, 139) 56%, rgb(11, 30, 38) 87%, rgb(10, 21, 31) 100%)',
      },
      colors: {
        bg0: '#0a151f',
        bg5: '#0f202f',
        bg10: '#142a3e',
        primary10: '#25d0bc',
        primary5: 'rgb(30, 168, 152)',
        primary0: 'rgb(25, 143, 129)',
        white: '#e8f1f2;',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceLeft: {
          '0%': { transform: 'translate(-100%, 0)' },
          '100%': { transform: 'translate(0%)' },
        },
        bounceRight: {
          '0%': { transform: 'translate(100%, 0)' },
          '100%': { transform: 'translate(0%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'pulse-once': 'pulse 3s linear',
        'bounce-left': 'bounceLeft 1s ease-in-out',
        'bounce-right': 'bounceRight 1s ease-in-out',
        wiggle: 'wiggle 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
