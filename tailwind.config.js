/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // theme: {
  //   extend: {
  //     animation: {
  //       'fly-in': 'fly-in 1s ease forwards'
  //     },
  //     keyframes: {
  //       'fly-in': {
  //         '0%': {
  //           transform: 'translate(var(--tw-translate-x), var(--tw-translate-y))',
  //           opacity: '0'
  //         },
  //         '100%': {
  //           transform: 'translate(0, 0)',
  //           opacity: '1'
  //         }
  //       }
  //     }
  //   }
  // },
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'pulse': 'pulse 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
