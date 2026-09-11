import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#F2F9FF',
  foreground: '#2B2B2B',

  card: {
    DEFAULT: '#F2F9FF',
    foreground: '#2B2B2B',
  },

  popover: {
    DEFAULT: '#F2F9FF',
    foreground: '#2B2B2B',
  },

  primary: {
    DEFAULT: '#F2F9FF',
    foreground: '#2B2B2B',
  },

  secondary: {
    DEFAULT: '#F2F9FF',
    foreground: '#2B2B2B',
  },

  muted: {
    DEFAULT: '#F2F9FF',
    foreground: '#2B2B2B',
  },

  accent: {
    DEFAULT: '#F2F9FF',
    foreground: '#2B2B2B',
  },

  destructive: {
    DEFAULT: '#F2F9FF',
    foreground: '#2B2B2B',
  },

  border: '#DCEAF5',
  input: '#DCEAF5',
  ring: '#DCEAF5',

  ivory: '#F2F9FF',
  cream: '#F2F9FF',
  sand: '#F2F9FF',
  beige: '#F2F9FF',

  maroon: '#7A2E2E',
  saffron: '#C77B30',
  terracotta: '#9A5545',
  charcoal: '#2B2B2B',
  gold: '#B68B3C',

  chart: {
    '1': '#7A2E2E',
    '2': '#C77B30',
    '3': '#9A5545',
    '4': '#B68B3C',
    '5': '#2B2B2B',
  },
      
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
