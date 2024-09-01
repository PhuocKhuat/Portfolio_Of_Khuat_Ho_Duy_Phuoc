import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '415px',
        xsn: '550px',
        mds: '960px',
        mdm: '992px',
        mdn: '1200px'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'color-slide': {
          '0%': { backgroundColor: '#152a68' },
          '25% ': { backgroundColor: 'royalblue' },
          '50% ': { backgroundColor: 'seagreen' },
          '75% ': { backgroundColor: 'tomato' },
          '100%': { backgroundColor: '#152a68' }
        },
        'fade-in': {
          from: { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'color-slide': 'color-slide 15s cubic-bezier(0.075, 0.82, 0.165, 1) infinite',
        'fade-in': 'fade-in 2s ease infinite'
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(.44,.15,0,1.54)'
      },
      translate: {
        up2: '-0.5rem'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

export default config
