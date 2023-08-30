import { definePreset } from '@pandacss/dev';
import { colors } from './theme/tokens/colors';

const preset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors,
      },
    },
  },
});

export default preset;
