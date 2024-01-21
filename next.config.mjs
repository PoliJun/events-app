/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'wembleypark.com',
      }
    ]
    // domains: ['images.unsplash.com', 'wembleypark.com'],
  },
};

export default nextConfig;
