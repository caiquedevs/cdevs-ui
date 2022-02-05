import React from 'react';

import { GlobalStyle } from '../src/styles/GlobalStyles';

export const parameters = {
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle];

// import { configure, addParameters, addDecorator } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import centered from '@storybook/addon-centered/react';

// import theme from './theme';

// import './reset.css';

// addParameters({
//   options: {
//     theme,
//   },
// });

// addDecorator(withInfo);
// addDecorator(centered);

// // Import all stories
// configure(require.context('../stories', true, /\.stories\.tsx$/), module);
