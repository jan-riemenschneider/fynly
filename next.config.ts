import type { NextConfig } from "next";

type SvgRule = {
  test?: {
    test?: (value: string) => boolean;
  };
  issuer?: unknown;
  resourceQuery?: {
    not: RegExp[];
  };
  exclude?: RegExp;
};

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.svg": {
        as: "*.js",
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  "removeDimensions",
                ],
              },
            },
          },
        ],
      },
    },
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: SvgRule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        resourceQuery: /url/,
        test: /\.svg$/i,
      },
      {
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        test: /\.svg$/i,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  "removeDimensions",
                ],
              },
            },
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
