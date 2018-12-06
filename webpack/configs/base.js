const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const svgRules = require('../rules/svg');
const { version } = require('../../package.json');

module.exports = {
  entry: path.join(__dirname, '../../src/index.js'),
  module: {
    rules: [
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
    new webpack.BannerPlugin(`brown-university-theme v${version}`)
  ]
};
