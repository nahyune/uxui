import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import '../styles/ob-welcome.css'

export default function OnboardingWelcome() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const myConfetti = confetti.create(canvas, { resize: true, useWorker: false })

    // 첫 번째 폭죽 — 중앙 아래서 펑!
    myConfetti({
      particleCount: 80,
      spread: 90,
      origin: { x: 0.5, y: 0.65 },
      colors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF', '#FF9A3C'],
      ticks: 180,
      gravity: 0.8,
      scalar: 0.9,
    })

    // 0.3초 후 좌측
    const t1 = setTimeout(() => {
      myConfetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#FF6B6B', '#FFD93D', '#4D96FF', '#C77DFF'],
        ticks: 160,
        gravity: 0.9,
      })
    }, 300)

    // 0.3초 후 우측
    const t2 = setTimeout(() => {
      myConfetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#6BCB77', '#FFD93D', '#FF9A3C', '#4D96FF'],
        ticks: 160,
        gravity: 0.9,
      })
    }, 300)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="ob-welcome-phone">

      {/* 컨페티 캔버스 — 고양이 위에 오버레이 */}
      <canvas
        ref={canvasRef}
        className="ob-welcome-confetti"
      />

      <div className="ob-welcome-top">
        <p className="ob-welcome-title">가입을 환영합니다!</p>
      </div>

      <div className="ob-welcome-cat">
        <img src="/img/welcome_cat.png" alt="" />
      </div>

      <div className="ob-welcome-bottom">
        <Link to="/home" className="ob-welcome-btn">
          <span className="ob-welcome-btn-text">홈으로</span>
        </Link>
      </div>

    </div>
  )
}
