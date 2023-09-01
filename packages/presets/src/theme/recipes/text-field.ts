import { defineRecipe } from '@pandacss/dev';

export const textField = defineRecipe({
  className: 'text-field',
  description: 'A text field.',
  base: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '1.5px 1.5px 8px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
  },
});
