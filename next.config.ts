import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  // images: { unoptimized: true },
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

};

export default nextConfig;
