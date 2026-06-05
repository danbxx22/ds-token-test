# 2026-06-05 role-first — billing

| 항목 | 값 |
|------|----|
| 날짜 | 2026-06-05 |
| 모델 | Claude Sonnet 4.6 |
| 토큰 체계 | role-first |
| 페이지 | billing |
| `pnpm check-types` | 실패 (19건) — 전부 기존 `tokenParity.ts` 오류, billing 페이지 무관 |

## 정확도

| 유형 | 건수 | 주요 사례 |
|------|------|-----------|
| role mismatch | 9건 | `fg.*` → `bg`/`borderColor` property, `bg.*` → `color` property |
| fg/text mismatch | 7건 | 텍스트 콘텐츠에 `text.*` 대신 `fg.*` 사용 |

<details>
<summary>상세 목록</summary>

**role mismatch — `fg.*` 토큰을 `bg`/`borderColor` property에 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 34 | `primary.fg.base` | `bg` | 사이드바 배경 | 구조적 한계 (어두운 배경 전용 토큰 없음) |
| 49, 159 | `primary.fg.lowest` | `borderColor` | 사이드바 상단·하단 구분선 | `primary.border.low` |
| 109, 127, 145 | `primary.fg.low` | `bg` (hover) | nav 비활성 hover 배경 | `primary.ghostBg.base` |

**role mismatch — `bg.*` 토큰을 `color` property에 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 109, 127, 145 | `primary.bg.low` | `color` (hover) | nav 비활성 hover 텍스트 — fg↔bg 역전 | `primary.text.base` |

**fg/text mismatch — 텍스트 콘텐츠에 `fg.*` 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 107, 125, 143 | `primary.fg.lowest` | `color` | nav 비활성 텍스트 3곳 | `primary.text.low` |
| 239 | `primary.fg.lowest` | `color` | Free 카드 제외 기능 텍스트 | `primary.text.low` |
| 252 | `primary.fg.lowest` | `color` | Free 카드 disabled 버튼 텍스트 | `primary.text.low` |
| 327 | `primary.fg.lowest` | `color` | Pro 카드 제외 기능 텍스트 | `primary.text.low` |
| 842 | `primary.fg.lowest` | `color` | 결제 내역 테이블 7행 em dash `—` | `primary.text.low` |

</details>

## 완성도

| 항목 | 건수 | 비고 |
|------|------|------|
| 하드코딩된 색상값 | 0건 | 모든 색상에 토큰 사용 |
| 토큰 미적용 (빈 스타일) | 0건 | 스펙 4개 섹션 전부 구현 |

## 추론 오류

| 항목 | 결과 |
|------|------|
| 없는 토큰 사용 | 없음 |
| 오류 토큰 목록 | — |

## 시각적 동일성

| 항목 | 결과 |
|------|------|
| 비교 대상 | 스펙 문서 |
| 전체적 일치 여부 | 일치 |
| 차이 발생 영역 | 없음 — 플랜 3열·결제 수단·결제 내역 테이블 9행·청구 요약 3열 전부 구현 |

## 종합

대시보드(role mismatch 18건·fg/text mismatch 16건) 대비 절반 수준(9건·7건)으로 오류가 줄었다.
잔존 오류는 모두 사이드바 nav 패턴에서 대시보드와 동일하게 반복된 것으로, 어두운 배경 전용 토큰 부재라는 구조적 한계(`primary.fg.base` → `bg`)와 nav hover 시 `fg`/`bg` 역할 혼동(`primary.fg.low` → hover bg, `primary.bg.low` → hover text)이 원인이다.
추론 오류(없는 토큰 창작)는 없었고, 스펙 항목 누락도 없었다.
