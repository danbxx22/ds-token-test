/**
 * 레거시 컬러 토큰 → role-based 신규 토큰 매핑.
 * - codemod / lint / 단위 테스트가 본 파일을 단일 진실로 참조.
 * - Phase 3에서 legacy/*.ts와 함께 삭제될 한시적 도구. 외부 export 금지.
 *
 * 슬롯 컬럼 — bg / ghostBg / border / fg / text.
 * 보존 마커 — _absorb(신규 토큰으로 흡수), _preserve(보존 가치, _moveTo 위치로 이주), _note(설명).
 *
 * 매핑 결정 근거: legacy/base.ts와 mildang.ts·school.ts·goes.ts의 raw color scale 비교.
 * 모든 매핑은 light/dark 양 측 동일 raw 값을 가리킨다(__tests__/mapping.test.ts assert).
 *
 * 사람이 읽는 매핑 표: wiki/design-system/legacy-color-mapping.md
 * 슬롯 선택 규칙: packages/design-system/CLAUDE.md "Role-based 컬러 슬롯 규칙" 섹션
 */

export type LegacySlotMap = {
  bg?: string;
  ghostBg?: string;
  border?: string;
  fg?: string;
  text?: string;
  _absorb?: string;
  _preserve?: boolean;
  _moveTo?: string;
  _note?: string;
};

export const LEGACY_COLOR_MAPPING: Record<string, LegacySlotMap> = {
  // common (gray) → primary
  'common.1': { bg: 'primary.bg.low' },
  'common.2': { bg: 'primary.bg.base' },
  'common.3': { bg: 'primary.bg.high' },
  'common.4': { bg: 'primary.bg.highest', border: 'primary.border.low' },
  'common.5': { border: 'primary.border.base' },
  'common.6': { border: 'primary.border.high', fg: 'primary.fg.lowest' },
  'common.7': {
    border: 'primary.border.highest',
    fg: 'primary.fg.base',
  },
  'common.8': {
    _note: 'role-based fg.high 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'common.9': {
    _note: 'role-based fg.highest 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'common.10': { text: 'primary.text.lowest' },
  'common.11': { text: 'primary.text.low' },
  'common.12': {
    text: 'primary.text.base',
  },
  'common.a1': { ghostBg: 'primary.ghostBg.base' },
  'common.a2': { ghostBg: 'primary.ghostBg.high' },
  'common.a3': { ghostBg: 'primary.ghostBg.highest' },
  'common.mediumBg.normal': { _absorb: 'primary.fg.low' },
  'common.gradient.purpleBlue': {
    _preserve: true,
    _moveTo: 'gradient.primary.default',
    _note: 'Tier 2 semantic gradient(primary/default = 135deg)로 이주. recipe에서는 panda `gradient` utility로 사용',
  },

  // success (green) → success
  'success.1': { bg: 'success.bg.low' },
  'success.2': { bg: 'success.bg.base' },
  'success.3': { bg: 'success.bg.high' },
  'success.4': { bg: 'success.bg.highest', border: 'success.border.low' },
  'success.5': { border: 'success.border.base' },
  'success.6': { border: 'success.border.high', fg: 'success.fg.low' },
  'success.7': { border: 'success.border.highest', fg: 'success.fg.base' },
  'success.8': {
    _note: 'role-based fg.high 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'success.9': {
    _note: 'role-based fg.highest 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'success.10': { text: 'success.text.base' },
  'success.11': {
    _note: 'role-based 동등 토큰 부재 — 디자이너 합의 후 success.text.base 흡수 또는 별도 신설',
  },
  'success.12': {
    _note: 'role-based 동등 토큰 부재 — DS 내 사용 0건이면 단순 제거',
  },
  'success.a1': { ghostBg: 'success.ghostBg.base' },
  'success.a2': { ghostBg: 'success.ghostBg.high' },
  'success.a3': { ghostBg: 'success.ghostBg.highest' },

  // error (red) → error
  'error.1': { bg: 'error.bg.low' },
  'error.2': { bg: 'error.bg.base' },
  'error.3': { bg: 'error.bg.high' },
  'error.4': { bg: 'error.bg.highest', border: 'error.border.low' },
  'error.5': { border: 'error.border.base' },
  'error.6': { border: 'error.border.high', fg: 'error.fg.low' },
  'error.7': { border: 'error.border.highest', fg: 'error.fg.base' },
  'error.8': {
    _note: 'role-based fg.high 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'error.9': {
    _note: 'role-based fg.highest 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'error.10': { text: 'error.text.base' },
  'error.11': { _note: 'role-based 동등 토큰 부재' },
  'error.12': { _note: 'role-based 동등 토큰 부재' },
  'error.a1': { ghostBg: 'error.ghostBg.base' },
  'error.a2': { ghostBg: 'error.ghostBg.high' },
  'error.a3': { ghostBg: 'error.ghostBg.highest' },

  // warning (orange) → warning. 주의: warning.fg는 lowest(.600), low(.650), base, high, highest로 정의됨.
  'warning.1': { bg: 'warning.bg.low' },
  'warning.2': { bg: 'warning.bg.base' },
  'warning.3': { bg: 'warning.bg.high' },
  'warning.4': { bg: 'warning.bg.highest', border: 'warning.border.low' },
  'warning.5': { border: 'warning.border.base' },
  'warning.6': { border: 'warning.border.high', fg: 'warning.fg.lowest' },
  'warning.7': { border: 'warning.border.highest', fg: 'warning.fg.base' },
  'warning.8': {
    _note: 'role-based fg.high 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'warning.9': {
    _note: 'role-based fg.highest 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'warning.10': { text: 'warning.text.base' },
  'warning.11': { _note: 'role-based 동등 토큰 부재' },
  'warning.12': { _note: 'role-based 동등 토큰 부재' },
  'warning.a1': { ghostBg: 'warning.ghostBg.base' },
  'warning.a2': { ghostBg: 'warning.ghostBg.high' },
  'warning.a3': { ghostBg: 'warning.ghostBg.highest' },
  'warning.mediumBg.normal': { _absorb: 'warning.fg.low' },

  // info (blue) → info
  'info.1': { bg: 'info.bg.low' },
  'info.2': { bg: 'info.bg.base' },
  'info.3': { bg: 'info.bg.high' },
  'info.4': { bg: 'info.bg.highest', border: 'info.border.low' },
  'info.5': { border: 'info.border.base' },
  'info.6': { border: 'info.border.high', fg: 'info.fg.low' },
  'info.7': { border: 'info.border.highest', fg: 'info.fg.base' },
  'info.8': {
    _note: 'role-based fg.high 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'info.9': {
    _note: 'role-based fg.highest 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'info.10': { text: 'info.text.base' },
  'info.11': { _note: 'role-based 동등 토큰 부재' },
  'info.12': {
    _note: 'role-based 동등 토큰 부재 — DS 내 1건(Radius 데모) 사용. info.border.highest로 흡수 검토',
  },
  'info.a1': { ghostBg: 'info.ghostBg.base' },
  'info.a2': { ghostBg: 'info.ghostBg.high' },
  'info.a3': { ghostBg: 'info.ghostBg.highest' },

  // brand (mildangPT) → brand. mildang/school/goes 테마별 매핑 일관성은 각 테마의 brand 정의로 보장.
  'brand.1': { bg: 'brand.bg.low' },
  'brand.2': { bg: 'brand.bg.base' },
  'brand.3': { bg: 'brand.bg.high' },
  'brand.4': { bg: 'brand.bg.highest', border: 'brand.border.low' },
  'brand.5': { border: 'brand.border.base' },
  'brand.6': { border: 'brand.border.high', fg: 'brand.fg.low' },
  'brand.7': { border: 'brand.border.highest', fg: 'brand.fg.base' },
  'brand.8': {
    _note: 'role-based fg.high 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'brand.9': {
    _note: 'role-based fg.highest 제거됨 — 디자이너 합의 후 매핑 결정',
  },
  'brand.10': { text: 'brand.text.base' },
  'brand.11': { _note: 'role-based 동등 토큰 부재' },
  'brand.12': { _note: 'role-based 동등 토큰 부재' },
  'brand.a1': { ghostBg: 'brand.ghostBg.base' },
  'brand.a2': { ghostBg: 'brand.ghostBg.high' },
  'brand.a3': { ghostBg: 'brand.ghostBg.highest' },

  // other → 보존
  'other.focusIndicator': {
    _preserve: true,
    _moveTo: 'colors.focusRing.border.default',
    _note: 'a11y 토큰. Tier 3 component token(focusRing.border.default = info.border.highest)으로 이주 완료 — legacy/base.ts에서 제거됨',
  },
  'other.text.inverse': {
    _preserve: true,
    _moveTo: '<TBD>',
    _note: 'inverse.text.base와 의미 비교 후 흡수 검토. 다르면 비레거시 위치로 이주',
  },
  'other.chat.normal': {
    _preserve: true,
    _moveTo: '<TBD>',
    _note: '도메인 토큰 — 비레거시 위치로 이주',
  },
  'other.rating.normal': {
    _preserve: true,
    _moveTo: '<TBD>',
    _note: '도메인 토큰 — 비레거시 위치로 이주',
  },

  // accent — DS 내부 사용 0건 (인벤토리 결과). 디자이너 합의 후 결정.
  // accent.pink.* / accent.purple.* — 본 매핑 미정의. Phase 2에서 사용처 발견 시 갱신.
};

export type LegacyTokenKey = keyof typeof LEGACY_COLOR_MAPPING;
