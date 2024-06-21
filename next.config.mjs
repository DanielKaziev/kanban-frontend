/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/<GITLAB_PROJECT_NAME>" : "", 
};

export default nextConfig;
