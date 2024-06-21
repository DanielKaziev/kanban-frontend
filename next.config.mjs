/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  assetPrefix: "/<GITLAB_PROJECT_NAME>"
};

export default nextConfig;
