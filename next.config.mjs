/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/parsons_ai_app';
  nextConfig.assetPrefix = '/parsons_ai_app/';
}

export default nextConfig;