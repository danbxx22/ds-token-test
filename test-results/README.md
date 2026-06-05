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
| [2026-06-05-property-first-billing](./2026-06-05-property-first-billing.md)     | 2026-06-05 | Claude Sonnet 4.6 | property-first | billing        |
| [2026-06-05-property-first-notifications](./2026-06-05-property-first-notifications.md) | 2026-06-05 | Claude Sonnet 4.6 | property-first | notifications |
| [2026-06-05_role-first_notifications](./2026-06-05_role-first_notifications.md) | 2026-06-05 | Claude Sonnet 4.6 | role-first | notifications |


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

---

## 비교 요약 — notifications (Claude Sonnet 4.6)


| 항목               | role-first                                                  | property-first                                        |
| ---------------- | ----------------------------------------------------------- | ----------------------------------------------------- |
| role mismatch    | **10건** (`fill.*` 대응을 `fg.*`로 오인 → `bg`/`borderColor`에 전용) | **5건** (좌측 강조 테두리에 `fill.*`을 `borderColor`로 사용)       |
| fg/text mismatch | **0건**                                                      | **0건**                                                |
| 하드코딩             | 0건                                                          | 0건                                                    |
| 추론 오류            | 없음                                                          | 없음                                                    |
| 시각적 동일성          | 대체로 일치 (강조선·filled 요소에서 색조 차이 가능성)                         | 비교 대상 없음 (신규 페이지) / 스펙 대비 높은 일치                       |


> fg/text mismatch는 양쪽 모두 0건으로 dashboard·billing 대비 개선됐다. role-first의 role mismatch 10건은 단일 패턴의 반복 — property-first의 `fill.*`에 해당하는 role-first 토큰을 `*.fg.base`로 잘못 식별해 `bg` / `borderColor`에 사용. 정석 대응은 `*.bg.highest`(배경) / `*.border.highest`(테두리)이다. property-first의 5건은 좌측 강조 테두리에 `fill.*`을 `borderColor`로 직역한 것으로, `fill.*`과 `border.*.strongest`가 동일 값을 가리키므로 시각 차이는 없고 의미론적 오류만 발생한다. 슬롯명 명시 여부와 무관하게 "강한 채움" 표현을 직역하는 패턴은 양쪽 체계 모두에서 오류를 유발했다.

