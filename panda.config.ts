import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import neutralColor from '@park-ui/panda-preset/colors/neutral';
import { createColorTokens } from './src/tokens/colors';
import { defineColorTokens } from './src/tokens/semanticColors';
import { newMildang } from './src/tokens/semanticColors/newMildang';

const colorSchema = 'mildang';

const parkUiPreset = createPreset({ accentColor: neutralColor, grayColor: neutralColor, radius: 'md' });

export default defineConfig({
  presets: ['@pandacss/preset-base', parkUiPreset],
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  importMap: '@ds-token-test/styled-system',
  outdir: 'styled-system',
  include: ['./src/app/legacy/**/*.{js,jsx,ts,tsx}', './src/app/new/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      tokens: {
        colors: createColorTokens({ colorSchema }),
      },
      semanticTokens: {
        colors: {
          ...defineColorTokens({ colorSchema }),
          ...newMildang,
        },
      },
    },
  },
});
