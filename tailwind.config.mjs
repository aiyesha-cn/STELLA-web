/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ember: {
          DEFAULT: '#FF9F1C',
          400: '#FFB347',
          500: '#FF9F1C',
          600: '#E8850A',
        },
        tala: {
          DEFAULT: '#2EE6D6',
          400: '#5CF1E4',
          500: '#2EE6D6',
          600: '#1CC2B3',
        },
        night: {
          950: '#05080D',
          900: '#0A0F17',
          800: '#101724',
          700: '#182234',
        },
        mist: {
          100: '#F5F7FA',
          300: '#C4CCD9',
          500: '#8792A3',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"General Sans"', 'sans-serif'],
        body: ['"General Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 30% 20%, rgba(255,159,28,0.18), transparent 45%), radial-gradient(circle at 75% 60%, rgba(46,230,214,0.14), transparent 50%)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};