# 2026-06-05 role-first — dashboard

| 항목 | 값 |
|------|----|
| 날짜 | 2026-06-05 |
| 모델 | Claude Sonnet 4.6 |
| 토큰 체계 | role-first |
| 페이지 | dashboard |
| `pnpm check-types` | 통과 |

## 정확도

| 유형 | 건수 | 주요 사례 |
|------|------|-----------|
| role mismatch | 18건 | `fg.*` 토큰을 `bg` property에, `bg.*` 토큰을 `color` property에 사용 |
| fg/text mismatch | 16건 | 텍스트 콘텐츠에 `text.*` 대신 `fg.*` 토큰 사용 |

<details>
<summary>상세 목록</summary>

**role mismatch — `fg` 토큰을 `bg` / `borderColor` property에 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 43 | `primary.fg.base` | `bg` | 사이드바 배경 | 설계 레벨 재검토 필요 (어두운 배경 토큰 부재) |
| 58, 186 | `primary.fg.lowest` | `borderColor` | 사이드바 구분선 | `primary.border.low` |
| 118, 136, 154, 172 | `primary.fg.low` | `bg` (hover) | nav 비활성 hover 배경 | `primary.ghostBg.base` |
| 118, 136, 154, 172 | `primary.bg.low` | `color` (hover) | nav 비활성 hover 텍스트 — fg↔bg 완전 역전 | `primary.text.base` |
| 301, 363, 405 | `primary.fg.base` | `bg` | 툴팁 배경 | 설계 레벨 재검토 필요 (어두운 배경 토큰 부재) |
| 826 | `success.fg.base` | `bg` | 프로그레스 바 fill | `success.bg.high` |
| 851 | `warning.fg.base` | `bg` | 프로그레스 바 fill | `warning.bg.high` |
| 876 | `error.fg.base` | `bg` | 프로그레스 바 fill | `error.bg.high` |
| 1418 | `primary.fg.lowest` | `bg` | 비활성 토글 배경 | `primary.bg.highest` |

**fg/text mismatch — 텍스트 콘텐츠에 `fg.*` 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 116, 134, 152, 170 | `primary.fg.lowest` | `color` | nav 비활성 텍스트 | `primary.text.lowest` |
| 251, 262 | `primary.fg.lowest` | `color` | 브레드크럼 구분자 `/` | `primary.text.lowest` |
| 926, 941, 986 | `primary.fg.lowest` | `color` | 비활성 탭 텍스트 | `primary.text.lowest` |
| 1065 | `primary.fg.lowest` | `color` (_placeholder) | 인풋 placeholder | `primary.text.lowest` |
| 1130, 1170, 1210, 1250, 1290 | `primary.fg.base` | `color` | 아바타 이니셜 | `primary.text.base` |
| 1414 | `primary.fg.lowest` | `color` | 비활성 라벨 텍스트 | `primary.text.lowest` |

</details>

## 완성도

| 항목 | 건수 | 비고 |
|------|------|------|
| 하드코딩된 색상값 | 0건 | 모든 색상에 토큰 사용 |
| 토큰 미적용 (빈 스타일) | 0건 | |

## 추론 오류

| 항목 | 결과 |
|------|------|
| 없는 토큰 사용 | 없음 |
| 오류 토큰 목록 | — |

## 시각적 동일성

미진행

## 종합

토큰 완성도(커버리지)는 높으나 `fg` / `text` / `bg` 역할 구분에서 반복적인 혼선이 발생했다.
특히 nav hover 패턴에서 `fg`와 `bg`가 완전히 뒤바뀐 사례가 4곳 반복됐고, 사이드바·툴팁 어두운 배경 처리에 `fg.base`를 bg로 전용한 것은 어두운 배경용 토큰이 토큰 체계에 없는 데서 비롯된 구조적 한계로 보인다.
추론 오류(없는 토큰 창작)는 발생하지 않았다.
