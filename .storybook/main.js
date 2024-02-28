export default {
  stories: ["../stories/*.stories.@(js)"],

  framework: { name: "@storybook/react-webpack5" },

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
  ],

  docs: {
    autodocs: true,
  },
};
