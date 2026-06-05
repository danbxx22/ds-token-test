import { css } from '@ds-token-test/styled-system/css';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Bell,
  ScrollText,
  LogOut,
  Search,
  Settings,
  Plus,
  TrendingUp,
  AlertCircle,
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  Info,
  AlertTriangle,
  Filter,
  Download,
  Eye,
  X,
} from 'lucide-react';

export default function DashboardPage() {
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
          {/* Active: 대시보드 */}
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
            <LayoutDashboard size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm', fontWeight: 'medium' })}>대시보드</span>
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

          {/* 결제 내역 */}
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
            <CreditCard size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm' })}>결제 내역</span>
          </div>

          {/* 알림 설정 */}
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
            <Bell size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm' })}>알림 설정</span>
          </div>

          {/* 시스템 로그 */}
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
            <ScrollText size={18} className={css({ flexShrink: 0 })} />
            <span className={css({ fontSize: 'sm' })}>시스템 로그</span>
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
          display: 'flex',
          flexDir: 'column',
          overflow: 'hidden',
        })}
      >
        {/* Header */}
        <header
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: '6',
            h: '16',
            bg: 'surface.neutral.subtle',
            borderBottom: '1px solid',
            borderColor: 'border.neutral.subtle',
            flexShrink: 0,
          })}
        >
          {/* Breadcrumb */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '1.5',
              fontSize: 'sm',
            })}
          >
            <Link
              href="/"
              className={css({
                color: 'text.neutral.muted',
                textDecoration: 'none',
                _hover: { color: 'text.brand.default' },
              })}
            >
              홈
            </Link>
            <span className={css({ color: 'text.neutral.subtle' })}>/</span>
            <Link
              href="#"
              className={css({
                color: 'text.neutral.muted',
                textDecoration: 'none',
                _hover: { color: 'text.brand.default' },
              })}
            >
              모니터링
            </Link>
            <span className={css({ color: 'text.neutral.subtle' })}>/</span>
            <span
              className={css({
                color: 'text.neutral.default',
                fontWeight: 'semibold',
              })}
            >
              대시보드
            </span>
          </div>

          {/* Right side */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '1' })}>
            {/* Search button + tooltip */}
            <div className={`group ${css({ position: 'relative', display: 'inline-flex' })}`}>
              <button
                className={css({
                  p: '2',
                  rounded: 'md',
                  color: 'icon.neutral.muted',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  _hover: { bg: 'surface.neutral.ghost' },
                })}
              >
                <Search size={18} />
              </button>
              <div
                className={css({
                  position: 'absolute',
                  top: '[calc(100%+6px)]',
                  left: '50%',
                  transform: '[translateX(-50%)]',
                  px: '2',
                  py: '1',
                  bg: 'fill.neutral',
                  color: 'text.inverse',
                  fontSize: 'xs',
                  rounded: 'sm',
                  whiteSpace: 'nowrap',
                  opacity: '[0]',
                  pointerEvents: 'none',
                  zIndex: 'tooltip',
                  transition: '[opacity 0.1s ease]',
                  _groupHover: { opacity: '[1]' },
                })}
              >
                검색
              </div>
            </div>

            {/* Bell button + badge + tooltip */}
            <div className={`group ${css({ position: 'relative', display: 'inline-flex' })}`}>
              <button
                className={css({
                  p: '2',
                  rounded: 'md',
                  color: 'icon.neutral.muted',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  _hover: { bg: 'surface.neutral.ghost' },
                })}
              >
                <Bell size={18} />
                <span
                  className={css({
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    w: '4',
                    h: '4',
                    bg: 'fill.critical',
                    color: 'text.inverse',
                    fontSize: '2xs',
                    fontWeight: 'bold',
                    rounded: 'full',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  })}
                >
                  3
                </span>
              </button>
              <div
                className={css({
                  position: 'absolute',
                  top: '[calc(100%+6px)]',
                  left: '50%',
                  transform: '[translateX(-50%)]',
                  px: '2',
                  py: '1',
                  bg: 'fill.neutral',
                  color: 'text.inverse',
                  fontSize: 'xs',
                  rounded: 'sm',
                  whiteSpace: 'nowrap',
                  opacity: '[0]',
                  pointerEvents: 'none',
                  zIndex: 'tooltip',
                  transition: '[opacity 0.1s ease]',
                  _groupHover: { opacity: '[1]' },
                })}
              >
                알림
              </div>
            </div>

            {/* Settings button + tooltip */}
            <div className={`group ${css({ position: 'relative', display: 'inline-flex' })}`}>
              <button
                className={css({
                  p: '2',
                  rounded: 'md',
                  color: 'icon.neutral.muted',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  _hover: { bg: 'surface.neutral.ghost' },
                })}
              >
                <Settings size={18} />
              </button>
              <div
                className={css({
                  position: 'absolute',
                  top: '[calc(100%+6px)]',
                  left: '50%',
                  transform: '[translateX(-50%)]',
                  px: '2',
                  py: '1',
                  bg: 'fill.neutral',
                  color: 'text.inverse',
                  fontSize: 'xs',
                  rounded: 'sm',
                  whiteSpace: 'nowrap',
                  opacity: '[0]',
                  pointerEvents: 'none',
                  zIndex: 'tooltip',
                  transition: '[opacity 0.1s ease]',
                  _groupHover: { opacity: '[1]' },
                })}
              >
                설정
              </div>
            </div>

            {/* Divider */}
            <div
              className={css({
                w: '1px',
                h: '6',
                bg: 'border.neutral.subtle',
                mx: '2',
              })}
            />

            {/* 새 배포 button */}
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '1.5',
                px: '3',
                py: '1.5',
                bg: 'fill.brand',
                color: 'text.inverse',
                fontSize: 'sm',
                fontWeight: 'medium',
                rounded: 'md',
                border: 'none',
                cursor: 'pointer',
                _hover: { filter: '[brightness(0.88)]' },
              })}
            >
              <Plus size={16} />
              새 배포
            </button>

            {/* Profile avatar */}
            <div
              className={css({
                w: '9',
                h: '9',
                rounded: 'full',
                bg: 'fill.brand',
                color: 'text.inverse',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'sm',
                fontWeight: 'bold',
                ml: '2',
                flexShrink: 0,
              })}
            >
              K
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <div
          className={css({
            flex: '1',
            overflowY: 'auto',
            bg: 'surface.neutral.muted',
          })}
        >
          {/* Toast area — right aligned, below header */}
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: '2',
              alignItems: 'flex-end',
              px: '6',
              pt: '4',
            })}
          >
            {/* Toast 1: Positive */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '3',
                px: '4',
                py: '3',
                bg: 'surface.positive.subtle',
                border: '1px solid',
                borderColor: 'border.positive.subtle',
                rounded: 'lg',
                minW: '[300px]',
                maxW: '[420px]',
              })}
            >
              <CheckCircle2 size={18} className={css({ color: 'icon.positive.default', flexShrink: 0 })} />
              <span className={css({ flex: '1', color: 'text.positive.default', fontSize: 'sm' })}>
                배포 v2.4.1이 완료되었습니다.
              </span>
              <button
                className={css({
                  color: 'icon.positive.default',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  p: '0.5',
                  rounded: 'sm',
                  _hover: { bg: 'surface.positive.ghost' },
                })}
              >
                <X size={14} />
              </button>
            </div>

            {/* Toast 2: Critical */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '3',
                px: '4',
                py: '3',
                bg: 'surface.critical.subtle',
                border: '1px solid',
                borderColor: 'border.critical.subtle',
                rounded: 'lg',
                minW: '[300px]',
                maxW: '[420px]',
              })}
            >
              <XCircle size={18} className={css({ color: 'icon.critical.default', flexShrink: 0 })} />
              <span className={css({ flex: '1', color: 'text.critical.default', fontSize: 'sm' })}>
                DB 연결이 끊어졌습니다. 즉시 확인하세요.
              </span>
              <button
                className={css({
                  color: 'icon.critical.default',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  p: '0.5',
                  rounded: 'sm',
                  _hover: { bg: 'surface.critical.ghost' },
                })}
              >
                <X size={14} />
              </button>
            </div>

            {/* Toast 3: Info */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '3',
                px: '4',
                py: '3',
                bg: 'surface.info.subtle',
                border: '1px solid',
                borderColor: 'border.info.subtle',
                rounded: 'lg',
                minW: '[300px]',
                maxW: '[420px]',
              })}
            >
              <Info size={18} className={css({ color: 'icon.info.default', flexShrink: 0 })} />
              <span className={css({ flex: '1', color: 'text.info.default', fontSize: 'sm' })}>
                시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
              </span>
              <button
                className={css({
                  color: 'icon.info.default',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  p: '0.5',
                  rounded: 'sm',
                  _hover: { bg: 'surface.info.ghost' },
                })}
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Content sections */}
          <div
            className={css({
              px: '6',
              py: '5',
              display: 'flex',
              flexDir: 'column',
              gap: '6',
            })}
          >
            {/* ── Stat Cards 2×2 ── */}
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4',
              })}
            >
              {/* 총 사용자 — positive */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'text.neutral.muted', fontWeight: 'medium', mb: '1' })}>
                      총 사용자
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.neutral.default' })}>
                      12,847
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
                  +12%
                </span>
              </div>

              {/* 결제 실패 — critical */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'text.neutral.muted', fontWeight: 'medium', mb: '1' })}>
                      결제 실패
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.neutral.default' })}>
                      24건
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
                    bg: 'surface.critical.subtle',
                    color: 'text.critical.default',
                    border: '1px solid',
                    borderColor: 'border.critical.subtle',
                    rounded: 'full',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                  })}
                >
                  +3건
                </span>
              </div>

              {/* 평균 응답시간 — positive */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'text.neutral.muted', fontWeight: 'medium', mb: '1' })}>
                      평균 응답시간
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.neutral.default' })}>
                      142ms
                    </p>
                  </div>
                  <Zap size={22} className={css({ color: 'icon.positive.default' })} />
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
                  -8%
                </span>
              </div>

              {/* 미처리 민원 — warning */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'text.neutral.muted', fontWeight: 'medium', mb: '1' })}>
                      미처리 민원
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.neutral.default' })}>
                      7건
                    </p>
                  </div>
                  <Clock size={22} className={css({ color: 'icon.warning.default' })} />
                </div>
                <span
                  className={css({
                    display: 'inline-flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    px: '2',
                    py: '0.5',
                    bg: 'surface.warning.subtle',
                    color: 'text.warning.default',
                    border: '1px solid',
                    borderColor: 'border.warning.subtle',
                    rounded: 'full',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                  })}
                >
                  +2건
                </span>
              </div>
            </div>

            {/* ── System Resource Cards 3× ── */}
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '4',
              })}
            >
              {/* CPU 42% — positive */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                  <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'text.neutral.muted' })}>
                    CPU 사용량
                  </p>
                  <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.neutral.default' })}>42%</span>
                </div>
                <div className={css({ h: '2', bg: 'surface.neutral.default', rounded: 'full', overflow: 'hidden' })}>
                  <div className={css({ h: 'full', bg: 'fill.positive', rounded: 'full', w: '[42%]' })} />
                </div>
                <p className={css({ fontSize: 'xs', color: 'text.positive.default' })}>정상 범위</p>
              </div>

              {/* Memory 78% — warning */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                  <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'text.neutral.muted' })}>
                    메모리 사용량
                  </p>
                  <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.neutral.default' })}>78%</span>
                </div>
                <div className={css({ h: '2', bg: 'surface.neutral.default', rounded: 'full', overflow: 'hidden' })}>
                  <div className={css({ h: 'full', bg: 'fill.warning', rounded: 'full', w: '[78%]' })} />
                </div>
                <p className={css({ fontSize: 'xs', color: 'text.warning.default' })}>주의 필요</p>
              </div>

              {/* Disk 91% — critical */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                  <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'text.neutral.muted' })}>
                    디스크 사용량
                  </p>
                  <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.neutral.default' })}>91%</span>
                </div>
                <div className={css({ h: '2', bg: 'surface.neutral.default', rounded: 'full', overflow: 'hidden' })}>
                  <div className={css({ h: 'full', bg: 'fill.critical', rounded: 'full', w: '[91%]' })} />
                </div>
                <p className={css({ fontSize: 'xs', color: 'text.critical.default' })}>위험 수준</p>
              </div>
            </div>

            {/* ── Events Table ── */}
            <div
              className={css({
                bg: 'surface.neutral.subtle',
                border: '1px solid',
                borderColor: 'border.neutral.subtle',
                rounded: 'xl',
                overflow: 'hidden',
              })}
            >
              {/* Tab bar + action buttons */}
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'stretch',
                  px: '5',
                  borderBottom: '1px solid',
                  borderColor: 'border.neutral.subtle',
                })}
              >
                {/* Tabs */}
                <div className={css({ display: 'flex' })}>
                  <button
                    className={css({
                      px: '4',
                      py: '3',
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'text.brand.default',
                      bg: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid',
                      borderBottomColor: 'fill.brand',
                      cursor: 'pointer',
                    })}
                  >
                    전체 이벤트
                  </button>
                  <button
                    className={css({
                      px: '4',
                      py: '3',
                      fontSize: 'sm',
                      color: 'text.neutral.subtle',
                      bg: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      _hover: { color: 'text.neutral.muted' },
                    })}
                  >
                    미처리
                  </button>
                  <button
                    className={css({
                      px: '4',
                      py: '3',
                      fontSize: 'sm',
                      color: 'text.neutral.subtle',
                      bg: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      _hover: { color: 'text.neutral.muted' },
                    })}
                  >
                    처리완료
                  </button>
                </div>

                {/* Action buttons */}
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', py: '2' })}>
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
                    <Filter size={14} />
                    필터
                  </button>
                  <button
                    disabled
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5',
                      px: '3',
                      py: '1.5',
                      bg: 'transparent',
                      border: '1px solid',
                      borderColor: 'border.neutral.subtle',
                      color: 'text.neutral.subtle',
                      fontSize: 'sm',
                      rounded: 'md',
                      cursor: '[not-allowed]',
                      opacity: '[0.5]',
                    })}
                  >
                    <Download size={14} />
                    CSV 내보내기
                  </button>
                </div>
              </div>

              {/* Tag filter + search inputs */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                  px: '5',
                  py: '3',
                  borderBottom: '1px solid',
                  borderColor: 'border.neutral.subtle',
                })}
              >
                {/* Tags */}
                <div className={css({ display: 'flex', gap: '2', flex: '1', flexWrap: 'wrap', alignItems: 'center' })}>
                  <button
                    className={css({
                      px: '3',
                      py: '1',
                      bg: 'fill.brand',
                      color: 'text.inverse',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                      border: 'none',
                      cursor: 'pointer',
                    })}
                  >
                    전체
                  </button>
                  {(['로그인', '결제', '보안', '시스템'] as const).map((tag) => (
                    <button
                      key={tag}
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'surface.neutral.default',
                        color: 'text.neutral.muted',
                        fontSize: 'xs',
                        rounded: 'full',
                        border: 'none',
                        cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.emphasis' },
                      })}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Search inputs */}
                <div className={css({ display: 'flex', gap: '2', alignItems: 'flex-start' })}>
                  {/* Normal */}
                  <input
                    type="text"
                    placeholder="이벤트 검색..."
                    className={css({
                      px: '3',
                      py: '1.5',
                      bg: 'surface.neutral.subtle',
                      border: '1px solid',
                      borderColor: 'border.neutral.default',
                      rounded: 'md',
                      fontSize: 'sm',
                      color: 'text.neutral.default',
                      outline: 'none',
                      w: '[160px]',
                      _placeholder: { color: 'text.neutral.subtle' },
                      _focus: {
                        borderColor: 'border.brand.default',
                        outline: '2px solid',
                        outlineColor: 'border.brand.subtle',
                        outlineOffset: '0',
                      },
                    })}
                  />
                  {/* Error state */}
                  <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
                    <input
                      type="text"
                      defaultValue="2024-99-99"
                      className={css({
                        px: '3',
                        py: '1.5',
                        bg: 'surface.critical.subtle',
                        border: '1px solid',
                        borderColor: 'border.critical.default',
                        rounded: 'md',
                        fontSize: 'sm',
                        color: 'text.neutral.default',
                        outline: 'none',
                        w: '[160px]',
                      })}
                    />
                    <span className={css({ fontSize: 'xs', color: 'text.critical.default' })}>
                      올바른 날짜 형식이 아닙니다.
                    </span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <table className={css({ w: 'full', borderCollapse: 'collapse' })}>
                <thead>
                  <tr className={css({ bg: 'surface.neutral.muted' })}>
                    {(['사용자', '이벤트', '시간', '상태', '액션'] as const).map((col) => (
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
                  {/* Row 1 — 홍 / 로그인 성공 / positive (odd) */}
                  <tr className={css({ bg: 'surface.neutral.subtle' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'surface.neutral.default', color: 'text.neutral.default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          홍
                        </div>
                        <span className={css({ color: 'text.neutral.default', fontSize: 'sm' })}>홍길동</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>로그인 성공</td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>14:32</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                        <span className={css({ color: 'text.positive.default', fontSize: 'xs', fontWeight: 'medium' })}>
                          정상 처리됨
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'icon.neutral.muted', cursor: 'pointer',
                          _hover: { bg: 'surface.neutral.ghost' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 — 김 / 결제 실패 / critical (even) */}
                  <tr className={css({ bg: 'surface.neutral.ghost' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'surface.neutral.default', color: 'text.neutral.default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          김
                        </div>
                        <span className={css({ color: 'text.neutral.default', fontSize: 'sm' })}>김철수</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>결제 실패</td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>14:28</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <XCircle size={14} className={css({ color: 'icon.critical.default' })} />
                        <span className={css({ color: 'text.critical.default', fontSize: 'xs', fontWeight: 'medium' })}>
                          문제 발생
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'icon.neutral.muted', cursor: 'pointer',
                          _hover: { bg: 'surface.neutral.ghost' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 — 이 / 비밀번호 5회 오류 / warning (odd) */}
                  <tr className={css({ bg: 'surface.neutral.subtle' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'surface.neutral.default', color: 'text.neutral.default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          이
                        </div>
                        <span className={css({ color: 'text.neutral.default', fontSize: 'sm' })}>이영희</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>비밀번호 5회 오류</td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>14:21</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <AlertCircle size={14} className={css({ color: 'icon.warning.default' })} />
                        <span className={css({ color: 'text.warning.default', fontSize: 'xs', fontWeight: 'medium' })}>
                          주의 필요
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'icon.neutral.muted', cursor: 'pointer',
                          _hover: { bg: 'surface.neutral.ghost' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 — 박 / 회원가입 / positive (even) */}
                  <tr className={css({ bg: 'surface.neutral.ghost' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'surface.neutral.default', color: 'text.neutral.default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          박
                        </div>
                        <span className={css({ color: 'text.neutral.default', fontSize: 'sm' })}>박민수</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>회원가입</td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>14:15</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                        <span className={css({ color: 'text.positive.default', fontSize: 'xs', fontWeight: 'medium' })}>
                          정상 처리됨
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'icon.neutral.muted', cursor: 'pointer',
                          _hover: { bg: 'surface.neutral.ghost' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 5 — 시 / API 응답 지연 / warning (odd) */}
                  <tr className={css({ bg: 'surface.neutral.subtle' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'surface.neutral.default', color: 'text.neutral.default',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          시
                        </div>
                        <span className={css({ color: 'text.neutral.default', fontSize: 'sm' })}>시스템</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.default', fontSize: 'sm' })}>API 응답 지연</td>
                    <td className={css({ px: '5', py: '3', color: 'text.neutral.muted', fontSize: 'sm' })}>14:09</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <AlertCircle size={14} className={css({ color: 'icon.warning.default' })} />
                        <span className={css({ color: 'text.warning.default', fontSize: 'xs', fontWeight: 'medium' })}>
                          주의 필요
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'icon.neutral.muted', cursor: 'pointer',
                          _hover: { bg: 'surface.neutral.ghost' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── Notification Toggle Panel ── */}
            <div
              className={css({
                bg: 'surface.neutral.subtle',
                border: '1px solid',
                borderColor: 'border.neutral.subtle',
                rounded: 'xl',
                p: '5',
              })}
            >
              <h3
                className={css({
                  fontSize: 'base',
                  fontWeight: 'semibold',
                  color: 'text.neutral.default',
                  mb: '4',
                })}
              >
                알림 수신 설정
              </h3>
              <div className={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
                {/* 배포 알림 — ON */}
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                  <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>배포 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'fill.brand',
                      position: 'relative', cursor: 'pointer',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '5',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'surface.neutral.subtle',
                      })}
                    />
                  </div>
                </div>

                {/* 장애 알림 — ON */}
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                  <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>장애 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'fill.brand',
                      position: 'relative', cursor: 'pointer',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '5',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'surface.neutral.subtle',
                      })}
                    />
                  </div>
                </div>

                {/* 보안 알림 — OFF */}
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                  <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>보안 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'surface.neutral.default',
                      position: 'relative', cursor: 'pointer',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '1',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'surface.neutral.subtle',
                      })}
                    />
                  </div>
                </div>

                {/* 마케팅 알림 — OFF + disabled */}
                <div
                  className={css({
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    opacity: '[0.45]',
                  })}
                >
                  <span className={css({ fontSize: 'sm', color: 'text.neutral.subtle' })}>마케팅 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'surface.neutral.emphasis',
                      position: 'relative', cursor: '[not-allowed]',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '1',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'surface.neutral.subtle',
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bottom Notification Cards 3× ── */}
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '4',
                pb: '6',
              })}
            >
              {/* Positive card */}
              <div
                className={css({
                  bg: 'surface.positive.subtle',
                  border: '1px solid',
                  borderColor: 'border.positive.subtle',
                  rounded: 'xl',
                  p: '5',
                  display: 'flex',
                  flexDir: 'column',
                  gap: '3',
                })}
              >
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <CheckCircle2 size={22} className={css({ color: 'icon.positive.default' })} />
                  <button
                    className={css({
                      p: '1', rounded: 'sm', border: 'none', bg: 'transparent',
                      color: 'icon.positive.default', cursor: 'pointer',
                      _hover: { bg: 'surface.positive.ghost' },
                    })}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div>
                  <h4 className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'text.positive.default', mb: '1' })}>
                    배포 완료
                  </h4>
                  <p className={css({ fontSize: 'xs', color: 'text.positive.default' })}>
                    v2.4.1이 성공적으로 배포되었습니다.
                  </p>
                </div>
                <button
                  className={css({
                    px: '3', py: '1.5',
                    bg: 'transparent',
                    border: '1px solid',
                    borderColor: 'border.positive.default',
                    color: 'text.positive.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'surface.positive.ghost' },
                  })}
                >
                  배포 로그 보기
                </button>
              </div>

              {/* Critical card */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <XCircle size={22} className={css({ color: 'icon.critical.default' })} />
                  <button
                    className={css({
                      p: '1', rounded: 'sm', border: 'none', bg: 'transparent',
                      color: 'icon.critical.default', cursor: 'pointer',
                      _hover: { bg: 'surface.critical.ghost' },
                    })}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div>
                  <h4 className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'text.critical.default', mb: '1' })}>
                    연결 실패
                  </h4>
                  <p className={css({ fontSize: 'xs', color: 'text.critical.default' })}>
                    DB 연결이 실패했습니다.
                  </p>
                </div>
                <div className={css({ display: 'flex', gap: '2' })}>
                  <button
                    className={css({
                      flex: '1',
                      px: '3', py: '1.5',
                      bg: 'fill.critical',
                      border: 'none',
                      color: 'text.inverse',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { filter: '[brightness(0.88)]' },
                    })}
                  >
                    즉시 확인
                  </button>
                  <button
                    className={css({
                      px: '3', py: '1.5',
                      bg: 'transparent',
                      border: 'none',
                      color: 'text.critical.default',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.critical.ghost' },
                    })}
                  >
                    무시
                  </button>
                </div>
              </div>

              {/* Warning card */}
              <div
                className={css({
                  bg: 'surface.warning.subtle',
                  border: '1px solid',
                  borderColor: 'border.warning.subtle',
                  rounded: 'xl',
                  p: '5',
                  display: 'flex',
                  flexDir: 'column',
                  gap: '3',
                })}
              >
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <AlertTriangle size={22} className={css({ color: 'icon.warning.default' })} />
                  <button
                    className={css({
                      p: '1', rounded: 'sm', border: 'none', bg: 'transparent',
                      color: 'icon.warning.default', cursor: 'pointer',
                      _hover: { bg: 'surface.warning.ghost' },
                    })}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div>
                  <h4 className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'text.warning.default', mb: '1' })}>
                    용량 경고
                  </h4>
                  <p className={css({ fontSize: 'xs', color: 'text.warning.default' })}>
                    디스크 사용량이 85%입니다.
                  </p>
                </div>
                <button
                  className={css({
                    px: '3', py: '1.5',
                    bg: 'transparent',
                    border: '1px solid',
                    borderColor: 'border.warning.default',
                    color: 'text.warning.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'surface.warning.ghost' },
                  })}
                >
                  정리 시작
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
