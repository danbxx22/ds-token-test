import { buildGradient } from './gradient';

/**
 * GOES 테마 시맨틱 컬러(primary + inverse + status + brand + gradient role).
 * 구버전 numeric scale은 `./legacy/goes.ts`에 있으며 index.ts에서 병합된다.
 */
export const goes = {
  gradient: buildGradient('static'),
  primary: {
    bg: {
      low: { value: { base: '{colors.gray.light.100}', _dark: '{colors.gray.light.100}' } },
      base: { value: { base: '{colors.gray.light.200}', _dark: '{colors.gray.light.200}' } },
      high: { value: { base: '{colors.gray.light.300}', _dark: '{colors.gray.light.300}' } },
      highest: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.light.400}' } },
    },
    border: {
      low: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.light.400}' } },
      base: { value: { base: '{colors.gray.light.500}', _dark: '{colors.gray.light.500}' } },
      high: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.light.600}' } },
      highest: { value: { base: '{colors.goes.light.800}', _dark: '{colors.goes.light.800}' } },
    },
    fg: {
      lowest: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.light.600}' } },
      low: { value: { base: '{colors.gray.light.900}', _dark: '{colors.gray.light.900}' } },
      base: { value: { base: '{colors.goes.light.800}', _dark: '{colors.goes.light.800}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.goes.light.a100}', _dark: '{colors.goes.light.a100}' } },
      high: { value: { base: '{colors.goes.light.a200}', _dark: '{colors.goes.light.a200}' } },
      highest: { value: { base: '{colors.goes.light.a300}', _dark: '{colors.goes.light.a300}' } },
    },
    text: {
      lowest: { value: { base: '{colors.gray.light.1000}', _dark: '{colors.gray.light.1000}' } },
      low: { value: { base: '{colors.gray.light.1100}', _dark: '{colors.gray.light.1100}' } },
      base: { value: { base: '{colors.goes.light.800}', _dark: '{colors.goes.light.800}' } },
    },
  },
  inverse: {
    bg: {
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.white.a1300}' } },
    },
    text: {
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.white.a1300}' } },
    },
  },
  success: {
    bg: {
      low: { value: { base: '{colors.goes.light.100}', _dark: '{colors.goes.light.100}' } },
      base: { value: { base: '{colors.goes.light.200}', _dark: '{colors.goes.light.200}' } },
      high: { value: { base: '{colors.goes.light.300}', _dark: '{colors.goes.light.300}' } },
      highest: { value: { base: '{colors.goes.light.400}', _dark: '{colors.goes.light.400}' } },
    },
    border: {
      low: { value: { base: '{colors.goes.light.400}', _dark: '{colors.goes.light.400}' } },
      base: { value: { base: '{colors.goes.light.500}', _dark: '{colors.goes.light.500}' } },
      high: { value: { base: '{colors.goes.light.600}', _dark: '{colors.goes.light.600}' } },
      highest: { value: { base: '{colors.goes.light.700}', _dark: '{colors.goes.light.700}' } },
    },
    fg: {
      low: { value: { base: '{colors.goes.light.600}', _dark: '{colors.goes.light.600}' } },
      base: { value: { base: '{colors.goes.light.700}', _dark: '{colors.goes.light.700}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.goes.light.a100}', _dark: '{colors.goes.light.a100}' } },
      high: { value: { base: '{colors.goes.light.a200}', _dark: '{colors.goes.light.a200}' } },
      highest: { value: { base: '{colors.goes.light.a300}', _dark: '{colors.goes.light.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.goes.light.800}', _dark: '{colors.goes.light.800}' } },
    },
  },
  error: {
    bg: {
      low: { value: { base: '{colors.goes.red.light.100}', _dark: '{colors.goes.red.light.100}' } },
      base: { value: { base: '{colors.goes.red.light.200}', _dark: '{colors.goes.red.light.200}' } },
      high: { value: { base: '{colors.goes.red.light.300}', _dark: '{colors.goes.red.light.300}' } },
      highest: { value: { base: '{colors.goes.red.light.400}', _dark: '{colors.goes.red.light.400}' } },
    },
    border: {
      low: { value: { base: '{colors.goes.red.light.400}', _dark: '{colors.goes.red.light.400}' } },
      base: { value: { base: '{colors.goes.red.light.500}', _dark: '{colors.goes.red.light.500}' } },
      high: { value: { base: '{colors.goes.red.light.600}', _dark: '{colors.goes.red.light.600}' } },
      highest: { value: { base: '{colors.goes.red.light.700}', _dark: '{colors.goes.red.light.700}' } },
    },
    fg: {
      low: { value: { base: '{colors.goes.red.light.600}', _dark: '{colors.goes.red.light.600}' } },
      base: { value: { base: '{colors.goes.red.light.700}', _dark: '{colors.goes.red.light.700}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.goes.red.light.a100}', _dark: '{colors.goes.red.light.a100}' } },
      high: { value: { base: '{colors.goes.red.light.a200}', _dark: '{colors.goes.red.light.a200}' } },
      highest: { value: { base: '{colors.goes.red.light.a300}', _dark: '{colors.goes.red.light.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.goes.red.light.1000}', _dark: '{colors.goes.red.light.1000}' } },
    },
  },
  warning: {
    bg: {
      low: { value: { base: '{colors.goes.orange.light.100}', _dark: '{colors.goes.orange.light.100}' } },
      base: { value: { base: '{colors.goes.orange.light.200}', _dark: '{colors.goes.orange.light.200}' } },
      high: { value: { base: '{colors.goes.orange.light.300}', _dark: '{colors.goes.orange.light.300}' } },
      highest: { value: { base: '{colors.goes.orange.light.400}', _dark: '{colors.goes.orange.light.400}' } },
    },
    border: {
      low: { value: { base: '{colors.goes.orange.light.400}', _dark: '{colors.goes.orange.light.400}' } },
      base: { value: { base: '{colors.goes.orange.light.500}', _dark: '{colors.goes.orange.light.500}' } },
      high: { value: { base: '{colors.goes.orange.light.600}', _dark: '{colors.goes.orange.light.600}' } },
      highest: { value: { base: '{colors.goes.orange.light.700}', _dark: '{colors.goes.orange.light.700}' } },
    },
    fg: {
      lowest: { value: { base: '{colors.goes.orange.light.600}', _dark: '{colors.goes.orange.light.600}' } },
      low: { value: { base: '{colors.goes.orange.light.650}', _dark: '{colors.goes.orange.light.650}' } },
      base: { value: { base: '{colors.goes.orange.light.700}', _dark: '{colors.goes.orange.light.700}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.goes.orange.light.a100}', _dark: '{colors.goes.orange.light.a100}' } },
      high: { value: { base: '{colors.goes.orange.light.a200}', _dark: '{colors.goes.orange.light.a200}' } },
      highest: { value: { base: '{colors.goes.orange.light.a300}', _dark: '{colors.goes.orange.light.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.goes.orange.light.1000}', _dark: '{colors.goes.orange.light.1000}' } },
    },
  },
  info: {
    bg: {
      low: { value: { base: '{colors.goes.violet.light.100}', _dark: '{colors.goes.violet.light.100}' } },
      base: { value: { base: '{colors.goes.violet.light.200}', _dark: '{colors.goes.violet.light.200}' } },
      high: { value: { base: '{colors.goes.violet.light.300}', _dark: '{colors.goes.violet.light.300}' } },
      highest: { value: { base: '{colors.goes.violet.light.400}', _dark: '{colors.goes.violet.light.400}' } },
    },
    border: {
      low: { value: { base: '{colors.goes.violet.light.400}', _dark: '{colors.goes.violet.light.400}' } },
      base: { value: { base: '{colors.goes.violet.light.500}', _dark: '{colors.goes.violet.light.500}' } },
      high: { value: { base: '{colors.goes.violet.light.600}', _dark: '{colors.goes.violet.light.600}' } },
      highest: { value: { base: '{colors.goes.violet.light.700}', _dark: '{colors.goes.violet.light.700}' } },
    },
    fg: {
      low: { value: { base: '{colors.goes.violet.light.600}', _dark: '{colors.goes.violet.light.600}' } },
      base: { value: { base: '{colors.goes.violet.light.700}', _dark: '{colors.goes.violet.light.700}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.goes.violet.light.a100}', _dark: '{colors.goes.violet.light.a100}' } },
      high: { value: { base: '{colors.goes.violet.light.a200}', _dark: '{colors.goes.violet.light.a200}' } },
      highest: { value: { base: '{colors.goes.violet.light.a300}', _dark: '{colors.goes.violet.light.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.goes.violet.light.1000}', _dark: '{colors.goes.violet.light.1000}' } },
    },
  },
  brand: {
    bg: {
      low: { value: { base: '{colors.goes.light.100}', _dark: '{colors.goes.light.100}' } },
      base: { value: { base: '{colors.goes.light.200}', _dark: '{colors.goes.light.200}' } },
      high: { value: { base: '{colors.goes.light.300}', _dark: '{colors.goes.light.300}' } },
      highest: { value: { base: '{colors.goes.light.400}', _dark: '{colors.goes.light.400}' } },
    },
    border: {
      low: { value: { base: '{colors.goes.light.400}', _dark: '{colors.goes.light.400}' } },
      base: { value: { base: '{colors.goes.light.500}', _dark: '{colors.goes.light.500}' } },
      high: { value: { base: '{colors.goes.light.600}', _dark: '{colors.goes.light.600}' } },
      highest: { value: { base: '{colors.goes.light.700}', _dark: '{colors.goes.light.700}' } },
    },
    fg: {
      low: { value: { base: '{colors.goes.light.600}', _dark: '{colors.goes.light.600}' } },
      base: { value: { base: '{colors.goes.light.700}', _dark: '{colors.goes.light.700}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.goes.light.a100}', _dark: '{colors.goes.light.a100}' } },
      high: { value: { base: '{colors.goes.light.a200}', _dark: '{colors.goes.light.a200}' } },
      highest: { value: { base: '{colors.goes.light.a300}', _dark: '{colors.goes.light.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.goes.light.1000}', _dark: '{colors.goes.light.1000}' } },
    },
  },
} as const;
