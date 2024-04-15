import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'cocoGPT',
    short_name: 'cocoGPT',
    icons: [
      {
        src: '/icon3.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon4.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#f5c000',
    background_color: '#f5c000',
    display: 'standalone',
  };
}
