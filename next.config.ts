import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['cdn.hashnode.com','hashnode.com'],
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
      {
        protocol: 'https',
        hostname: '*.hashnode.com',
      },
    ],    
  },
};

export default nextConfig;
