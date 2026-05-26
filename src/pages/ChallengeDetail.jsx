import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const handleShare = async (title) => {
  const data = { title, text: `MOA에서 ${title}에 함께해요!`, url: window.location.href }
  if (navigator.share) {
    try { await navigator.share(data) } catch {}
  } else {
    await navigator.clipboard.writeText(window.location.href)
    alert('링크가 복사되었습니다!')
  }
}

export default function ChallengeDetail() {
  const [joined, setJoined] = useState(false)

  return (
    <div className="phone cd-phone">
      <div className="main-scroll cd-scroll">

        {/* 히어로 블록 — 연두색, 카페금지와 동일한 nav 구조 */}
        <div className="cd-hero-block cd-hero-muji">
          <div className="cd-img-area">
            <img src="/img/Challenge Details_01.png" className="cd-detail-img" alt="무지출 챌린지" />
          </div>
          {/* nav — absolute, 카페금지 cdc-hero-nav와 동일 위치 */}
          <div className="cdc-hero-nav">
            <Link to="/challenge" className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
            <button className="pg-icon-btn" onClick={() => handleShare('무지출 챌린지')}>
              <img src="/img/share_btn.png" alt="공유" width="20" height="20" style={{ objectFit:'contain' }} />
            </button>
          </div>
        </div>

        {/* 흰 카드들 — 초록 배경 위로 오버랩 */}
        <div className="cd-cards cd-muji-cards">
          <div className="cd-info-card">
            <h1 className="cd-title">무지출 챌린지 💸</h1>
            <div className="cd-divider" />
            <div className="cd-meta">
              <div className="cd-meta-row">
                <img src="/img/challenge_check.png" width="12" height="12" alt="" style={{ objectFit:'contain' }} />
                <span className="cd-meta-label">조건</span>
                <span className="cd-meta-value">1일 1회 소비 체크</span>
              </div>
              <div className="cd-meta-row">
                <img src="/img/calendar.png" width="11" height="12" alt="" style={{ objectFit:'contain' }} />
                <span className="cd-meta-label">기간</span>
                <span className="cd-meta-value">26.04.06(월) ~ 04.27(월)</span>
                <span className="cd-period-badge">5일간</span>
              </div>
            </div>
            <div className="cd-p-badge">
              <img src="/img/person_green.png" width="13" height="12" alt="" style={{ objectFit:'contain' }} />
              <span>총 23명이 함께하고 있어요!</span>
            </div>
          </div>

          <div className="cd-section">
            <h2 className="cd-section-title">챌린지 소개</h2>
            <div className="cd-intro-box">
              <p className="cd-intro-text">
                "오늘 하루, 돈 안 쓰고 버텨볼까요? 💸<br />
                혼자면 어렵지만, 같이 하면 생각보다 할 만해요 👀"
              </p>
              <div className="cd-tags">
                <span className="cd-tag"># 소비 습관 개선</span>
                <span className="cd-tag"># 5일 챌린지</span>
                <span className="cd-tag"># 하루 1회 체크</span>
              </div>
            </div>
          </div>

          <div className="cd-section">
            <h2 className="cd-section-title">나의 참여도</h2>
            <div className="cd-participation-box">
              <div className="cd-dashed-circle">
                <span className="cd-dashed-text">참여 전</span>
              </div>
              <p className="cd-participation-msg">
                혼자보다 같이 하면 더 쉬워요<br />
                오늘부터 <span className="cd-highlight">가볍게 시작</span>해보세요!
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="cd-cta-area">
        {joined ? (
          <div className="cdc-cta-done">챌린지 참여 완료</div>
        ) : (
          <button className="cd-cta-btn" onClick={() => setJoined(true)}>
            챌린지 참여하기
          </button>
        )}
      </div>
    </div>
  )
}
