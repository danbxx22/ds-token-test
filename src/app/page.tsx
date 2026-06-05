import Link from 'next/link';
import { css } from '@ds-token-test/styled-system/css';

export default function Home() {
  return (
    <main className={css({ p: '8', fontFamily: 'sans', maxW: '600px', mx: 'auto', mt: '12' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '2' })}>DS Token 비교 실험</h1>
      <p className={css({ color: 'primary.text.low', mb: '8' })}>
        기존 토큰 명칭 vs 신규 토큰 명칭을 나란히 비교합니다.
      </p>

      <div className={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6' })}>
        <div className={css({ border: '1px solid', borderColor: 'primary.border.base', rounded: 'lg', p: '6' })}>
          <h2 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: '4' })}>role-first</h2>
          <div className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
            <Link
              href="/role-first/dashboard"
              className={css({
                display: 'block',
                p: '3',
                rounded: 'md',
                bg: 'primary.bg.base',
                color: 'primary.text.base',
                _hover: { bg: 'primary.bg.high' },
                textDecoration: 'none',
              })}
            >
              대시보드 →
            </Link>
            <Link
              href="/role-first/signup"
              className={css({
                display: 'block',
                p: '3',
                rounded: 'md',
                bg: 'primary.bg.base',
                color: 'primary.text.base',
                _hover: { bg: 'primary.bg.high' },
                textDecoration: 'none',
              })}
            >
              회원가입 →
            </Link>
          </div>
        </div>

        <div className={css({ border: '1px solid', borderColor: 'border.neutral.default', rounded: 'lg', p: '6' })}>
          <h2 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: '4' })}>property-first</h2>
          <div className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
            <Link
              href="/property-first/dashboard"
              className={css({
                display: 'block',
                p: '3',
                rounded: 'md',
                bg: 'bg.neutral.muted',
                color: 'text.neutral.strong',
                _hover: { bg: 'bg.neutral.emphasized' },
                textDecoration: 'none',
              })}
            >
              대시보드 →
            </Link>
            <Link
              href="/property-first/signup"
              className={css({
                display: 'block',
                p: '3',
                rounded: 'md',
                bg: 'bg.neutral.muted',
                color: 'text.neutral.strong',
                _hover: { bg: 'bg.neutral.emphasized' },
                textDecoration: 'none',
              })}
            >
              회원가입 →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
