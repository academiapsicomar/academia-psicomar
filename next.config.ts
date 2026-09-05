import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitir pedir calidades más altas que el default (75) a next/image.
    qualities: [75, 88, 95],
  },
};

export default nextConfig;
