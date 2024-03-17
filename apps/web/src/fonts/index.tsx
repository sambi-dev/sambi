import localFont from 'next/font/local';

export const fontLexend = localFont({
  src: './lexend-variable.woff2',
  variable: '--font-lexend',
  weight: '100 900',
});

export const fontMartian = localFont({
  src: './martian-mono-variable.woff2',
  variable: '--font-martian',
  weight: '100 800',
});
