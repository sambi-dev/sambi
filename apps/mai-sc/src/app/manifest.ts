import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mai',
    short_name: 'Mai',
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
    theme_color: '#09090b',
    background_color: '#09090b',
    display: 'standalone',
  };
}
