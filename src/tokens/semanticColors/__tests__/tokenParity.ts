/**
 * role-first ↔ property-first 토큰 동일성 검증
 * 같은 역할의 두 토큰이 동일한 primitive 색상 참조를 가리키는지 확인한다.
 *
 * 실행: pnpm test:parity
 */
import { roleFirstSemantic as rf } from '../role-first/semantic';
import { mildang as pf } from '../property-first/mildang';

type TokenValue = { value: { base: string; _dark: string } };

interface PairEntry {
  rfPath: string;
  pfPath: string;
  rf: TokenValue;
  pf: TokenValue;
}

const pairs: PairEntry[] = [
  // primary → neutral : bg
  { rfPath: 'primary.bg.low',         pfPath: 'bg.neutral.subtle',      rf: rf.primary.bg.low,         pf: pf.bg.neutral.subtle },
  { rfPath: 'primary.bg.base',        pfPath: 'bg.neutral.muted',       rf: rf.primary.bg.base,        pf: pf.bg.neutral.muted },
  { rfPath: 'primary.bg.high',        pfPath: 'bg.neutral.emphasized',  rf: rf.primary.bg.high,        pf: pf.bg.neutral.emphasized },
  { rfPath: 'primary.bg.highest',     pfPath: 'bg.neutral.solid',       rf: rf.primary.bg.highest,     pf: pf.bg.neutral.solid },
  // primary → neutral : ghostBg
  { rfPath: 'primary.ghostBg.base',    pfPath: 'bg.neutral.ghost',         rf: rf.primary.ghostBg.base,    pf: pf.bg.neutral.ghost.DEFAULT },
  { rfPath: 'primary.ghostBg.high',    pfPath: 'bg.neutral.ghost.hover',   rf: rf.primary.ghostBg.high,    pf: pf.bg.neutral.ghost.hover },
  { rfPath: 'primary.ghostBg.highest', pfPath: 'bg.neutral.ghost.pressed', rf: rf.primary.ghostBg.highest, pf: pf.bg.neutral.ghost.pressed },
  // primary → neutral : border
  { rfPath: 'primary.border.low',     pfPath: 'border.neutral.subtle',     rf: rf.primary.border.low,     pf: pf.border.neutral.subtle },
  { rfPath: 'primary.border.base',    pfPath: 'border.neutral.default',    rf: rf.primary.border.base,    pf: pf.border.neutral.default },
  { rfPath: 'primary.border.high',    pfPath: 'border.neutral.emphasized', rf: rf.primary.border.high,    pf: pf.border.neutral.emphasized },
  { rfPath: 'primary.border.highest', pfPath: 'border.neutral.strong',     rf: rf.primary.border.highest, pf: pf.border.neutral.strong },
  // primary → neutral : fg → icon
  { rfPath: 'primary.fg.lowest', pfPath: 'icon.neutral.subtle',  rf: rf.primary.fg.lowest, pf: pf.icon.neutral.subtle },
  { rfPath: 'primary.fg.low',    pfPath: 'icon.neutral.default', rf: rf.primary.fg.low,    pf: pf.icon.neutral.default },
  { rfPath: 'primary.fg.base',   pfPath: 'icon.neutral.strong',  rf: rf.primary.fg.base,   pf: pf.icon.neutral.strong },
  // primary → neutral : text
  { rfPath: 'primary.text.lowest', pfPath: 'text.neutral.subtle',  rf: rf.primary.text.lowest, pf: pf.text.neutral.subtle },
  { rfPath: 'primary.text.low',    pfPath: 'text.neutral.default', rf: rf.primary.text.low,    pf: pf.text.neutral.default },
  { rfPath: 'primary.text.base',   pfPath: 'text.neutral.strong',  rf: rf.primary.text.base,   pf: pf.text.neutral.strong },

  // error → critical : bg
  { rfPath: 'error.bg.low',     pfPath: 'bg.critical.subtle',     rf: rf.error.bg.low,     pf: pf.bg.critical.subtle },
  { rfPath: 'error.bg.base',    pfPath: 'bg.critical.muted',      rf: rf.error.bg.base,    pf: pf.bg.critical.muted },
  { rfPath: 'error.bg.high',    pfPath: 'bg.critical.emphasized', rf: rf.error.bg.high,    pf: pf.bg.critical.emphasized },
  { rfPath: 'error.bg.highest', pfPath: 'bg.critical.solid',      rf: rf.error.bg.highest, pf: pf.bg.critical.solid },
  { rfPath: 'error.ghostBg.base',    pfPath: 'bg.critical.ghost',         rf: rf.error.ghostBg.base,    pf: pf.bg.critical.ghost.DEFAULT },
  { rfPath: 'error.ghostBg.high',    pfPath: 'bg.critical.ghost.hover',   rf: rf.error.ghostBg.high,    pf: pf.bg.critical.ghost.hover },
  { rfPath: 'error.ghostBg.highest', pfPath: 'bg.critical.ghost.pressed', rf: rf.error.ghostBg.highest, pf: pf.bg.critical.ghost.pressed },
  { rfPath: 'error.border.low',     pfPath: 'border.critical.subtle',     rf: rf.error.border.low,     pf: pf.border.critical.subtle },
  { rfPath: 'error.border.base',    pfPath: 'border.critical.default',    rf: rf.error.border.base,    pf: pf.border.critical.default },
  { rfPath: 'error.border.high',    pfPath: 'border.critical.emphasized', rf: rf.error.border.high,    pf: pf.border.critical.emphasized },
  { rfPath: 'error.border.highest', pfPath: 'border.critical.strong',     rf: rf.error.border.highest, pf: pf.border.critical.strong },
  { rfPath: 'error.fg.low',  pfPath: 'icon.critical.subtle',  rf: rf.error.fg.low,  pf: pf.icon.critical.subtle },
  { rfPath: 'error.fg.base', pfPath: 'icon.critical.default', rf: rf.error.fg.base, pf: pf.icon.critical.default },
  { rfPath: 'error.text.base', pfPath: 'text.critical.default', rf: rf.error.text.base, pf: pf.text.critical.default },

  // success → positive : bg
  { rfPath: 'success.bg.low',     pfPath: 'bg.positive.subtle',     rf: rf.success.bg.low,     pf: pf.bg.positive.subtle },
  { rfPath: 'success.bg.base',    pfPath: 'bg.positive.muted',      rf: rf.success.bg.base,    pf: pf.bg.positive.muted },
  { rfPath: 'success.bg.high',    pfPath: 'bg.positive.emphasized', rf: rf.success.bg.high,    pf: pf.bg.positive.emphasized },
  { rfPath: 'success.bg.highest', pfPath: 'bg.positive.solid',      rf: rf.success.bg.highest, pf: pf.bg.positive.solid },
  { rfPath: 'success.ghostBg.base',    pfPath: 'bg.positive.ghost',         rf: rf.success.ghostBg.base,    pf: pf.bg.positive.ghost.DEFAULT },
  { rfPath: 'success.ghostBg.high',    pfPath: 'bg.positive.ghost.hover',   rf: rf.success.ghostBg.high,    pf: pf.bg.positive.ghost.hover },
  { rfPath: 'success.ghostBg.highest', pfPath: 'bg.positive.ghost.pressed', rf: rf.success.ghostBg.highest, pf: pf.bg.positive.ghost.pressed },
  { rfPath: 'success.border.low',     pfPath: 'border.positive.subtle',     rf: rf.success.border.low,     pf: pf.border.positive.subtle },
  { rfPath: 'success.border.base',    pfPath: 'border.positive.default',    rf: rf.success.border.base,    pf: pf.border.positive.default },
  { rfPath: 'success.border.high',    pfPath: 'border.positive.emphasized', rf: rf.success.border.high,    pf: pf.border.positive.emphasized },
  { rfPath: 'success.border.highest', pfPath: 'border.positive.strong',     rf: rf.success.border.highest, pf: pf.border.positive.strong },
  { rfPath: 'success.fg.low',  pfPath: 'icon.positive.subtle',  rf: rf.success.fg.low,  pf: pf.icon.positive.subtle },
  { rfPath: 'success.fg.base', pfPath: 'icon.positive.default', rf: rf.success.fg.base, pf: pf.icon.positive.default },
  { rfPath: 'success.text.base', pfPath: 'text.positive.default', rf: rf.success.text.base, pf: pf.text.positive.default },

  // warning → caution : bg
  { rfPath: 'warning.bg.low',     pfPath: 'bg.caution.subtle',     rf: rf.warning.bg.low,     pf: pf.bg.caution.subtle },
  { rfPath: 'warning.bg.base',    pfPath: 'bg.caution.muted',      rf: rf.warning.bg.base,    pf: pf.bg.caution.muted },
  { rfPath: 'warning.bg.high',    pfPath: 'bg.caution.emphasized', rf: rf.warning.bg.high,    pf: pf.bg.caution.emphasized },
  { rfPath: 'warning.bg.highest', pfPath: 'bg.caution.solid',      rf: rf.warning.bg.highest, pf: pf.bg.caution.solid },
  { rfPath: 'warning.ghostBg.base',    pfPath: 'bg.caution.ghost',         rf: rf.warning.ghostBg.base,    pf: pf.bg.caution.ghost.DEFAULT },
  { rfPath: 'warning.ghostBg.high',    pfPath: 'bg.caution.ghost.hover',   rf: rf.warning.ghostBg.high,    pf: pf.bg.caution.ghost.hover },
  { rfPath: 'warning.ghostBg.highest', pfPath: 'bg.caution.ghost.pressed', rf: rf.warning.ghostBg.highest, pf: pf.bg.caution.ghost.pressed },
  { rfPath: 'warning.border.low',     pfPath: 'border.caution.subtle',     rf: rf.warning.border.low,     pf: pf.border.caution.subtle },
  { rfPath: 'warning.border.base',    pfPath: 'border.caution.default',    rf: rf.warning.border.base,    pf: pf.border.caution.default },
  { rfPath: 'warning.border.high',    pfPath: 'border.caution.emphasized', rf: rf.warning.border.high,    pf: pf.border.caution.emphasized },
  { rfPath: 'warning.border.highest', pfPath: 'border.caution.strong',     rf: rf.warning.border.highest, pf: pf.border.caution.strong },
  { rfPath: 'warning.fg.lowest', pfPath: 'icon.caution.subtle',  rf: rf.warning.fg.lowest, pf: pf.icon.caution.subtle },
  { rfPath: 'warning.fg.base',   pfPath: 'icon.caution.default', rf: rf.warning.fg.base,   pf: pf.icon.caution.default },
  { rfPath: 'warning.text.base', pfPath: 'text.caution.default', rf: rf.warning.text.base, pf: pf.text.caution.default },

  // info → informative : bg
  { rfPath: 'info.bg.low',     pfPath: 'bg.informative.subtle',     rf: rf.info.bg.low,     pf: pf.bg.informative.subtle },
  { rfPath: 'info.bg.base',    pfPath: 'bg.informative.muted',      rf: rf.info.bg.base,    pf: pf.bg.informative.muted },
  { rfPath: 'info.bg.high',    pfPath: 'bg.informative.emphasized', rf: rf.info.bg.high,    pf: pf.bg.informative.emphasized },
  { rfPath: 'info.bg.highest', pfPath: 'bg.informative.solid',      rf: rf.info.bg.highest, pf: pf.bg.informative.solid },
  { rfPath: 'info.ghostBg.base',    pfPath: 'bg.informative.ghost',         rf: rf.info.ghostBg.base,    pf: pf.bg.informative.ghost.DEFAULT },
  { rfPath: 'info.ghostBg.high',    pfPath: 'bg.informative.ghost.hover',   rf: rf.info.ghostBg.high,    pf: pf.bg.informative.ghost.hover },
  { rfPath: 'info.ghostBg.highest', pfPath: 'bg.informative.ghost.pressed', rf: rf.info.ghostBg.highest, pf: pf.bg.informative.ghost.pressed },
  { rfPath: 'info.border.low',     pfPath: 'border.informative.subtle',     rf: rf.info.border.low,     pf: pf.border.informative.subtle },
  { rfPath: 'info.border.base',    pfPath: 'border.informative.default',    rf: rf.info.border.base,    pf: pf.border.informative.default },
  { rfPath: 'info.border.high',    pfPath: 'border.informative.emphasized', rf: rf.info.border.high,    pf: pf.border.informative.emphasized },
  { rfPath: 'info.border.highest', pfPath: 'border.informative.strong',     rf: rf.info.border.highest, pf: pf.border.informative.strong },
  { rfPath: 'info.fg.low',  pfPath: 'icon.informative.subtle',  rf: rf.info.fg.low,  pf: pf.icon.informative.subtle },
  { rfPath: 'info.fg.base', pfPath: 'icon.informative.default', rf: rf.info.fg.base, pf: pf.icon.informative.default },
  { rfPath: 'info.text.base', pfPath: 'text.informative.default', rf: rf.info.text.base, pf: pf.text.informative.default },

  // brand → brand : bg
  { rfPath: 'brand.bg.low',     pfPath: 'bg.brand.subtle',     rf: rf.brand.bg.low,     pf: pf.bg.brand.subtle },
  { rfPath: 'brand.bg.base',    pfPath: 'bg.brand.muted',      rf: rf.brand.bg.base,    pf: pf.bg.brand.muted },
  { rfPath: 'brand.bg.high',    pfPath: 'bg.brand.emphasized', rf: rf.brand.bg.high,    pf: pf.bg.brand.emphasized },
  { rfPath: 'brand.bg.highest', pfPath: 'bg.brand.solid',      rf: rf.brand.bg.highest, pf: pf.bg.brand.solid },
  { rfPath: 'brand.ghostBg.base',    pfPath: 'bg.brand.ghost',         rf: rf.brand.ghostBg.base,    pf: pf.bg.brand.ghost.DEFAULT },
  { rfPath: 'brand.ghostBg.high',    pfPath: 'bg.brand.ghost.hover',   rf: rf.brand.ghostBg.high,    pf: pf.bg.brand.ghost.hover },
  { rfPath: 'brand.ghostBg.highest', pfPath: 'bg.brand.ghost.pressed', rf: rf.brand.ghostBg.highest, pf: pf.bg.brand.ghost.pressed },
  { rfPath: 'brand.border.low',     pfPath: 'border.brand.subtle',     rf: rf.brand.border.low,     pf: pf.border.brand.subtle },
  { rfPath: 'brand.border.base',    pfPath: 'border.brand.default',    rf: rf.brand.border.base,    pf: pf.border.brand.default },
  { rfPath: 'brand.border.high',    pfPath: 'border.brand.emphasized', rf: rf.brand.border.high,    pf: pf.border.brand.emphasized },
  { rfPath: 'brand.border.highest', pfPath: 'border.brand.strong',     rf: rf.brand.border.highest, pf: pf.border.brand.strong },
  { rfPath: 'brand.fg.low',  pfPath: 'icon.brand.subtle',  rf: rf.brand.fg.low,  pf: pf.icon.brand.subtle },
  { rfPath: 'brand.fg.base', pfPath: 'icon.brand.default', rf: rf.brand.fg.base, pf: pf.icon.brand.default },
  { rfPath: 'brand.text.base', pfPath: 'text.brand.default', rf: rf.brand.text.base, pf: pf.text.brand.default },
];

let passed = 0;
let failed = 0;
const failures: string[] = [];

for (const pair of pairs) {
  const rfBase = pair.rf.value.base;
  const pfBase = pair.pf.value.base;
  const rfDark = pair.rf.value._dark;
  const pfDark = pair.pf.value._dark;

  if (rfBase === pfBase && rfDark === pfDark) {
    passed++;
  } else {
    failed++;
    if (rfBase !== pfBase) {
      failures.push(`  LIGHT  ${pair.rfPath} → ${pair.pfPath}\n         rf: ${rfBase}\n         pf: ${pfBase}`);
    }
    if (rfDark !== pfDark) {
      failures.push(`  DARK   ${pair.rfPath} → ${pair.pfPath}\n         rf: ${rfDark}\n         pf: ${pfDark}`);
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
