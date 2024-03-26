import { fileURLToPath } from 'url';

import _jiti from 'jiti';

const jiti = _jiti(fileURLToPath(import.meta.url));

jiti('./src/env');

/** @type {import("next").NextConfig} */
const config = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
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
