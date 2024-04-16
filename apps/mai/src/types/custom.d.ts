import type { StaticImageData } from 'next/image';

declare module '#/hero-assets/*' {
  const src: StaticImageData;
  export default src;
}
