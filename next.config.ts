import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/talentflow-ai-landing-page" : "",
  assetPrefix: isGithubPages ? "/talentflow-ai-landing-page/" : "",
};

export default nextConfig;
