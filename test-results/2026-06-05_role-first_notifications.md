# 2026-06-05 role-first — notifications

| 항목 | 값 |
|------|----|
| 날짜 | 2026-06-05 |
| 모델 | Claude Sonnet 4.6 |
| 토큰 체계 | role-first |
| 페이지 | notifications |
| `pnpm check-types` | 실패 (tokenParity.ts 기존 에러; 알림 센터 페이지 기인 없음) |

## 정확도

| 유형 | 건수 | 주요 사례 |
|------|------|-----------|
| role mismatch | 10건 | `fg.*` 토큰을 `bg` / `borderColor` property에 사용 |
| fg/text mismatch | 0건 | — |

<details>
<summary>상세 목록</summary>

**role mismatch — `fg` 토큰을 `bg` / `borderColor` property에 사용**

| line | 현재 토큰 | property | 문제 | 권장 토큰 |
|------|-----------|----------|------|-----------|
| 258 | `brand.fg.base` | `bg` | "전체" 선택 pill 버튼 배경 | `brand.bg.highest` |
| 311 | `success.fg.base` | `borderColor` | 알림1 좌측 4px 강조선 (읽지 않음) | `success.border.highest` |
| 394 | `error.fg.base` | `borderColor` | 알림2 좌측 4px 강조선 (읽지 않음) | `error.border.highest` |
| 423 | `error.fg.base` | `bg` | "즉시 확인" filled 뱃지 배경 | `error.bg.highest` |
| 436 | `error.fg.base` | `bg` | "상세 보기" filled 버튼 배경 | `error.bg.highest` |
| 489 | `warning.fg.base` | `borderColor` | 알림3 좌측 4px 강조선 (읽지 않음) | `warning.border.highest` |
| 572 | `info.fg.base` | `borderColor` | 알림4 좌측 4px 강조선 (읽지 않음) | `info.border.highest` |
| 655 | `brand.fg.base` | `borderColor` | 알림5 좌측 4px 강조선 (읽지 않음) | `brand.border.highest` |
| 684 | `brand.fg.base` | `bg` | "새 기능" filled 뱃지 배경 | `brand.bg.highest` |
| 697 | `brand.fg.base` | `bg` | "지금 확인" filled 버튼 배경 | `brand.bg.highest` |

> **패턴:** property-first의 `fill.*` 토큰(강한 채움 색상)을 role-first로 변환할 때, 대응 토큰이 없다고 판단하고 시각적으로 가장 비슷한 `*.fg.base`(아이콘용 색상)를 `bg` / `borderColor`에 전용한 것이 원인. 정석 대응은 `*.bg.highest` (배경) / `*.border.highest` (테두리).

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

| 항목 | 결과 |
|------|------|
| 비교 대상 | property-first 알림 센터 페이지 |
| 전체적 일치 여부 | 대체로 일치 |
| 차이 발생 영역 | 읽지 않음 카드 좌측 강조선 색조 (fg vs border.highest 팔레트 단계 차이), filled 뱃지·버튼 배경 채도 (fg vs bg.highest 팔레트 단계 차이) |

## 종합

> 토큰 커버리지는 100%이며 없는 토큰을 창작하는 추론 오류는 발생하지 않았다. fg/text 역할 혼동도 없어 대시보드 평가 대비 개선됐다.
> 단 property-first의 `fill.*` 토큰에 해당하는 role-first 대응 토큰을 `fg.*`로 잘못 식별한 패턴이 10건 반복됐다. `fill.*` → `*.bg.highest` / `*.border.highest` 매핑 규칙 미숙지가 원인이며, 시각적으로는 같은 팔레트 내 다른 단계 색상이 출력된다.
