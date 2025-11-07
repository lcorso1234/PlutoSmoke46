import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  outputFileTracingRoot: "/Users/lawrencecorso/LarryCorso",
  output: 'standalone',
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rumidesign.tech'
          }
        ],
        destination: 'https://geniusanonymous.org/:path*',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
