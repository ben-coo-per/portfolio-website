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
    NEXT_PUBLIC_WEATHER_API_KEY: "0e0f2d09e7b3b16c76be2d2574ebed95",
  },
  images: {
    domains: ["cdn.sanity.io", "openweathermap.org"],
  },
};
