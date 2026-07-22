import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
