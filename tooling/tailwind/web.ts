import type { Config } from 'tailwindcss';

import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

import base from './base';

export default {
  content: base.content,
  presets: [base],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.3125rem' }],
      sm: ['0.875rem', { lineHeight: '1.53rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.875rem' }],
      '2xl': ['1.4375rem', { lineHeight: '2rem' }],
      '3xl': ['1.625rem', { lineHeight: '2.03rem' }],
      '4xl': ['1.8125rem', { lineHeight: '2.265rem' }],
      '5xl': ['2rem', { lineHeight: '2.5rem' }],
      '6xl': ['2.25rem', { lineHeight: '2.8125rem' }],
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2.5rem',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      height: {
        150: '37.5rem',
      },
      spacing: {
        128: '32rem',
      },
      margin: {
        30: '7.5rem',
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
