/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure the site is exported statically
  images: {
    unoptimized: true, // Since GitHub Pages can't optimize images dynamically
  },
  // basePath: process.env.NODE_ENV === 'production' ? '' : '', // Base path for the project
  // assetPrefix: process.env.NODE_ENV === 'production' ? '' : '', // Prefix for assets
  eslint: {
    ignoreDuringBuilds: true, // Skip linting during the build
  },
};

export default nextConfig;
