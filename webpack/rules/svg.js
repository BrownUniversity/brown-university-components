const path = require('path');

module.exports = {
  test: /\.svg$/,
  oneOf: [
    {
      include: path.resolve(__dirname, '../../src/svg/inline/'),
      use: {
        loader: 'react-svg-loader',
        options: {
          svgo: {
            plugins: [
              {
                cleanupIDs: false
              },
              {
                removeUnknownsAndDefaults: false
              }
            ]
          }
        }
      }
    },
    {
      exclude: path.resolve(__dirname, '../../src/svg/inline/'),
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    }
  ]
};
