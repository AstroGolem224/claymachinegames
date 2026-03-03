import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow any local images; add remote domains here if needed later
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
    ],
  },
};

export default nextConfig;
