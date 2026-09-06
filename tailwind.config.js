/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14161C',
        paper: '#F7F5F1',
        indigo: {
          DEFAULT: '#4C5FE0',
          dark: '#3A48B8',
          light: '#7B89EA',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dark: '#C7862A',
        },
        muted: '#8B8D98',
        line: {
          DEFAULT: '#E4E1DA',
          dark: '#2A2D36',
        },
        surface: {
          dark: '#1B1E27',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'count-pop': {
          '0%': { transform: 'scale(0.96)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.25s ease both',
      },
    },
  },
  plugins: [],
}
