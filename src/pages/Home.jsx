import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/home-figma.css'

const CalSVG = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <rect x="1.5" y="2.5" width="12" height="11" rx="1.5" stroke="#686868" strokeWidth="1.3"/>
    <line x1="1.5" y1="6.5" x2="13.5" y2="6.5" stroke="#686868" strokeWidth="1.3"/>
    <line x1="5" y1="1.5" x2="5" y2="4" stroke="#686868" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="10" y1="1.5" x2="10" y2="4" stroke="#686868" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const challenges = [
  { img: '/img/image 207.png', name: '쇼핑 금지 챌린지 🛍', count: '52', check: '1일 1회 소비 체크', date: '26.04.06(월) ~ 04.27(월)' },
  { img: '/img/image 212.png', name: '하루 만원 챌린지 💸', count: '63', check: '1일 1회 소비 체크', date: '26.04.10(월) ~ 04.27(월)' },
  { img: '/img/image 213.png', name: '집밥 챌린지 🍳',      count: '45', check: '1일 1회 소비 체크', date: '26.04.06(월) ~ 04.27(월)' },
  { img: '/img/home_coffee.png', name: '카페 금지 챌린지 ☕', count: '83', check: '1일 1회 소비 체크', date: '26.04.10(월) ~ 04.30(월)' },
  { img: '/img/home_stop.png',   name: '무지출 챌린지 💪',   count: '37', check: '주 3회 무지출 달성', date: '26.04.14(월) ~ 05.04(일)' },
]

export default function Home() {
  return (
    <div className="home-phone">

      {/* 메인 스크롤 — 로고 포함 전체 스크롤 */}
      <div className="home-scroll">

        {/* 초록 배경 데코 */}
        <div className="home-green-bg" />

        <div className="home-content">

          {/* 로고 헤더 — 스크롤과 함께 올라감 */}
          <div className="home-app-row">
            <img src="/img/image 215.png" className="home-logo" alt="MOA" />
            <Link to="/notification" className="home-alert-btn" aria-label="알림">
              <img src="/img/notic.png" className="home-alert-img" alt="알림" />
            </Link>
          </div>

          {/* 히어로 카드 */}
          <div className="home-hero-card">
            <div className="hero-badge-gray">저번 주보다 12% 더 아꼈어요!</div>
            <div className="hero-cat-wrap">
              <img src="/img/image 141.png" className="hero-cat-img" alt="" />
            </div>
            <div className="hero-savings">
              <p className="hero-savings-label">이번 주 절약 금액</p>
              <p className="hero-savings-amount">54,300원</p>
            </div>
            <div className="hero-badge-green">저번 주보다 12% 더 아꼈어요!</div>
          </div>

          {/* 소비 체크 필 */}
          <Link to="/check" className="home-check-pill">
            <p className="home-check-pill-title">오늘 지출은 어땠나요?</p>
            <p className="home-check-pill-sub">소비 체크하러 가기!</p>
          </Link>

          {/* CTA 버튼 */}
          <Link to="/add-spending" className="home-cta-btn">
            <img src="/img/check_plus.png" className="home-cta-plus" alt="" />
            오늘 소비 체크하기
          </Link>

          {/* 인기 챌린지 */}
          <section className="home-challenge-section">
            <div className="home-section-title-wrap">
              <h2 className="home-section-title">지금 인기 챌린지 🔥</h2>
            </div>
            <div className="home-challenge-list">
              {challenges.map((c, i) => (
                <div key={c.name}>
                  <article className="home-challenge-card">
                    <div className="home-thumb">
                      <img src={c.img} alt={c.name} />
                    </div>
                    <div className="home-info">
                      <p className="home-challenge-name">{c.name}</p>
                      <div className="home-challenge-inner">
                        <div className="home-p-badge">
                          <img src="/img/person_02.png" className="home-p-badge-person" alt="" />
                          <span className="home-p-badge-text">{c.count}명이 함께하고 있어요!</span>
                        </div>
                        <div className="home-meta-list">
                          <div className="home-meta">
                            <img src="/img/icon_check01.png" className="home-meta-icon" alt="" />
                            <span>{c.check}</span>
                          </div>
                          <div className="home-meta">
                            <CalSVG />
                            <span>{c.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {i < challenges.length - 1 && <div className="home-divider" />}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <BottomNav />
      <div className="home-indicator" style={{ background: '#fff' }} />

    </div>
  )
}
