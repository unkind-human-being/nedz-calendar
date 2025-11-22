import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  fallbacks: {
    image: "/offline.png", // optional
    document: "/offline.html", // optional
  },
})(nextConfig);
