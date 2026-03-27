import { withPayload } from "@payloadcms/next/withPayload";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        // HTML pages: never cache so Server Action IDs always stay in sync after deploys
        source: "/((?!_next/static|_next/image|favicon|fonts|background|icons).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve server-only modules on the client
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        path: false,
        os: false,
        stream: false,
        worker_threads: false,
        child_process: false,
        readline: false,
      };
    }
    return config;
  },
};

export default withPayload(nextConfig, {
  configPath: path.resolve(__dirname, "src/payload.config.ts"),
});
