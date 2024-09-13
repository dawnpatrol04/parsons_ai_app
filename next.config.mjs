/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure the site is exported statically
  images: {
    unoptimized: true, // Since GitHub Pages can't optimize images dynamically
  },
  // Remove basePath and assetPrefix
  eslint: {
    ignoreDuringBuilds: true, // Skip linting during the build
  },
};

export default nextConfig;