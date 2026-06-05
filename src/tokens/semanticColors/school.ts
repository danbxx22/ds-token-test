import { buildGradient } from './gradient';

/**
 * school 테마 시맨틱 컬러(primary + inverse + brand + status + gradient role).
 * 구버전 numeric scale은 `./legacy/school.ts`에 있으며 index.ts에서 병합된다.
 */
export const school = {
  gradient: buildGradient('darkable'),
  primary: {
    bg: {
      low: { value: { base: '{colors.gray.light.100}', _dark: '{colors.gray.dark.100}' } },
      base: { value: { base: '{colors.gray.light.200}', _dark: '{colors.gray.dark.200}' } },
      high: { value: { base: '{colors.gray.light.300}', _dark: '{colors.gray.dark.300}' } },
      highest: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.dark.400}' } },
    },
    border: {
      low: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.dark.400}' } },
      base: { value: { base: '{colors.gray.light.500}', _dark: '{colors.gray.dark.500}' } },
      high: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      highest: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    fg: {
      lowest: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      low: { value: { base: '{colors.gray.light.900}', _dark: '{colors.gray.dark.900}' } },
      base: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.gray.light.a100}', _dark: '{colors.gray.dark.a100}' } },
      high: { value: { base: '{colors.gray.light.a200}', _dark: '{colors.gray.dark.a200}' } },
      highest: { value: { base: '{colors.gray.light.a300}', _dark: '{colors.gray.dark.a300}' } },
    },
    text: {
      lowest: { value: { base: '{colors.gray.light.1000}', _dark: '{colors.gray.dark.1000}' } },
      low: { value: { base: '{colors.gray.light.1100}', _dark: '{colors.gray.dark.1100}' } },
      base: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
  },
  inverse: {
    bg: {
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
    },
    text: {
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
    },
  },
  success: {
    bg: {
      low: { value: { base: '{colors.green.light.100}', _dark: '{colors.green.dark.100}' } },
      base: { value: { base: '{colors.green.light.200}', _dark: '{colors.green.dark.400}' } },
      high: { value: { base: '{colors.green.light.300}', _dark: '{colors.green.dark.300}' } },
      highest: { value: { base: '{colors.green.light.400}', _dark: '{colors.green.dark.200}' } },
    },
    border: {
      low: { value: { base: '{colors.green.light.400}', _dark: '{colors.green.dark.200}' } },
      base: { value: { base: '{colors.green.light.500}', _dark: '{colors.green.dark.500}' } },
      high: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      highest: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    fg: {
      low: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      base: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.green.light.a100}', _dark: '{colors.green.dark.a100}' } },
      high: { value: { base: '{colors.green.light.a200}', _dark: '{colors.green.dark.a200}' } },
      highest: { value: { base: '{colors.green.light.a300}', _dark: '{colors.green.dark.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.green.light.1000}', _dark: '{colors.green.dark.1000}' } },
    },
  },
  error: {
    bg: {
      low: { value: { base: '{colors.red.light.100}', _dark: '{colors.red.dark.100}' } },
      base: { value: { base: '{colors.red.light.200}', _dark: '{colors.red.dark.400}' } },
      high: { value: { base: '{colors.red.light.300}', _dark: '{colors.red.dark.300}' } },
      highest: { value: { base: '{colors.red.light.400}', _dark: '{colors.red.dark.200}' } },
    },
    border: {
      low: { value: { base: '{colors.red.light.400}', _dark: '{colors.red.dark.200}' } },
      base: { value: { base: '{colors.red.light.500}', _dark: '{colors.red.dark.500}' } },
      high: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      highest: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    fg: {
      low: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      base: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.red.light.a100}', _dark: '{colors.red.dark.a100}' } },
      high: { value: { base: '{colors.red.light.a200}', _dark: '{colors.red.dark.a200}' } },
      highest: { value: { base: '{colors.red.light.a300}', _dark: '{colors.red.dark.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.red.light.1000}', _dark: '{colors.red.dark.1000}' } },
    },
  },
  warning: {
    bg: {
      low: { value: { base: '{colors.orange.light.100}', _dark: '{colors.orange.dark.100}' } },
      base: { value: { base: '{colors.orange.light.200}', _dark: '{colors.orange.dark.400}' } },
      high: { value: { base: '{colors.orange.light.300}', _dark: '{colors.orange.dark.300}' } },
      highest: { value: { base: '{colors.orange.light.400}', _dark: '{colors.orange.dark.200}' } },
    },
    border: {
      low: { value: { base: '{colors.orange.light.400}', _dark: '{colors.orange.dark.200}' } },
      base: { value: { base: '{colors.orange.light.500}', _dark: '{colors.orange.dark.500}' } },
      high: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      highest: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    fg: {
      lowest: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      low: { value: { base: '{colors.orange.light.650}', _dark: '{colors.orange.dark.1000}' } },
      base: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.orange.light.a100}', _dark: '{colors.orange.dark.a100}' } },
      high: { value: { base: '{colors.orange.light.a200}', _dark: '{colors.orange.dark.a200}' } },
      highest: { value: { base: '{colors.orange.light.a300}', _dark: '{colors.orange.dark.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.orange.light.1000}', _dark: '{colors.orange.dark.1000}' } },
    },
  },
  info: {
    bg: {
      low: { value: { base: '{colors.blue.light.100}', _dark: '{colors.blue.dark.100}' } },
      base: { value: { base: '{colors.blue.light.200}', _dark: '{colors.blue.dark.400}' } },
      high: { value: { base: '{colors.blue.light.300}', _dark: '{colors.blue.dark.300}' } },
      highest: { value: { base: '{colors.blue.light.400}', _dark: '{colors.blue.dark.200}' } },
    },
    border: {
      low: { value: { base: '{colors.blue.light.400}', _dark: '{colors.blue.dark.200}' } },
      base: { value: { base: '{colors.blue.light.500}', _dark: '{colors.blue.dark.500}' } },
      high: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      highest: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    fg: {
      low: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      base: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.blue.light.a100}', _dark: '{colors.blue.dark.a100}' } },
      high: { value: { base: '{colors.blue.light.a200}', _dark: '{colors.blue.dark.a200}' } },
      highest: { value: { base: '{colors.blue.light.a300}', _dark: '{colors.blue.dark.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.blue.light.1000}', _dark: '{colors.blue.dark.1000}' } },
    },
  },
  brand: {
    bg: {
      low: { value: { base: '{colors.schoolPT.light.100}', _dark: '{colors.schoolPT.dark.100}' } },
      base: { value: { base: '{colors.schoolPT.light.200}', _dark: '{colors.schoolPT.dark.400}' } },
      high: { value: { base: '{colors.schoolPT.light.300}', _dark: '{colors.schoolPT.dark.300}' } },
      highest: { value: { base: '{colors.schoolPT.light.400}', _dark: '{colors.schoolPT.dark.200}' } },
    },
    border: {
      low: { value: { base: '{colors.schoolPT.light.400}', _dark: '{colors.schoolPT.dark.200}' } },
      base: { value: { base: '{colors.schoolPT.light.500}', _dark: '{colors.schoolPT.dark.500}' } },
      high: { value: { base: '{colors.schoolPT.light.600}', _dark: '{colors.schoolPT.dark.600}' } },
      highest: { value: { base: '{colors.schoolPT.light.700}', _dark: '{colors.schoolPT.dark.900}' } },
    },
    fg: {
      low: { value: { base: '{colors.schoolPT.light.600}', _dark: '{colors.schoolPT.dark.600}' } },
      base: { value: { base: '{colors.schoolPT.light.700}', _dark: '{colors.schoolPT.dark.900}' } },
    },
    ghostBg: {
      base: { value: { base: '{colors.schoolPT.light.a100}', _dark: '{colors.schoolPT.dark.a100}' } },
      high: { value: { base: '{colors.schoolPT.light.a200}', _dark: '{colors.schoolPT.dark.a200}' } },
      highest: { value: { base: '{colors.schoolPT.light.a300}', _dark: '{colors.schoolPT.dark.a300}' } },
    },
    text: {
      base: { value: { base: '{colors.schoolPT.light.1000}', _dark: '{colors.schoolPT.dark.1000}' } },
    },
  },
} as const;
