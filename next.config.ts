import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
   assetPrefix: '', // <--- IMPORTANT for custom domains
  basePath: '', 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
