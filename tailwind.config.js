/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-pale-blue': 'rgba(150, 169, 223, 0.5);',
        'custom-black': 'rgba(0, 36, 48, 0.500)',
        'custom-blackBg' : '#181818'
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      animation: {
        opacityAnimation: 'opacityAnimation 1s'
      },
      keyframes: {
        opacityAnimation: {
          from: {
            transform: 'scale(5)',
            opacity: '0',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1',
          }
        }
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}

