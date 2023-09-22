/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
    darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
      primaryColor: '#153550',
      secondaryColor: '#f89829',
      primaryColorLight: '#49787e',
      redColor: '#c04a72',
      whiteColor: '#fff',
      darkColor: '#000000',
      darkColorLight: '#4b3c6c',
      paragraphColor: '#899b9a',
    }, 
    keyframes: {
      move: {
        '50%': {transform: 'translateY(-1rem)'}
      }
    },
    animation: {
      'movingY': 'move 2s linear infinite'
    }
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}