/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Replace with your actual domains
  },
  // https://unibazar-4u6g14qyvw.dcdeploy.cloud
  publicRuntimeConfig: {
    API_BASE_URL: process.env.NEXT_MODE === 'development' ? 'http://localhost:4000' : 'https://backend-express-29ku.onrender.com'
  },
};

export default nextConfig;
