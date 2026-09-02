import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        'bg-navy': '#0A0E1A',
        'bg-slate': '#12151F',
        'bg-charcoal': '#181B28',
        'bg-elev1': '#181818',
        'bg-elev2': '#1F1F1F',
        'bg-elev3': '#272727',
        'bg-elev4': '#313131',
        text: '#FFFFFF',
        'text-mute': '#9B9B9B',
        accent: '#C9A961',
        'accent-2': '#E6C57A',
      },
      fontFamily: {
        sans: ['Geist', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
