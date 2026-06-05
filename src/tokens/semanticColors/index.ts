import type { PresetOptions } from '../types';
import { mildang } from './mildang';
import { school } from './school';
import { goes } from './goes';
import { educore } from './educore';
import { baseLegacy } from './legacy/base';
import { mildangLegacy } from './legacy/mildang';
import { schoolLegacy } from './legacy/school';
import { goesLegacy } from './legacy/goes';

/**
 * 신규 role-based 토큰과 구버전 numeric scale 토큰을 상위 키별로 병합한다.
 * 각 테마(mildang/school/goes)가 자기 primary/inverse/brand/status role을 직접 보유.
 */
const mergedMildang = { ...mildangLegacy, ...mildang.brand };
const mergedEducore = educore.brand;
const mergedSchool = { ...schoolLegacy, ...school.brand };
const mergedGoesBrand = { ...goesLegacy.brand, ...goes.brand };

const brandMap = {
  mildang: mergedMildang,
  educore: mergedEducore,
  school: mergedSchool,
  goes: mergedGoesBrand,
} as const;

const mergeMildangSchoolRoles = (theme: typeof mildang | typeof educore | typeof school) => ({
  primary: theme.primary,
  inverse: theme.inverse,
  warning: { ...baseLegacy.warning, ...theme.warning },
  info: { ...baseLegacy.info, ...theme.info },
  success: { ...baseLegacy.success, ...theme.success },
  error: { ...baseLegacy.error, ...theme.error },
  gradient: theme.gradient,
});

const mildangRoles = mergeMildangSchoolRoles(mildang);
const educoreRoles = mergeMildangSchoolRoles(educore);
const schoolRoles = mergeMildangSchoolRoles(school);

const goesRoles = {
  primary: goes.primary,
  inverse: goes.inverse,
  success: { ...goesLegacy.success, ...goes.success },
  warning: { ...goesLegacy.warning, ...goes.warning },
  error: { ...goesLegacy.error, ...goes.error },
  info: { ...goesLegacy.info, ...goes.info },
  gradient: goes.gradient,
  accent: {
    purple: goesLegacy.accent.purple,
  },
};

const themeRolesMap = {
  mildang: mildangRoles,
  educore: educoreRoles,
  school: schoolRoles,
  goes: goesRoles,
} as const;

export const defineColorTokens = (options: PresetOptions) => {
  const colorSchema = options.colorSchema || 'mildang';

  return {
    ...baseLegacy,
    ...themeRolesMap[colorSchema],
    brand: brandMap[colorSchema],
  } as const;
};
