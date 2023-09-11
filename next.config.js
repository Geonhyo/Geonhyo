/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.S3_HOST_NAME,
        port: "",
        pathname: "/*",
      },
    ],
    domains: [process.env.S3_HOST_NAME],
  },
};

module.exports = nextConfig;
