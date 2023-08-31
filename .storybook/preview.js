/** @type { import('@storybook/react').Preview } */

import "../packages/components/index.css";
import "../packages/components/styled-system/styles.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
