/**
 * legacy ↔ new 토큰 동일성 검증
 * 같은 역할의 두 토큰이 동일한 primitive 색상 참조를 가리키는지 확인한다.
 *
 * 실행: pnpm test:parity
 */
import { legacySemantic as mildang } from '../legacy/semantic';
import { mildang as mildangNew } from '../new/mildang';

type TokenValue = { value: { base: string; _dark: string } };

interface PairEntry {
  legacyPath: string;
  newPath: string;
  legacy: TokenValue;
  new: TokenValue;
}

const pairs: PairEntry[] = [
  // primary → neutral : bg
  { legacyPath: 'primary.bg.low',         newPath: 'bg.neutral.subtle',      legacy: mildang.primary.bg.low,         new: mildangNew.bg.neutral.subtle },
  { legacyPath: 'primary.bg.base',        newPath: 'bg.neutral.muted',       legacy: mildang.primary.bg.base,        new: mildangNew.bg.neutral.muted },
  { legacyPath: 'primary.bg.high',        newPath: 'bg.neutral.emphasized',  legacy: mildang.primary.bg.high,        new: mildangNew.bg.neutral.emphasized },
  { legacyPath: 'primary.bg.highest',     newPath: 'bg.neutral.solid',       legacy: mildang.primary.bg.highest,     new: mildangNew.bg.neutral.solid },
  // primary → neutral : ghostBg
  { legacyPath: 'primary.ghostBg.base',    newPath: 'bg.neutral.ghost',       legacy: mildang.primary.ghostBg.base,   new: mildangNew.bg.neutral.ghost.DEFAULT },
  { legacyPath: 'primary.ghostBg.high',    newPath: 'bg.neutral.ghost.hover', legacy: mildang.primary.ghostBg.high,   new: mildangNew.bg.neutral.ghost.hover },
  { legacyPath: 'primary.ghostBg.highest', newPath: 'bg.neutral.ghost.pressed', legacy: mildang.primary.ghostBg.highest, new: mildangNew.bg.neutral.ghost.pressed },
  // primary → neutral : border
  { legacyPath: 'primary.border.low',     newPath: 'border.neutral.subtle',    legacy: mildang.primary.border.low,     new: mildangNew.border.neutral.subtle },
  { legacyPath: 'primary.border.base',    newPath: 'border.neutral.default',   legacy: mildang.primary.border.base,    new: mildangNew.border.neutral.default },
  { legacyPath: 'primary.border.high',    newPath: 'border.neutral.emphasized',legacy: mildang.primary.border.high,    new: mildangNew.border.neutral.emphasized },
  { legacyPath: 'primary.border.highest', newPath: 'border.neutral.strong',    legacy: mildang.primary.border.highest, new: mildangNew.border.neutral.strong },
  // primary → neutral : fg → icon
  { legacyPath: 'primary.fg.lowest', newPath: 'icon.neutral.subtle',  legacy: mildang.primary.fg.lowest, new: mildangNew.icon.neutral.subtle },
  { legacyPath: 'primary.fg.low',    newPath: 'icon.neutral.default', legacy: mildang.primary.fg.low,    new: mildangNew.icon.neutral.default },
  { legacyPath: 'primary.fg.base',   newPath: 'icon.neutral.strong',  legacy: mildang.primary.fg.base,   new: mildangNew.icon.neutral.strong },
  // primary → neutral : text
  { legacyPath: 'primary.text.lowest', newPath: 'text.neutral.subtle',  legacy: mildang.primary.text.lowest, new: mildangNew.text.neutral.subtle },
  { legacyPath: 'primary.text.low',    newPath: 'text.neutral.default', legacy: mildang.primary.text.low,    new: mildangNew.text.neutral.default },
  { legacyPath: 'primary.text.base',   newPath: 'text.neutral.strong',  legacy: mildang.primary.text.base,   new: mildangNew.text.neutral.strong },

  // error → critical : bg
  { legacyPath: 'error.bg.low',     newPath: 'bg.critical.subtle',     legacy: mildang.error.bg.low,     new: mildangNew.bg.critical.subtle },
  { legacyPath: 'error.bg.base',    newPath: 'bg.critical.muted',      legacy: mildang.error.bg.base,    new: mildangNew.bg.critical.muted },
  { legacyPath: 'error.bg.high',    newPath: 'bg.critical.emphasized', legacy: mildang.error.bg.high,    new: mildangNew.bg.critical.emphasized },
  { legacyPath: 'error.bg.highest', newPath: 'bg.critical.solid',      legacy: mildang.error.bg.highest, new: mildangNew.bg.critical.solid },
  { legacyPath: 'error.ghostBg.base',    newPath: 'bg.critical.ghost',         legacy: mildang.error.ghostBg.base,    new: mildangNew.bg.critical.ghost.DEFAULT },
  { legacyPath: 'error.ghostBg.high',    newPath: 'bg.critical.ghost.hover',   legacy: mildang.error.ghostBg.high,    new: mildangNew.bg.critical.ghost.hover },
  { legacyPath: 'error.ghostBg.highest', newPath: 'bg.critical.ghost.pressed', legacy: mildang.error.ghostBg.highest, new: mildangNew.bg.critical.ghost.pressed },
  { legacyPath: 'error.border.low',     newPath: 'border.critical.subtle',     legacy: mildang.error.border.low,     new: mildangNew.border.critical.subtle },
  { legacyPath: 'error.border.base',    newPath: 'border.critical.default',    legacy: mildang.error.border.base,    new: mildangNew.border.critical.default },
  { legacyPath: 'error.border.high',    newPath: 'border.critical.emphasized', legacy: mildang.error.border.high,    new: mildangNew.border.critical.emphasized },
  { legacyPath: 'error.border.highest', newPath: 'border.critical.strong',     legacy: mildang.error.border.highest, new: mildangNew.border.critical.strong },
  { legacyPath: 'error.fg.low',  newPath: 'icon.critical.subtle',  legacy: mildang.error.fg.low,  new: mildangNew.icon.critical.subtle },
  { legacyPath: 'error.fg.base', newPath: 'icon.critical.default', legacy: mildang.error.fg.base, new: mildangNew.icon.critical.default },
  { legacyPath: 'error.text.base', newPath: 'text.critical.default', legacy: mildang.error.text.base, new: mildangNew.text.critical.default },

  // success → positive : bg
  { legacyPath: 'success.bg.low',     newPath: 'bg.positive.subtle',     legacy: mildang.success.bg.low,     new: mildangNew.bg.positive.subtle },
  { legacyPath: 'success.bg.base',    newPath: 'bg.positive.muted',      legacy: mildang.success.bg.base,    new: mildangNew.bg.positive.muted },
  { legacyPath: 'success.bg.high',    newPath: 'bg.positive.emphasized', legacy: mildang.success.bg.high,    new: mildangNew.bg.positive.emphasized },
  { legacyPath: 'success.bg.highest', newPath: 'bg.positive.solid',      legacy: mildang.success.bg.highest, new: mildangNew.bg.positive.solid },
  { legacyPath: 'success.ghostBg.base',    newPath: 'bg.positive.ghost',         legacy: mildang.success.ghostBg.base,    new: mildangNew.bg.positive.ghost.DEFAULT },
  { legacyPath: 'success.ghostBg.high',    newPath: 'bg.positive.ghost.hover',   legacy: mildang.success.ghostBg.high,    new: mildangNew.bg.positive.ghost.hover },
  { legacyPath: 'success.ghostBg.highest', newPath: 'bg.positive.ghost.pressed', legacy: mildang.success.ghostBg.highest, new: mildangNew.bg.positive.ghost.pressed },
  { legacyPath: 'success.border.low',     newPath: 'border.positive.subtle',     legacy: mildang.success.border.low,     new: mildangNew.border.positive.subtle },
  { legacyPath: 'success.border.base',    newPath: 'border.positive.default',    legacy: mildang.success.border.base,    new: mildangNew.border.positive.default },
  { legacyPath: 'success.border.high',    newPath: 'border.positive.emphasized', legacy: mildang.success.border.high,    new: mildangNew.border.positive.emphasized },
  { legacyPath: 'success.border.highest', newPath: 'border.positive.strong',     legacy: mildang.success.border.highest, new: mildangNew.border.positive.strong },
  { legacyPath: 'success.fg.low',  newPath: 'icon.positive.subtle',  legacy: mildang.success.fg.low,  new: mildangNew.icon.positive.subtle },
  { legacyPath: 'success.fg.base', newPath: 'icon.positive.default', legacy: mildang.success.fg.base, new: mildangNew.icon.positive.default },
  { legacyPath: 'success.text.base', newPath: 'text.positive.default', legacy: mildang.success.text.base, new: mildangNew.text.positive.default },

  // warning → caution : bg
  { legacyPath: 'warning.bg.low',     newPath: 'bg.caution.subtle',     legacy: mildang.warning.bg.low,     new: mildangNew.bg.caution.subtle },
  { legacyPath: 'warning.bg.base',    newPath: 'bg.caution.muted',      legacy: mildang.warning.bg.base,    new: mildangNew.bg.caution.muted },
  { legacyPath: 'warning.bg.high',    newPath: 'bg.caution.emphasized', legacy: mildang.warning.bg.high,    new: mildangNew.bg.caution.emphasized },
  { legacyPath: 'warning.bg.highest', newPath: 'bg.caution.solid',      legacy: mildang.warning.bg.highest, new: mildangNew.bg.caution.solid },
  { legacyPath: 'warning.ghostBg.base',    newPath: 'bg.caution.ghost',         legacy: mildang.warning.ghostBg.base,    new: mildangNew.bg.caution.ghost.DEFAULT },
  { legacyPath: 'warning.ghostBg.high',    newPath: 'bg.caution.ghost.hover',   legacy: mildang.warning.ghostBg.high,    new: mildangNew.bg.caution.ghost.hover },
  { legacyPath: 'warning.ghostBg.highest', newPath: 'bg.caution.ghost.pressed', legacy: mildang.warning.ghostBg.highest, new: mildangNew.bg.caution.ghost.pressed },
  { legacyPath: 'warning.border.low',     newPath: 'border.caution.subtle',     legacy: mildang.warning.border.low,     new: mildangNew.border.caution.subtle },
  { legacyPath: 'warning.border.base',    newPath: 'border.caution.default',    legacy: mildang.warning.border.base,    new: mildangNew.border.caution.default },
  { legacyPath: 'warning.border.high',    newPath: 'border.caution.emphasized', legacy: mildang.warning.border.high,    new: mildangNew.border.caution.emphasized },
  { legacyPath: 'warning.border.highest', newPath: 'border.caution.strong',     legacy: mildang.warning.border.highest, new: mildangNew.border.caution.strong },
  { legacyPath: 'warning.fg.lowest', newPath: 'icon.caution.subtle',  legacy: mildang.warning.fg.lowest, new: mildangNew.icon.caution.subtle },
  { legacyPath: 'warning.fg.base',   newPath: 'icon.caution.default', legacy: mildang.warning.fg.base,   new: mildangNew.icon.caution.default },
  { legacyPath: 'warning.text.base', newPath: 'text.caution.default', legacy: mildang.warning.text.base, new: mildangNew.text.caution.default },

  // info → informative : bg
  { legacyPath: 'info.bg.low',     newPath: 'bg.informative.subtle',     legacy: mildang.info.bg.low,     new: mildangNew.bg.informative.subtle },
  { legacyPath: 'info.bg.base',    newPath: 'bg.informative.muted',      legacy: mildang.info.bg.base,    new: mildangNew.bg.informative.muted },
  { legacyPath: 'info.bg.high',    newPath: 'bg.informative.emphasized', legacy: mildang.info.bg.high,    new: mildangNew.bg.informative.emphasized },
  { legacyPath: 'info.bg.highest', newPath: 'bg.informative.solid',      legacy: mildang.info.bg.highest, new: mildangNew.bg.informative.solid },
  { legacyPath: 'info.ghostBg.base',    newPath: 'bg.informative.ghost',         legacy: mildang.info.ghostBg.base,    new: mildangNew.bg.informative.ghost.DEFAULT },
  { legacyPath: 'info.ghostBg.high',    newPath: 'bg.informative.ghost.hover',   legacy: mildang.info.ghostBg.high,    new: mildangNew.bg.informative.ghost.hover },
  { legacyPath: 'info.ghostBg.highest', newPath: 'bg.informative.ghost.pressed', legacy: mildang.info.ghostBg.highest, new: mildangNew.bg.informative.ghost.pressed },
  { legacyPath: 'info.border.low',     newPath: 'border.informative.subtle',     legacy: mildang.info.border.low,     new: mildangNew.border.informative.subtle },
  { legacyPath: 'info.border.base',    newPath: 'border.informative.default',    legacy: mildang.info.border.base,    new: mildangNew.border.informative.default },
  { legacyPath: 'info.border.high',    newPath: 'border.informative.emphasized', legacy: mildang.info.border.high,    new: mildangNew.border.informative.emphasized },
  { legacyPath: 'info.border.highest', newPath: 'border.informative.strong',     legacy: mildang.info.border.highest, new: mildangNew.border.informative.strong },
  { legacyPath: 'info.fg.low',  newPath: 'icon.informative.subtle',  legacy: mildang.info.fg.low,  new: mildangNew.icon.informative.subtle },
  { legacyPath: 'info.fg.base', newPath: 'icon.informative.default', legacy: mildang.info.fg.base, new: mildangNew.icon.informative.default },
  { legacyPath: 'info.text.base', newPath: 'text.informative.default', legacy: mildang.info.text.base, new: mildangNew.text.informative.default },

  // brand → brand : bg
  { legacyPath: 'brand.bg.low',     newPath: 'bg.brand.subtle',     legacy: mildang.brand.bg.low,     new: mildangNew.bg.brand.subtle },
  { legacyPath: 'brand.bg.base',    newPath: 'bg.brand.muted',      legacy: mildang.brand.bg.base,    new: mildangNew.bg.brand.muted },
  { legacyPath: 'brand.bg.high',    newPath: 'bg.brand.emphasized', legacy: mildang.brand.bg.high,    new: mildangNew.bg.brand.emphasized },
  { legacyPath: 'brand.bg.highest', newPath: 'bg.brand.solid',      legacy: mildang.brand.bg.highest, new: mildangNew.bg.brand.solid },
  { legacyPath: 'brand.ghostBg.base',    newPath: 'bg.brand.ghost',         legacy: mildang.brand.ghostBg.base,    new: mildangNew.bg.brand.ghost.DEFAULT },
  { legacyPath: 'brand.ghostBg.high',    newPath: 'bg.brand.ghost.hover',   legacy: mildang.brand.ghostBg.high,    new: mildangNew.bg.brand.ghost.hover },
  { legacyPath: 'brand.ghostBg.highest', newPath: 'bg.brand.ghost.pressed', legacy: mildang.brand.ghostBg.highest, new: mildangNew.bg.brand.ghost.pressed },
  { legacyPath: 'brand.border.low',     newPath: 'border.brand.subtle',     legacy: mildang.brand.border.low,     new: mildangNew.border.brand.subtle },
  { legacyPath: 'brand.border.base',    newPath: 'border.brand.default',    legacy: mildang.brand.border.base,    new: mildangNew.border.brand.default },
  { legacyPath: 'brand.border.high',    newPath: 'border.brand.emphasized', legacy: mildang.brand.border.high,    new: mildangNew.border.brand.emphasized },
  { legacyPath: 'brand.border.highest', newPath: 'border.brand.strong',     legacy: mildang.brand.border.highest, new: mildangNew.border.brand.strong },
  { legacyPath: 'brand.fg.low',  newPath: 'icon.brand.subtle',  legacy: mildang.brand.fg.low,  new: mildangNew.icon.brand.subtle },
  { legacyPath: 'brand.fg.base', newPath: 'icon.brand.default', legacy: mildang.brand.fg.base, new: mildangNew.icon.brand.default },
  { legacyPath: 'brand.text.base', newPath: 'text.brand.default', legacy: mildang.brand.text.base, new: mildangNew.text.brand.default },
];

let passed = 0;
let failed = 0;
const failures: string[] = [];

for (const pair of pairs) {
  const legacyBase = pair.legacy.value.base;
  const newBase = pair.new.value.base;
  const legacyDark = pair.legacy.value._dark;
  const newDark = pair.new.value._dark;

  if (legacyBase === newBase && legacyDark === newDark) {
    passed++;
  } else {
    failed++;
    if (legacyBase !== newBase) {
      failures.push(`  LIGHT  ${pair.legacyPath} → ${pair.newPath}\n         legacy: ${legacyBase}\n            new: ${newBase}`);
    }
    if (legacyDark !== newDark) {
      failures.push(`  DARK   ${pair.legacyPath} → ${pair.newPath}\n         legacy: ${legacyDark}\n            new: ${newDark}`);
    }
  }
}

console.log(`\n토큰 동일성 검증 결과`);
console.log(`─────────────────────────────`);
console.log(`총 ${pairs.length}쌍  ✓ ${passed}개 일치  ✗ ${failed}개 불일치\n`);

if (failures.length > 0) {
  console.log('불일치 목록:');
  failures.forEach(f => console.log(f));
  console.log('');
  process.exit(1);
} else {
  console.log('모든 토큰이 동일한 primitive 색상을 참조합니다.');
  process.exit(0);
}
