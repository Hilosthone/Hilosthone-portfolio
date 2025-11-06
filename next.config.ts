import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 👈 Enables static export (replaces npx next export)
  images: {
    unoptimized: true, // 👈 Allows images to work in static export
  },
}

export default nextConfig;
