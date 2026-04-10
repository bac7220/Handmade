import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/Handmade",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
