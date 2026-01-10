/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Since your repo is ravindu439.github.io (user/org page), no basePath needed
  // basePath: '',
  // assetPrefix: '',
};

module.exports = nextConfig;