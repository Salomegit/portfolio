import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['cdn.hashnode.com','hashnode.com'],
  },
};

export default nextConfig;
