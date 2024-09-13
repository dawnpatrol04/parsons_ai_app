/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure the site is exported statically
  images: {
    unoptimized: true, // Since GitHub Pages can't optimize images dynamically
  },
  basePath: '', // Always serve from the root
  assetPrefix: '', // No prefix for assets
  eslint: {
    ignoreDuringBuilds: true, // Skip linting during the build
  },
};

export default nextConfig;
