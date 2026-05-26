import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import '../styles/ob1-figma.css'
import '../styles/ob2-figma.css'

function useCountUp(target, duration = 900, delay = 500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      const start = Date.now()
      const tick = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(ease * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timer)
  }, [target, duration, delay])
  return count
}

export default function Onboarding02() {
  const navigate = useNavigate()
  const amount = useCountUp(142300, 900, 500)
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
    if (diff > 40) navigate('/onboarding/3')
    else if (diff < -40) navigate('/onboarding/1')
  }

  return (
    <div className="ob1-phone"
      ref={phoneRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >

      {/* 헤드라인 */}
      <div className="ob1-text">
        <p>기록하면 보이고,</p>
        <p>줄이면 달라져요</p>
      </div>

      {/* 배경 블롭 (연초록) */}
      <div className="ob2-blob" />

      {/* 고양이 이미지 */}
      <div className="ob2-cat-center">
        <img src="/img/on_02.png" alt="" />
      </div>

      {/* 필 — 식비 (bottom-right) */}
      <div className="ob2-pill ob2-pill-tl">
        <span className="ob1-dot ob1-dot-g" />
        식비 <strong>38%</strong>
      </div>

      {/* 필 — 교통 (top-right) */}
      <div className="ob2-pill ob2-pill-tr">
        <span className="ob1-dot ob2-dot-blue" />
        교통 <strong>18%</strong>
      </div>

      {/* 필 — 구독 (middle-right) */}
      <div className="ob2-pill ob2-pill-mr">
        <span className="ob1-dot ob2-dot-gray" />
        구독 <strong>12%</strong>
      </div>

      {/* 필 — 쇼핑 (bottom-left) */}
      <div className="ob2-pill ob2-pill-bl">
        <span className="ob1-dot ob1-dot-o" />
        쇼핑 <strong>15%</strong>
      </div>

      {/* 이번 달 절약 카드 (top-left) */}
      <div className="ob2-savings-card">
        <svg viewBox="0 0 44 44" className="ob2-donut-svg">
          <circle cx="22" cy="22" r="17" fill="none" stroke="#E0E0E0" strokeWidth="5.5" />
          <circle cx="22" cy="22" r="17" fill="none" stroke="#90D50F" strokeWidth="5.5"
            strokeDasharray="80 27" strokeLinecap="round"
            transform="rotate(-90 22 22)" />
        </svg>
        <div className="ob2-savings-info">
          <p className="ob2-savings-label">이번 달 절약</p>
          <p className="ob2-savings-amount">{amount.toLocaleString()}원</p>
        </div>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="ob-swipe-hint">
        <div className="ob-dots">
          <div className="ob-dot" />
          <div className="ob-dot active" />
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
