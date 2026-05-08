import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 👈 ESTO es lo que genera la carpeta 'out'
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;