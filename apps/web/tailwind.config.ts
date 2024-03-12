import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@sambi/tailwind-config/web';

export default {
  content: [...baseConfig.content, '../../packages/ui/**/*.{ts,tsx}'],
  presets: [baseConfig],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '5.5rem',
      },
      fontFamily: {
        sans: ['var(--font-lexend)', ...fontFamily.sans],
        mono: ['var(--font-sometype)', ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
