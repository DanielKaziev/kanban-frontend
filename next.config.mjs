/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/kanban-frontend/" : "",
};

export default nextConfig;
