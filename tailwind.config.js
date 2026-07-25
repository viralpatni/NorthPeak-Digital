/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#7C3AED',
        accent: '#06B6D4',
        dark: '#0F172A',
        surface: '#111827',
        'light-bg': '#F8FAFC',
        'brand-text': '#1E293B',
      },
      fontFamily: {
        sora: ['Sora', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        'gradient-footer': 'linear-gradient(180deg, #0F172A 0%, #000000 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(124,58,237,0.1) 100%)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatMedium 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(37,99,235,0.3)',
        'glow-accent': '0 0 40px rgba(6,182,212,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
