import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

export default function ChallengeDetail() {
  return (
    <div className="phone cd-phone">
      <div className="status-bar" style={{ background: '#CBEB8D' }} />
      <div className="main-scroll cd-scroll">
        <div className="cd-hero">
          <div className="cd-hero-header">
            <Link to="/challenge" className="pg-back">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </Link>
            <button className="pg-icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
            </button>
          </div>
          <div className="cd-hero-img-wrap">
            <img src="/img/Challenge Details_01.png" className="cd-hero-img" alt="무지출 챌린지" />
          </div>
        </div>

        <div className="cd-content">
          <div className="cd-info-card">
            <h1 className="cd-title">무지출 챌린지 💸</h1>
            <div className="cd-divider" />
            <div className="cd-meta">
              <div className="cd-meta-row">
                <img src="/img/icon_check01.png" width="15" alt="" />
                <span className="cd-meta-label">조건</span>
                <span>1일 1회 소비 체크</span>
              </div>
              <div className="cd-meta-row">
                <img src="/img/calendar.png" width="15" alt="" />
                <span className="cd-meta-label">기간</span>
                <span>26.04.06(월) ~ 04.27(월)</span>
                <span className="cd-period-badge">5일간</span>
              </div>
            </div>
            <div className="cd-p-badge">
              <img src="/img/person_02.png" width="16" alt="" />
              총 23명이 함께하고 있어요!
            </div>
          </div>

          <div className="cd-intro">
            <h2 className="cd-intro-title">챌린지 소개</h2>
            <div className="cd-intro-box">
              <p className="cd-intro-text">
                "오늘 하루, 돈 안 쓰고 버텨볼까요? 💸<br />
                혼자면 어렵지만, 같이 하면 생각보다<br />
                할 만해요 👀"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cd-cta-area">
        <button className="cd-cta-btn">챌린지 참여하기</button>
      </div>
    </div>
  )
}
