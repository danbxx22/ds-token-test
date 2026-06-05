import { roleFirstSemantic } from './role-first/semantic';
import { baseRoleFirst } from './role-first/base';
import { mildangRoleFirst } from './role-first/mildang';

const mergedBrand = { ...mildangRoleFirst, ...roleFirstSemantic.brand };

export const defineColorTokens = () => ({
  ...baseRoleFirst,
  primary: roleFirstSemantic.primary,
  inverse: roleFirstSemantic.inverse,
  warning: { ...baseRoleFirst.warning, ...roleFirstSemantic.warning },
  info: { ...baseRoleFirst.info, ...roleFirstSemantic.info },
  success: { ...baseRoleFirst.success, ...roleFirstSemantic.success },
  error: { ...baseRoleFirst.error, ...roleFirstSemantic.error },
  brand: mergedBrand,
});
