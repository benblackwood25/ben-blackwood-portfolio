import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95, 100],
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/client-work/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
