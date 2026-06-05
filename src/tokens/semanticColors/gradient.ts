/**
 * Tier 2 semantic gradient role.
 *
 * Figma "Tier 2 : Semantic" 컬렉션의 `semantic-gradient-color/{role}/bg/stop_*` 변수 +
 * 같은 컬렉션 내 Style 정의(`gradient/{role}/{direction}`)를 코드로 옮긴 것.
 *
 * 구조:
 *   stop1, stop2 — Figma Variable 대응. raw color-scale을 alias.
 *   default/horizontal/vertical/fadeOut* — Figma Style 대응. stop의 CSS var를 합성한 linear-gradient.
 *
 * 합성 토큰은 stop CSS var를 참조하므로 stop 값만 갈아끼우면 자동 전파된다.
 * `dim`만 mode별 분기(white↔black) 필요해 dimMode 파라미터로 결정.
 */

type DimMode = 'darkable' | 'static';

const linear = (role: 'primary' | 'secondary' | 'tertiary', angle: string) =>
  `linear-gradient(${angle}, {colors.gradient.${role}.stop1} 0%, {colors.gradient.${role}.stop2} 100%)`;

const linearDim = (direction: string) =>
  `linear-gradient(${direction}, {colors.gradient.dim.stop2} 0%, {colors.gradient.dim.stop1} 100%)`;

const same = (light: string, dark: string) => ({ base: light, _dark: dark });
const fixed = (value: string) => ({ base: value, _dark: value });

export const buildGradient = (dimMode: DimMode) => {
  const dimDark = dimMode === 'darkable';
  const dimStop1 = dimDark
    ? same('{colors.white.a1300}', '{colors.black.a1300}')
    : fixed('{colors.white.a1300}');
  const dimStop2 = dimDark
    ? same('{colors.white.a000}', '{colors.black.a000}')
    : fixed('{colors.white.a000}');

  return {
    primary: {
      stop1: { value: fixed('{colors.purple.light.900}') },
      stop2: { value: fixed('{colors.schoolPT.dark.700}') },
      default: { value: fixed(linear('primary', '135deg')) },
      horizontal: { value: fixed(linear('primary', '90deg')) },
      vertical: { value: fixed(linear('primary', '180deg')) },
    },
    secondary: {
      stop1: { value: fixed('{colors.pink.light.700}') },
      stop2: { value: fixed('{colors.blue.light.600}') },
      default: { value: fixed(linear('secondary', '135deg')) },
    },
    tertiary: {
      stop1: { value: fixed('{colors.pink.light.300}') },
      stop2: { value: fixed('{colors.blue.light.400}') },
      default: { value: fixed(linear('tertiary', '338deg')) },
    },
    dim: {
      stop1: { value: dimStop1 },
      stop2: { value: dimStop2 },
      fadeOutLeft: { value: fixed(linearDim('to left')) },
      fadeOutRight: { value: fixed(linearDim('to right')) },
      fadeOutTop: { value: fixed(linearDim('to top')) },
      fadeOutBottom: { value: fixed(linearDim('to bottom')) },
    },
  } as const;
};
