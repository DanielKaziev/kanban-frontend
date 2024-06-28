/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/kanban-frontend/" : "",
};

export default nextConfig;
