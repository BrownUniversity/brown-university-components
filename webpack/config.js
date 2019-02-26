const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const svgRule = require("./rules/svg");
const { version } = require("../package.json");

const runAnalyzer = process.env.RUN_WEBPACK_BUNDLE_ANALYZER;

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: "brown-university-theme.commonjs.js",
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [["transform-react-remove-prop-types", { mode: "wrap" }]]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      svgRule,
      {
        test: /\.woff$/,
        use: "file-loader?name=[name].[hash].[ext]"
      }
    ]
  },
  externals: {
    react: "react",
    "styled-components": "styled-components",
    "prop-types": "prop-types",
    "react-fns": "react-fns",
    polished: "polished"
  },
  plugins: [
    new webpack.BannerPlugin(`brown-university-theme v${version}`),
    new CleanWebpackPlugin(["dist"], {
      root: `${__dirname}/../`,
      exclude: ["es"]
    }),
    new CopyWebpackPlugin(["src/svg/background.svg"]),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    runAnalyzer && new BundleAnalyzerPlugin()
  ].filter(Boolean)
};
