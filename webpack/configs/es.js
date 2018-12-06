const path = require('path');
const merge = require('webpack-merge');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const baseConfig = require('./base.js');

module.exports = merge(baseConfig, {
  mode: 'none',
  output: {
    filename: 'brown-university-theme.es.js',
    path: path.resolve(__dirname, '../../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: [
              '@babel/plugin-proposal-class-properties',
              ['transform-react-remove-prop-types', { mode: 'wrap' }]
            ],
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            source: 'dist/brown-university-theme.es.js',
            destination: 'webpack/stats'
          }
        ]
      }
    }),
    new StatsWriterPlugin({
      filename: '../webpack/stats/es.json',
      fields: null
    })
  ]
});
