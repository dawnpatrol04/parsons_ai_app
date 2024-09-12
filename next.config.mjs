/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/parsons_ai_app',
    assetPrefix: '/parsons_ai_app/',
  };
  
  export default nextConfig;