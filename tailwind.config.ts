import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#b9ff4b',
          dim:     '#9ee030',
        },
        neutral: {
          950: '#060606',
          925: '#0d0d0d',
          915: '#111111',
          850: '#1a1a1a',
          800: '#1c1c1c',
          750: '#252525',
          700: '#333333',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        body:    ['Instrument Sans', 'sans-serif'],
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '13': '13px',
        '15': '15px',
      },
      letterSpacing: {
        widest2: '0.12em',
        wide2:   '0.08em',
        wide3:   '0.10em',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-up-d1': 'fadeUp 0.6s 0.15s ease forwards',
        'fade-up-d2': 'fadeUp 0.6s 0.28s ease forwards',
        'fade-up-d3': 'fadeUp 0.6s 0.42s ease forwards',
        'fade-up-d4': 'fadeUp 0.6s 0.55s ease forwards',
        'fade-up-d5': 'fadeUp 0.6s 0.68s ease forwards',
        'scroll-x':   'scrollX 22s linear infinite',
        'blink':      'blink 2s ease infinite',
        'scroll-line':'scrollLine 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollX: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':      { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
