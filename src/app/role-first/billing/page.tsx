import { css } from '@ds-token-test/styled-system-role-first/css';
import {
  LayoutDashboard,
  CreditCard,
  Users,
  Settings,
  LogOut,
  Check,
  X,
  AlertTriangle,
  AlertCircle,
  TrendingUp,
  Calendar,
  Download,
  FileText,
} from 'lucide-react';

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        h: '100vh',
        overflow: 'hidden',
        fontFamily: 'sans',
        fontSize: 'sm',
      })}
    >
      {/* ===== SIDEBAR ===== */}
      <aside
        className={css({
          w: '60',
          flexShrink: 0,
          bg: 'primary.fg.base',
          display: 'flex',
          flexDir: 'column',
          overflow: 'hidden',
        })}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            px: '5',
            h: '16',
            borderBottom: '1px solid',
            borderColor: 'primary.fg.lowest',
            flexShrink: 0,
          })}
        >
          <LayoutDashboard
            size={22}
            className={css({ color: 'brand.fg.base', flexShrink: 0 })}
          />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              color: 'inverse.text.base',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav
          className={css({
            flex: '1',
            px: '3',
            py: '4',
            display: 'flex',
            flexDir: 'column',
            gap: '1',
            overflowY: 'auto',
          })}
        >
          {/* 결제 내역 — Active */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              px: '3',
              py: '2.5',
              rounded: 'md',
              bg: 'brand.bg.high',
              color: 'inverse.text.base',
              cursor: 'pointer',
            })}
          >
            <CreditCard size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm', fontWeight: 'medium' })}>결제 내역</span>
          </div>

          {/* 대시보드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              px: '3',
              py: '2.5',
              rounded: 'md',
              color: 'primary.fg.lowest',
              cursor: 'pointer',
              _hover: { bg: 'primary.fg.low', color: 'primary.bg.low' },
            })}
          >
            <LayoutDashboard size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm' })}>대시보드</span>
          </div>

          {/* 사용자 관리 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              px: '3',
              py: '2.5',
              rounded: 'md',
              color: 'primary.fg.lowest',
              cursor: 'pointer',
              _hover: { bg: 'primary.fg.low', color: 'primary.bg.low' },
            })}
          >
            <Users size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm' })}>사용자 관리</span>
          </div>

          {/* 설정 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              px: '3',
              py: '2.5',
              rounded: 'md',
              color: 'primary.fg.lowest',
              cursor: 'pointer',
              _hover: { bg: 'primary.fg.low', color: 'primary.bg.low' },
            })}
          >
            <Settings size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm' })}>설정</span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            px: '3',
            py: '4',
            borderTop: '1px solid',
            borderColor: 'primary.fg.lowest',
            flexShrink: 0,
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              px: '3',
              py: '2.5',
              rounded: 'md',
              color: 'error.fg.base',
              cursor: 'pointer',
              _hover: { bg: 'error.bg.base' },
            })}
          >
            <LogOut size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm' })}>로그아웃</span>
          </div>
        </div>
      </aside>

      {/* ===== MAIN ===== */}
      <div
        className={css({
          flex: '1',
          overflowY: 'auto',
          bg: 'primary.bg.low',
        })}
      >
        <div
          className={css({
            px: '6',
            py: '6',
            display: 'flex',
            flexDir: 'column',
            gap: '6',
          })}
        >
          {/* ── 섹션 1: 플랜 선택 ── */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '4',
            })}
          >
            {/* Free 카드 */}
            <div
              className={css({
                bg: 'inverse.bg.base',
                border: '1px solid',
                borderColor: 'primary.border.low',
                rounded: 'xl',
                overflow: 'hidden',
                display: 'flex',
                flexDir: 'column',
              })}
            >
              <div className={css({ p: '6', display: 'flex', flexDir: 'column', gap: '4', flex: '1' })}>
                <div>
                  <p className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'primary.text.base' })}>Free</p>
                  <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base', mt: '1' })}>
                    ₩0<span className={css({ fontSize: 'sm', fontWeight: 'normal', color: 'primary.text.low' })}>/월</span>
                  </p>
                </div>

                <div className={css({ display: 'flex', flexDir: 'column', gap: '2.5' })}>
                  {/* 포함 기능 3개 */}
                  {['프로젝트 3개', '팀원 2명', '기본 분석'].map((feature) => (
                    <div key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                      <Check size={15} className={css({ color: 'success.fg.base', flexShrink: 0 })} />
                      <span className={css({ fontSize: 'sm', color: 'primary.text.base' })}>{feature}</span>
                    </div>
                  ))}
                  {/* 제외 기능 2개 */}
                  {['우선 지원', '고급 보안'].map((feature) => (
                    <div key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                      <X size={15} className={css({ color: 'primary.fg.lowest', flexShrink: 0 })} />
                      <span className={css({ fontSize: 'sm', color: 'primary.fg.lowest' })}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={css({ px: '6', pb: '6' })}>
                <button
                  disabled
                  className={css({
                    w: 'full',
                    py: '2',
                    bg: 'primary.bg.highest',
                    color: 'primary.fg.lowest',
                    border: '1px solid',
                    borderColor: 'primary.border.low',
                    rounded: 'md',
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    cursor: '[not-allowed]',
                  })}
                >
                  현재 플랜
                </button>
              </div>
            </div>

            {/* Pro 카드 — 추천/현재 */}
            <div
              className={css({
                bg: 'brand.bg.low',
                border: '1px solid',
                borderColor: 'brand.border.base',
                rounded: 'xl',
                overflow: 'hidden',
                display: 'flex',
                flexDir: 'column',
              })}
            >
              {/* 상단 배너 */}
              <div
                className={css({
                  bg: 'brand.bg.high',
                  color: 'inverse.text.base',
                  textAlign: 'center',
                  py: '1.5',
                  fontSize: 'xs',
                  fontWeight: 'semibold',
                  letterSpacing: 'wide',
                })}
              >
                추천
              </div>

              <div className={css({ p: '6', display: 'flex', flexDir: 'column', gap: '4', flex: '1' })}>
                <div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '1' })}>
                    <p className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'brand.text.base' })}>Pro</p>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'brand.bg.high',
                        color: 'inverse.text.base',
                        fontSize: '2xs',
                        fontWeight: 'semibold',
                        rounded: 'full',
                      })}
                    >
                      현재 플랜
                    </span>
                  </div>
                  <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'brand.text.base' })}>
                    ₩49,000<span className={css({ fontSize: 'sm', fontWeight: 'normal', color: 'primary.text.low' })}>/월</span>
                  </p>
                </div>

                <div className={css({ display: 'flex', flexDir: 'column', gap: '2.5' })}>
                  {/* 포함 기능 5개 */}
                  {['프로젝트 무제한', '팀원 20명', '고급 분석', '우선 지원', '고급 보안'].map((feature) => (
                    <div key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                      <Check size={15} className={css({ color: 'brand.fg.base', flexShrink: 0 })} />
                      <span className={css({ fontSize: 'sm', color: 'primary.text.base' })}>{feature}</span>
                    </div>
                  ))}
                  {/* 제외 기능 1개 */}
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                    <X size={15} className={css({ color: 'primary.fg.lowest', flexShrink: 0 })} />
                    <span className={css({ fontSize: 'sm', color: 'primary.fg.lowest' })}>전담 계정 매니저</span>
                  </div>
                </div>
              </div>

              <div className={css({ px: '6', pb: '4' })}>
                <button
                  disabled
                  className={css({
                    w: 'full',
                    py: '2',
                    bg: 'brand.bg.high',
                    color: 'inverse.text.base',
                    border: 'none',
                    rounded: 'md',
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    cursor: '[not-allowed]',
                    opacity: '[0.75]',
                  })}
                >
                  현재 사용 중
                </button>
              </div>
              <p className={css({ px: '6', pb: '5', fontSize: 'xs', color: 'primary.text.low' })}>
                다음 결제일: 2025년 9월 1일
              </p>
            </div>

            {/* Enterprise 카드 */}
            <div
              className={css({
                bg: 'inverse.bg.base',
                border: '1px solid',
                borderColor: 'primary.border.low',
                rounded: 'xl',
                overflow: 'hidden',
                display: 'flex',
                flexDir: 'column',
              })}
            >
              <div className={css({ p: '6', display: 'flex', flexDir: 'column', gap: '4', flex: '1' })}>
                <div>
                  <p className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'primary.text.base' })}>Enterprise</p>
                  <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base', mt: '1' })}>
                    맞춤 견적
                  </p>
                </div>

                <div className={css({ display: 'flex', flexDir: 'column', gap: '2.5' })}>
                  {['프로젝트 무제한', '팀원 무제한', '고급 분석', '우선 지원', '고급 보안', '전담 계정 매니저'].map((feature) => (
                    <div key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                      <Check size={15} className={css({ color: 'success.fg.base', flexShrink: 0 })} />
                      <span className={css({ fontSize: 'sm', color: 'primary.text.base' })}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={css({ px: '6', pb: '6' })}>
                <button
                  className={css({
                    w: 'full',
                    py: '2',
                    bg: 'brand.bg.high',
                    color: 'inverse.text.base',
                    border: 'none',
                    rounded: 'md',
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    cursor: 'pointer',
                    _hover: { bg: 'brand.bg.highest' },
                  })}
                >
                  영업팀 문의
                </button>
              </div>
            </div>
          </div>

          {/* ── 섹션 2: 결제 수단 ── */}
          <div
            className={css({
              bg: 'inverse.bg.base',
              border: '1px solid',
              borderColor: 'primary.border.low',
              rounded: 'xl',
              p: '6',
              display: 'flex',
              flexDir: 'column',
              gap: '4',
            })}
          >
            <h2 className={css({ fontSize: 'base', fontWeight: 'semibold', color: 'primary.text.base' })}>
              등록된 결제 수단
            </h2>

            {/* 카드 정보 */}
            <div className={css({ display: 'flex', alignItems: 'center', gap: '4' })}>
              {/* 카드 아트 */}
              <div
                className={css({
                  w: '[160px]',
                  h: '[96px]',
                  flexShrink: 0,
                  bg: 'primary.bg.highest',
                  rounded: 'lg',
                  p: '4',
                  display: 'flex',
                  flexDir: 'column',
                  justifyContent: 'space-between',
                })}
              >
                <CreditCard size={20} className={css({ color: 'primary.fg.lowest' })} />
                <span className={css({ fontSize: 'sm', fontWeight: 'bold', color: 'primary.text.base', letterSpacing: 'wide' })}>
                  •••• •••• •••• 4242
                </span>
              </div>

              {/* 카드 정보 */}
              <div className={css({ display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p className={css({ fontSize: 'base', fontWeight: 'semibold', color: 'primary.text.base' })}>Visa</p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                  <span className={css({ fontSize: 'sm', color: 'primary.text.low' })}>만료일 12/26</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'success.bg.low',
                      border: '1px solid',
                      borderColor: 'success.border.low',
                      color: 'success.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    유효
                  </span>
                </div>
              </div>

              {/* 버튼들 */}
              <div className={css({ ml: 'auto', display: 'flex', gap: '2' })}>
                <button
                  className={css({
                    px: '3',
                    py: '1.5',
                    bg: 'transparent',
                    border: '1px solid',
                    borderColor: 'primary.border.base',
                    color: 'primary.text.base',
                    fontSize: 'sm',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'primary.ghostBg.base' },
                  })}
                >
                  변경
                </button>
                <button
                  className={css({
                    px: '3',
                    py: '1.5',
                    bg: 'transparent',
                    border: 'none',
                    color: 'error.text.base',
                    fontSize: 'sm',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'error.ghostBg.base' },
                  })}
                >
                  삭제
                </button>
              </div>
            </div>

            {/* 만료 임박 경고 배너 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '3',
                px: '4',
                py: '3',
                bg: 'warning.bg.low',
                border: '1px solid',
                borderColor: 'warning.border.low',
                rounded: 'lg',
              })}
            >
              <AlertTriangle size={16} className={css({ color: 'warning.fg.base', flexShrink: 0 })} />
              <span className={css({ fontSize: 'sm', color: 'warning.text.base', flex: '1' })}>
                결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
              </span>
              <button
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: 'warning.text.base',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  flexShrink: 0,
                })}
              >
                카드 변경
              </button>
            </div>
          </div>

          {/* ── 섹션 3: 결제 내역 테이블 ── */}
          <div
            className={css({
              bg: 'inverse.bg.base',
              border: '1px solid',
              borderColor: 'primary.border.low',
              rounded: 'xl',
              overflow: 'hidden',
            })}
          >
            {/* 헤더 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '6',
                py: '4',
                borderBottom: '1px solid',
                borderColor: 'primary.border.low',
              })}
            >
              <h2 className={css({ fontSize: 'base', fontWeight: 'semibold', color: 'primary.text.base' })}>
                결제 내역
              </h2>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5',
                  px: '3',
                  py: '1.5',
                  bg: 'transparent',
                  border: '1px solid',
                  borderColor: 'primary.border.base',
                  color: 'primary.text.base',
                  fontSize: 'sm',
                  rounded: 'md',
                  cursor: 'pointer',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <Download size={14} />
                CSV 내보내기
              </button>
            </div>

            <table className={css({ w: 'full', borderCollapse: 'collapse' })}>
              <thead>
                <tr className={css({ bg: 'primary.bg.low' })}>
                  {(['날짜', '내역', '금액', '상태', '액션'] as const).map((col) => (
                    <th
                      key={col}
                      className={css({
                        px: '5',
                        py: '3',
                        textAlign: 'left',
                        fontSize: 'xs',
                        fontWeight: 'semibold',
                        color: 'primary.text.low',
                        textTransform: 'uppercase',
                        letterSpacing: 'wide',
                      })}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1 — 결제 완료 (odd) */}
                <tr className={css({ bg: 'inverse.bg.base' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-08-01</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>Pro 플랜 (8월)</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'success.bg.low',
                        border: '1px solid',
                        borderColor: 'success.border.low',
                        color: 'success.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 완료
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                        color: 'primary.text.low', cursor: 'pointer',
                        _hover: { bg: 'primary.ghostBg.base' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 — 결제 완료 (even) */}
                <tr className={css({ bg: 'primary.bg.low' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-07-01</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>Pro 플랜 (7월)</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'success.bg.low',
                        border: '1px solid',
                        borderColor: 'success.border.low',
                        color: 'success.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 완료
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                        color: 'primary.text.low', cursor: 'pointer',
                        _hover: { bg: 'primary.ghostBg.base' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 — 결제 완료 (odd) */}
                <tr className={css({ bg: 'inverse.bg.base' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-06-15</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>추가 사용자 시트</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩9,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'success.bg.low',
                        border: '1px solid',
                        borderColor: 'success.border.low',
                        color: 'success.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 완료
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                        color: 'primary.text.low', cursor: 'pointer',
                        _hover: { bg: 'primary.ghostBg.base' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 4 — 결제 실패 (even) */}
                <tr className={css({ bg: 'error.bg.low' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-06-01</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>Pro 플랜 (6월)</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'error.bg.high',
                        color: 'inverse.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 실패
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        px: '2.5',
                        py: '1',
                        bg: 'transparent',
                        border: '1px solid',
                        borderColor: 'error.border.base',
                        color: 'error.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'md',
                        cursor: 'pointer',
                        _hover: { bg: 'error.ghostBg.base' },
                      })}
                    >
                      재시도
                    </button>
                  </td>
                </tr>

                {/* Row 5 — 결제 완료 (odd) */}
                <tr className={css({ bg: 'inverse.bg.base' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-05-28</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>Pro 플랜 (6월) 재시도</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'success.bg.low',
                        border: '1px solid',
                        borderColor: 'success.border.low',
                        color: 'success.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 완료
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                        color: 'primary.text.low', cursor: 'pointer',
                        _hover: { bg: 'primary.ghostBg.base' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 6 — 결제 완료 (even) */}
                <tr className={css({ bg: 'primary.bg.low' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-05-01</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>Pro 플랜 (5월)</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'success.bg.low',
                        border: '1px solid',
                        borderColor: 'success.border.low',
                        color: 'success.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 완료
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                        color: 'primary.text.low', cursor: 'pointer',
                        _hover: { bg: 'primary.ghostBg.base' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 7 — 처리 중 (odd) */}
                <tr className={css({ bg: 'inverse.bg.base' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-04-01</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>Pro 플랜 (4월)</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'warning.bg.low',
                        border: '1px solid',
                        borderColor: 'warning.border.low',
                        color: 'warning.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      처리 중
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span className={css({ fontSize: 'sm', color: 'primary.fg.lowest' })}>—</span>
                  </td>
                </tr>

                {/* Row 8 — 환불 완료 (even) */}
                <tr className={css({ bg: 'primary.bg.low' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-03-10</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>환불 처리</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'info.text.base', fontWeight: 'medium' })}>-₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'info.bg.low',
                        border: '1px solid',
                        borderColor: 'info.border.low',
                        color: 'info.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      환불 완료
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                        color: 'primary.text.low', cursor: 'pointer',
                        _hover: { bg: 'primary.ghostBg.base' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 9 — 결제 완료 (odd) */}
                <tr className={css({ bg: 'inverse.bg.base' })}>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.low' })}>2025-03-01</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base' })}>Pro 플랜 (3월)</td>
                  <td className={css({ px: '5', py: '3', fontSize: 'sm', color: 'primary.text.base', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'success.bg.low',
                        border: '1px solid',
                        borderColor: 'success.border.low',
                        color: 'success.text.base',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 완료
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                        color: 'primary.text.low', cursor: 'pointer',
                        _hover: { bg: 'primary.ghostBg.base' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 섹션 4: 청구 요약 카드 3열 ── */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '4',
              pb: '6',
            })}
          >
            {/* 이번 달 청구 */}
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
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium' })}>이번 달 청구</p>
                <TrendingUp size={20} className={css({ color: 'success.fg.base' })} />
              </div>
              <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base' })}>₩58,000</p>
              <span
                className={css({
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  px: '2', py: '0.5',
                  bg: 'success.bg.low',
                  border: '1px solid',
                  borderColor: 'success.border.low',
                  color: 'success.text.base',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                  rounded: 'full',
                })}
              >
                정상 결제
              </span>
              <p className={css({ fontSize: 'xs', color: 'primary.text.low' })}>Pro ₩49,000 + 추가 ₩9,000</p>
            </div>

            {/* 미결제 금액 */}
            <div
              className={css({
                bg: 'error.bg.low',
                border: '1px solid',
                borderColor: 'error.border.low',
                rounded: 'xl',
                p: '5',
                display: 'flex',
                flexDir: 'column',
                gap: '3',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium' })}>미결제 금액</p>
                <AlertCircle size={20} className={css({ color: 'error.fg.base' })} />
              </div>
              <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'error.text.base' })}>₩49,000</p>
              <span
                className={css({
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  px: '2', py: '0.5',
                  bg: 'error.bg.high',
                  color: 'inverse.text.base',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                  rounded: 'full',
                })}
              >
                미결제
              </span>
              <button
                className={css({
                  px: '3', py: '2',
                  bg: 'error.bg.high',
                  color: 'inverse.text.base',
                  border: 'none',
                  rounded: 'md',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  _hover: { bg: 'error.bg.highest' },
                })}
              >
                지금 결제
              </button>
            </div>

            {/* 다음 결제일 */}
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
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium' })}>다음 결제일</p>
                <Calendar size={20} className={css({ color: 'info.fg.base' })} />
              </div>
              <p className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'primary.text.base' })}>2025년 9월 1일</p>
              <span
                className={css({
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  px: '2', py: '0.5',
                  bg: 'info.bg.low',
                  border: '1px solid',
                  borderColor: 'info.border.low',
                  color: 'info.text.base',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                  rounded: 'full',
                })}
              >
                예정
              </span>
              <p className={css({ fontSize: 'xs', color: 'primary.text.low' })}>Pro 플랜 월정액 ₩49,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
