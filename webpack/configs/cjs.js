const path = require('path');
const merge = require('webpack-merge');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const baseConfig = require('./base.js');

module.exports = merge(baseConfig, {
  mode: 'none',
  output: {
    filename: 'brown-university-theme.cjs.js',
    libraryTarget: 'commonjs',
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
            presets: ['@babel/preset-env', '@babel/preset-react']
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
            source: 'dist/brown-university-theme.cjs.js',
            destination: 'webpack/stats'
          }
        ]
      }
    }),
    new StatsWriterPlugin({
      filename: '../webpack/stats/cjs.json',
      fields: null
    })
  ]
});
