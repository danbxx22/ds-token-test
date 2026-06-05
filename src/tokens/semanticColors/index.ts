import { legacySemantic } from './legacy/semantic';
import { baseLegacy } from './legacy/base';
import { mildangLegacy } from './legacy/mildang';

const mergedBrand = { ...mildangLegacy, ...legacySemantic.brand };

export const defineColorTokens = () => ({
  ...baseLegacy,
  primary: legacySemantic.primary,
  inverse: legacySemantic.inverse,
  warning: { ...baseLegacy.warning, ...legacySemantic.warning },
  info: { ...baseLegacy.info, ...legacySemantic.info },
  success: { ...baseLegacy.success, ...legacySemantic.success },
  error: { ...baseLegacy.error, ...legacySemantic.error },
  brand: mergedBrand,
});
