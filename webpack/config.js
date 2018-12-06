const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const svgRules = require('./rules/svg');
const { version } = require('../package.json');

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'brown-university-theme.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [['transform-react-remove-prop-types', { mode: 'wrap' }]]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      svgRules,
      {
        test: /\.woff$/,
        use: 'file-loader?name=[name].[hash].[ext]'
      }
    ]
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
    'prop-types': 'prop-types',
    'react-fns': 'react-fns',
    polished: 'polished'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.BannerPlugin(`brown-university-theme v${version}`),
    new BundleAnalyzerPlugin()
  ]
};
