import { css } from '@ds-token-test/styled-system-role-first/css';
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
          {/* Active: 대시보드 */}
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
              color: 'primary.fg.lowest',
              cursor: 'pointer',
              _hover: { bg: 'primary.fg.low', color: 'primary.bg.low' },
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
              color: 'primary.fg.lowest',
              cursor: 'pointer',
              _hover: { bg: 'primary.fg.low', color: 'primary.bg.low' },
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
              color: 'primary.fg.lowest',
              cursor: 'pointer',
              _hover: { bg: 'primary.fg.low', color: 'primary.bg.low' },
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
              color: 'primary.fg.lowest',
              cursor: 'pointer',
              _hover: { bg: 'primary.fg.low', color: 'primary.bg.low' },
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
            bg: 'inverse.bg.base',
            borderBottom: '1px solid',
            borderColor: 'primary.border.low',
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
                color: 'primary.text.low',
                textDecoration: 'none',
                _hover: { color: 'brand.text.base' },
              })}
            >
              홈
            </Link>
            <span className={css({ color: 'primary.fg.lowest' })}>/</span>
            <Link
              href="#"
              className={css({
                color: 'primary.text.low',
                textDecoration: 'none',
                _hover: { color: 'brand.text.base' },
              })}
            >
              모니터링
            </Link>
            <span className={css({ color: 'primary.fg.lowest' })}>/</span>
            <span
              className={css({
                color: 'primary.text.base',
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
                  color: 'primary.text.low',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  _hover: { bg: 'primary.ghostBg.base' },
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
                  bg: 'primary.fg.base',
                  color: 'inverse.text.base',
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
                  color: 'primary.text.low',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  _hover: { bg: 'primary.ghostBg.base' },
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
                    bg: 'error.bg.high',
                    color: 'error.text.base',
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
                  bg: 'primary.fg.base',
                  color: 'inverse.text.base',
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
                  color: 'primary.text.low',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  _hover: { bg: 'primary.ghostBg.base' },
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
                  bg: 'primary.fg.base',
                  color: 'inverse.text.base',
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
                w: 'px',
                h: '6',
                bg: 'primary.border.base',
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
                bg: 'brand.bg.high',
                color: 'inverse.text.base',
                fontSize: 'sm',
                fontWeight: 'medium',
                rounded: 'md',
                border: 'none',
                cursor: 'pointer',
                _hover: { bg: 'brand.bg.highest' },
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
                bg: 'brand.bg.high',
                color: 'inverse.text.base',
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
            bg: 'primary.bg.low',
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
            {/* Toast 1: Success */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '3',
                px: '4',
                py: '3',
                bg: 'success.bg.low',
                border: '1px solid',
                borderColor: 'success.border.low',
                rounded: 'lg',
                minW: '[300px]',
                maxW: '[420px]',
              })}
            >
              <CheckCircle2 size={18} className={css({ color: 'success.fg.base', flexShrink: 0 })} />
              <span className={css({ flex: '1', color: 'success.text.base', fontSize: 'sm' })}>
                배포 v2.4.1이 완료되었습니다.
              </span>
              <button
                className={css({
                  color: 'success.fg.base',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  p: '0.5',
                  rounded: 'sm',
                  _hover: { bg: 'success.ghostBg.base' },
                })}
              >
                <X size={14} />
              </button>
            </div>

            {/* Toast 2: Error */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '3',
                px: '4',
                py: '3',
                bg: 'error.bg.low',
                border: '1px solid',
                borderColor: 'error.border.low',
                rounded: 'lg',
                minW: '[300px]',
                maxW: '[420px]',
              })}
            >
              <XCircle size={18} className={css({ color: 'error.fg.base', flexShrink: 0 })} />
              <span className={css({ flex: '1', color: 'error.text.base', fontSize: 'sm' })}>
                DB 연결이 끊어졌습니다. 즉시 확인하세요.
              </span>
              <button
                className={css({
                  color: 'error.fg.base',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  p: '0.5',
                  rounded: 'sm',
                  _hover: { bg: 'error.ghostBg.base' },
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
                bg: 'info.bg.low',
                border: '1px solid',
                borderColor: 'info.border.low',
                rounded: 'lg',
                minW: '[300px]',
                maxW: '[420px]',
              })}
            >
              <Info size={18} className={css({ color: 'info.fg.base', flexShrink: 0 })} />
              <span className={css({ flex: '1', color: 'info.text.base', fontSize: 'sm' })}>
                시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
              </span>
              <button
                className={css({
                  color: 'info.fg.base',
                  bg: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  p: '0.5',
                  rounded: 'sm',
                  _hover: { bg: 'info.ghostBg.base' },
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
              {/* 총 사용자 — success */}
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
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium', mb: '1' })}>
                      총 사용자
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base' })}>
                      12,847
                    </p>
                  </div>
                  <TrendingUp size={22} className={css({ color: 'success.fg.base' })} />
                </div>
                <span
                  className={css({
                    display: 'inline-flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    px: '2',
                    py: '0.5',
                    bg: 'success.bg.low',
                    color: 'success.text.base',
                    border: '1px solid',
                    borderColor: 'success.border.low',
                    rounded: 'full',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                  })}
                >
                  +12%
                </span>
              </div>

              {/* 결제 실패 — error */}
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
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium', mb: '1' })}>
                      결제 실패
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base' })}>
                      24건
                    </p>
                  </div>
                  <AlertCircle size={22} className={css({ color: 'error.fg.base' })} />
                </div>
                <span
                  className={css({
                    display: 'inline-flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    px: '2',
                    py: '0.5',
                    bg: 'error.bg.low',
                    color: 'error.text.base',
                    border: '1px solid',
                    borderColor: 'error.border.low',
                    rounded: 'full',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                  })}
                >
                  +3건
                </span>
              </div>

              {/* 평균 응답시간 — success */}
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
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium', mb: '1' })}>
                      평균 응답시간
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base' })}>
                      142ms
                    </p>
                  </div>
                  <Zap size={22} className={css({ color: 'success.fg.base' })} />
                </div>
                <span
                  className={css({
                    display: 'inline-flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    px: '2',
                    py: '0.5',
                    bg: 'success.bg.low',
                    color: 'success.text.base',
                    border: '1px solid',
                    borderColor: 'success.border.low',
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
                  <div>
                    <p className={css({ fontSize: 'xs', color: 'primary.text.low', fontWeight: 'medium', mb: '1' })}>
                      미처리 민원
                    </p>
                    <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'primary.text.base' })}>
                      7건
                    </p>
                  </div>
                  <Clock size={22} className={css({ color: 'warning.fg.base' })} />
                </div>
                <span
                  className={css({
                    display: 'inline-flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    px: '2',
                    py: '0.5',
                    bg: 'warning.bg.low',
                    color: 'warning.text.base',
                    border: '1px solid',
                    borderColor: 'warning.border.low',
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
              {/* CPU 42% — success */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                  <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'primary.text.low' })}>
                    CPU 사용량
                  </p>
                  <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'primary.text.base' })}>42%</span>
                </div>
                <div className={css({ h: '2', bg: 'primary.bg.high', rounded: 'full', overflow: 'hidden' })}>
                  <div className={css({ h: 'full', bg: 'success.fg.base', rounded: 'full', w: '[42%]' })} />
                </div>
                <p className={css({ fontSize: 'xs', color: 'success.text.base' })}>정상 범위</p>
              </div>

              {/* Memory 78% — warning */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                  <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'primary.text.low' })}>
                    메모리 사용량
                  </p>
                  <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'primary.text.base' })}>78%</span>
                </div>
                <div className={css({ h: '2', bg: 'primary.bg.high', rounded: 'full', overflow: 'hidden' })}>
                  <div className={css({ h: 'full', bg: 'warning.fg.base', rounded: 'full', w: '[78%]' })} />
                </div>
                <p className={css({ fontSize: 'xs', color: 'warning.text.base' })}>주의 필요</p>
              </div>

              {/* Disk 91% — error */}
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
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                  <p className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'primary.text.low' })}>
                    디스크 사용량
                  </p>
                  <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'primary.text.base' })}>91%</span>
                </div>
                <div className={css({ h: '2', bg: 'primary.bg.high', rounded: 'full', overflow: 'hidden' })}>
                  <div className={css({ h: 'full', bg: 'error.fg.base', rounded: 'full', w: '[91%]' })} />
                </div>
                <p className={css({ fontSize: 'xs', color: 'error.text.base' })}>위험 수준</p>
              </div>
            </div>

            {/* ── Events Table ── */}
            <div
              className={css({
                bg: 'inverse.bg.base',
                border: '1px solid',
                borderColor: 'primary.border.low',
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
                  borderColor: 'primary.border.low',
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
                      color: 'brand.text.base',
                      bg: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid',
                      borderBottomColor: 'brand.border.high',
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
                      color: 'primary.fg.lowest',
                      bg: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      _hover: { color: 'primary.text.low' },
                    })}
                  >
                    미처리
                  </button>
                  <button
                    className={css({
                      px: '4',
                      py: '3',
                      fontSize: 'sm',
                      color: 'primary.fg.lowest',
                      bg: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      _hover: { color: 'primary.text.low' },
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
                      borderColor: 'primary.border.base',
                      color: 'primary.text.base',
                      fontSize: 'sm',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'primary.ghostBg.base' },
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
                      borderColor: 'primary.border.low',
                      color: 'primary.fg.lowest',
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
                  borderColor: 'primary.border.low',
                })}
              >
                {/* Tags */}
                <div className={css({ display: 'flex', gap: '2', flex: '1', flexWrap: 'wrap', alignItems: 'center' })}>
                  <button
                    className={css({
                      px: '3',
                      py: '1',
                      bg: 'brand.bg.high',
                      color: 'inverse.text.base',
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
                        bg: 'primary.bg.high',
                        color: 'primary.text.low',
                        fontSize: 'xs',
                        rounded: 'full',
                        border: 'none',
                        cursor: 'pointer',
                        _hover: { bg: 'primary.bg.highest' },
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
                      bg: 'primary.bg.base',
                      border: '1px solid',
                      borderColor: 'primary.border.base',
                      rounded: 'md',
                      fontSize: 'sm',
                      color: 'primary.text.base',
                      outline: 'none',
                      w: '[160px]',
                      _placeholder: { color: 'primary.fg.lowest' },
                      _focus: {
                        borderColor: 'brand.border.base',
                        outline: '2px solid',
                        outlineColor: 'brand.border.low',
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
                        bg: 'error.bg.low',
                        border: '1px solid',
                        borderColor: 'error.border.base',
                        rounded: 'md',
                        fontSize: 'sm',
                        color: 'primary.text.base',
                        outline: 'none',
                        w: '[160px]',
                      })}
                    />
                    <span className={css({ fontSize: 'xs', color: 'error.text.base' })}>
                      올바른 날짜 형식이 아닙니다.
                    </span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <table className={css({ w: 'full', borderCollapse: 'collapse' })}>
                <thead>
                  <tr className={css({ bg: 'primary.bg.low' })}>
                    {(['사용자', '이벤트', '시간', '상태', '액션'] as const).map((col) => (
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
                  {/* Row 1 — 홍 / 로그인 성공 / success (odd) */}
                  <tr className={css({ bg: 'inverse.bg.base' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'primary.bg.high', color: 'primary.fg.base',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          홍
                        </div>
                        <span className={css({ color: 'primary.text.base', fontSize: 'sm' })}>홍길동</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.base', fontSize: 'sm' })}>로그인 성공</td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.low', fontSize: 'sm' })}>14:32</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <CheckCircle2 size={14} className={css({ color: 'success.fg.base' })} />
                        <span className={css({ color: 'success.text.base', fontSize: 'xs', fontWeight: 'medium' })}>
                          정상 처리됨
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'primary.text.low', cursor: 'pointer',
                          _hover: { bg: 'primary.ghostBg.base' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 — 김 / 결제 실패 / error (even) */}
                  <tr className={css({ bg: 'primary.bg.low' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'primary.bg.high', color: 'primary.fg.base',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          김
                        </div>
                        <span className={css({ color: 'primary.text.base', fontSize: 'sm' })}>김철수</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.base', fontSize: 'sm' })}>결제 실패</td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.low', fontSize: 'sm' })}>14:28</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <XCircle size={14} className={css({ color: 'error.fg.base' })} />
                        <span className={css({ color: 'error.text.base', fontSize: 'xs', fontWeight: 'medium' })}>
                          문제 발생
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'primary.text.low', cursor: 'pointer',
                          _hover: { bg: 'primary.ghostBg.base' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 — 이 / 비밀번호 5회 오류 / warning (odd) */}
                  <tr className={css({ bg: 'inverse.bg.base' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'primary.bg.high', color: 'primary.fg.base',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          이
                        </div>
                        <span className={css({ color: 'primary.text.base', fontSize: 'sm' })}>이영희</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.base', fontSize: 'sm' })}>비밀번호 5회 오류</td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.low', fontSize: 'sm' })}>14:21</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <AlertCircle size={14} className={css({ color: 'warning.fg.base' })} />
                        <span className={css({ color: 'warning.text.base', fontSize: 'xs', fontWeight: 'medium' })}>
                          주의 필요
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'primary.text.low', cursor: 'pointer',
                          _hover: { bg: 'primary.ghostBg.base' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 — 박 / 회원가입 / success (even) */}
                  <tr className={css({ bg: 'primary.bg.low' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'primary.bg.high', color: 'primary.fg.base',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          박
                        </div>
                        <span className={css({ color: 'primary.text.base', fontSize: 'sm' })}>박민수</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.base', fontSize: 'sm' })}>회원가입</td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.low', fontSize: 'sm' })}>14:15</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <CheckCircle2 size={14} className={css({ color: 'success.fg.base' })} />
                        <span className={css({ color: 'success.text.base', fontSize: 'xs', fontWeight: 'medium' })}>
                          정상 처리됨
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'primary.text.low', cursor: 'pointer',
                          _hover: { bg: 'primary.ghostBg.base' },
                        })}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 5 — 시 / API 응답 지연 / warning (odd) */}
                  <tr className={css({ bg: 'inverse.bg.base' })}>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                        <div
                          className={css({
                            w: '8', h: '8', rounded: 'full',
                            bg: 'primary.bg.high', color: 'primary.fg.base',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 'xs', fontWeight: 'bold', flexShrink: 0,
                          })}
                        >
                          시
                        </div>
                        <span className={css({ color: 'primary.text.base', fontSize: 'sm' })}>시스템</span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.base', fontSize: 'sm' })}>API 응답 지연</td>
                    <td className={css({ px: '5', py: '3', color: 'primary.text.low', fontSize: 'sm' })}>14:09</td>
                    <td className={css({ px: '5', py: '3' })}>
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
                        <AlertCircle size={14} className={css({ color: 'warning.fg.base' })} />
                        <span className={css({ color: 'warning.text.base', fontSize: 'xs', fontWeight: 'medium' })}>
                          주의 필요
                        </span>
                      </div>
                    </td>
                    <td className={css({ px: '5', py: '3' })}>
                      <button
                        className={css({
                          p: '1.5', rounded: 'md', border: 'none', bg: 'transparent',
                          color: 'primary.text.low', cursor: 'pointer',
                          _hover: { bg: 'primary.ghostBg.base' },
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
                bg: 'inverse.bg.base',
                border: '1px solid',
                borderColor: 'primary.border.low',
                rounded: 'xl',
                p: '5',
              })}
            >
              <h3
                className={css({
                  fontSize: 'base',
                  fontWeight: 'semibold',
                  color: 'primary.text.base',
                  mb: '4',
                })}
              >
                알림 수신 설정
              </h3>
              <div className={css({ display: 'flex', flexDir: 'column', gap: '4' })}>
                {/* 배포 알림 — ON */}
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                  <span className={css({ fontSize: 'sm', color: 'primary.text.base' })}>배포 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'brand.bg.high',
                      position: 'relative', cursor: 'pointer',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '5',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'inverse.bg.base',
                      })}
                    />
                  </div>
                </div>

                {/* 장애 알림 — ON */}
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                  <span className={css({ fontSize: 'sm', color: 'primary.text.base' })}>장애 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'brand.bg.high',
                      position: 'relative', cursor: 'pointer',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '5',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'inverse.bg.base',
                      })}
                    />
                  </div>
                </div>

                {/* 보안 알림 — OFF */}
                <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                  <span className={css({ fontSize: 'sm', color: 'primary.text.base' })}>보안 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'primary.bg.highest',
                      position: 'relative', cursor: 'pointer',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '1',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'inverse.bg.base',
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
                  <span className={css({ fontSize: 'sm', color: 'primary.fg.lowest' })}>마케팅 알림</span>
                  <div
                    className={css({
                      w: '10', h: '6', rounded: 'full',
                      bg: 'primary.fg.lowest',
                      position: 'relative', cursor: '[not-allowed]',
                    })}
                  >
                    <div
                      className={css({
                        position: 'absolute', top: '1', left: '1',
                        w: '4', h: '4', rounded: 'full',
                        bg: 'inverse.bg.base',
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
              {/* Success card */}
              <div
                className={css({
                  bg: 'success.bg.low',
                  border: '1px solid',
                  borderColor: 'success.border.low',
                  rounded: 'xl',
                  p: '5',
                  display: 'flex',
                  flexDir: 'column',
                  gap: '3',
                })}
              >
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <CheckCircle2 size={22} className={css({ color: 'success.fg.base' })} />
                  <button
                    className={css({
                      p: '1', rounded: 'sm', border: 'none', bg: 'transparent',
                      color: 'success.fg.base', cursor: 'pointer',
                      _hover: { bg: 'success.ghostBg.base' },
                    })}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div>
                  <h4 className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'success.text.base', mb: '1' })}>
                    배포 완료
                  </h4>
                  <p className={css({ fontSize: 'xs', color: 'success.text.base' })}>
                    v2.4.1이 성공적으로 배포되었습니다.
                  </p>
                </div>
                <button
                  className={css({
                    px: '3', py: '1.5',
                    bg: 'transparent',
                    border: '1px solid',
                    borderColor: 'success.border.base',
                    color: 'success.text.base',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'success.ghostBg.base' },
                  })}
                >
                  배포 로그 보기
                </button>
              </div>

              {/* Error card */}
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
                  <XCircle size={22} className={css({ color: 'error.fg.base' })} />
                  <button
                    className={css({
                      p: '1', rounded: 'sm', border: 'none', bg: 'transparent',
                      color: 'error.fg.base', cursor: 'pointer',
                      _hover: { bg: 'error.ghostBg.base' },
                    })}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div>
                  <h4 className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'error.text.base', mb: '1' })}>
                    연결 실패
                  </h4>
                  <p className={css({ fontSize: 'xs', color: 'error.text.base' })}>
                    DB 연결이 실패했습니다.
                  </p>
                </div>
                <div className={css({ display: 'flex', gap: '2' })}>
                  <button
                    className={css({
                      flex: '1',
                      px: '3', py: '1.5',
                      bg: 'error.bg.high',
                      border: 'none',
                      color: 'inverse.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'error.bg.highest' },
                    })}
                  >
                    즉시 확인
                  </button>
                  <button
                    className={css({
                      px: '3', py: '1.5',
                      bg: 'transparent',
                      border: 'none',
                      color: 'error.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'error.ghostBg.base' },
                    })}
                  >
                    무시
                  </button>
                </div>
              </div>

              {/* Warning card */}
              <div
                className={css({
                  bg: 'warning.bg.low',
                  border: '1px solid',
                  borderColor: 'warning.border.low',
                  rounded: 'xl',
                  p: '5',
                  display: 'flex',
                  flexDir: 'column',
                  gap: '3',
                })}
              >
                <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                  <AlertTriangle size={22} className={css({ color: 'warning.fg.base' })} />
                  <button
                    className={css({
                      p: '1', rounded: 'sm', border: 'none', bg: 'transparent',
                      color: 'warning.fg.base', cursor: 'pointer',
                      _hover: { bg: 'warning.ghostBg.base' },
                    })}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div>
                  <h4 className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'warning.text.base', mb: '1' })}>
                    용량 경고
                  </h4>
                  <p className={css({ fontSize: 'xs', color: 'warning.text.base' })}>
                    디스크 사용량이 85%입니다.
                  </p>
                </div>
                <button
                  className={css({
                    px: '3', py: '1.5',
                    bg: 'transparent',
                    border: '1px solid',
                    borderColor: 'warning.border.base',
                    color: 'warning.text.base',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'warning.ghostBg.base' },
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
