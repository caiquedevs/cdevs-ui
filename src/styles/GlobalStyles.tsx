import React from 'react';
import { Global, css } from '@storybook/theming';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;

      font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }
  }
`;

export const GlobalStyle = () => <Global styles={globalStyles} />;
