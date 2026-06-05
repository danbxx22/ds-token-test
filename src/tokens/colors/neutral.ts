import type { ColorToken } from './type';

/**
 * neutral — gray(솔리드) + black alpha(light) + white alpha(dark) 통합 팔레트.
 *
 * neutral.light : 라이트 모드 기준. 솔리드 스케일 + dark-base alpha 스케일
 * neutral.dark  : 다크 모드 기준. 솔리드 스케일 + white-base alpha 스케일
 *
 * alpha 레벨 의미 (light 기준):
 *   a100–a600 : 미세 ghost/overlay (surface ghost, 그림자)
 *   a700      : scrim, carousel dot
 *   a800      : backdrop (모달 뒤)
 *   a900      : 반투명 핸들
 *   a1000     : near-solid 표면
 *
 * 이전 토큰 대응:
 *   gray.light.*  → neutral.light.*
 *   gray.dark.*   → neutral.dark.*
 *   black.a100~a600 → neutral.light.a100~a600 (값 동일)
 *   black.a800      → neutral.light.a700 (값 동일, 0.40)
 *   black.a1100     → neutral.light.a900 (값 동일, 0.80)
 *   black.a1200     → neutral.light.a1000 (값 동일, 0.90)
 *   black.a1300     → neutral.light.1200 (solid, 값 동일)
 *   white.a400      → neutral.dark.a400 (0.16 → 0.24, 의도적 조정)
 *   white.a600      → neutral.dark.a600 (0.24 → 0.40, 의도적 조정)
 *   white.a1100     → neutral.dark.a900 (값 동일, 0.80)
 *   white.a1200     → neutral.dark.a1000 (값 동일, 0.90)
 *   white.a1300     → neutral.dark.1200 (solid, 값 동일)
 */
export const neutral: ColorToken = {
  light: {
    // Solid scale — base: rgba(30, 32, 36)
    '100':  { value: 'rgba(255, 255, 255, 1)' },
    '200':  { value: 'rgba(250, 251, 252, 1)' },
    '300':  { value: 'rgba(245, 246, 248, 1)' },
    '400':  { value: 'rgba(237, 238, 242, 1)' },
    '500':  { value: 'rgba(226, 228, 234, 1)' },
    '600':  { value: 'rgba(203, 207, 216, 1)' },
    '700':  { value: 'rgba(137, 144, 159, 1)' },
    '800':  { value: 'rgba(126, 133, 149, 1)' },
    '900':  { value: 'rgba(116, 123, 139, 1)' },
    '1000': { value: 'rgba(107, 113, 128, 1)' },
    '1100': { value: 'rgba(79, 84, 95, 1)'    },
    '1200': { value: 'rgba(30, 32, 36, 1)'    },
    // Alpha — base: rgba(30, 32, 36)
    a100:  { value: 'rgba(30, 32, 36, 0.06)' },
    a200:  { value: 'rgba(30, 32, 36, 0.09)' },
    a300:  { value: 'rgba(30, 32, 36, 0.12)' },
    a400:  { value: 'rgba(30, 32, 36, 0.16)' },
    a500:  { value: 'rgba(30, 32, 36, 0.20)' },
    a600:  { value: 'rgba(30, 32, 36, 0.24)' },
    a700:  { value: 'rgba(30, 32, 36, 0.40)' }, // scrim, carousel
    a800:  { value: 'rgba(30, 32, 36, 0.60)' }, // backdrop
    a900:  { value: 'rgba(30, 32, 36, 0.80)' }, // 반투명 핸들
    a1000: { value: 'rgba(30, 32, 36, 0.90)' }, // near-solid 표면
  },
  dark: {
    // Solid scale — base: rgba(255, 255, 255)
    '100':  { value: 'rgba(9, 11, 16, 1)'     },
    '200':  { value: 'rgba(21, 24, 30, 1)'    },
    '300':  { value: 'rgba(26, 29, 36, 1)'    },
    '400':  { value: 'rgba(30, 34, 41, 1)'    },
    '500':  { value: 'rgba(50, 53, 63, 1)'    },
    '600':  { value: 'rgba(66, 71, 82, 1)'    },
    '700':  { value: 'rgba(95, 100, 112, 1)'  },
    '800':  { value: 'rgba(104, 110, 123, 1)' },
    '900':  { value: 'rgba(115, 120, 132, 1)' },
    '1000': { value: 'rgba(133, 138, 147, 1)' },
    '1100': { value: 'rgba(166, 169, 176, 1)' },
    '1200': { value: 'rgba(255, 255, 255, 1)' },
    // Alpha — base: rgba(255, 255, 255)
    a100:  { value: 'rgba(255, 255, 255, 0.12)' },
    a200:  { value: 'rgba(255, 255, 255, 0.16)' },
    a300:  { value: 'rgba(255, 255, 255, 0.20)' },
    a400:  { value: 'rgba(255, 255, 255, 0.24)' },
    a500:  { value: 'rgba(255, 255, 255, 0.32)' },
    a600:  { value: 'rgba(255, 255, 255, 0.40)' },
    a700:  { value: 'rgba(255, 255, 255, 0.60)' }, // inverse backdrop
    a800:  { value: 'rgba(255, 255, 255, 0.70)' }, // inverse 표면
    a900:  { value: 'rgba(255, 255, 255, 0.80)' }, // inverse near-solid
    a1000: { value: 'rgba(255, 255, 255, 0.90)' }, // inverse solid
  },
};