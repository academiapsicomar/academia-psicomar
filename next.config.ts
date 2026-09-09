import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitir pedir calidades más altas que el default (75) a next/image.
    qualities: [75, 88, 95],
    // Imágenes subidas desde el panel (Vercel Blob, store público).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
