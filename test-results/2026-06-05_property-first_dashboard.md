# 2026-06-05 property-first — dashboard

| 항목 | 값 |
|------|----|
| 날짜 | 2026-06-05 |
| 모델 | Claude Sonnet 4.6 |
| 토큰 체계 | property-first |
| 페이지 | dashboard |
| `pnpm check-types` | 통과 (기존 `tokenParity.ts` 오류 제외, 신규 파일 에러 없음) |

## 정확도

| 유형 | 건수 | 주요 사례 |
|------|------|-----------|
| role mismatch | 1건 | `border.*` 토큰을 `bg` property에 사용 |
| icon/text mismatch | 4건 | 사이드바 비활성 텍스트에 `icon.*` 대신 `text.*` 미사용 |

<details>
<summary>상세 목록</summary>

**role mismatch — `border` 토큰을 `bg` property에 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 426 | `border.neutral.subtle` | `bg` | 헤더 우측 세로 구분선을 1px div + background-color로 구현 | `bg: 'surface.neutral.default'` 또는 `border-right` 방식으로 변경 |

**icon/text mismatch — 텍스트 콘텐츠에 `text.*` 대신 `icon.*` 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 116 | `icon.neutral.subtle` | `color` | 사이드바 비활성 nav 텍스트 (사용자 관리) | `text.neutral.subtle` |
| 134 | `icon.neutral.subtle` | `color` | 사이드바 비활성 nav 텍스트 (결제 내역) | `text.neutral.subtle` |
| 152 | `icon.neutral.subtle` | `color` | 사이드바 비활성 nav 텍스트 (알림 설정) | `text.neutral.subtle` |
| 170 | `icon.neutral.subtle` | `color` | 사이드바 비활성 nav 텍스트 (시스템 로그) | `text.neutral.subtle` |

> **선택 이유**: `text.neutral.subtle` = neutral.light.1000 = rgba(107,113,128)은 어두운 사이드바(rgba(30,32,36)) 위에서 대비 약 3.4:1로 AA 경계 수준이라, 가독성을 위해 `icon.neutral.subtle` = neutral.light.600 = rgba(203,207,216, 대비 ~10:1)을 의도적으로 선택했다. 슬롯 규칙 위반이지만 UX 판단.

</details>

## 완성도

| 항목 | 건수 | 비고 |
|------|------|------|
| 하드코딩된 색상값 | 0건 | 모든 색상에 토큰 사용 |
| 토큰 미적용 (빈 스타일) | 0건 | |
| 토큰 없는 CSS 값 사용 | 2건 | `fill.*` hover 상태 토큰 부재 → `filter: '[brightness(0.88)]'` (line 446, 1539) |

> `fill.brand`, `fill.critical` hover 변형 토큰이 property-first 체계에 없어 CSS filter로 처리.
> role-first에는 `brand.bg.highest`, `error.bg.highest` 등 hover용 단계가 있었음.

## 추론 오류

| 항목 | 결과 |
|------|------|
| 없는 토큰 사용 | 없음 |
| 오류 토큰 목록 | — |

## 시각적 동일성

| 항목 | 결과 |
|------|------|
| 비교 대상 | role-first dashboard (`src/app/role-first/dashboard/page.tsx`) |
| 전체적 일치 여부 | 동일 |
| 차이 발생 영역 | 테이블 짝수 행 stripe: role-first `primary.bg.low`(solid 연회색) ↔ property-first `surface.neutral.ghost`(dark-base 6% alpha). 흰 배경 위에서 시각적으로 유사하나 색 계산 방식 차이 |

> `fill.neutral` = neutral.light.1200, `surface.neutral.subtle` = neutral.light.100 등 주요 배경·텍스트 토큰이 role-first 대응 토큰과 동일 원시값(primitive)으로 해석되어 화면이 사실상 동일.

## 종합

role-first(18건 role mismatch) 대비 property-first는 1건으로 대폭 감소했다.
`surface / fill / border / icon / text` 슬롯명이 사용 위치를 명시적으로 드러내 혼선이 줄었고, 추론 오류(없는 토큰 창작)는 양쪽 모두 발생하지 않았다.
남은 이슈 2가지 중 `border`→`bg` mismatch는 단순 실수이며, `icon.*`→텍스트 사용은 어두운 배경의 가독성 확보를 위한 의도적 트레이드오프로 볼 수 있다.
`fill.*` hover 토큰 부재는 모델 오류가 아닌 토큰 체계의 미비로, role-first의 `*.bg.highest` 패턴에 해당하는 slot이 추가되면 해소 가능하다.
