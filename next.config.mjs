/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com',
        port: '',
        pathname: '/**',
      },
    ],
    // domains: ['images.unsplash.com', 'wembleypark.com'],
  },
};

export default nextConfig;
