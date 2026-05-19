import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/challenge-detail-cafe.css'

const C = 2 * Math.PI * 90
const dash = `${(C * 0.7).toFixed(2)} ${C.toFixed(2)}`

export default function ChallengeDetailCafe() {
  return (
    <div className="phone">
      <div className="sticky-header">
        <div className="status-bar" />
        <div className="nav-header">
          <Link to="/challenge" className="back-btn" aria-label="뒤로가기">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
              stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 1 1 9 9 17"/>
            </svg>
          </Link>
          <button className="share-btn" aria-label="공유">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none"
              stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10V18a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10"/>
              <polyline points="12 5 9 2 6 5"/>
              <line x1="9" y1="2" x2="9" y2="14"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="scroll-body">
        <div className="hero-img" />

        <div className="info-card">
          <h1 className="challenge-title">카페 금지 챌린지 ☕</h1>
          <hr className="divider" />
          <div className="info-rows">
            <div className="info-row">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span className="info-label">조건</span>
              <span className="info-value">1일 1회 소비 체크</span>
            </div>
            <div className="info-row">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="#686868" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="info-label">기간</span>
              <span className="info-value">26.04.06(월) ~ 04.27(월)</span>
              <span className="duration-badge">10일간</span>
            </div>
          </div>
          <div className="participant-badge">
            <svg width="15" height="13" viewBox="0 0 24 20" fill="none"
              stroke="#649900" strokeWidth="2" strokeLinecap="round">
              <path d="M17 19v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 19v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            총 83명이 함께하고 있어요!
          </div>
        </div>

        <div className="section-block">
          <h2 className="section-title">챌린지 소개</h2>
          <div className="text-card">
            <p className="intro-text">
              "출근길, 점심 후… 계속 생각나는 커피<br />
              오늘만 한 번 안 가보는 건 어때요?<br />
              하루가 쌓이면 습관이 달라져요 ☕"
            </p>
          </div>
        </div>

        <div className="section-block">
          <h2 className="section-title">나의 참여도</h2>
          <div className="progress-card">
            <div className="donut-wrap">
              <svg className="donut-svg" viewBox="0 0 220 220" width="220" height="220">
                <circle cx="110" cy="110" r="90" fill="none" stroke="#DDDDDD" strokeWidth="28"/>
                <circle cx="110" cy="110" r="90" fill="none" stroke="#F69A21" strokeWidth="28"
                  strokeLinecap="round" strokeDasharray={dash} strokeDashoffset="0"
                  transform="rotate(-90 110 110)"/>
              </svg>
              <span className="donut-pct">70%</span>
            </div>
            <p className="motivation-text">🔥 오늘 소비체크하면 80% 달성!</p>
            <div className="check-row">
              <div className="check-row-left">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
                    stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="10" cy="5" rx="6" ry="2.5"/>
                    <path d="M4 5v5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V5"/>
                    <polyline points="7.5 9.5 9.5 11.5 13.5 7.5"/>
                  </svg>
                </div>
                <span className="check-label">나의 소비 체크</span>
              </div>
              <div className="check-row-right">
                <span className="check-count">
                  <span className="count-done">7</span><span className="count-total">/10</span>
                </span>
                <span className="count-suffix">완료</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-spacer" />
      </div>

      <div className="cta-area">
        <div className="cta-btn-done">챌린지 참여 완료</div>
        <div className="home-indicator" />
      </div>
    </div>
  )
}
