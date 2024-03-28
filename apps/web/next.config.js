import { fileURLToPath } from 'url';

import createJiti from 'jiti';

const withVercelToolbar = (
  await import('@vercel/toolbar/plugins/next')
).default();

createJiti(fileURLToPath(import.meta.url))('./src/env');

/** @type {import("next").NextConfig} */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'basehub.earth',
      },
    ],
  },
  reactStrictMode: true,

  transpilePackages: [
    '@yocxo/api',
    '@yocxo/auth',
    '@yocxo/db',
    '@yocxo/ui',
    '@yocxo/validators',
  ],

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

const withToolbarConfig = withVercelToolbar(config);

export default withToolbarConfig;
