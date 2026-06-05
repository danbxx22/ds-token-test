# ds-token-test

mildang 디자인 시스템의 **색상 토큰 명칭 체계 비교 실험** 프로젝트.

기존 토큰 명칭과 신규 명칭 체계를 동일한 UI에서 나란히 비교한다.

---

## 실험 목적

기존 DS에서 두 가지 문제가 확인됨:

1. **명칭 혼란** — `low` / `base` / `high` variant가 밝은 건지 어두운 건지 매번 헷갈려서 Figma를 열거나 동료에게 물어봐야 함
2. **Property 구조 이슈** — `fg`와 `text` 중복, `ghost-bg`가 투명도 개념으로 사용되지만 실제 값과 의도 불일치

mildang-frontend 코드베이스 전체에서 raw semantic token 직접 참조가 **약 2,000건** 확인됨. 토큰 이름을 매일 직접 쓰는 패턴이 지배적이므로, 명칭 ergonomics 개선이 실질적인 개발 경험에 직결됨.

---

## 실험 방법

### 구조

```
panda.config.legacy.ts  →  styled-system-legacy/   (기존 명칭)
panda.config.new.ts     →  styled-system-new/       (신규 명칭)
```

두 styled-system을 **완전히 분리**하는 이유: autocomplete에 두 토큰 이름이 섞이면 ergonomics 테스트가 오염됨.

### 페이지

```
/legacy/dashboard   대시보드 — 기존 토큰 명칭
/legacy/signup      회원가입 — 기존 토큰 명칭

/new/dashboard      대시보드 — 신규 토큰 명칭 (동일 구조)
/new/signup         회원가입 — 신규 토큰 명칭 (동일 구조)
```

`/legacy/*`와 `/new/*`를 나란히 열어 시각적으로 비교.

### 테스트 항목

| 테스트 | 방법 | 기준 |
|--------|------|------|
| **명칭 ergonomics** (핵심) | 각 페이지 custom 스타일 직접 작성 | Figma 없이 토큰 이름을 유추할 수 있는가 |
| **시각적 검증** | Park UI 컴포넌트 렌더링 | `/legacy/*`와 `/new/*`가 동일하게 보이는가 |

---

## 왜 Park UI인가

| | Park UI | shadcn |
|--|---------|--------|
| 스타일 엔진 | PandaCSS | Tailwind CSS |
| 토큰 연동 | PandaCSS semantic token 직접 참조 | CSS variable 수동 매핑 필요 (`--primary`, `--background` 등 20개+) |
| 매핑 방식 | 타입 시스템 안에서 해결 | `globals.css`에 별도 레이어 |
| 실험 적합성 | 매핑 의미론이 PandaCSS 토큰과 동일 | shadcn 의미론 ≠ mildang 의미론 → 매핑이 추측성이 됨 |

Park UI 컴포넌트는 PandaCSS semantic token을 직접 참조하므로, config에 토큰을 정의하면 Button / Input / Badge 등에 **자동으로 반영**됨.

---

## 실험 범위

- **포함**: 색상 토큰 (primitive + semantic)
- **제외**: spacing, typography, dark mode, 일부 color role
- Primitive 색상값 변경 없음 — 같은 hex/oklch, **명칭만** 다름

---

## 개발 환경

```bash
pnpm install

# 두 styled-system 생성
pnpm codegen

# 또는 개별 실행
pnpm codegen:legacy
pnpm codegen:new

# 개발 서버
pnpm dev
```

### 기술 스택

- Next.js 14
- PandaCSS
- Park UI (`@park-ui/panda-preset`)
- TypeScript

---

## 디렉토리 구조

```
panda.config.legacy.ts    기존 토큰 명칭 config
panda.config.new.ts       신규 토큰 명칭 config
styled-system-legacy/     legacy codegen 결과
styled-system-new/        new codegen 결과
src/
  app/
    legacy/
      dashboard/
      signup/
    new/
      dashboard/
      signup/
```
