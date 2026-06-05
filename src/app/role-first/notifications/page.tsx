import { css } from '@ds-token-test/styled-system-role-first/css';
import {
  Bell,
  BellOff,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Zap,
  X,
} from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        h: '100vh',
        overflow: 'hidden',
        fontFamily: 'sans',
        fontSize: 'sm',
      })}
    >
      {/* ===== HEADER ===== */}
      <header
        className={css({
          bg: 'inverse.bg.base',
          borderBottom: '1px solid',
          borderColor: 'primary.border.low',
          px: '5',
          h: '14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <Bell size={20} className={css({ color: 'primary.fg.base', flexShrink: 0 })} />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'semibold',
              color: 'primary.text.base',
            })}
          >
            알림 센터
          </span>
        </div>

        <div className={css({ display: 'flex', alignItems: 'center', gap: '1' })}>
          <button
            className={css({
              px: '3',
              py: '1.5',
              bg: 'transparent',
              border: 'none',
              color: 'primary.text.low',
              fontSize: 'sm',
              rounded: 'md',
              cursor: 'pointer',
              _hover: { bg: 'primary.ghostBg.base' },
            })}
          >
            모두 읽음 처리
          </button>
          <button
            className={css({
              p: '1.5',
              bg: 'transparent',
              border: 'none',
              color: 'primary.fg.low',
              rounded: 'md',
              cursor: 'pointer',
              _hover: { bg: 'primary.ghostBg.base' },
            })}
          >
            <Settings size={18} />
          </button>
        </div>
      </header>

      {/* ===== TABS BAR ===== */}
      <div
        className={css({
          bg: 'inverse.bg.base',
          borderBottom: '1px solid',
          borderColor: 'primary.border.low',
          px: '5',
          display: 'flex',
          flexShrink: 0,
        })}
      >
        <button
          className={css({
            px: '4',
            py: '3',
            bg: 'transparent',
            border: 'none',
            borderBottom: '2px solid',
            borderColor: 'brand.border.high',
            color: 'brand.text.base',
            fontSize: 'sm',
            fontWeight: 'medium',
            cursor: 'pointer',
          })}
        >
          전체
        </button>
        <button
          className={css({
            px: '4',
            py: '3',
            bg: 'transparent',
            border: 'none',
            borderBottom: '2px solid',
            borderColor: 'transparent',
            color: 'primary.text.low',
            fontSize: 'sm',
            cursor: 'pointer',
            _hover: { color: 'primary.text.base' },
          })}
        >
          읽지 않음
        </button>
        <button
          className={css({
            px: '4',
            py: '3',
            bg: 'transparent',
            border: 'none',
            borderBottom: '2px solid',
            borderColor: 'transparent',
            color: 'primary.text.low',
            fontSize: 'sm',
            cursor: 'pointer',
            _hover: { color: 'primary.text.base' },
          })}
        >
          완료됨
        </button>
      </div>

      {/* ===== CONTENT AREA ===== */}
      <div className={css({ flex: '1', display: 'flex', overflow: 'hidden' })}>

        {/* ===== LEFT SIDEBAR ===== */}
        <aside
          className={css({
            w: '[200px]',
            flexShrink: 0,
            bg: 'bg.subtle',
            borderRight: '1px solid',
            borderColor: 'border.subtle',
            display: 'flex',
            flexDir: 'column',
            gap: '3',
            p: '4',
            overflowY: 'auto',
          })}
        >
          {/* Counter Card — 읽지 않음 */}
          <div
            className={css({
              bg: 'brand.bg.low',
              border: '1px solid',
              borderColor: 'brand.border.low',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <Bell size={15} className={css({ color: 'brand.fg.base' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'brand.text.base',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              8
            </span>
            <span className={css({ fontSize: 'xs', color: 'brand.text.base' })}>읽지 않음</span>
          </div>

          {/* Counter Card — 오류 */}
          <div
            className={css({
              bg: 'error.bg.low',
              border: '1px solid',
              borderColor: 'error.border.low',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <AlertCircle size={15} className={css({ color: 'error.fg.base' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'error.text.base',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              2
            </span>
            <span className={css({ fontSize: 'xs', color: 'error.text.base' })}>즉시 확인</span>
          </div>

          {/* Counter Card — 주의 */}
          <div
            className={css({
              bg: 'warning.bg.low',
              border: '1px solid',
              borderColor: 'warning.border.low',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <AlertTriangle size={15} className={css({ color: 'warning.fg.base' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'warning.text.base',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              3
            </span>
            <span className={css({ fontSize: 'xs', color: 'warning.text.base' })}>주의 필요</span>
          </div>

          {/* Divider */}
          <div className={css({ h: '[1px]', bg: 'border.subtle' })} />

          {/* Category Filters */}
          <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
            <button
              className={css({
                px: '3',
                py: '1.5',
                bg: 'brand.fg.base',
                color: 'inverse.text.base',
                fontSize: 'sm',
                fontWeight: 'medium',
                rounded: 'full',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              전체
            </button>
            {['시스템', '결제', '배포', '보안', '마케팅'].map((cat) => (
              <button
                key={cat}
                className={css({
                  px: '3',
                  py: '1.5',
                  bg: 'primary.ghostBg.base',
                  color: 'primary.text.low',
                  fontSize: 'sm',
                  rounded: 'full',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  _hover: { bg: 'primary.ghostBg.high', color: 'primary.text.base' },
                })}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* ===== NOTIFICATION LIST ===== */}
        <main
          className={css({
            flex: '1',
            overflowY: 'auto',
            bg: 'bg.subtle',
            p: '4',
            display: 'flex',
            flexDir: 'column',
            gap: '3',
          })}
        >

          {/* ── 알림 1: 정상 완료, 읽지 않음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'brand.bg.low',
                borderLeft: '4px solid',
                borderColor: 'success.fg.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <CheckCircle2
                size={20}
                className={css({ color: 'success.fg.base', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'primary.text.base',
                  })}
                >
                  배포 v2.4.1 완료
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>방금 전</span>
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
                    완료됨
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: '1px solid',
                      borderColor: 'success.border.base',
                      color: 'success.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'success.bg.low' },
                    })}
                  >
                    배포 로그 보기
                  </button>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 알림 2: 심각한 오류, 읽지 않음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'brand.bg.low',
                borderLeft: '4px solid',
                borderColor: 'error.fg.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <XCircle
                size={20}
                className={css({ color: 'error.fg.base', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'error.text.base',
                  })}
                >
                  DB 연결 오류
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>3분 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'error.fg.base',
                      color: 'inverse.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    즉시 확인
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'error.fg.base',
                      border: 'none',
                      color: 'inverse.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { filter: '[brightness(0.88)]' },
                    })}
                  >
                    상세 보기
                  </button>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: 'none',
                      color: 'primary.text.low',
                      fontSize: 'xs',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'primary.ghostBg.base' },
                    })}
                  >
                    무시
                  </button>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 알림 3: 주의 필요, 읽지 않음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'brand.bg.low',
                borderLeft: '4px solid',
                borderColor: 'warning.fg.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <AlertTriangle
                size={20}
                className={css({ color: 'warning.fg.base', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'primary.text.base',
                  })}
                >
                  메모리 사용량 경고
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>15분 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'warning.bg.low',
                      border: '1px solid',
                      borderColor: 'warning.border.low',
                      color: 'warning.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    주의
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: '1px solid',
                      borderColor: 'warning.border.base',
                      color: 'warning.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'warning.bg.low' },
                    })}
                  >
                    리소스 모니터 열기
                  </button>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 알림 4: 일반 안내, 읽지 않음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'brand.bg.low',
                borderLeft: '4px solid',
                borderColor: 'info.fg.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <Info
                size={20}
                className={css({ color: 'info.fg.base', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'primary.text.base',
                  })}
                >
                  시스템 점검 예정
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>1시간 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'info.bg.low',
                      border: '1px solid',
                      borderColor: 'info.border.low',
                      color: 'info.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    안내
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: '1px solid',
                      borderColor: 'info.border.base',
                      color: 'info.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'info.bg.low' },
                    })}
                  >
                    일정 확인
                  </button>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 알림 5: 브랜드/기능, 읽지 않음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'brand.bg.low',
                borderLeft: '4px solid',
                borderColor: 'brand.fg.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <Zap
                size={20}
                className={css({ color: 'brand.fg.base', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'primary.text.base',
                  })}
                >
                  새 기능 출시
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>2시간 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'brand.fg.base',
                      color: 'inverse.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    새 기능
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'brand.fg.base',
                      border: 'none',
                      color: 'inverse.text.base',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { filter: '[brightness(0.88)]' },
                    })}
                  >
                    지금 확인
                  </button>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 알림 6: 정상 완료, 읽음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'inverse.bg.base',
                borderLeft: '4px solid',
                borderColor: 'success.border.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <CheckCircle2
                size={20}
                className={css({ color: 'success.fg.low', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'primary.text.low',
                  })}
                >
                  결제 처리 완료
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>어제</span>
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
                      opacity: '[0.7]',
                    })}
                  >
                    완료됨
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: 'none',
                      color: 'primary.text.low',
                      fontSize: 'xs',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'primary.ghostBg.base' },
                    })}
                  >
                    영수증 보기
                  </button>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 알림 7: 주의 필요, 읽음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'inverse.bg.base',
                borderLeft: '4px solid',
                borderColor: 'warning.border.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <AlertCircle
                size={20}
                className={css({ color: 'warning.fg.low', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'primary.text.low',
                  })}
                >
                  API 응답 지연 감지
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>2일 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'primary.ghostBg.base',
                      border: '1px solid',
                      borderColor: 'primary.border.low',
                      color: 'primary.text.low',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    처리됨
                  </span>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 알림 8: 일반 안내, 읽음 ── */}
          <div className={css({ rounded: 'lg', overflow: 'hidden' })}>
            <div
              className={css({
                bg: 'inverse.bg.base',
                borderLeft: '4px solid',
                borderColor: 'info.border.base',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <Info
                size={20}
                className={css({ color: 'info.fg.low', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'primary.text.low',
                  })}
                >
                  약관 업데이트 안내
                </p>
                <p className={css({ fontSize: 'sm', color: 'primary.text.low' })}>
                  서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>3일 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'primary.ghostBg.base',
                      border: '1px solid',
                      borderColor: 'primary.border.low',
                      color: 'primary.text.low',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'full',
                    })}
                  >
                    안내
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: 'none',
                      color: 'primary.text.low',
                      fontSize: 'xs',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'primary.ghostBg.base' },
                    })}
                  >
                    약관 보기
                  </button>
                </div>
              </div>
              <button
                className={css({
                  p: '1',
                  bg: 'transparent',
                  border: 'none',
                  color: 'primary.fg.lowest',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'primary.ghostBg.base' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 빈 상태 ── */}
          <div>
            <div className={css({ h: '[1px]', bg: 'border.subtle', my: '2' })} />
            <div
              className={css({
                bg: 'bg.muted',
                border: '1px solid',
                borderColor: 'border.subtle',
                rounded: 'lg',
                p: '8',
                display: 'flex',
                flexDir: 'column',
                alignItems: 'center',
                gap: '2',
              })}
            >
              <BellOff size={24} className={css({ color: 'primary.fg.lowest' })} />
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: 'primary.text.low',
                })}
              >
                모든 알림을 확인했습니다
              </p>
              <p className={css({ fontSize: 'xs', color: 'primary.text.lowest' })}>
                새로운 알림이 없습니다
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
