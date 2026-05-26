import { useNavigate } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import '../styles/ob1-figma.css'

export default function Onboarding01() {
  const navigate = useNavigate()
  const phoneRef = useRef(null)
  const startX = useRef(0)
  const dragging = useRef(false)

  useEffect(() => {
    if (window.innerWidth > 768) return
    const el = phoneRef.current
    const update = () => {
      const scale = Math.min(window.innerWidth / 430, window.innerHeight / 932)
      const left = (window.innerWidth - 430 * scale) / 2
      el.style.transform = `scale(${scale})`
      el.style.left = `${left}px`
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const onPointerDown = (e) => {
    startX.current = e.clientX
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerUp = (e) => {
    if (!dragging.current) return
    dragging.current = false
    const diff = startX.current - e.clientX
    if (diff > 40) navigate('/onboarding/2')
  }

  return (
    <div className="ob1-phone"
      ref={phoneRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >

      {/* 헤드라인 */}
      <div className="ob1-text">
        <p>
          <span>무심코 나가는 </span>
          <span className="ob1-accent">소비</span>
          <span>,</span>
        </p>
        <p>생각보다 많지 않나요?</p>
      </div>

      {/* 카드 — 메가커피 (top-left) */}
      <div className="ob1-card ob1-card-tl">
        <div className="ob1-icon ob1-icon-mega">☕</div>
        <div className="ob1-card-info">
          <p className="ob1-card-name">메가커피</p>
          <p className="ob1-card-amt">-4,500원</p>
        </div>
      </div>

      {/* 카드 — 카카오T (top-right) */}
      <div className="ob1-card ob1-card-tr">
        <div className="ob1-icon ob1-icon-kakao">🚕</div>
        <div className="ob1-card-info">
          <p className="ob1-card-name">카카오T</p>
          <p className="ob1-card-amt">-12,300원</p>
        </div>
      </div>

      {/* 배경 블롭 */}
      <div className="ob1-blob" />

      {/* 고양이 이미지 */}
      <div className="ob1-cat">
        <img src="/img/on_01.png" alt="" />
      </div>

      {/* 필 — 편의점 (bottom-left) */}
      <div className="ob1-pill ob1-pill-bl">
        <span className="ob1-dot ob1-dot-o" />
        편의점 <strong>3,200원</strong>
      </div>

      {/* 필 — 배달 (bottom-right) */}
      <div className="ob1-pill ob1-pill-br">
        <span className="ob1-dot ob1-dot-g" />
        배달 <strong>18,900원</strong>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="ob-swipe-hint">
        <div className="ob-dots">
          <div className="ob-dot active" />
          <div className="ob-dot" />
          <div className="ob-dot" />
        </div>
        <div className="ob-swipe-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
          밀어서 넘기기
        </div>
      </div>

      {/* 홈 인디케이터 */}
      <div className="ob1-indicator" />

    </div>
  )
}
