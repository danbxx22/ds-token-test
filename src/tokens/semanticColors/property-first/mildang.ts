export const mildang = {

  // ─── focusRing ───────────────────────────────────────────────────────────
  // role-independent. 항상 info blue (blue.700 / blue.900 dark)
  focusRing: {
    default: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
  },

  // ─── overlay ─────────────────────────────────────────────────────────────
  overlay: {
    // action: 밝은 배경 위에 darken, 어두운 배경 위에 lighten — 다크모드 없음(fixed)
    action: {
      darken: {
        hover:   { value: '{colors.neutral.light.a100}' },
        pressed: { value: '{colors.neutral.light.a200}' },
      },
      lighten: {
        hover:   { value: '{colors.neutral.dark.a400}' },
        pressed: { value: '{colors.neutral.dark.a600}' },
      },
    },
    // shadow: 다크모드에서 알파 방향이 반전되므로 tier-2 시맨틱 토큰으로 관리
    shadow: {
      subtle:   { value: { base: '{colors.neutral.light.a100}', _dark: '{colors.neutral.dark.a100}' } },
      muted:    { value: { base: '{colors.neutral.light.a200}', _dark: '{colors.neutral.dark.a200}' } },
      default:  { value: { base: '{colors.neutral.light.a300}', _dark: '{colors.neutral.dark.a300}' } },
      emphasis: { value: { base: '{colors.neutral.light.a400}', _dark: '{colors.neutral.dark.a400}' } },
    },
    // scrim: 모달·드로어 뒤 반투명 레이어 — fixed
    scrim: {
      default: { value: '{colors.neutral.light.a700}' },
    },
  },

  // ─── surface ─────────────────────────────────────────────────────────────
  // 표면 배경. 콘텐츠(텍스트)를 위에 올리는 컨테이너 배경.
  // 이전 {role}.bg.* + {role}.ghostBg.base 대응.
  surface: {
    transparent: { value: 'transparent' },

    neutral: {
      ghost:    { value: { base: '{colors.neutral.light.a100}', _dark: '{colors.neutral.dark.a100}' } },
      subtle:   { value: { base: '{colors.neutral.light.100}',  _dark: '{colors.neutral.dark.100}' } },
      muted:    { value: { base: '{colors.neutral.light.200}',  _dark: '{colors.neutral.dark.200}' } },
      default:  { value: { base: '{colors.neutral.light.300}',  _dark: '{colors.neutral.dark.300}' } },
      emphasis: { value: { base: '{colors.neutral.light.400}',  _dark: '{colors.neutral.dark.400}' } },
    },

    positive: {
      ghost:    { value: { base: '{colors.green.light.a100}', _dark: '{colors.green.dark.a100}' } },
      subtle:   { value: { base: '{colors.green.light.100}',  _dark: '{colors.green.dark.100}' } },
      muted:    { value: { base: '{colors.green.light.200}',  _dark: '{colors.green.dark.400}' } },
      default:  { value: { base: '{colors.green.light.300}',  _dark: '{colors.green.dark.300}' } },
      emphasis: { value: { base: '{colors.green.light.400}',  _dark: '{colors.green.dark.200}' } },
    },

    critical: {
      ghost:    { value: { base: '{colors.red.light.a100}', _dark: '{colors.red.dark.a100}' } },
      subtle:   { value: { base: '{colors.red.light.100}',  _dark: '{colors.red.dark.100}' } },
      muted:    { value: { base: '{colors.red.light.200}',  _dark: '{colors.red.dark.400}' } },
      default:  { value: { base: '{colors.red.light.300}',  _dark: '{colors.red.dark.300}' } },
      emphasis: { value: { base: '{colors.red.light.400}',  _dark: '{colors.red.dark.200}' } },
    },

    warning: {
      ghost:    { value: { base: '{colors.orange.light.a100}', _dark: '{colors.orange.dark.a100}' } },
      subtle:   { value: { base: '{colors.orange.light.100}',  _dark: '{colors.orange.dark.100}' } },
      muted:    { value: { base: '{colors.orange.light.200}',  _dark: '{colors.orange.dark.400}' } },
      default:  { value: { base: '{colors.orange.light.300}',  _dark: '{colors.orange.dark.300}' } },
      emphasis: { value: { base: '{colors.orange.light.400}',  _dark: '{colors.orange.dark.200}' } },
    },

    info: {
      ghost:    { value: { base: '{colors.blue.light.a100}', _dark: '{colors.blue.dark.a100}' } },
      subtle:   { value: { base: '{colors.blue.light.100}',  _dark: '{colors.blue.dark.100}' } },
      muted:    { value: { base: '{colors.blue.light.200}',  _dark: '{colors.blue.dark.400}' } },
      default:  { value: { base: '{colors.blue.light.300}',  _dark: '{colors.blue.dark.300}' } },
      emphasis: { value: { base: '{colors.blue.light.400}',  _dark: '{colors.blue.dark.200}' } },
    },

    brand: {
      ghost:    { value: { base: '{colors.mildangPT.light.a100}', _dark: '{colors.mildangPT.dark.a100}' } },
      subtle:   { value: { base: '{colors.mildangPT.light.100}',  _dark: '{colors.mildangPT.dark.100}' } },
      muted:    { value: { base: '{colors.mildangPT.light.200}',  _dark: '{colors.mildangPT.dark.400}' } },
      default:  { value: { base: '{colors.mildangPT.light.300}',  _dark: '{colors.mildangPT.dark.300}' } },
      emphasis: { value: { base: '{colors.mildangPT.light.400}',  _dark: '{colors.mildangPT.dark.200}' } },
    },
  },

  // ─── fill ────────────────────────────────────────────────────────────────
  // 요소 자체가 색으로 식별되는 채움 배경 (버튼·칩·토글·툴팁 등).
  // 제거하면 요소 인식 불가 → 위에 흰색/inverted 텍스트가 올라감.
  // 이전 {role}.fg.base를 backgroundColor로 오용한 케이스를 대체.
  fill: {
    // role-neutral inverse fill — 어떤 컬러 배경 위에서든 흰 버튼/칩 등에 사용
    inverse:  { value: { base: '{colors.neutral.dark.1200}',     _dark: '{colors.neutral.light.1200}' } },
    neutral:  { value: { base: '{colors.neutral.light.1200}',    _dark: '{colors.neutral.dark.1200}' } },
    positive: { value: { base: '{colors.green.light.700}',       _dark: '{colors.green.dark.900}' } },
    critical: { value: { base: '{colors.red.light.700}',         _dark: '{colors.red.dark.900}' } },
    warning:  { value: { base: '{colors.orange.light.700}',      _dark: '{colors.orange.dark.900}' } },
    info:     { value: { base: '{colors.blue.light.700}',        _dark: '{colors.blue.dark.900}' } },
    brand:    { value: { base: '{colors.mildangPT.light.700}',   _dark: '{colors.mildangPT.dark.900}' } },
  },

  // ─── border ──────────────────────────────────────────────────────────────
  // borderColor / outlineColor / divider.
  border: {
    neutral: {
      subtle:   { value: { base: '{colors.neutral.light.400}',  _dark: '{colors.neutral.dark.400}' } },
      default:  { value: { base: '{colors.neutral.light.500}',  _dark: '{colors.neutral.dark.500}' } },
      emphasis: { value: { base: '{colors.neutral.light.600}',  _dark: '{colors.neutral.dark.600}' } },
      strongest: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },

    positive: {
      subtle:    { value: { base: '{colors.green.light.400}', _dark: '{colors.green.dark.200}' } },
      default:   { value: { base: '{colors.green.light.500}', _dark: '{colors.green.dark.500}' } },
      emphasis:  { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      strongest: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },

    critical: {
      subtle:    { value: { base: '{colors.red.light.400}', _dark: '{colors.red.dark.200}' } },
      default:   { value: { base: '{colors.red.light.500}', _dark: '{colors.red.dark.500}' } },
      emphasis:  { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      strongest: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },

    warning: {
      subtle:    { value: { base: '{colors.orange.light.400}', _dark: '{colors.orange.dark.200}' } },
      default:   { value: { base: '{colors.orange.light.500}', _dark: '{colors.orange.dark.500}' } },
      emphasis:  { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      strongest: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },

    info: {
      subtle:    { value: { base: '{colors.blue.light.400}', _dark: '{colors.blue.dark.200}' } },
      default:   { value: { base: '{colors.blue.light.500}', _dark: '{colors.blue.dark.500}' } },
      emphasis:  { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      strongest: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },

    brand: {
      subtle:    { value: { base: '{colors.mildangPT.light.400}', _dark: '{colors.mildangPT.dark.200}' } },
      default:   { value: { base: '{colors.mildangPT.light.500}', _dark: '{colors.mildangPT.dark.500}' } },
      emphasis:  { value: { base: '{colors.mildangPT.light.600}', _dark: '{colors.mildangPT.dark.600}' } },
      strongest: { value: { base: '{colors.mildangPT.light.700}', _dark: '{colors.mildangPT.dark.900}' } },
    },
  },

  // ─── icon ────────────────────────────────────────────────────────────────
  // CSS color on SVG / Icon 컴포넌트. 이전 {role}.fg.* 대응.
  // separator/divider 등 라인도 border 슬롯이지만 ellipsis 등은 icon.
  icon: {
    // role-neutral inverse icon — fill.inverse 위에 올라가는 아이콘
    inverse: { value: { base: '{colors.neutral.dark.1200}', _dark: '{colors.neutral.light.1200}' } },
    neutral: {
      subtle:   { value: { base: '{colors.neutral.light.600}',  _dark: '{colors.neutral.dark.600}' } },
      muted:    { value: { base: '{colors.neutral.light.900}',  _dark: '{colors.neutral.dark.900}' } },
      default:  { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },

    positive: {
      muted:   { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      default: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },

    critical: {
      muted:   { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      default: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },

    // warning만 3단계 (fg.lowest/low/base → subtle/muted/default)
    warning: {
      subtle:  { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      muted:   { value: { base: '{colors.orange.light.650}', _dark: '{colors.orange.dark.1000}' } },
      default: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },

    info: {
      muted:   { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      default: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },

    brand: {
      muted:   { value: { base: '{colors.mildangPT.light.600}', _dark: '{colors.mildangPT.dark.600}' } },
      default: { value: { base: '{colors.mildangPT.light.700}', _dark: '{colors.mildangPT.dark.900}' } },
    },
  },

  // ─── text ────────────────────────────────────────────────────────────────
  // CSS color on 텍스트 노드. 이전 {role}.text.* + inverse.text 대응.
  text: {
    // role-neutral inverse text — fill.inverse / fill.{role} 위에 올라가는 텍스트
    inverse: { value: { base: '{colors.neutral.dark.1200}', _dark: '{colors.neutral.light.1200}' } },
    neutral: {
      subtle:   { value: { base: '{colors.neutral.light.1000}', _dark: '{colors.neutral.dark.1000}' } },
      muted:    { value: { base: '{colors.neutral.light.1100}', _dark: '{colors.neutral.dark.1100}' } },
      default:  { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },

    positive: {
      default: { value: { base: '{colors.green.light.1000}', _dark: '{colors.green.dark.1000}' } },
    },

    critical: {
      default: { value: { base: '{colors.red.light.1000}', _dark: '{colors.red.dark.1000}' } },
    },

    warning: {
      default: { value: { base: '{colors.orange.light.1000}', _dark: '{colors.orange.dark.1000}' } },
    },

    info: {
      default: { value: { base: '{colors.blue.light.1000}', _dark: '{colors.blue.dark.1000}' } },
    },

    brand: {
      default: { value: { base: '{colors.mildangPT.light.1000}', _dark: '{colors.mildangPT.dark.1000}' } },
    },
  },
} as const;