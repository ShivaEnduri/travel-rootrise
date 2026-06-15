/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0A2E45',
          deep: '#061C2C',
          light: '#15506F',
        },
        sunset: {
          DEFAULT: '#FF6B35',
          soft: '#FF8C5A',
        },
        amber: {
          DEFAULT: '#F4A949',
          light: '#FFD08A',
        },
        cloud: {
          DEFAULT: '#F7F4EE',
          dim: '#E9E4DA',
        },
        noir: {
          DEFAULT: '#0A0908',
          soft: '#15130F',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        wide: ['"Archivo Expanded"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        drift: 'drift 40s linear infinite',
        'drift-rev': 'driftRev 55s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        rain: 'rain 1.2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        driftRev: {
          '0%': { transform: 'translateX(110%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rain: {
          '0%': { transform: 'translateY(-10%)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translateY(110vh)', opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
}
