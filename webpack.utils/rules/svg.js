module.exports = {
  test: /\.svg$/,
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
};
