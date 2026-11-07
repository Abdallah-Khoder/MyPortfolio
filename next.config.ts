import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MyPortfolio",
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
