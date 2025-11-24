import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
} as NextConfig & {
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
};

// Add eslint config
(nextConfig as any).eslint = {
  ignoreDuringBuilds: true,
};

export default nextConfig;
