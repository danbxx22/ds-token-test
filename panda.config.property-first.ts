import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import neutralColor from '@park-ui/panda-preset/colors/neutral';
import { createColorTokens } from './src/tokens/colors';
import { mildang } from './src/tokens/semanticColors/property-first/mildang';

const parkUiPreset = createPreset({ accentColor: neutralColor, grayColor: neutralColor, radius: 'md' });

export default defineConfig({
  presets: ['@pandacss/preset-base', parkUiPreset],
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  importMap: '@ds-token-test/styled-system-property-first',
  outdir: 'styled-system-property-first',
  include: ['./src/app/property-first/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      tokens: {
        colors: createColorTokens(),
      },
      semanticTokens: {
        colors: mildang,
      },
    },
  },
});
