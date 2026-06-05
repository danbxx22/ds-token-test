# 토큰 네이밍 ergonomics 테스트 결과

## 평가 기준

| 항목 | 설명 | 확인 방법 |
|------|------|-----------|
| **정확도** | 의미에 맞는 시맨틱 토큰을 맞는 자리(property)에 썼는가 | 코드 리뷰 |
| **완성도** | 색상이 빠진 자리(하드코딩, 빈 값)가 있는가 | 코드 리뷰 |
| **추론 오류** | 없는 토큰을 지어냈는가 | `pnpm check-types` |
| **시각적 동일성** | 비교 대상 페이지와 같아 보이는가 | Storybook 나란히 비교 |

> **정확도 세부 분류**
> - role mismatch: 존재하는 토큰이지만 property에 맞지 않는 역할로 사용 (예: `bg`에 `fg.*` 토큰)
> - fg/text mismatch: 텍스트 콘텐츠에 `text.*` 대신 `fg.*` 토큰 사용

---

## 파일 목록

| 파일 | 날짜 | 모델 | 토큰 체계 | 페이지 |
|------|------|------|-----------|--------|
| [2026-06-05_role-first_dashboard](./2026-06-05_role-first_dashboard.md) | 2026-06-05 | Claude Sonnet 4.6 | role-first | dashboard |

---

## 비교 요약 _(role-first vs property-first 양쪽 완료 후 작성)_

| 항목 | role-first | property-first |
|------|-----------|----------------|
| role mismatch | | |
| fg/text mismatch | | |
| 하드코딩 | | |
| 추론 오류 | | |
| 시각적 동일성 | | |

> 종합 의견
