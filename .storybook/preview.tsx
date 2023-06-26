import React from 'react';
import type { Preview } from '@storybook/react';
import { AppProvider } from '../src/context/AppContext';
import { withThemeByClassName } from '@storybook/addon-styling';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
