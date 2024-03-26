import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@yocxo/tailwind-config/web';

export default {
  content: [...baseConfig.content, '../../packages/ui/**/*.{ts,tsx}'],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lexend)', ...fontFamily.sans],
        mono: ['var(--font-martian)', ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
