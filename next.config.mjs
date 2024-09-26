/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Replace with your actual domains
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.NEXT_MODE === 'development' ? 'http://localhost:4000' : 'https://backend-express-3fjm.onrender.com'
  },
};

export default nextConfig;
