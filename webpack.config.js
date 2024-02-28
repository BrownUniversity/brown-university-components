const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { version } = require("./package.json");

const runAnalyzer = process.env.RUN_WEBPACK_BUNDLE_ANALYZER;

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "index.commonjs.js",
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: "umd",
    assetModuleFilename: "[name].[contenthash][ext]",
    clean: {
      keep: /es/,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [["transform-react-remove-prop-types", { mode: "wrap" }]],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  {
                    cleanupIDs: false,
                  },
                  {
                    removeUnknownsAndDefaults: false,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  externals: {
    "brown-university-styles": "brown-university-styles",
    react: "react",
    "styled-components": "styled-components",
    "prop-types": "prop-types",
    "react-fns": "react-fns",
    polished: "polished",
  },
  plugins: [
    new webpack.BannerPlugin(`brown-university-components v${version}`),
    new CopyWebpackPlugin({ patterns: ["src/assets/svg/background.svg"] }),
    runAnalyzer && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
};
