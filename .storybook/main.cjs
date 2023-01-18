module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", 'storybook-addon-react-docgen'],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config) {
    return {
      ...config,
      css: {
        modules: {
          generateScopedName: '[sha512:contenthash:base32:8]',
          hashPrefix: 'plana-ui'
        }
      },
    };
  },
};
