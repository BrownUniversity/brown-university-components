module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  });

  storybookBaseConfig.module.rules.push({
    test: /\.svg$/,
    loader: 'react-svg-loader'
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(jpg|png)$/,
    loader: 'url-loader'
  });

  return storybookBaseConfig;
};
