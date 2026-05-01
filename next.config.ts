import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use project directory as Turbopack root (avoids lockfile in home dir and permission errors)
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/mpa-tc",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/mpa-t-and-c",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com'
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com'
      },
      {
        protocol:'https',
        hostname: 'cdn.ezo.io'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }

    ],
  },
};

export default nextConfig;
