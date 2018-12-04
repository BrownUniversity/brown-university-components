const svgRules = require('../webpack.utils/rules/svg');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  });

  storybookBaseConfig.module.rules.push(svgRules);

  storybookBaseConfig.module.rules.push({
    test: /\.woff$/,
    use: 'file-loader?name=[name].[ext]'
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(jpg|png)$/,
    loader: 'url-loader'
  });

  return storybookBaseConfig;
};
