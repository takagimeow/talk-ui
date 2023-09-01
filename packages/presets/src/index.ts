import { definePreset } from '@pandacss/dev';
import { colors } from './theme/tokens/colors';
import { recipes } from './theme/recipes';

const preset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors,
      },
      recipes,
    },
  },
});

export default preset;
