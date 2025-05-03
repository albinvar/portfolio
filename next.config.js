/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: 'export',
  env: {
    NEXT_WEBPACK_DISABLE_FILE_SYSTEM_CACHE: 'true',
  },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack caching
    config.cache = false;
    
    // Disable additional cache-related options
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      runtimeChunk: {
        name: entrypoint => `runtime-${entrypoint.name}`
      }
    };
    
    return config;
  },
  // Add trailingSlash configuration
  trailingSlash: true,
};

module.exports = nextConfig;