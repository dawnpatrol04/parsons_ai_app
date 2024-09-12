/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/parsons_ai_app',
  assetPrefix: '/parsons_ai_app/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;