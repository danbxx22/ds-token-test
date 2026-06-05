# 토큰 네이밍 ergonomics 테스트 결과

## 평가 기준


| 항목          | 설명                                  | 확인 방법              |
| ----------- | ----------------------------------- | ------------------ |
| **정확도**     | 의미에 맞는 시맨틱 토큰을 맞는 자리(property)에 썼는가 | 코드 리뷰              |
| **완성도**     | 색상이 빠진 자리(하드코딩, 빈 값)가 있는가           | 코드 리뷰              |
| **추론 오류**   | 없는 토큰을 지어냈는가                        | `pnpm check-types` |
| **시각적 동일성** | 비교 대상 페이지와 같아 보이는가                  | Storybook 나란히 비교   |


> **정확도 세부 분류**
>
> - role mismatch: 존재하는 토큰이지만 property에 맞지 않는 역할로 사용 (예: `bg`에 `fg.`* 토큰)
> - fg/text mismatch: 텍스트 콘텐츠에 `text.*` 대신 `fg.*` 토큰 사용

---

## 파일 목록


| 파일                                                                              | 날짜         | 모델                | 토큰 체계          | 페이지       |
| ------------------------------------------------------------------------------- | ---------- | ----------------- | -------------- | --------- |
| [2026-06-05_role-first_dashboard](./2026-06-05_role-first_dashboard.md)         | 2026-06-05 | Claude Sonnet 4.6 | role-first     | dashboard |
| [2026-06-05_property-first_dashboard](./2026-06-05_property-first_dashboard.md) | 2026-06-05 | Claude Sonnet 4.6 | property-first | dashboard |
| [2026-06-05_role-first_billing](./2026-06-05_role-first_billing.md)             | 2026-06-05 | Claude Sonnet 4.6 | role-first     | billing   |
| [2026-06-05-property-first-billing](./2026-06-05-property-first-billing.md)     | 2026-06-05 | Claude Sonnet 4.6 | property-first | billing   |


---

## 비교 요약 — dashboard (Claude Sonnet 4.6)


| 항목               | role-first | property-first              |
| ---------------- | ---------- | --------------------------- |
| role mismatch    | 18건        | **1건**                      |
| fg/text mismatch | 16건        | **4건** (icon→text 슬롯 혼용)    |
| 하드코딩             | 0건         | 0건                          |
| 추론 오류            | 없음         | 없음                          |
| 시각적 동일성          | 미진행        | 사실상 동일 (짝수 행 stripe 방식만 차이) |


> property-first는 슬롯명(`surface` / `fill` / `border` / `icon` / `text`)이 사용 위치를 명시해 role mismatch가 18→1건으로 대폭 감소했다. fg/text 혼용도 16→4건으로 줄었으며, 남은 4건은 가독성을 위한 의도적 트레이드오프다. 추론 오류(없는 토큰 창작)는 양쪽 모두 발생하지 않았다. `fill.`* hover 단계 토큰 부재는 property-first 체계의 미비 사항으로 확인됐다.

---

## 비교 요약 — billing (Claude Sonnet 4.6)


| 항목               | role-first                               | property-first |
| ---------------- | ---------------------------------------- | -------------- |
| role mismatch    | 9건 (사이드바 nav 패턴 반복)                      | **0건**         |
| fg/text mismatch | 7건                                       | **0건**         |
| 하드코딩             | 0건                                       | 0건             |
| 추론 오류            | 없음                                       | 없음             |
| 시각적 동일성          | 사실상 동일 (스펙 4섹션 전부 구현)                    | 사실상 동일         |


> dashboard 대비 role-first의 오류 건수가 절반(18→9건, 16→7건)으로 줄었다. 이는 사이드바 nav 패턴이 동일하게 재사용되면서 동일 오류가 반복된 결과로, 구조적 패턴 오류가 누적된 것. property-first는 billing에서 role mismatch·fg/text mismatch 모두 0건을 기록했다. 슬롯명 강제의 효과가 단순 반복 구현에서도 일관되게 유지됨을 확인.

