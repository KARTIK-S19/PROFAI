/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/relevance-webhook',
        destination: 'https://48d5-49-36-105-108.ngrok-free.app/api/relevance-webhook',
      },
    ]
  },
  images: {
    remotePatterns:[
        {
          protocol: "https",
          hostname: "randomuser.me",
        }
      ],
  },
};

export default nextConfig;
