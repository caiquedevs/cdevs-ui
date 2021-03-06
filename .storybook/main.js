module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.js',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-storysource',
    'storybook-dark-mode/register',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
};
