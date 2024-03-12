import localFont from 'next/font/local';

export const fontLexend = localFont({
  src: './lexend-variable.woff2',
  variable: '--font-lexend',
  weight: '100 900',
});

export const fontSometype = localFont({
  src: './sometype-mono-variable.woff2',
  variable: '--font-sometype',
  weight: '400 700',
});
