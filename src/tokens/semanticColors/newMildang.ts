/**
 * 신규 시맨틱 컬러 — property-first 구조.
 * bg.neutral.subtle, border.critical.default, icon.positive.strong, text.neutral.default
 *
 * role 매핑: primary→neutral, error→critical, success→positive, warning→caution, info→informative
 * variant 매핑: low→subtle, base→muted/default, high→emphasized, highest→solid/strong
 * state 패턴: ghost.DEFAULT / ghost.hover / ghost.pressed
 */
export const newMildang = {
  bg: {
    neutral: {
      subtle: { value: { base: '{colors.gray.light.100}', _dark: '{colors.gray.dark.100}' } },
      muted: { value: { base: '{colors.gray.light.200}', _dark: '{colors.gray.dark.200}' } },
      emphasized: { value: { base: '{colors.gray.light.300}', _dark: '{colors.gray.dark.300}' } },
      solid: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.dark.400}' } },
      ghost: {
        DEFAULT: { value: { base: '{colors.gray.light.a100}', _dark: '{colors.gray.dark.a100}' } },
        hover: { value: { base: '{colors.gray.light.a200}', _dark: '{colors.gray.dark.a200}' } },
        pressed: { value: { base: '{colors.gray.light.a300}', _dark: '{colors.gray.dark.a300}' } },
      },
    },
    critical: {
      subtle: { value: { base: '{colors.red.light.100}', _dark: '{colors.red.dark.100}' } },
      muted: { value: { base: '{colors.red.light.200}', _dark: '{colors.red.dark.400}' } },
      emphasized: { value: { base: '{colors.red.light.300}', _dark: '{colors.red.dark.300}' } },
      solid: { value: { base: '{colors.red.light.400}', _dark: '{colors.red.dark.200}' } },
      ghost: {
        DEFAULT: { value: { base: '{colors.red.light.a100}', _dark: '{colors.red.dark.a100}' } },
        hover: { value: { base: '{colors.red.light.a200}', _dark: '{colors.red.dark.a200}' } },
        pressed: { value: { base: '{colors.red.light.a300}', _dark: '{colors.red.dark.a300}' } },
      },
    },
    positive: {
      subtle: { value: { base: '{colors.green.light.100}', _dark: '{colors.green.dark.100}' } },
      muted: { value: { base: '{colors.green.light.200}', _dark: '{colors.green.dark.400}' } },
      emphasized: { value: { base: '{colors.green.light.300}', _dark: '{colors.green.dark.300}' } },
      solid: { value: { base: '{colors.green.light.400}', _dark: '{colors.green.dark.200}' } },
      ghost: {
        DEFAULT: { value: { base: '{colors.green.light.a100}', _dark: '{colors.green.dark.a100}' } },
        hover: { value: { base: '{colors.green.light.a200}', _dark: '{colors.green.dark.a200}' } },
        pressed: { value: { base: '{colors.green.light.a300}', _dark: '{colors.green.dark.a300}' } },
      },
    },
    caution: {
      subtle: { value: { base: '{colors.orange.light.100}', _dark: '{colors.orange.dark.100}' } },
      muted: { value: { base: '{colors.orange.light.200}', _dark: '{colors.orange.dark.400}' } },
      emphasized: { value: { base: '{colors.orange.light.300}', _dark: '{colors.orange.dark.300}' } },
      solid: { value: { base: '{colors.orange.light.400}', _dark: '{colors.orange.dark.200}' } },
      ghost: {
        DEFAULT: { value: { base: '{colors.orange.light.a100}', _dark: '{colors.orange.dark.a100}' } },
        hover: { value: { base: '{colors.orange.light.a200}', _dark: '{colors.orange.dark.a200}' } },
        pressed: { value: { base: '{colors.orange.light.a300}', _dark: '{colors.orange.dark.a300}' } },
      },
    },
    informative: {
      subtle: { value: { base: '{colors.blue.light.100}', _dark: '{colors.blue.dark.100}' } },
      muted: { value: { base: '{colors.blue.light.200}', _dark: '{colors.blue.dark.400}' } },
      emphasized: { value: { base: '{colors.blue.light.300}', _dark: '{colors.blue.dark.300}' } },
      solid: { value: { base: '{colors.blue.light.400}', _dark: '{colors.blue.dark.200}' } },
      ghost: {
        DEFAULT: { value: { base: '{colors.blue.light.a100}', _dark: '{colors.blue.dark.a100}' } },
        hover: { value: { base: '{colors.blue.light.a200}', _dark: '{colors.blue.dark.a200}' } },
        pressed: { value: { base: '{colors.blue.light.a300}', _dark: '{colors.blue.dark.a300}' } },
      },
    },
    brand: {
      subtle: { value: { base: '{colors.mildangPT.light.100}', _dark: '{colors.mildangPT.dark.100}' } },
      muted: { value: { base: '{colors.mildangPT.light.200}', _dark: '{colors.mildangPT.dark.400}' } },
      emphasized: { value: { base: '{colors.mildangPT.light.300}', _dark: '{colors.mildangPT.dark.300}' } },
      solid: { value: { base: '{colors.mildangPT.light.400}', _dark: '{colors.mildangPT.dark.200}' } },
      ghost: {
        DEFAULT: { value: { base: '{colors.mildangPT.light.a100}', _dark: '{colors.mildangPT.dark.a100}' } },
        hover: { value: { base: '{colors.mildangPT.light.a200}', _dark: '{colors.mildangPT.dark.a200}' } },
        pressed: { value: { base: '{colors.mildangPT.light.a300}', _dark: '{colors.mildangPT.dark.a300}' } },
      },
    },
  },

  border: {
    neutral: {
      subtle: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.dark.400}' } },
      default: { value: { base: '{colors.gray.light.500}', _dark: '{colors.gray.dark.500}' } },
      emphasized: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      strong: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    critical: {
      subtle: { value: { base: '{colors.red.light.400}', _dark: '{colors.red.dark.200}' } },
      default: { value: { base: '{colors.red.light.500}', _dark: '{colors.red.dark.500}' } },
      emphasized: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      strong: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    positive: {
      subtle: { value: { base: '{colors.green.light.400}', _dark: '{colors.green.dark.200}' } },
      default: { value: { base: '{colors.green.light.500}', _dark: '{colors.green.dark.500}' } },
      emphasized: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      strong: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    caution: {
      subtle: { value: { base: '{colors.orange.light.400}', _dark: '{colors.orange.dark.200}' } },
      default: { value: { base: '{colors.orange.light.500}', _dark: '{colors.orange.dark.500}' } },
      emphasized: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      strong: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    informative: {
      subtle: { value: { base: '{colors.blue.light.400}', _dark: '{colors.blue.dark.200}' } },
      default: { value: { base: '{colors.blue.light.500}', _dark: '{colors.blue.dark.500}' } },
      emphasized: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      strong: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    brand: {
      subtle: { value: { base: '{colors.mildangPT.light.400}', _dark: '{colors.mildangPT.dark.200}' } },
      default: { value: { base: '{colors.mildangPT.light.500}', _dark: '{colors.mildangPT.dark.500}' } },
      emphasized: { value: { base: '{colors.mildangPT.light.600}', _dark: '{colors.mildangPT.dark.600}' } },
      strong: { value: { base: '{colors.mildangPT.light.700}', _dark: '{colors.mildangPT.dark.900}' } },
    },
  },

  icon: {
    neutral: {
      subtle: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      default: { value: { base: '{colors.gray.light.900}', _dark: '{colors.gray.dark.900}' } },
      strong: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    critical: {
      subtle: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      default: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    positive: {
      subtle: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      default: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    caution: {
      subtle: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      default: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    informative: {
      subtle: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      default: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    brand: {
      subtle: { value: { base: '{colors.mildangPT.light.600}', _dark: '{colors.mildangPT.dark.600}' } },
      default: { value: { base: '{colors.mildangPT.light.700}', _dark: '{colors.mildangPT.dark.900}' } },
    },
  },

  text: {
    neutral: {
      subtle: { value: { base: '{colors.gray.light.1000}', _dark: '{colors.gray.dark.1000}' } },
      default: { value: { base: '{colors.gray.light.1100}', _dark: '{colors.gray.dark.1100}' } },
      strong: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    critical: {
      default: { value: { base: '{colors.red.light.1000}', _dark: '{colors.red.dark.1000}' } },
    },
    positive: {
      default: { value: { base: '{colors.green.light.1000}', _dark: '{colors.green.dark.1000}' } },
    },
    caution: {
      default: { value: { base: '{colors.orange.light.1000}', _dark: '{colors.orange.dark.1000}' } },
    },
    informative: {
      default: { value: { base: '{colors.blue.light.1000}', _dark: '{colors.blue.dark.1000}' } },
    },
    brand: {
      default: { value: { base: '{colors.mildangPT.light.1000}', _dark: '{colors.mildangPT.dark.1000}' } },
    },
  },
} as const;
