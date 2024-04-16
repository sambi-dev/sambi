import type { StaticImageData } from 'next/image';

declare module '#/assets/*' {
  const src: StaticImageData;
  export default src;
}
