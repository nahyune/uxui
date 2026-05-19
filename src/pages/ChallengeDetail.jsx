import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/challenge-detail.css'

export default function ChallengeDetail() {
  return (
    <div className="phone" style={{ background: '#F2F2F2' }}>
      <div className="status-bar" style={{ background: '#CBEB8D' }} />
      <main className="detail-scroll">
        <div className="detail-hero">
          <div className="detail-header">
            <Link to="/challenge" className="back-btn" aria-label="뒤로가기">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </Link>
            <button className="share-btn" aria-label="공유">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
            </button>
          </div>
          <div className="detail-hero-img-wrap">
            <img src="/img/Challenge Details_01.png" className="detail-hero-img" alt="무지출 챌린지" />
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-name-card">
            <h1 className="detail-title">무지출 챌린지 💸</h1>
            <div className="detail-divider" />
            <div className="detail-meta">
              <div className="detail-meta-row">
                <img src="/img/icon_check01.png" className="meta-icon meta-icon-check" alt="" />
                <span className="meta-label">조건</span>
                <span className="meta-value">1일 1회 소비 체크</span>
              </div>
              <div className="detail-meta-row">
                <img src="/img/calendar.png" className="meta-icon meta-icon-cal" alt="" />
                <span className="meta-label">기간</span>
                <span className="meta-value">26.04.06(월) ~ 04.27(월)</span>
                <span className="period-badge">5일간</span>
              </div>
            </div>
            <div className="participant-badge">
              <img src="/img/person_02.png" className="participant-icon" alt="" />
              총 23명이 함께하고 있어요!
            </div>
          </div>

          <section className="detail-intro">
            <h2 className="intro-title">챌린지 소개</h2>
            <div className="intro-box">
              <p className="intro-text">
                "오늘 하루, 돈 안 쓰고 버텨볼까요? 💸<br />
                혼자면 어렵지만, 같이 하면 생각보다<br />
                할 만해요 👀"
              </p>
            </div>
          </section>
        </div>
      </main>

      <div className="detail-bottom">
        <button className="detail-cta">챌린지 참여하기</button>
      </div>
    </div>
  )
}
