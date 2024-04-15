import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yo! CXO',
    short_name: 'Yo! CXO',
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
    theme_color: '#68c421',
    background_color: '#68c421',
    display: 'standalone',
  };
}
