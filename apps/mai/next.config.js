import { fileURLToPath } from 'url';

import createJiti from 'jiti';

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))('./src/env');

/** @type {import("next").NextConfig} */
const config = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
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
  typescript: { ignoreBuildErrors: true },
};

export default config;
