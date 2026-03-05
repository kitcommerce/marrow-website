import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles Next.js natively — no static export needed
  // output: "export" causes a bug with _global-error in Next.js 16 + Turbopack
};

export default nextConfig;
