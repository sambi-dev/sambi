import type { StaticImageData } from 'next/image';

declare module '#/images/*' {
  const src: StaticImageData;
  export default src;
}
