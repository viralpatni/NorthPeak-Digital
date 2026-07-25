/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        secondary: 'var(--color-secondary)',
        surface: 'var(--color-surface)',
        card: 'var(--color-card)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        accent: 'var(--color-accent)',
        cyan: 'var(--color-cyan)',
        success: 'var(--color-success)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        
        // Specific section backgrounds
        'section-blue': 'var(--color-section-blue)',
        'section-lavender': 'var(--color-section-lavender)',
        'section-gray': 'var(--color-section-gray)',
      },
      fontFamily: {
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['44px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body': ['18px', { lineHeight: '1.6' }],
      },
      spacing: {
        'section-y': '140px', // Between 120-160px
        'section-inner': '32px',
      },
      maxWidth: {
        'content': '650px',
        'container': '1280px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
        'pill': '9999px',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(17, 24, 39, 0.04)',
        'soft-md': '0 8px 24px rgba(17, 24, 39, 0.06)',
        'soft-lg': '0 20px 40px rgba(17, 24, 39, 0.08)',
        'neu-light': '8px 8px 16px rgba(17, 24, 39, 0.05), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        'neu-dark': '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.02)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
