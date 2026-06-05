import { css } from '@ds-token-test/styled-system/css';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  LogOut,
  Check,
  X,
  AlertTriangle,
  AlertCircle,
  Download,
  FileText,
  TrendingUp,
  Calendar,
  RefreshCw,
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
          bg: 'fill.neutral',
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
            borderColor: 'border.neutral.subtle',
            flexShrink: 0,
          })}
        >
          <LayoutDashboard
            size={22}
            className={css({ color: 'icon.brand.default', flexShrink: 0 })}
          />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'bold',
              color: 'text.inverse',
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
          {/* Active: 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              px: '3',
              py: '2.5',
              rounded: 'md',
              bg: 'fill.brand',
              color: 'text.inverse',
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
              color: 'icon.neutral.subtle',
              cursor: 'pointer',
              _hover: { bg: 'overlay.action.lighten.hover', color: 'text.inverse' },
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
              color: 'icon.neutral.subtle',
              cursor: 'pointer',
              _hover: { bg: 'overlay.action.lighten.hover', color: 'text.inverse' },
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
              color: 'icon.neutral.subtle',
              cursor: 'pointer',
              _hover: { bg: 'overlay.action.lighten.hover', color: 'text.inverse' },
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
            borderColor: 'border.neutral.subtle',
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
              color: 'icon.critical.default',
              cursor: 'pointer',
              _hover: { bg: 'surface.critical.ghost' },
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
          bg: 'surface.neutral.muted',
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
          <h1
            className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              color: 'text.neutral.default',
            })}
          >
            결제 및 구독 관리
          </h1>

          {/* ── 섹션 1: 플랜 선택 ── */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '4',
            })}
          >
            {/* Free */}
            <div
              className={css({
                bg: 'surface.neutral.subtle',
                border: '1px solid',
                borderColor: 'border.neutral.subtle',
                rounded: 'xl',
                p: '5',
                display: 'flex',
                flexDir: 'column',
                gap: '4',
              })}
            >
              <div>
                <p
                  className={css({
                    fontSize: 'base',
                    fontWeight: 'bold',
                    color: 'text.neutral.default',
                    mb: '2',
                  })}
                >
                  Free
                </p>
                <p
                  className={css({
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    color: 'text.neutral.default',
                  })}
                >
                  ₩0/월
                </p>
              </div>
              <ul className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
                {['최대 3명 사용자', '기본 기능', '1GB 저장공간'].map((feat) => (
                  <li key={feat} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                    <Check size={15} className={css({ color: 'icon.positive.default', flexShrink: 0 })} />
                    <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>{feat}</span>
                  </li>
                ))}
                {['우선 지원', '고급 분석'].map((feat) => (
                  <li key={feat} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                    <X size={15} className={css({ color: 'icon.neutral.subtle', flexShrink: 0 })} />
                    <span className={css({ fontSize: 'sm', color: 'text.neutral.subtle' })}>{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className={css({
                  w: 'full',
                  px: '3',
                  py: '2',
                  bg: 'surface.neutral.default',
                  border: '1px solid',
                  borderColor: 'border.neutral.subtle',
                  color: 'text.neutral.subtle',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  rounded: 'md',
                  cursor: '[not-allowed]',
                  opacity: '[0.6]',
                })}
              >
                현재 플랜
              </button>
            </div>

            {/* Pro (recommended / current) */}
            <div
              className={css({
                bg: 'surface.brand.subtle',
                border: '1px solid',
                borderColor: 'border.brand.default',
                rounded: 'xl',
                overflow: 'hidden',
                display: 'flex',
                flexDir: 'column',
              })}
            >
              <div
                className={css({
                  bg: 'fill.brand',
                  px: '5',
                  py: '2',
                  textAlign: 'center',
                })}
              >
                <span
                  className={css({
                    fontSize: 'xs',
                    fontWeight: 'bold',
                    color: 'text.inverse',
                    textTransform: 'uppercase',
                    letterSpacing: 'wide',
                  })}
                >
                  추천
                </span>
              </div>
              <div
                className={css({
                  p: '5',
                  display: 'flex',
                  flexDir: 'column',
                  gap: '4',
                  flex: '1',
                })}
              >
                <div>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      mb: '2',
                    })}
                  >
                    <p
                      className={css({
                        fontSize: 'base',
                        fontWeight: 'bold',
                        color: 'text.brand.default',
                      })}
                    >
                      Pro
                    </p>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'fill.brand',
                        color: 'text.inverse',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      현재 플랜
                    </span>
                  </div>
                  <p
                    className={css({
                      fontSize: '2xl',
                      fontWeight: 'bold',
                      color: 'text.brand.default',
                    })}
                  >
                    ₩49,000/월
                  </p>
                </div>
                <ul className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
                  {['최대 30명 사용자', '모든 기능', '100GB 저장공간', '우선 지원', '고급 분석'].map(
                    (feat) => (
                      <li
                        key={feat}
                        className={css({ display: 'flex', alignItems: 'center', gap: '2' })}
                      >
                        <Check
                          size={15}
                          className={css({ color: 'icon.brand.default', flexShrink: 0 })}
                        />
                        <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>
                          {feat}
                        </span>
                      </li>
                    )
                  )}
                  {['전용 인프라'].map((feat) => (
                    <li key={feat} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                      <X size={15} className={css({ color: 'icon.neutral.subtle', flexShrink: 0 })} />
                      <span className={css({ fontSize: 'sm', color: 'text.neutral.subtle' })}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  disabled
                  className={css({
                    w: 'full',
                    px: '3',
                    py: '2',
                    bg: 'fill.brand',
                    border: 'none',
                    color: 'text.inverse',
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: '[not-allowed]',
                    opacity: '[0.65]',
                  })}
                >
                  현재 사용 중
                </button>
                <p
                  className={css({
                    fontSize: 'xs',
                    color: 'text.neutral.muted',
                    textAlign: 'center',
                  })}
                >
                  다음 결제일: 2025년 9월 1일
                </p>
              </div>
            </div>

            {/* Enterprise */}
            <div
              className={css({
                bg: 'surface.neutral.subtle',
                border: '1px solid',
                borderColor: 'border.neutral.subtle',
                rounded: 'xl',
                p: '5',
                display: 'flex',
                flexDir: 'column',
                gap: '4',
              })}
            >
              <div>
                <p
                  className={css({
                    fontSize: 'base',
                    fontWeight: 'bold',
                    color: 'text.neutral.default',
                    mb: '2',
                  })}
                >
                  Enterprise
                </p>
                <p
                  className={css({
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    color: 'text.neutral.default',
                  })}
                >
                  맞춤 견적
                </p>
              </div>
              <ul className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
                {[
                  '무제한 사용자',
                  '모든 기능',
                  '무제한 저장공간',
                  '전용 지원팀',
                  '고급 분석',
                  '전용 인프라',
                ].map((feat) => (
                  <li key={feat} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                    <Check
                      size={15}
                      className={css({ color: 'icon.positive.default', flexShrink: 0 })}
                    />
                    <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  w: 'full',
                  px: '3',
                  py: '2',
                  bg: 'fill.brand',
                  border: 'none',
                  color: 'text.inverse',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  rounded: 'md',
                  cursor: 'pointer',
                  _hover: { filter: '[brightness(0.88)]' },
                })}
              >
                영업팀 문의
              </button>
            </div>
          </div>

          {/* ── 섹션 2: 결제 수단 ── */}
          <div
            className={css({
              bg: 'surface.neutral.subtle',
              border: '1px solid',
              borderColor: 'border.neutral.subtle',
              rounded: 'xl',
              p: '5',
              display: 'flex',
              flexDir: 'column',
              gap: '4',
            })}
          >
            <h2
              className={css({
                fontSize: 'base',
                fontWeight: 'semibold',
                color: 'text.neutral.default',
              })}
            >
              등록된 결제 수단
            </h2>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '4' })}>
              {/* Card art */}
              <div
                className={css({
                  w: '[140px]',
                  h: '[88px]',
                  bg: 'surface.neutral.default',
                  rounded: 'lg',
                  p: '3',
                  display: 'flex',
                  flexDir: 'column',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                })}
              >
                <CreditCard size={20} className={css({ color: 'icon.neutral.muted' })} />
                <span
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'bold',
                    color: 'text.neutral.default',
                    letterSpacing: 'wide',
                  })}
                >
                  •••• •••• •••• 4242
                </span>
              </div>

              {/* Card info */}
              <div
                className={css({
                  flex: '1',
                  display: 'flex',
                  flexDir: 'column',
                  gap: '1.5',
                })}
              >
                <p
                  className={css({
                    fontSize: 'base',
                    fontWeight: 'semibold',
                    color: 'text.neutral.default',
                  })}
                >
                  Visa
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                  <span className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                    만료일 12/26
                  </span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'surface.positive.subtle',
                      border: '1px solid',
                      borderColor: 'border.positive.subtle',
                      color: 'text.positive.default',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    유효
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className={css({ display: 'flex', gap: '2' })}>
                <button
                  className={css({
                    px: '3',
                    py: '1.5',
                    bg: 'transparent',
                    border: '1px solid',
                    borderColor: 'border.neutral.default',
                    color: 'text.neutral.default',
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'surface.neutral.ghost' },
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
                    color: 'text.critical.default',
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'surface.critical.ghost' },
                  })}
                >
                  삭제
                </button>
              </div>
            </div>

            {/* Expiry warning banner */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '3',
                px: '4',
                py: '3',
                bg: 'surface.warning.subtle',
                border: '1px solid',
                borderColor: 'border.warning.subtle',
                rounded: 'lg',
              })}
            >
              <AlertTriangle
                size={16}
                className={css({ color: 'icon.warning.default', flexShrink: 0 })}
              />
              <span className={css({ flex: '1', fontSize: 'sm', color: 'text.warning.default' })}>
                결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
              </span>
              <button
                className={css({
                  bg: 'transparent',
                  border: 'none',
                  color: 'text.warning.default',
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  p: '0',
                })}
              >
                카드 변경
              </button>
            </div>
          </div>

          {/* ── 섹션 3: 결제 내역 테이블 ── */}
          <div
            className={css({
              bg: 'surface.neutral.subtle',
              border: '1px solid',
              borderColor: 'border.neutral.subtle',
              rounded: 'xl',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '5',
                py: '4',
                borderBottom: '1px solid',
                borderColor: 'border.neutral.subtle',
              })}
            >
              <h2
                className={css({
                  fontSize: 'base',
                  fontWeight: 'semibold',
                  color: 'text.neutral.default',
                })}
              >
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
                  borderColor: 'border.neutral.default',
                  color: 'text.neutral.default',
                  fontSize: 'sm',
                  rounded: 'md',
                  cursor: 'pointer',
                  _hover: { bg: 'surface.neutral.ghost' },
                })}
              >
                <Download size={14} />
                CSV 내보내기
              </button>
            </div>

            <table className={css({ w: 'full', borderCollapse: 'collapse' })}>
              <thead>
                <tr className={css({ bg: 'surface.neutral.muted' })}>
                  {(['날짜', '내역', '금액', '상태', '액션'] as const).map((col) => (
                    <th
                      key={col}
                      className={css({
                        px: '5',
                        py: '3',
                        textAlign: 'left',
                        fontSize: 'xs',
                        fontWeight: 'semibold',
                        color: 'text.neutral.muted',
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
                <tr className={css({ bg: 'surface.neutral.subtle' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-08-01</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>Pro 플랜 (8월)</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.subtle',
                        color: 'text.positive.default',
                        fontSize: 'xs', fontWeight: 'medium',
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
                        color: 'icon.neutral.muted', cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 — 결제 완료 (even) */}
                <tr className={css({ bg: 'surface.neutral.ghost' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-07-01</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>Pro 플랜 (7월)</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.subtle',
                        color: 'text.positive.default',
                        fontSize: 'xs', fontWeight: 'medium',
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
                        color: 'icon.neutral.muted', cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 — 결제 완료 (odd) */}
                <tr className={css({ bg: 'surface.neutral.subtle' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-06-15</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>추가 사용자 시트</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩9,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.subtle',
                        color: 'text.positive.default',
                        fontSize: 'xs', fontWeight: 'medium',
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
                        color: 'icon.neutral.muted', cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 4 — 결제 실패 (critical row bg) */}
                <tr className={css({ bg: 'surface.critical.subtle' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-06-01</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>Pro 플랜 (6월)</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'fill.critical',
                        color: 'text.inverse',
                        fontSize: 'xs', fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      결제 실패
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <button
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1',
                        px: '2.5', py: '1',
                        bg: 'transparent',
                        border: '1px solid',
                        borderColor: 'border.critical.default',
                        color: 'text.critical.default',
                        fontSize: 'xs', fontWeight: 'medium',
                        rounded: 'md',
                        cursor: 'pointer',
                        _hover: { bg: 'surface.critical.ghost' },
                      })}
                    >
                      <RefreshCw size={12} />
                      재시도
                    </button>
                  </td>
                </tr>

                {/* Row 5 — 결제 완료 (odd) */}
                <tr className={css({ bg: 'surface.neutral.subtle' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-05-28</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>Pro 플랜 (6월) 재시도</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.subtle',
                        color: 'text.positive.default',
                        fontSize: 'xs', fontWeight: 'medium',
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
                        color: 'icon.neutral.muted', cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 6 — 결제 완료 (even) */}
                <tr className={css({ bg: 'surface.neutral.ghost' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-05-01</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>Pro 플랜 (5월)</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.subtle',
                        color: 'text.positive.default',
                        fontSize: 'xs', fontWeight: 'medium',
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
                        color: 'icon.neutral.muted', cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 7 — 처리 중 (odd) */}
                <tr className={css({ bg: 'surface.neutral.subtle' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-04-01</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>Pro 플랜 (4월)</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.warning.subtle',
                        border: '1px solid',
                        borderColor: 'border.warning.subtle',
                        color: 'text.warning.default',
                        fontSize: 'xs', fontWeight: 'medium',
                        rounded: 'full',
                      })}
                    >
                      처리 중
                    </span>
                  </td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span className={css({ fontSize: 'sm', color: 'text.neutral.subtle' })}>—</span>
                  </td>
                </tr>

                {/* Row 8 — 환불 완료 (even) */}
                <tr className={css({ bg: 'surface.neutral.ghost' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-03-10</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>환불 처리</td>
                  <td className={css({ px: '5', py: '3', color: 'text.info.default', fontSize: 'sm', fontWeight: 'medium' })}>-₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.info.subtle',
                        border: '1px solid',
                        borderColor: 'border.info.subtle',
                        color: 'text.info.default',
                        fontSize: 'xs', fontWeight: 'medium',
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
                        color: 'icon.neutral.muted', cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 9 — 결제 완료 (odd) */}
                <tr className={css({ bg: 'surface.neutral.subtle' })}>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>2025-03-01</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>Pro 플랜 (3월)</td>
                  <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm', fontWeight: 'medium' })}>₩49,000</td>
                  <td className={css({ px: '5', py: '3' })}>
                    <span
                      className={css({
                        px: '2', py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.subtle',
                        color: 'text.positive.default',
                        fontSize: 'xs', fontWeight: 'medium',
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
                        color: 'icon.neutral.muted', cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.neutral.subtle',
                border: '1px solid',
                borderColor: 'border.neutral.subtle',
                rounded: 'xl',
                p: '5',
                display: 'flex',
                flexDir: 'column',
                gap: '3',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div>
                  <p
                    className={css({
                      fontSize: 'xs',
                      color: 'text.neutral.muted',
                      fontWeight: 'medium',
                      mb: '1',
                    })}
                  >
                    이번 달 청구
                  </p>
                  <p
                    className={css({
                      fontSize: '2xl',
                      fontWeight: 'bold',
                      color: 'text.neutral.default',
                    })}
                  >
                    ₩58,000
                  </p>
                </div>
                <TrendingUp size={22} className={css({ color: 'icon.positive.default' })} />
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  px: '2',
                  py: '0.5',
                  bg: 'surface.positive.subtle',
                  color: 'text.positive.default',
                  border: '1px solid',
                  borderColor: 'border.positive.subtle',
                  rounded: 'full',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                })}
              >
                정상 결제
              </span>
              <p className={css({ fontSize: 'xs', color: 'text.neutral.muted' })}>
                Pro ₩49,000 + 추가 ₩9,000
              </p>
            </div>

            {/* 미결제 금액 */}
            <div
              className={css({
                bg: 'surface.critical.subtle',
                border: '1px solid',
                borderColor: 'border.critical.subtle',
                rounded: 'xl',
                p: '5',
                display: 'flex',
                flexDir: 'column',
                gap: '3',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div>
                  <p
                    className={css({
                      fontSize: 'xs',
                      color: 'text.neutral.muted',
                      fontWeight: 'medium',
                      mb: '1',
                    })}
                  >
                    미결제 금액
                  </p>
                  <p
                    className={css({
                      fontSize: '2xl',
                      fontWeight: 'bold',
                      color: 'text.critical.default',
                    })}
                  >
                    ₩49,000
                  </p>
                </div>
                <AlertCircle size={22} className={css({ color: 'icon.critical.default' })} />
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  px: '2',
                  py: '0.5',
                  bg: 'fill.critical',
                  color: 'text.inverse',
                  rounded: 'full',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                })}
              >
                미결제
              </span>
              <button
                className={css({
                  w: 'full',
                  px: '3',
                  py: '2',
                  bg: 'fill.critical',
                  border: 'none',
                  color: 'text.inverse',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  rounded: 'md',
                  cursor: 'pointer',
                  _hover: { filter: '[brightness(0.88)]' },
                })}
              >
                지금 결제
              </button>
            </div>

            {/* 다음 결제일 */}
            <div
              className={css({
                bg: 'surface.neutral.subtle',
                border: '1px solid',
                borderColor: 'border.neutral.subtle',
                rounded: 'xl',
                p: '5',
                display: 'flex',
                flexDir: 'column',
                gap: '3',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div>
                  <p
                    className={css({
                      fontSize: 'xs',
                      color: 'text.neutral.muted',
                      fontWeight: 'medium',
                      mb: '1',
                    })}
                  >
                    다음 결제일
                  </p>
                  <p
                    className={css({
                      fontSize: '2xl',
                      fontWeight: 'bold',
                      color: 'text.neutral.default',
                    })}
                  >
                    2025년 9월 1일
                  </p>
                </div>
                <Calendar size={22} className={css({ color: 'icon.info.default' })} />
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  px: '2',
                  py: '0.5',
                  bg: 'surface.info.subtle',
                  color: 'text.info.default',
                  border: '1px solid',
                  borderColor: 'border.info.subtle',
                  rounded: 'full',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                })}
              >
                예정
              </span>
              <p className={css({ fontSize: 'xs', color: 'text.neutral.muted' })}>
                Pro 플랜 월정액 ₩49,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
