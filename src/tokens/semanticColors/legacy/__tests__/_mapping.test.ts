import { describe, expect, it } from 'vitest';
import { baseLegacy } from '../base';
import { goes } from '../../goes';
import { mildang } from '../../mildang';
import { school } from '../../school';
import { LEGACY_COLOR_MAPPING, type LegacySlotMap } from '../_mapping';

type RawValue = { base: string; _dark: string };

function pickValue(token: unknown): RawValue | null {
  if (
    token != null &&
    typeof token === 'object' &&
    'value' in token &&
    token.value != null &&
    typeof token.value === 'object' &&
    'base' in token.value &&
    '_dark' in token.value
  ) {
    return token.value as RawValue;
  }
  return null;
}

function resolve(root: unknown, path: string): RawValue | null {
  const segs = path.split('.');
  let cur: unknown = root;
  for (const s of segs) {
    if (cur == null || typeof cur !== 'object') return null;
    cur = (cur as Record<string, unknown>)[s];
  }
  return pickValue(cur);
}

function legacyValue(legacyKey: string): RawValue | null {
  return resolve(baseLegacy, legacyKey);
}

function newValue(theme: typeof mildang | typeof school | typeof goes, target: string): RawValue | null {
  return resolve(theme, target);
}

const SLOT_KEYS = ['bg', 'ghostBg', 'border', 'fg', 'text'] as const satisfies readonly (keyof LegacySlotMap)[];

describe('LEGACY_COLOR_MAPPING — 구조 무결성', () => {
  it('모든 매핑 엔트리는 슬롯 또는 보존 마커를 갖는다', () => {
    for (const [legacyKey, slot] of Object.entries(LEGACY_COLOR_MAPPING)) {
      const hasSlot = SLOT_KEYS.some((k) => slot[k]);
      const hasMarker = Boolean(slot._absorb || slot._preserve || slot._note);
      expect(hasSlot || hasMarker, `${legacyKey} — slot/marker 둘 중 하나는 있어야 함`).toBe(true);
    }
  });

  it('보존 토큰(_preserve)은 _moveTo 또는 _absorb 중 하나로 처리 방향이 명시되어야 한다', () => {
    for (const [legacyKey, slot] of Object.entries(LEGACY_COLOR_MAPPING)) {
      if (!slot._preserve) continue;
      const hasDirection = slot._moveTo || slot._absorb;
      expect(hasDirection, `${legacyKey} — _preserve 시 _moveTo 또는 _absorb 필요`).toBeTruthy();
    }
  });
});

describe('LEGACY_COLOR_MAPPING — 매핑 타겟 유효성 (mildang)', () => {
  // 슬롯 매핑 타겟이 mildang 테마 신규 토큰에 실제 존재하는지 확인.
  it.each(
    Object.entries(LEGACY_COLOR_MAPPING).flatMap(([legacyKey, slot]) =>
      SLOT_KEYS
        .filter((k): k is (typeof SLOT_KEYS)[number] => Boolean(slot[k]))
        .map((k) => [legacyKey, k, slot[k] as string] as const)
    )
  )('%s.%s → %s 는 mildang에 존재', (_legacyKey, _slotName, target) => {
    const v = newValue(mildang, target);
    expect(v, `target ${target} 가 mildang 테마에 정의되지 않음`).not.toBeNull();
  });
});

describe('LEGACY_COLOR_MAPPING — raw 일치 (mildang 테마, brand 제외)', () => {
  // mildang 테마에서 legacy 토큰의 raw 값이 매핑 타겟의 raw 값과 일치해야 한다.
  // brand.* 는 별도 테마별 검증으로 분리(mildangPT vs green 팔레트 차이).
  const cases = Object.entries(LEGACY_COLOR_MAPPING)
    .filter(([key]) => !key.startsWith('brand.'))
    .flatMap(([legacyKey, slot]) =>
      SLOT_KEYS
        .filter((k): k is (typeof SLOT_KEYS)[number] => Boolean(slot[k]))
        .map((k) => [legacyKey, k, slot[k] as string] as const)
    );

  it.each(cases)('%s (%s) ↔ %s 는 mildang에서 동일 raw', (legacyKey, _slot, target) => {
    const lv = legacyValue(legacyKey);
    const nv = newValue(mildang, target);
    expect(lv, `legacy ${legacyKey} 미정의`).not.toBeNull();
    expect(nv, `new ${target} 미정의`).not.toBeNull();
    expect(nv?.base).toBe(lv?.base);
    expect(nv?._dark).toBe(lv?._dark);
  });
});

describe('LEGACY_COLOR_MAPPING — _absorb 마커 raw 일치', () => {
  // _absorb 는 raw 값이 동일함이 보장되어야 의미 보존.
  const absorbCases = Object.entries(LEGACY_COLOR_MAPPING)
    .filter(([, slot]) => Boolean(slot._absorb))
    .map(([legacyKey, slot]) => [legacyKey, slot._absorb as string] as const);

  it.each(absorbCases)('%s ABSORB → %s 는 mildang에서 동일 raw', (legacyKey, target) => {
    const lv = legacyValue(legacyKey);
    const nv = newValue(mildang, target);
    expect(lv, `legacy ${legacyKey} 미정의`).not.toBeNull();
    expect(nv, `absorb target ${target} 미정의`).not.toBeNull();
    expect(nv?.base).toBe(lv?.base);
    expect(nv?._dark).toBe(lv?._dark);
  });
});

describe('LEGACY_COLOR_MAPPING — school 동등 raw (status·primary·inverse)', () => {
  // school은 brand 외에 mildang과 동일 raw — primary/status 매핑이 school에서도 valid.
  const cases = Object.entries(LEGACY_COLOR_MAPPING)
    .filter(([key]) => !key.startsWith('brand.'))
    .flatMap(([legacyKey, slot]) =>
      SLOT_KEYS
        .filter((k): k is (typeof SLOT_KEYS)[number] => Boolean(slot[k]))
        .map((k) => [legacyKey, k, slot[k] as string] as const)
    );

  it.each(cases)('%s (%s) ↔ %s 는 school에서 동일 raw', (legacyKey, _slot, target) => {
    const lv = legacyValue(legacyKey);
    const nv = newValue(school, target);
    if (lv == null || nv == null) return;
    expect(nv.base).toBe(lv.base);
    expect(nv._dark).toBe(lv._dark);
  });
});
