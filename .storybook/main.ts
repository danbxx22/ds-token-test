import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/nextjs-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/nextjs-vite",
  viteFinal: async (viteConfig) => {
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      '@ds-token-test/styled-system': path.resolve(__dirname, '../styled-system'),
      '@ds-token-test/styled-system-role-first': path.resolve(__dirname, '../styled-system-role-first'),
      '@ds-token-test/styled-system-property-first': path.resolve(__dirname, '../styled-system-property-first'),
    };
    return viteConfig;
  },
};
export default config;