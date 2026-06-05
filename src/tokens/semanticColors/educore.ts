import { buildGradient } from './gradient';

/**
 * educore 테마 시맨틱 컬러(primary + inverse + brand + status + gradient role).
 * primitive key/scale은 기존 DS 체계를 유지하고, `colorSchema: 'educore'`에서 값만 Educore palette로 교체한다.
 */
export const educore = {
  gradient: buildGradient('darkable'),
  primary: {
    bg: {
      // base: #ffffff
      low: { value: { base: '{colors.gray.light.100}', _dark: '{colors.gray.dark.100}' } },
      // base: #f9fafb
      base: { value: { base: '{colors.gray.light.200}', _dark: '{colors.gray.dark.200}' } },
      // base: #f2f4f8
      high: { value: { base: '{colors.gray.light.300}', _dark: '{colors.gray.dark.300}' } },
      // base: #dde1e6
      highest: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.dark.400}' } },
    },
    border: {
      // base: #dde1e6
      low: { value: { base: '{colors.gray.light.400}', _dark: '{colors.gray.dark.400}' } },
      // base: #c1c7cd, DDE1E6 는 현재 토큰 체계에 없어서 하드코딩
      base: { value: { base: '#DDE1E6', _dark: '{colors.gray.dark.500}' } },
      // base: #a2a9b0
      high: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      // base: #121619
      highest: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    fg: {
      // base: #a2a9b0
      lowest: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      // base: #4d5358
      low: { value: { base: '{colors.gray.light.900}', _dark: '{colors.gray.dark.900}' } },
      // base: #121619
      base: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    ghostBg: {
      // base: rgba(18, 22, 25, 0.06)
      base: { value: { base: '{colors.gray.light.a100}', _dark: '{colors.gray.dark.a100}' } },
      // base: rgba(18, 22, 25, 0.09)
      high: { value: { base: '{colors.gray.light.a200}', _dark: '{colors.gray.dark.a200}' } },
      // base: rgba(18, 22, 25, 0.12)
      highest: { value: { base: '{colors.gray.light.a300}', _dark: '{colors.gray.dark.a300}' } },
    },
    text: {
      // lower -> lowest으로
      // base: #4d5358
      lowest: { value: { base: '{colors.gray.light.900}', _dark: '{colors.gray.dark.900}' } },
      // base: #21292a
      low: { value: { base: '{colors.gray.light.1100}', _dark: '{colors.gray.dark.1100}' } },
      // base: #121619,#343A3F, #000000 도 체계상 일치하지 않아 이거 사용
      base: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
  },
  inverse: {
    bg: {
      // base: #ffffff, _dark: #000000
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
    },
    text: {
      // base: #ffffff, _dark: #000000
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
    },
  },
  success: {
    bg: {
      // base: #eef8f1
      low: { value: { base: '{colors.green.light.100}', _dark: '{colors.green.dark.100}' } },
      // base: #d2ecda
      base: { value: { base: '{colors.green.light.200}', _dark: '{colors.green.dark.400}' } },
      // base: #a9dcb9
      high: { value: { base: '{colors.green.light.300}', _dark: '{colors.green.dark.300}' } },
      // base: #73ce94
      highest: { value: { base: '{colors.green.light.400}', _dark: '{colors.green.dark.200}' } },
    },
    border: {
      // base: #73ce94
      low: { value: { base: '{colors.green.light.400}', _dark: '{colors.green.dark.200}' } },
      // base: #4bca81
      base: { value: { base: '{colors.green.light.500}', _dark: '{colors.green.dark.500}' } },
      // base: #1bbd6e
      high: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      // base: #009952
      highest: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    fg: {
      // base: #1bbd6e
      low: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      // base: #009952
      base: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    ghostBg: {
      // base: rgba(27, 189, 110, 0.06)
      base: { value: { base: '{colors.green.light.a100}', _dark: '{colors.green.dark.a100}' } },
      // base: rgba(27, 189, 110, 0.09)
      high: { value: { base: '{colors.green.light.a200}', _dark: '{colors.green.dark.a200}' } },
      // base: rgba(27, 189, 110, 0.12)
      highest: { value: { base: '{colors.green.light.a300}', _dark: '{colors.green.dark.a300}' } },
    },
    text: {
      // base: #03200f
      base: { value: { base: '{colors.green.light.1000}', _dark: '{colors.green.dark.1000}' } },
    },
  },
  error: {
    bg: {
      // base: #fff0ee
      low: { value: { base: '{colors.red.light.100}', _dark: '{colors.red.dark.100}' } },
      // base: #ffdad6
      base: { value: { base: '{colors.red.light.200}', _dark: '{colors.red.dark.400}' } },
      // base: #ffada6
      high: { value: { base: '{colors.red.light.300}', _dark: '{colors.red.dark.300}' } },
      // base: #ff7566
      highest: { value: { base: '{colors.red.light.400}', _dark: '{colors.red.dark.200}' } },
    },
    border: {
      // base: #ff7566
      low: { value: { base: '{colors.red.light.400}', _dark: '{colors.red.dark.200}' } },
      // base: #ff4433
      base: { value: { base: '{colors.red.light.500}', _dark: '{colors.red.dark.500}' } },
      // base: #e51f00
      high: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      // base: #b51800
      highest: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    fg: {
      // base: #e51f00
      low: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      // base: #b51800
      base: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    ghostBg: {
      // base: rgba(229, 31, 0, 0.06)
      base: { value: { base: '{colors.red.light.a100}', _dark: '{colors.red.dark.a100}' } },
      // base: rgba(229, 31, 0, 0.09)
      high: { value: { base: '{colors.red.light.a200}', _dark: '{colors.red.dark.a200}' } },
      // base: rgba(229, 31, 0, 0.12)
      highest: { value: { base: '{colors.red.light.a300}', _dark: '{colors.red.dark.a300}' } },
    },
    text: {
      // base: #b51800
      base: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
  },
  warning: {
    bg: {
      // base: #fefaef
      low: { value: { base: '{colors.yellow.light.100}', _dark: '{colors.yellow.dark.100}' } },
      // base: #fef1d0
      base: { value: { base: '{colors.yellow.light.200}', _dark: '{colors.yellow.dark.400}' } },
      // base: #ffe7a4
      high: { value: { base: '{colors.yellow.light.300}', _dark: '{colors.yellow.dark.300}' } },
      // base: #ffdb74
      highest: { value: { base: '{colors.yellow.light.400}', _dark: '{colors.yellow.dark.200}' } },
    },
    border: {
      // base: #ffdb74
      low: { value: { base: '{colors.yellow.light.400}', _dark: '{colors.yellow.dark.200}' } },
      // base: #ffd34d
      base: { value: { base: '{colors.yellow.light.500}', _dark: '{colors.yellow.dark.500}' } },
      // base: #ffcb2e
      high: { value: { base: '{colors.yellow.light.600}', _dark: '{colors.yellow.dark.600}' } },
      // base: #d9a600
      highest: { value: { base: '{colors.yellow.light.700}', _dark: '{colors.yellow.dark.900}' } },
    },
    fg: {
      // base: #ffcb2e
      lowest: { value: { base: '{colors.yellow.light.600}', _dark: '{colors.yellow.dark.600}' } },
      // base: #d9a600
      low: { value: { base: '{colors.yellow.light.700}', _dark: '{colors.yellow.dark.1000}' } },
      // base: #d9a600
      base: { value: { base: '{colors.yellow.light.700}', _dark: '{colors.yellow.dark.900}' } },
    },
    ghostBg: {
      // base: rgba(255, 203, 46, 0.06)
      base: { value: { base: '{colors.yellow.light.a100}', _dark: '{colors.yellow.dark.a100}' } },
      // base: rgba(255, 203, 46, 0.09)
      high: { value: { base: '{colors.yellow.light.a200}', _dark: '{colors.yellow.dark.a200}' } },
      // base: rgba(255, 203, 46, 0.12)
      highest: { value: { base: '{colors.yellow.light.a300}', _dark: '{colors.yellow.dark.a300}' } },
    },
    text: {
      // base: #312100
      base: { value: { base: '{colors.yellow.light.1000}', _dark: '{colors.yellow.dark.1000}' } },
    },
  },
  info: {
    bg: {
      // base: #f0f6fe
      low: { value: { base: '{colors.blue.light.100}', _dark: '{colors.blue.dark.100}' } },
      // base: #d6e6fc
      base: { value: { base: '{colors.blue.light.200}', _dark: '{colors.blue.dark.400}' } },
      // base: #b2d0fa
      high: { value: { base: '{colors.blue.light.300}', _dark: '{colors.blue.dark.300}' } },
      // base: #87baff
      highest: { value: { base: '{colors.blue.light.400}', _dark: '{colors.blue.dark.200}' } },
    },
    border: {
      // base: #87baff
      low: { value: { base: '{colors.blue.light.400}', _dark: '{colors.blue.dark.200}' } },
      // base: #60a0f6
      base: { value: { base: '{colors.blue.light.500}', _dark: '{colors.blue.dark.500}' } },
      // base: #4a90ee
      high: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      // base: #2f6fc3
      highest: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    fg: {
      // base: #4a90ee
      low: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      // base: #2f6fc3
      base: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    ghostBg: {
      // base: rgba(74, 144, 238, 0.06)
      base: { value: { base: '{colors.blue.light.a100}', _dark: '{colors.blue.dark.a100}' } },
      // base: rgba(74, 144, 238, 0.09)
      high: { value: { base: '{colors.blue.light.a200}', _dark: '{colors.blue.dark.a200}' } },
      // base: rgba(74, 144, 238, 0.12)
      highest: { value: { base: '{colors.blue.light.a300}', _dark: '{colors.blue.dark.a300}' } },
    },
    text: {
      // base: #020e22
      base: { value: { base: '{colors.blue.light.1000}', _dark: '{colors.blue.dark.1000}' } },
    },
  },
  brand: {
    bg: {
      // base: #fff2ec
      low: { value: { base: '{colors.orange.light.100}', _dark: '{colors.orange.dark.100}' } },
      // base: #ffdcce
      base: { value: { base: '{colors.orange.light.200}', _dark: '{colors.orange.dark.200}' } },
      // base: #ff6000
      high: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      // base: #d24100
      highest: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.700}' } },
    },
    border: {
      // base: #ffbba0
      low: { value: { base: '{colors.orange.light.300}', _dark: '{colors.orange.dark.300}' } },
      // base: #ff6000
      base: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      // base: #d24100
      high: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.700}' } },
      // base: #9a2d00
      highest: { value: { base: '{colors.orange.light.800}', _dark: '{colors.orange.dark.800}' } },
    },
    fg: {
      // base: #ffdcce
      low: { value: { base: '{colors.orange.light.200}', _dark: '{colors.orange.dark.200}' } },
      // base: #ff6000
      base: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
    },
    ghostBg: {
      // base: rgba(255, 96, 0, 0.06)
      base: { value: { base: '{colors.orange.light.a100}', _dark: '{colors.orange.dark.a100}' } },
      // base: rgba(255, 96, 0, 0.09)
      high: { value: { base: '{colors.orange.light.a200}', _dark: '{colors.orange.dark.a200}' } },
      // base: rgba(255, 96, 0, 0.12)
      highest: { value: { base: '{colors.orange.light.a300}', _dark: '{colors.orange.dark.a300}' } },
    },
    text: {
      // base: #ff6000
      base: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
    },
  },
} as const;
