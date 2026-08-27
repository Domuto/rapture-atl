/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add CDN hosts here if you serve product/job photos from outside /public
    remotePatterns: [],
  },
};

export default nextConfig;
