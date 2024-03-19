import { fileURLToPath } from 'url';

import _jiti from 'jiti';

const jiti = _jiti(fileURLToPath(import.meta.url));

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti('./src/env');
jiti('@sambi/auth/env');

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
    '@sambi/api',
    '@sambi/auth',
    '@sambi/db',
    '@sambi/ui',
    '@sambi/validators',
  ],

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
