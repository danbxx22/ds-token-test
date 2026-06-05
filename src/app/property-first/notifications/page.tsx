import { css } from '@ds-token-test/styled-system/css';
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
          bg: 'surface.neutral.subtle',
          borderBottom: '1px solid',
          borderColor: 'border.neutral.subtle',
          px: '5',
          h: '14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <Bell size={20} className={css({ color: 'icon.neutral.default', flexShrink: 0 })} />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'semibold',
              color: 'text.neutral.default',
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
              color: 'text.neutral.muted',
              fontSize: 'sm',
              rounded: 'md',
              cursor: 'pointer',
              _hover: { bg: 'surface.neutral.ghost' },
            })}
          >
            모두 읽음 처리
          </button>
          <button
            className={css({
              p: '1.5',
              bg: 'transparent',
              border: 'none',
              color: 'icon.neutral.muted',
              rounded: 'md',
              cursor: 'pointer',
              _hover: { bg: 'surface.neutral.ghost' },
            })}
          >
            <Settings size={18} />
          </button>
        </div>
      </header>

      {/* ===== TABS BAR ===== */}
      <div
        className={css({
          bg: 'surface.neutral.subtle',
          borderBottom: '1px solid',
          borderColor: 'border.neutral.subtle',
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
            borderColor: 'border.brand.default',
            color: 'text.brand.default',
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
            color: 'text.neutral.muted',
            fontSize: 'sm',
            cursor: 'pointer',
            _hover: { color: 'text.neutral.default' },
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
            color: 'text.neutral.muted',
            fontSize: 'sm',
            cursor: 'pointer',
            _hover: { color: 'text.neutral.default' },
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
            bg: 'surface.neutral.subtle',
            borderRight: '1px solid',
            borderColor: 'border.neutral.subtle',
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
              bg: 'surface.brand.subtle',
              border: '1px solid',
              borderColor: 'border.brand.default',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <Bell size={15} className={css({ color: 'icon.brand.default' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'text.brand.default',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              8
            </span>
            <span className={css({ fontSize: 'xs', color: 'text.brand.default' })}>읽지 않음</span>
          </div>

          {/* Counter Card — 오류 */}
          <div
            className={css({
              bg: 'surface.critical.subtle',
              border: '1px solid',
              borderColor: 'border.critical.subtle',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <AlertCircle size={15} className={css({ color: 'icon.critical.default' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'text.critical.default',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              2
            </span>
            <span className={css({ fontSize: 'xs', color: 'text.critical.default' })}>즉시 확인</span>
          </div>

          {/* Counter Card — 주의 */}
          <div
            className={css({
              bg: 'surface.warning.subtle',
              border: '1px solid',
              borderColor: 'border.warning.subtle',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <AlertTriangle size={15} className={css({ color: 'icon.warning.default' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'text.warning.default',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              3
            </span>
            <span className={css({ fontSize: 'xs', color: 'text.warning.default' })}>주의 필요</span>
          </div>

          {/* Divider */}
          <div
            className={css({
              h: '[1px]',
              bg: 'border.neutral.subtle',
            })}
          />

          {/* Category Filters */}
          <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
            <button
              className={css({
                px: '3',
                py: '1.5',
                bg: 'fill.brand',
                color: 'text.inverse',
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
                  bg: 'surface.neutral.ghost',
                  color: 'text.neutral.muted',
                  fontSize: 'sm',
                  rounded: 'full',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  _hover: { bg: 'surface.neutral.default', color: 'text.neutral.default' },
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
            bg: 'surface.neutral.subtle',
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
                bg: 'surface.brand.subtle',
                borderLeft: '4px solid',
                borderColor: 'fill.positive',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <CheckCircle2
                size={20}
                className={css({ color: 'icon.positive.default', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'text.neutral.default',
                  })}
                >
                  배포 v2.4.1 완료
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>방금 전</span>
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
                    완료됨
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: '1px solid',
                      borderColor: 'border.positive.default',
                      color: 'text.positive.default',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.positive.subtle' },
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.brand.subtle',
                borderLeft: '4px solid',
                borderColor: 'fill.critical',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <XCircle
                size={20}
                className={css({ color: 'icon.critical.default', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'text.critical.default',
                  })}
                >
                  DB 연결 오류
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>3분 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'fill.critical',
                      color: 'text.inverse',
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
                    상세 보기
                  </button>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'transparent',
                      border: 'none',
                      color: 'text.neutral.muted',
                      fontSize: 'xs',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.neutral.ghost' },
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.brand.subtle',
                borderLeft: '4px solid',
                borderColor: 'fill.warning',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <AlertTriangle
                size={20}
                className={css({ color: 'icon.warning.default', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'text.neutral.default',
                  })}
                >
                  메모리 사용량 경고
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>15분 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'surface.warning.subtle',
                      border: '1px solid',
                      borderColor: 'border.warning.subtle',
                      color: 'text.warning.default',
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
                      borderColor: 'border.warning.default',
                      color: 'text.warning.default',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.warning.subtle' },
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.brand.subtle',
                borderLeft: '4px solid',
                borderColor: 'fill.info',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <Info
                size={20}
                className={css({ color: 'icon.info.default', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'text.neutral.default',
                  })}
                >
                  시스템 점검 예정
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>1시간 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'surface.info.subtle',
                      border: '1px solid',
                      borderColor: 'border.info.subtle',
                      color: 'text.info.default',
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
                      borderColor: 'border.info.default',
                      color: 'text.info.default',
                      fontSize: 'xs',
                      fontWeight: 'medium',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.info.subtle' },
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.brand.subtle',
                borderLeft: '4px solid',
                borderColor: 'fill.brand',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <Zap
                size={20}
                className={css({ color: 'icon.brand.default', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'semibold',
                    color: 'text.neutral.default',
                  })}
                >
                  새 기능 출시
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>2시간 전</span>
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
                    새 기능
                  </span>
                  <button
                    className={css({
                      px: '2.5',
                      py: '1',
                      bg: 'fill.brand',
                      border: 'none',
                      color: 'text.inverse',
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.neutral.subtle',
                borderLeft: '4px solid',
                borderColor: 'border.positive.default',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <CheckCircle2
                size={20}
                className={css({ color: 'icon.positive.muted', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'text.neutral.muted',
                  })}
                >
                  결제 처리 완료
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>어제</span>
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
                      color: 'text.neutral.muted',
                      fontSize: 'xs',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.neutral.ghost' },
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.neutral.subtle',
                borderLeft: '4px solid',
                borderColor: 'border.warning.default',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <AlertCircle
                size={20}
                className={css({ color: 'icon.warning.muted', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'text.neutral.muted',
                  })}
                >
                  API 응답 지연 감지
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>2일 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'surface.neutral.ghost',
                      border: '1px solid',
                      borderColor: 'border.neutral.subtle',
                      color: 'text.neutral.muted',
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
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
                bg: 'surface.neutral.subtle',
                borderLeft: '4px solid',
                borderColor: 'border.info.default',
                p: '4',
                display: 'flex',
                gap: '3',
              })}
            >
              <Info
                size={20}
                className={css({ color: 'icon.info.muted', flexShrink: 0, mt: '0.5' })}
              />
              <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
                <p
                  className={css({
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'text.neutral.muted',
                  })}
                >
                  약관 업데이트 안내
                </p>
                <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
                  서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
                </p>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
                  <span className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>3일 전</span>
                  <span
                    className={css({
                      px: '2',
                      py: '0.5',
                      bg: 'surface.neutral.ghost',
                      border: '1px solid',
                      borderColor: 'border.neutral.subtle',
                      color: 'text.neutral.muted',
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
                      color: 'text.neutral.muted',
                      fontSize: 'xs',
                      rounded: 'md',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.neutral.ghost' },
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
                  color: 'icon.neutral.subtle',
                  rounded: 'md',
                  cursor: 'pointer',
                  flexShrink: 0,
                  alignSelf: 'flex-start',
                  _hover: { bg: 'surface.neutral.ghost' },
                })}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── 빈 상태 ── */}
          <div>
            <div className={css({ h: '[1px]', bg: 'border.neutral.subtle', my: '2' })} />
            <div
              className={css({
                bg: 'surface.neutral.muted',
                border: '1px solid',
                borderColor: 'border.neutral.subtle',
                rounded: 'lg',
                p: '8',
                display: 'flex',
                flexDir: 'column',
                alignItems: 'center',
                gap: '2',
              })}
            >
              <BellOff size={24} className={css({ color: 'icon.neutral.subtle' })} />
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: 'text.neutral.muted',
                })}
              >
                모든 알림을 확인했습니다
              </p>
              <p className={css({ fontSize: 'xs', color: 'text.neutral.subtle' })}>
                새로운 알림이 없습니다
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
