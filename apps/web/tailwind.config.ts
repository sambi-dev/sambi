import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@sambi/tailwind-config/web';

export default {
  content: [...baseConfig.content, '../../packages/ui/**/*.{ts,tsx}'],
  presets: [baseConfig],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.3125rem' }],
      sm: ['0.875rem', { lineHeight: '1.53rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.6875rem' }],
      xl: ['1.25rem', { lineHeight: '1.875rem' }],
      '2xl': ['1.4375rem', { lineHeight: '2rem' }],
      '3xl': ['1.625rem', { lineHeight: '2.03rem' }],
      '4xl': ['1.8125rem', { lineHeight: '2.265rem' }],
      '5xl': ['2rem', { lineHeight: '2.5rem' }],
      '6xl': ['2.25rem', { lineHeight: '2.8125rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '5.5rem',
      },
      fontFamily: {
        sans: ['var(--font-lexend)', ...fontFamily.sans],
        mono: ['var(--font-martian)', ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
