# 2026-06-05 property-first — notifications

| 항목 | 값 |
|------|----|
| 날짜 | 2026-06-05 |
| 모델 | claude-sonnet-4-6 |
| 토큰 체계 | property-first |
| 페이지 | notifications (알림 센터) |
| `pnpm check-types` | 통과 (신규 파일 0건; 기존 tokenParity.ts 오류는 무관) |

---

## 정확도

| 유형 | 건수 | 주요 사례 |
|------|------|-----------|
| role mismatch | 5 | `fill.*` 토큰을 `borderColor`에 사용 — 좌측 강조선 5개 |
| fg/text mismatch | 0 | — |

<details>
<summary>상세 목록</summary>

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 316 | `fill.positive` | `borderColor` | `fill.*`은 채움 배경 전용. 동일 값(`green.light.700`)이지만 border 슬롯에는 `border.*` 사용 | `border.positive.strongest` |
| 399 | `fill.critical` | `borderColor` | 위 동일 | `border.critical.strongest` |
| 494 | `fill.warning` | `borderColor` | 위 동일 | `border.warning.strongest` |
| 577 | `fill.info` | `borderColor` | 위 동일 | `border.info.strongest` |
| 660 | `fill.brand` | `borderColor` | 위 동일 | `border.brand.strongest` |

> **참고**: 색상 값은 동일(`fill.positive` = `border.positive.strongest` = `green.light.700`). 시각 결과 차이 없음.

</details>

---

## 완성도

| 항목 | 건수 | 비고 |
|------|------|------|
| 하드코딩된 색상값 | 0 | `#hex` / `rgb()` 없음 |
| 토큰 미적용 (빈 스타일) | 0 | 모든 색상 요소에 토큰 적용됨 |
| 임의값 남용 | 1 | line 776: `opacity: '[0.7]'` — 읽음 상태 뱃지 연하게 처리할 때 opacity 임의값 사용. 토큰 레벨(`border.positive.subtle` 등 더 연한 계열)로 대체하는 것이 더 일관됨 |

---

## 추론 오류

| 항목 | 결과 |
|------|------|
| 없는 토큰 사용 | 없음 |
| 오류 토큰 목록 | — |

> TypeScript 타입 검사 통과 확인. `fill.warning`, `fill.info`, `icon.positive.muted`, `icon.warning.muted`, `icon.info.muted`, `border.*.default` 등 신규 토큰 조합 모두 정의 파일(`mildang.ts`)에 존재 확인.

---

## 시각적 동일성

| 항목 | 결과 |
|------|------|
| 비교 대상 | 없음 (신규 페이지 — role-first 버전 미존재) |
| 스펙 일치 여부 | 높음 |
| 차이 발생 영역 | 읽음 카드(알림 6–8)가 `surface.neutral.subtle` 배경과 동일 배경색 → 카드 외곽이 배경에 묻혀 경계 불명확. `border: '1px solid'` 추가 또는 `surface.neutral.muted` 사용 검토 필요 |

---

## 종합

> role mismatch 5건은 모두 좌측 강조 테두리에 `fill.*`을 `borderColor`로 쓴 케이스. 색상 값 자체는 `border.*.strongest`와 동일하므로 시각 영향은 없으나, `fill` 네임스페이스 정의("채움 배경 전용")와 어긋난다. `border.*.strongest`로 교체하면 의미 일치. 그 외 하드코딩 0건·추론 오류 0건으로 토큰 활용도는 양호.
