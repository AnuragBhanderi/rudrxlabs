import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // A stray ~/package-lock.json makes Next guess the home folder as the workspace root.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
