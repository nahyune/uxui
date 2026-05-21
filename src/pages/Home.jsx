import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/home-figma.css'

const challenges = [
  { img: '/img/home_shopping.png', name: '쇼핑 금지 챌린지 🛍', count: '52', date: '26.04.06(월) ~ 04.27(월)' },
  { img: '/img/home_money.png',    name: '하루 만원 챌린지 💸',  count: '63', date: '26.04.10(월) ~ 04.27(월)' },
  { img: '/img/home_rice.png',     name: '집밥 챌린지 🍳',       count: '45', date: '26.04.06(월) ~ 04.27(월)' },
  { img: '/img/home_coffee.png',   name: '카페 금지 챌린지 ☕',  count: '83', date: '26.04.10(월) ~ 04.30(월)' },
  { img: '/img/home_stop.png',     name: '무지출 챌린지 💪',     count: '37', date: '26.04.14(월) ~ 05.04(일)' },
]

export default function Home() {
  return (
    <div className="home-phone">
      <div className="home-scroll">

        {/* 초록 배경 */}
        <div className="home-green-bg" />

        <div className="home-content">

          {/* 로고 헤더 */}
          <div className="home-top">
            <div className="home-app-row">
              <img src="/img/logo_white.png" className="home-logo" alt="MOA" />
              <Link to="/notification" className="home-alert-btn">
                <img src="/img/notic.png" alt="알림" className="home-alert-img" />
              </Link>
            </div>
          </div>

          {/* 히어로 카드 — 피그마: 398×211px */}
          <div className="home-hero-card">
            {/* 좌측 텍스트: top39 left25 */}
            <div className="home-hero-left">
              <div className="home-savings-text">
                <p className="home-savings-label">이번 주 절약 금액</p>
                <p className="home-savings-amount">54,300원</p>
              </div>
              <div className="home-savings-badge">저번 주보다 12% 더 아꼈어요!</div>
            </div>
            {/* 우상단 배지: top28 left232 */}
            <div className="home-hero-top-badge">
              <img src="/img/home_star.png" alt="" width="15" height="14" style={{ objectFit:'contain' }} />
              <span>잘하고 있어요!</span>
            </div>
            {/* 고양이: top70 left232 */}
            <img src="/img/home_cat.png" alt="" className="home-hero-cat" />
          </div>

          {/* 소비 체크 카드 */}
          <div className="home-check-card">
            <div className="home-check-left">
              <div className="home-check-icon-wrap">
                <div className="home-check-circle" />
                <img src="/img/home_book.png" alt="" className="home-check-img" />
              </div>
              <div className="home-check-text">
                <p className="home-check-title">오늘 지출은 어땠나요?</p>
                <p className="home-check-sub">소비 체크하러 가기!</p>
              </div>
            </div>
            <Link to="/add-spending" className="home-check-btn">
              <img src="/img/check_plus.png" alt="" width="20" height="20" style={{ objectFit:'contain' }} />
              <span>체크하기</span>
            </Link>
          </div>

          {/* 챌린지 랭킹 카드 */}
          <div className="home-rank-card">
            {/* 트로피: left15 top12 */}
            <img src="/img/home_raking.png" alt="" className="home-rank-trophy" />
            {/* 텍스트: left98 top21 */}
            <div className="home-rank-info">
              <p className="home-rank-title">소비 기록 챌린지</p>
              <p className="home-rank-sub">
                내 순위 <span className="home-rank-highlight">10등</span> / 16명 중
              </p>
            </div>
            {/* 진행바: left98 top68 — 카드 직속 자식으로 배치해야 카드 기준 절대좌표 적용 */}
            <div className="home-rank-bar-wrap">
              <div className="home-rank-bar-track">
                <div className="home-rank-bar-fill" style={{ width: '77%' }} />
              </div>
              <span className="home-rank-pct">77%</span>
            </div>
          </div>

          {/* 인기 챌린지 */}
          <div className="home-challenge-section">
            <h2 className="home-section-title">지금 인기 챌린지 🔥</h2>
            <div className="home-challenge-list">
              {challenges.map((c, i) => (
                <div key={c.name}>
                  <article className="home-challenge-card">
                    <div className="home-thumb">
                      <img src={c.img} alt={c.name} />
                    </div>
                    <div className="home-info">
                      <p className="home-challenge-name">{c.name}</p>
                      <div className="home-p-badge">
                        <img src="/img/person_02.png" alt="" width="12" height="12" style={{ objectFit:'contain' }} />
                        <span>{c.count}명이 함께하고 있어요!</span>
                      </div>
                      <div className="home-meta-list">
                        <div className="home-meta">
                          <img src="/img/challenge_check.png" alt="" width="12" height="12" style={{ objectFit:'contain' }} />
                          <span>1일 1회 소비 체크</span>
                        </div>
                        <div className="home-meta">
                          <img src="/img/calendar.png" alt="" width="12" height="12" style={{ objectFit:'contain' }} />
                          <span>{c.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                  {i < challenges.length - 1 && <div className="home-divider" />}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <BottomNav />
    </div>
  )
}
