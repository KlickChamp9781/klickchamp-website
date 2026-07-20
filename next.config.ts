import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
