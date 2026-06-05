import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { css } from '@ds-token-test/styled-system-role-first/css';
import {
  CheckCircle2,
  XCircle,
  Info,
  AlertTriangle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Zap,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   공통 섹션 레이아웃
───────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={css({ mb: '10' })}>
      <h2
        className={css({
          fontSize: 'sm',
          fontWeight: 'semibold',
          color: 'primary.fg.lowest',
          textTransform: 'uppercase',
          letterSpacing: 'widest',
          mb: '4',
          pb: '2',
          borderBottom: '1px solid',
          borderColor: 'primary.border.low',
        })}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', flexWrap: 'wrap' })}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   상태 뱃지
───────────────────────────────────────────── */
type SemanticKind = 'success' | 'error' | 'warning' | 'info' | 'brand';

const SEMANTIC_LABELS: Record<SemanticKind, string> = {
  success: '성공',
  error: '오류',
  warning: '경고',
  info: '안내',
  brand: '브랜드',
};

function SemanticBadge({ kind }: { kind: SemanticKind }) {
  const styles = {
    success: {
      bg: 'success.bg.low' as const,
      color: 'success.text.base' as const,
      border: 'success.border.low' as const,
    },
    error: {
      bg: 'error.bg.low' as const,
      color: 'error.text.base' as const,
      border: 'error.border.low' as const,
    },
    warning: {
      bg: 'warning.bg.low' as const,
      color: 'warning.text.base' as const,
      border: 'warning.border.low' as const,
    },
    info: {
      bg: 'info.bg.low' as const,
      color: 'info.text.base' as const,
      border: 'info.border.low' as const,
    },
    brand: {
      bg: 'brand.bg.low' as const,
      color: 'brand.text.base' as const,
      border: 'brand.border.low' as const,
    },
  };
  const s = styles[kind];
  return (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        px: '3',
        py: '1',
        bg: s.bg,
        color: s.color,
        border: '1px solid',
        borderColor: s.border,
        rounded: 'full',
        fontSize: 'xs',
        fontWeight: 'semibold',
      })}
    >
      {SEMANTIC_LABELS[kind]}
    </span>
  );
}

function AllBadges() {
  return (
    <Row>
      {(Object.keys(SEMANTIC_LABELS) as SemanticKind[]).map((k) => (
        <SemanticBadge key={k} kind={k} />
      ))}
    </Row>
  );
}

/* ─────────────────────────────────────────────
   상태 아이콘 + 텍스트
───────────────────────────────────────────── */
function StatusIndicators() {
  return (
    <Row>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
        <CheckCircle2 size={16} className={css({ color: 'success.fg.base' })} />
        <span className={css({ color: 'success.text.base', fontSize: 'sm', fontWeight: 'medium' })}>
          정상 처리됨
        </span>
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
        <XCircle size={16} className={css({ color: 'error.fg.base' })} />
        <span className={css({ color: 'error.text.base', fontSize: 'sm', fontWeight: 'medium' })}>
          문제 발생
        </span>
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
        <AlertCircle size={16} className={css({ color: 'warning.fg.base' })} />
        <span className={css({ color: 'warning.text.base', fontSize: 'sm', fontWeight: 'medium' })}>
          주의 필요
        </span>
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
        <Info size={16} className={css({ color: 'info.fg.base' })} />
        <span className={css({ color: 'info.text.base', fontSize: 'sm', fontWeight: 'medium' })}>
          일반 안내
        </span>
      </div>
    </Row>
  );
}

/* ─────────────────────────────────────────────
   토스트 알림
───────────────────────────────────────────── */
function Toast({
  kind,
  message,
}: {
  kind: 'success' | 'error' | 'info';
  message: string;
}) {
  const styles = {
    success: {
      bg: 'success.bg.low' as const,
      border: 'success.border.low' as const,
      iconColor: 'success.fg.base' as const,
      textColor: 'success.text.base' as const,
      icon: <CheckCircle2 size={18} />,
    },
    error: {
      bg: 'error.bg.low' as const,
      border: 'error.border.low' as const,
      iconColor: 'error.fg.base' as const,
      textColor: 'error.text.base' as const,
      icon: <XCircle size={18} />,
    },
    info: {
      bg: 'info.bg.low' as const,
      border: 'info.border.low' as const,
      iconColor: 'info.fg.base' as const,
      textColor: 'info.text.base' as const,
      icon: <Info size={18} />,
    },
  };
  const s = styles[kind];
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '3',
        px: '4',
        py: '3',
        bg: s.bg,
        border: '1px solid',
        borderColor: s.border,
        rounded: 'lg',
        maxW: '[380px]',
      })}
    >
      <span className={css({ color: s.iconColor, flexShrink: 0 })}>{s.icon}</span>
      <span className={css({ color: s.textColor, fontSize: 'sm' })}>{message}</span>
    </div>
  );
}

function AllToasts() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
      <Toast kind="success" message="배포 v2.4.1이 완료되었습니다." />
      <Toast kind="error" message="DB 연결이 끊어졌습니다. 즉시 확인하세요." />
      <Toast kind="info" message="시스템 점검이 2025-06-10 02:00에 예정되어 있습니다." />
    </div>
  );
}

/* ─────────────────────────────────────────────
   통계 카드
───────────────────────────────────────────── */
type StatKind = 'success' | 'error' | 'warning';

function StatCard({
  kind,
  label,
  value,
  change,
  icon,
}: {
  kind: StatKind;
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  const styles = {
    success: {
      iconColor: 'success.fg.base' as const,
      badgeBg: 'success.bg.low' as const,
      badgeColor: 'success.text.base' as const,
      badgeBorder: 'success.border.low' as const,
    },
    error: {
      iconColor: 'error.fg.base' as const,
      badgeBg: 'error.bg.low' as const,
      badgeColor: 'error.text.base' as const,
      badgeBorder: 'error.border.low' as const,
    },
    warning: {
      iconColor: 'warning.fg.base' as const,
      badgeBg: 'warning.bg.low' as const,
      badgeColor: 'warning.text.base' as const,
      badgeBorder: 'warning.border.low' as const,
    },
  };
  const s = styles[kind];
  return (
    <div
      className={css({
        bg: 'inverse.bg.base',
        border: '1px solid',
        borderColor: 'primary.border.low',
        rounded: 'xl',
        p: '5',
        display: 'flex',
        flexDir: 'column',
        gap: '3',
        w: '[220px]',
      })}
    >
      <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
        <div>
          <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium', mb: '1' })}>
            {label}
          </p>
          <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base' })}>
            {value}
          </p>
        </div>
        <span className={css({ color: s.iconColor })}>{icon}</span>
      </div>
      <span
        className={css({
          display: 'inline-flex',
          alignSelf: 'flex-start',
          px: '2',
          py: '0.5',
          bg: s.badgeBg,
          color: s.badgeColor,
          border: '1px solid',
          borderColor: s.badgeBorder,
          rounded: 'full',
          fontSize: 'xs',
          fontWeight: 'medium',
        })}
      >
        {change}
      </span>
    </div>
  );
}

function AllStatCards() {
  return (
    <Row>
      <StatCard kind="success" label="총 사용자" value="12,847" change="+12%" icon={<TrendingUp size={22} />} />
      <StatCard kind="error" label="결제 실패" value="24건" change="+3건" icon={<AlertCircle size={22} />} />
      <StatCard kind="success" label="평균 응답시간" value="142ms" change="-8%" icon={<Zap size={22} />} />
      <StatCard kind="warning" label="미처리 민원" value="7건" change="+2건" icon={<AlertCircle size={22} />} />
    </Row>
  );
}

/* ─────────────────────────────────────────────
   버튼 변형 (filled / outline / ghost)
───────────────────────────────────────────── */
function ButtonSet({ kind }: { kind: SemanticKind }) {
  const label = SEMANTIC_LABELS[kind];

  const filledStyles = {
    success: { bg: 'success.bg.high' as const, color: 'inverse.text.base' as const, hoverBg: 'success.bg.highest' as const },
    error:   { bg: 'error.bg.high' as const,   color: 'inverse.text.base' as const, hoverBg: 'error.bg.highest' as const },
    warning: { bg: 'warning.bg.high' as const, color: 'inverse.text.base' as const, hoverBg: 'warning.bg.highest' as const },
    info:    { bg: 'info.bg.high' as const,    color: 'inverse.text.base' as const, hoverBg: 'info.bg.highest' as const },
    brand:   { bg: 'brand.bg.high' as const,   color: 'inverse.text.base' as const, hoverBg: 'brand.bg.highest' as const },
  }[kind];

  const outlineStyles = {
    success: { border: 'success.border.base' as const, color: 'success.text.base' as const, hoverBg: 'success.ghostBg.base' as const },
    error:   { border: 'error.border.base' as const,   color: 'error.text.base' as const,   hoverBg: 'error.ghostBg.base' as const },
    warning: { border: 'warning.border.base' as const, color: 'warning.text.base' as const, hoverBg: 'warning.ghostBg.base' as const },
    info:    { border: 'info.border.base' as const,    color: 'info.text.base' as const,    hoverBg: 'info.ghostBg.base' as const },
    brand:   { border: 'brand.border.base' as const,   color: 'brand.text.base' as const,   hoverBg: 'brand.ghostBg.base' as const },
  }[kind];

  const ghostStyles = {
    success: { color: 'success.text.base' as const, hoverBg: 'success.ghostBg.base' as const },
    error:   { color: 'error.text.base' as const,   hoverBg: 'error.ghostBg.base' as const },
    warning: { color: 'warning.text.base' as const, hoverBg: 'warning.ghostBg.base' as const },
    info:    { color: 'info.text.base' as const,    hoverBg: 'info.ghostBg.base' as const },
    brand:   { color: 'brand.text.base' as const,   hoverBg: 'brand.ghostBg.base' as const },
  }[kind];

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '1.5' })}>
      <p className={css({ fontSize: 'xs', color: 'primary.fg.lowest', fontWeight: 'medium', mb: '1' })}>{label}</p>
      {/* filled */}
      <button
        className={css({
          px: '3', py: '1.5', rounded: 'md', fontSize: 'sm', fontWeight: 'medium',
          bg: filledStyles.bg, color: filledStyles.color, border: 'none', cursor: 'pointer',
          _hover: { bg: filledStyles.hoverBg },
        })}
      >
        Filled
      </button>
      {/* outline */}
      <button
        className={css({
          px: '3', py: '1.5', rounded: 'md', fontSize: 'sm', fontWeight: 'medium',
          bg: 'transparent', border: '1px solid', borderColor: outlineStyles.border,
          color: outlineStyles.color, cursor: 'pointer',
          _hover: { bg: outlineStyles.hoverBg },
        })}
      >
        Outline
      </button>
      {/* ghost */}
      <button
        className={css({
          px: '3', py: '1.5', rounded: 'md', fontSize: 'sm', fontWeight: 'medium',
          bg: 'transparent', border: 'none', color: ghostStyles.color, cursor: 'pointer',
          _hover: { bg: ghostStyles.hoverBg },
        })}
      >
        Ghost
      </button>
    </div>
  );
}

function AllButtons() {
  return (
    <Row>
      {(Object.keys(SEMANTIC_LABELS) as SemanticKind[]).map((k) => (
        <ButtonSet key={k} kind={k} />
      ))}
    </Row>
  );
}

/* ─────────────────────────────────────────────
   프로그레스 바
───────────────────────────────────────────── */
function ProgressBar({
  label,
  value,
  kind,
  statusText,
}: {
  label: string;
  value: number;
  kind: 'success' | 'warning' | 'error';
  statusText: string;
}) {
  const fillColor = {
    success: 'success.fg.base' as const,
    warning: 'warning.fg.base' as const,
    error: 'error.fg.base' as const,
  }[kind];

  const textColor = {
    success: 'success.text.base' as const,
    warning: 'warning.text.base' as const,
    error: 'error.text.base' as const,
  }[kind];

  const widthClass = {
    42: '[42%]',
    78: '[78%]',
    91: '[91%]',
  }[value] ?? `[${value}%]`;

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '2', w: '[200px]' })}>
      <div className={css({ display: 'flex', justifyContent: 'space-between' })}>
        <span className={css({ fontSize: 'sm', color: 'primary.text.low', fontWeight: 'medium' })}>{label}</span>
        <span className={css({ fontSize: 'sm', fontWeight: 'bold', color: 'primary.text.base' })}>{value}%</span>
      </div>
      <div className={css({ h: '2', bg: 'primary.bg.high', rounded: 'full', overflow: 'hidden' })}>
        <div className={css({ h: 'full', bg: fillColor, rounded: 'full', w: widthClass })} />
      </div>
      <span className={css({ fontSize: 'xs', color: textColor })}>{statusText}</span>
    </div>
  );
}

function AllProgressBars() {
  return (
    <Row>
      <ProgressBar label="CPU 사용량" value={42} kind="success" statusText="정상 범위" />
      <ProgressBar label="메모리 사용량" value={78} kind="warning" statusText="주의 필요" />
      <ProgressBar label="디스크 사용량" value={91} kind="error" statusText="위험 수준" />
    </Row>
  );
}

/* ─────────────────────────────────────────────
   토글 스위치
───────────────────────────────────────────── */
function Toggle({
  label,
  checked,
  disabled,
}: {
  label: string;
  checked: boolean;
  disabled?: boolean;
}) {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '6',
        opacity: disabled ? '[0.45]' : '[1]',
      })}
    >
      <span
        className={css({
          fontSize: 'sm',
          color: disabled ? 'primary.fg.lowest' : 'primary.text.base',
        })}
      >
        {label}
      </span>
      <div
        className={css({
          w: '10',
          h: '6',
          rounded: 'full',
          bg: disabled
            ? 'primary.fg.lowest'
            : checked
            ? 'brand.bg.high'
            : 'primary.bg.highest',
          position: 'relative',
          cursor: disabled ? '[not-allowed]' : 'pointer',
          flexShrink: 0,
        })}
      >
        <div
          className={css({
            position: 'absolute',
            top: '1',
            left: checked ? '5' : '1',
            w: '4',
            h: '4',
            rounded: 'full',
            bg: 'inverse.bg.base',
          })}
        />
      </div>
    </div>
  );
}

function AllToggles() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '4', w: '[280px]' })}>
      <Toggle label="배포 알림 (켜짐)" checked={true} />
      <Toggle label="장애 알림 (켜짐)" checked={true} />
      <Toggle label="보안 알림 (꺼짐)" checked={false} />
      <Toggle label="마케팅 알림 (비활성)" checked={false} disabled />
    </div>
  );
}

/* ─────────────────────────────────────────────
   알림 카드 (하단 카드 3종)
───────────────────────────────────────────── */
function NotificationCard({
  kind,
  icon,
  title,
  description,
  primaryButton,
  secondaryButton,
  buttonVariant,
}: {
  kind: 'success' | 'error' | 'warning';
  icon: React.ReactNode;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
  buttonVariant: 'outline' | 'filled';
}) {
  const styles = {
    success: {
      bg: 'success.bg.low' as const,
      border: 'success.border.low' as const,
      iconColor: 'success.fg.base' as const,
      textColor: 'success.text.base' as const,
      btnBorder: 'success.border.base' as const,
      btnFill: 'success.bg.high' as const,
      btnHoverGhost: 'success.ghostBg.base' as const,
    },
    error: {
      bg: 'error.bg.low' as const,
      border: 'error.border.low' as const,
      iconColor: 'error.fg.base' as const,
      textColor: 'error.text.base' as const,
      btnBorder: 'error.border.base' as const,
      btnFill: 'error.bg.high' as const,
      btnHoverGhost: 'error.ghostBg.base' as const,
    },
    warning: {
      bg: 'warning.bg.low' as const,
      border: 'warning.border.low' as const,
      iconColor: 'warning.fg.base' as const,
      textColor: 'warning.text.base' as const,
      btnBorder: 'warning.border.base' as const,
      btnFill: 'warning.bg.high' as const,
      btnHoverGhost: 'warning.ghostBg.base' as const,
    },
  };
  const s = styles[kind];

  return (
    <div
      className={css({
        bg: s.bg,
        border: '1px solid',
        borderColor: s.border,
        rounded: 'xl',
        p: '5',
        display: 'flex',
        flexDir: 'column',
        gap: '3',
        w: '[220px]',
      })}
    >
      <span className={css({ color: s.iconColor })}>{icon}</span>
      <div>
        <h4 className={css({ fontSize: 'sm', fontWeight: 'semibold', color: s.textColor, mb: '1' })}>
          {title}
        </h4>
        <p className={css({ fontSize: 'xs', color: s.textColor })}>{description}</p>
      </div>
      <div className={css({ display: 'flex', gap: '2' })}>
        {buttonVariant === 'filled' ? (
          <button
            className={css({
              flex: '1',
              px: '3', py: '1.5',
              bg: s.btnFill,
              border: 'none',
              color: 'inverse.text.base',
              fontSize: 'xs', fontWeight: 'medium',
              rounded: 'md', cursor: 'pointer',
              _hover: { bg: s.btnFill },
            })}
          >
            {primaryButton}
          </button>
        ) : (
          <button
            className={css({
              px: '3', py: '1.5',
              bg: 'transparent',
              border: '1px solid', borderColor: s.btnBorder,
              color: s.textColor,
              fontSize: 'xs', fontWeight: 'medium',
              rounded: 'md', cursor: 'pointer',
              _hover: { bg: s.btnHoverGhost },
            })}
          >
            {primaryButton}
          </button>
        )}
        {secondaryButton && (
          <button
            className={css({
              px: '3', py: '1.5',
              bg: 'transparent', border: 'none',
              color: s.textColor,
              fontSize: 'xs', fontWeight: 'medium',
              rounded: 'md', cursor: 'pointer',
              _hover: { bg: s.btnHoverGhost },
            })}
          >
            {secondaryButton}
          </button>
        )}
      </div>
    </div>
  );
}

function AllNotificationCards() {
  return (
    <Row>
      <NotificationCard
        kind="success"
        icon={<CheckCircle2 size={22} />}
        title="배포 완료"
        description="v2.4.1이 성공적으로 배포되었습니다."
        primaryButton="배포 로그 보기"
        buttonVariant="outline"
      />
      <NotificationCard
        kind="error"
        icon={<XCircle size={22} />}
        title="연결 실패"
        description="DB 연결이 실패했습니다."
        primaryButton="즉시 확인"
        secondaryButton="무시"
        buttonVariant="filled"
      />
      <NotificationCard
        kind="warning"
        icon={<AlertTriangle size={22} />}
        title="용량 경고"
        description="디스크 사용량이 85%입니다."
        primaryButton="정리 시작"
        buttonVariant="outline"
      />
    </Row>
  );
}

/* ─────────────────────────────────────────────
   인풋 상태
───────────────────────────────────────────── */
function InputStates() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
      {/* Normal */}
      <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
        <label className={css({ fontSize: 'xs', color: 'primary.fg.lowest', fontWeight: 'medium' })}>
          기본 상태
        </label>
        <input
          type="text"
          placeholder="이벤트 검색..."
          className={css({
            px: '3', py: '1.5', w: '[240px]',
            bg: 'primary.bg.base',
            border: '1px solid', borderColor: 'primary.border.base',
            rounded: 'md', fontSize: 'sm', color: 'primary.text.base', outline: 'none',
            _placeholder: { color: 'primary.fg.lowest' },
            _focus: { borderColor: 'brand.border.base', outline: '2px solid', outlineColor: 'brand.border.low', outlineOffset: '0' },
          })}
        />
      </div>
      {/* Error */}
      <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
        <label className={css({ fontSize: 'xs', color: 'primary.fg.lowest', fontWeight: 'medium' })}>
          오류 상태
        </label>
        <input
          type="text"
          defaultValue="2024-99-99"
          className={css({
            px: '3', py: '1.5', w: '[240px]',
            bg: 'error.bg.low',
            border: '1px solid', borderColor: 'error.border.base',
            rounded: 'md', fontSize: 'sm', color: 'primary.text.base', outline: 'none',
          })}
        />
        <span className={css({ fontSize: 'xs', color: 'error.text.base' })}>
          올바른 날짜 형식이 아닙니다.
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   툴팁 스타일 (정적 미리보기)
───────────────────────────────────────────── */
function TooltipPreview() {
  return (
    <div className={css({ display: 'flex', gap: '6', alignItems: 'flex-start' })}>
      {/* Dark tooltip */}
      <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
        <span className={css({ fontSize: 'xs', color: 'primary.fg.lowest', fontWeight: 'medium' })}>
          어두운 툴팁 (inverse)
        </span>
        <div
          className={css({
            px: '3', py: '1.5',
            bg: 'primary.fg.base',
            color: 'inverse.text.base',
            fontSize: 'xs', rounded: 'md',
            display: 'inline-block',
          })}
        >
          검색
        </div>
      </div>
      {/* Avatar */}
      <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
        <span className={css({ fontSize: 'xs', color: 'primary.fg.lowest', fontWeight: 'medium' })}>
          브랜드 아바타
        </span>
        <div
          className={css({
            w: '10', h: '10', rounded: 'full',
            bg: 'brand.bg.high', color: 'inverse.text.base',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 'sm', fontWeight: 'bold',
          })}
        >
          K
        </div>
      </div>
      {/* Neutral avatar */}
      <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
        <span className={css({ fontSize: 'xs', color: 'primary.fg.lowest', fontWeight: 'medium' })}>
          중립 아바타
        </span>
        <div
          className={css({
            w: '10', h: '10', rounded: 'full',
            bg: 'primary.bg.high', color: 'primary.fg.base',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 'sm', fontWeight: 'bold',
          })}
        >
          홍
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Storybook 메타 + 스토리 정의
───────────────────────────────────────────── */
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      p: '8',
      bg: 'primary.bg.low',
      minH: '100vh',
      fontFamily: 'sans',
    })}
  >
    {children}
  </div>
);

const meta: Meta = {
  title: 'Role-First / 시맨틱 토큰 쇼케이스',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'role-first 시맨틱 토큰(`success.*`, `error.*`, `warning.*`, `info.*`, `brand.*`, `primary.*`, `inverse.*`)이 실제 UI 컴포넌트에서 어떻게 사용되는지 보여줍니다.',
      },
    },
  },
};

export default meta;

export const 상태뱃지: StoryObj = {
  name: '상태 뱃지',
  render: () => (
    <Wrapper>
      <Section title="Semantic Badge — bg.low + text.base + border.low">
        <AllBadges />
      </Section>
    </Wrapper>
  ),
};

export const 상태표시자: StoryObj = {
  name: '상태 표시자 (아이콘 + 텍스트)',
  render: () => (
    <Wrapper>
      <Section title="Status Indicator — fg.base (icon) + text.base (label)">
        <StatusIndicators />
      </Section>
    </Wrapper>
  ),
};

export const 토스트알림: StoryObj = {
  name: '토스트 알림',
  render: () => (
    <Wrapper>
      <Section title="Toast — bg.low + border.low + fg.base (icon) + text.base">
        <AllToasts />
      </Section>
    </Wrapper>
  ),
};

export const 통계카드: StoryObj = {
  name: '통계 카드',
  render: () => (
    <Wrapper>
      <Section title="Stat Card — fg.base (icon) + bg.low + text.base + border.low (badge)">
        <AllStatCards />
      </Section>
    </Wrapper>
  ),
};

export const 버튼변형: StoryObj = {
  name: '버튼 변형 (filled · outline · ghost)',
  render: () => (
    <Wrapper>
      <Section title="Button — filled: bg.high + inverse.text | outline: border.base + text.base | ghost: ghostBg.base">
        <AllButtons />
      </Section>
    </Wrapper>
  ),
};

export const 프로그레스바: StoryObj = {
  name: '프로그레스 바',
  render: () => (
    <Wrapper>
      <Section title="Progress Bar — filled: fg.base | track: primary.bg.high | status: text.base">
        <AllProgressBars />
      </Section>
    </Wrapper>
  ),
};

export const 토글스위치: StoryObj = {
  name: '토글 스위치',
  render: () => (
    <Wrapper>
      <Section title="Toggle — on: brand.bg.high | off: primary.bg.highest | disabled: primary.fg.lowest | handle: inverse.bg.base">
        <AllToggles />
      </Section>
    </Wrapper>
  ),
};

export const 알림카드: StoryObj = {
  name: '알림 카드 (하단 카드)',
  render: () => (
    <Wrapper>
      <Section title="Notification Card — bg.low + border.low + fg.base (icon) + text.base + ghostBg.base (hover)">
        <AllNotificationCards />
      </Section>
    </Wrapper>
  ),
};

export const 인풋상태: StoryObj = {
  name: '인풋 상태',
  render: () => (
    <Wrapper>
      <Section title="Input — normal: primary.border.base + bg.base | focus: brand.border.base | error: error.border.base + error.bg.low">
        <InputStates />
      </Section>
    </Wrapper>
  ),
};

export const 기타UI: StoryObj = {
  name: '기타 UI (툴팁 · 아바타)',
  render: () => (
    <Wrapper>
      <Section title="Misc — tooltip: primary.fg.base + inverse.text.base | avatar: brand.bg.high or primary.bg.high">
        <TooltipPreview />
      </Section>
    </Wrapper>
  ),
};

export const 전체쇼케이스: StoryObj = {
  name: '전체 쇼케이스',
  render: () => (
    <Wrapper>
      <Section title="Semantic Badge">
        <AllBadges />
      </Section>
      <Section title="Status Indicator">
        <StatusIndicators />
      </Section>
      <Section title="Toast">
        <AllToasts />
      </Section>
      <Section title="Stat Card">
        <AllStatCards />
      </Section>
      <Section title="Button (filled · outline · ghost)">
        <AllButtons />
      </Section>
      <Section title="Progress Bar">
        <AllProgressBars />
      </Section>
      <Section title="Toggle Switch">
        <AllToggles />
      </Section>
      <Section title="Notification Card">
        <AllNotificationCards />
      </Section>
      <Section title="Input State">
        <InputStates />
      </Section>
      <Section title="Misc (Tooltip · Avatar)">
        <TooltipPreview />
      </Section>
    </Wrapper>
  ),
};
