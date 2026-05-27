import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../styles/pages.css'

const stats = [
  { img: '/img/check_food.png', name: '식비', pct: 45 },
  { img: '/img/check_bus.png',  name: '교통', pct: 30 },
  { img: '/img/check_medical.png', name: '의료', pct: 25 },
  { img: '/img/check_shop.png', name: '쇼핑', pct: 15 },
]
const bars = [
  { h: 80,  day: '월' },
  { h: 106, day: '화' },
  { h: 145, day: '수' },
  { h: 125, day: '목' },
  { h: 158, day: '금' },
  { h: 208, day: '토', active: true },
  { h: 109, day: '일' },
]

const LEAVES = [
  { left: '62%', top: '8px',  delay: 0,    color: '#90D50F', size: 8 },
  { left: '75%', top: '5px',  delay: 0.1,  color: '#649900', size: 7 },
  { left: '53%', top: '14px', delay: 0.2,  color: '#B5E561', size: 9 },
  { left: '84%', top: '10px', delay: 0.05, color: '#76BC0D', size: 7 },
  { left: '68%', top: '18px', delay: 0.28, color: '#90D50F', size: 8 },
]

export default function Check() {
  const [statsAnim, setStatsAnim] = useState(false)
  const [barsAnim,  setBarsAnim]  = useState(false)
  const [leafKey,   setLeafKey]   = useState(0)
  const [showLeaves, setShowLeaves] = useState(false)
  const statsRef  = useRef(null)
  const weeklyRef = useRef(null)

  const burstLeaves = () => {
    setLeafKey(k => k + 1)
    setShowLeaves(true)
    setTimeout(() => setShowLeaves(false), 1800)
  }

  useEffect(() => {
    const observe = (el, cb, threshold = 0.2) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { cb(); obs.disconnect() } },
        { threshold }
      )
      obs.observe(el)
      return () => obs.disconnect()
    }
    const c1 = observe(statsRef.current,  () => setStatsAnim(true),  0.15)
    const c2 = observe(weeklyRef.current, () => setBarsAnim(true),   0.25)
    return () => { c1?.(); c2?.() }
  }, [])

  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
      </div>

      <div className="main-scroll check-scroll">
        <h1 className="scroll-title">Check</h1>
        {/* 오늘의 소비 카드 */}
        <div className="check-today-card">
          <div className="check-today-label">
            <img src="/img/today_leaf.png" className="check-today-leaf" alt="" />
            오늘의 소비
          </div>
          <p className="check-today-amount">118,830원</p>
          <span className="check-today-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#649900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
              <polyline points="17 18 23 18 23 12"/>
            </svg>
            훌륭해요! 예산보다 5% 절약 중
          </span>
          <button className="check-today-cat-btn" onClick={burstLeaves}>
            <img src="/img/today_cat.png" className="check-today-cat" alt="" />
          </button>
          {showLeaves && LEAVES.map((l, i) => (
            <div
              key={`${leafKey}-${i}`}
              className="check-leaf-move"
              style={{ left: l.left, top: l.top, animationDelay: `${l.delay}s` }}
            >
              <div
                className="check-leaf-spin"
                style={{ width: l.size, height: l.size * 1.5, background: l.color, animationDelay: `${l.delay}s` }}
              />
            </div>
          ))}
        </div>

        {/* 소비 올리기 */}
        <Link to="/add-spending" className="check-upload-btn">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="13" fill="rgba(255,255,255,0.35)"/>
            <line x1="13" y1="8" x2="13" y2="18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="8" y1="13" x2="18" y2="13" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          소비 올리기
        </Link>

        {/* 소비 통계 */}
        <div className="check-stats-card" ref={statsRef}>
          <div className="check-card-row">
            <span className="check-card-title">소비 통계</span>
            <a href="#" className="pg-more-link">더보기 ›</a>
          </div>
          <div className="check-stat-rows">
            {stats.map((s, i) => (
              <div className="check-stat-row" key={s.name}>
                <img src={s.img} className="check-stat-icon" alt={s.name} />
                <div className="check-stat-body">
                  <div className="check-stat-meta">
                    <span className="check-stat-name">{s.name}</span>
                    <span className="check-stat-pct">{s.pct}%</span>
                  </div>
                  <div className="check-progress-bar">
                    <div
                      className="check-progress-fill"
                      style={{
                        width: statsAnim ? `${s.pct}%` : '0%',
                        transition: `width 0.55s ease-out ${i * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 주간 리포트 */}
        <div className="check-weekly-card" ref={weeklyRef}>
          <div className="check-weekly-header">
            <p className="check-weekly-title">주간 리포트</p>
            <p className="check-weekly-sub">최근 7일 소비 패턴</p>
          </div>
          <div className="check-chart">
            {bars.map((b, i) => (
              <div className="check-bar-group" key={b.day}>
                <div
                  className={`check-bar${b.active ? ' active' : ''}`}
                  style={{
                    height: barsAnim ? `${b.h}px` : '0px',
                    transition: `height 0.5s ease-out ${i * 0.06}s`
                  }}
                />
                <span className="check-day-label">{b.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
