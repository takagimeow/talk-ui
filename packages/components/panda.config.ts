import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ['@pandacss/dev/presets', '@talk-ui/presets'],

  // Where to look for your css declarations
  include: [
    './ui/**/*.{js,jsx,ts,tsx}',
    './ui/**/*.stories.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
  outExtension: 'js',
});
