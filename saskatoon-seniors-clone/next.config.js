/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Needed for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
    ],
  },
  trailingSlash: true, // Disable client-side routing for static export
  assetPrefix: '/', // Needed for static export deployment
};

module.exports = nextConfig;
