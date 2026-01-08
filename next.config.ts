import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Static export mode
  trailingSlash: true,        // /about/ not /about
  images: {
    unoptimized: true         // No Next.js image optimization
  }
};

export default nextConfig;
