import '../styles/global.css'
import '../styles/pages.css'

const RADIUS = 90
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const DASH = `${(CIRCUMFERENCE * 0.7).toFixed(2)} ${CIRCUMFERENCE.toFixed(2)}`

export default function ChallengeDetailCafe() {
  return (
    <div className="phone cd-phone cd-phone-cafe">
      <div className="main-scroll cd-scroll">

        {/* ── 히어로 — 이미지가 좌우상 overflow, 피그마 489×388 / left-26 top-19 ── */}
        <div className="cdc-hero-block">
          <img src="/img/Challenge Details_02.png" className="cdc-hero-img-bg" alt="" />
          {/* 네비 — 이미지 위에 overlay */}
          <div className="cdc-hero-nav">
            <button className="pg-back" onClick={() => window.history.back()}>
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </button>
            <button className="pg-icon-btn">
              <img src="/img/share_btn.png" alt="공유" width="20" height="20" style={{ objectFit:'contain' }} />
            </button>
          </div>
        </div>

        {/* ── 흰 카드 — 이미지 하단만 덮음 ── */}
        <div className="cd-cards cdc-cards">

          {/* 챌린지 이름 카드 — h 216px */}
          <div className="cd-info-card">
            <h1 className="cd-title">카페 금지 챌린지 ☕</h1>
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

          {/* 챌린지 소개 — py 45px, gap 20px */}
          <div className="cd-section">
            <h2 className="cd-section-title">챌린지 소개</h2>
            <div className="cdc-intro-box">
              <p className="cdc-intro-text">
                "출근길, 점심 후… 계속 생각나는 커피<br />
                오늘만 한 번 안 가보는 건 어때요?<br />
                하루가 쌓이면 습관이 달라져요 ☕"
              </p>
              <div className="cdc-tag-row">
                <span className="cd-tag"># 카페 절약</span>
                <span className="cd-tag"># 습관 개선</span>
                <span className="cd-tag"># 5일 챌린지</span>
              </div>
            </div>
          </div>

          {/* 나의 참여도 — h 446px, absolute 내부 레이아웃 */}
          <div className="cd-section">
            <h2 className="cd-section-title">나의 참여도</h2>
            <div className="cdc-part-box">
              {/* 도넛 — 180×180, left 107.58, top 54.97 */}
              <div className="cdc-donut-pos">
                <svg viewBox="0 0 220 220" width="180" height="180">
                  <circle cx="110" cy="110" r={RADIUS} fill="none" stroke="#E0E0E0" strokeWidth="12" />
                  <circle cx="110" cy="110" r={RADIUS} fill="none" stroke="#F69A21" strokeWidth="12"
                    strokeLinecap="round" strokeDasharray={DASH} transform="rotate(-90 110 110)" />
                </svg>
                <span className="cdc-part-pct">70%</span>
              </div>
              {/* 동기 텍스트 — top 274 */}
              <p className="cdc-part-msg">🔥 오늘 소비체크하면 80% 달성!</p>
              {/* 소비 체크 행 — top 340, w 360, h 51 */}
              <div className="cdc-check-bar">
                <div className="cdc-check-bar-left">
                  <img src="/img/icon_check01.png" alt="" width="28" height="28" style={{ objectFit:'contain' }} />
                  <span className="cdc-check-label">나의 소비 체크</span>
                </div>
                <div className="cdc-check-bar-right">
                  <span className="cdc-count-done">7</span>
                  <span className="cdc-count-total">/10</span>
                  <span className="cdc-count-suffix">완료</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="cd-cta-area">
        <div className="cdc-cta-done">챌린지 참여 완료</div>
      </div>
    </div>
  )
}
