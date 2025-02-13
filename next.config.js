/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { dev }) {
    if (!dev) {
      // Disable CSS minification in production
      config.optimization.minimize = false;
    }
    return config;
  },
};

module.exports = nextConfig;
