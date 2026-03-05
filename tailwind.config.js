/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Epilogue', 'sans-serif'],
      },
      colors: {
        bg:      '#080909',
        surface: '#111213',
        border:  '#1e2022',
        muted:   '#6b7075',
        text:    '#e8e9ea',
        accent:  '#c8f04a',
        accent2: '#3dffc0',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'fade-up-1': 'fadeUp 0.6s 0.1s ease both',
        'fade-up-2': 'fadeUp 0.6s 0.2s ease both',
        'fade-up-3': 'fadeUp 0.6s 0.3s ease both',
        'fade-up-4': 'fadeUp 0.6s 0.4s ease both',
        'pulse2':    'pulse2 2s infinite',
        'slide-in':  'slideIn 0.5s ease both',
      },
    },
  },
  plugins: [],
}
