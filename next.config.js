module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "wisbqsgl",
    NEXT_PUBLIC_SANITY_DATASET: "production",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
