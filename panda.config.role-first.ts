import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import neutralColor from '@park-ui/panda-preset/colors/neutral';
import { createColorTokens } from './src/tokens/colors';
import { defineColorTokens } from './src/tokens/semanticColors';

const parkUiPreset = createPreset({ accentColor: neutralColor, grayColor: neutralColor, radius: 'md' });

export default defineConfig({
  presets: ['@pandacss/preset-base', parkUiPreset],
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  importMap: '@ds-token-test/styled-system-role-first',
  outdir: 'styled-system-role-first',
  include: ['./src/app/role-first/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      tokens: {
        colors: createColorTokens(),
      },
      semanticTokens: {
        colors: defineColorTokens(),
      },
    },
  },
});
