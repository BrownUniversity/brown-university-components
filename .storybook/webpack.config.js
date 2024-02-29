module.exports = ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules.map((rule) => {
          if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\/inline\// };
          }

          return rule;
        }),
        {
          test: /\.svg$/,
          include: /\/inline\//,
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
  };
};
