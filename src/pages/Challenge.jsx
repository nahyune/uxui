import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../../css/challenge.css'

const CalImg = () => <img src="/img/calendar.png" alt="" style={{ width: '11px', height: '12px', flexShrink: 0, objectFit: 'contain', display: 'block' }} />
const TimeImg = () => <img src="/img/time.png" alt="" style={{ width: '12px', height: '12px', flexShrink: 0, objectFit: 'contain', display: 'block' }} />

const myCards = [
  { to: '/challenge-detail/cafe', dday: 'D-3', name: '카페 금지 챌린지 ☕', count: 83, date: '04.06(월) ~ 04.10(금)', img: '/img/challenge1_01.png', pct: 70 },
  { to: '#', dday: 'D-1', name: '소비 기록 챌린지 📝', count: 16, date: '04.06(월) ~ 04.10(금)', img: '/img/challenge1_02.png', pct: 90 },
  { to: '#', dday: 'D-3', name: '쇼핑 금지 챌린지 🛍', count: 52, date: '04.06(월) ~ 04.10(금)', img: '/img/challenge1_03.png', pct: 30 },
]

const joinCards = [
  { to: '/challenge-detail', img: '/img/challenge2_01.png', name: '무지출 챌린지 💸', count: 23, check: '1일 1회 소비 체크', date: '26.04.06(월) ~ 04.27(월)', done: false },
  { to: '#', img: '/img/challenge2_02.png', name: '쇼핑 금지 챌린지 🛍', count: 52, check: '1일 1회 소비 체크', date: '26.04.06(월) ~ 04.27(월)', done: true },
  { to: '#', img: '/img/challenge2_03.png', name: '소비 대신 걷기 🚶', count: 62, check: '1일 1회 소비 체크', date: '26.04.06(월) ~ 04.27(월)', done: false },
]

const slideData = [
  [
    { img: '/img/challenge3_01.png', sub: '이번 달 버텨볼까요?', name: '월급 전 생존 챌린지 💀', count: 32, dur: '14일 챌린지' },
    { img: '/img/challenge3_02.png', sub: '지갑 대신 냉장고 열기', name: '배달 끊기 챌린지 🛵', count: 28, dur: '7일 챌린지' },
    { img: '/img/challenge3_03.png', sub: '어제보다 덜 쓰기 도전', name: '소비 줄이기 챌린지', count: 53, dur: '한달 챌린지' },
    { img: '/img/challenge3_04.png', sub: '장바구니 잠시 멈춰!', name: '충동 소비 금지 챌린지', count: 16, dur: '5일 챌린지' },
  ],
  [
    { img: '/img/challenge3_05.png', sub: '누가 더 잘 참는지 볼까요?', name: '서로 감시 챌린지 👀', count: 12, dur: '한달 챌린지' },
    { img: '/img/challenge3_06.png', sub: '지금 안 사도 괜찮은지 체크', name: '장바구니 비우기 🛒', count: 45, dur: '5일 챌린지' },
    { img: '/img/challenge3_07.png', sub: '냉장고 털기 시작!', name: '집밥 챌린지 🍳', count: 30, dur: '7일 챌린지' },
    { img: '/img/challenge3_08.png', sub: '소비 없이 하루 보내기', name: '같이 무지출 도전!', count: 7, dur: '3일 챌린지' },
  ],
  [
    { img: '/img/challenge3_09.png', sub: '조금만 걸어볼까요?', name: '택시 금지 챌린지 🚕', count: 17, dur: '7일 챌린지' },
    { img: '/img/challenge3_10.png', sub: '오늘은 소비 제한 걸기', name: '하루 1번 절약 성공하기', count: 6, dur: '5일 챌린지' },
    { img: '/img/challenge3_11.png', sub: '만원의 행복', name: '하루 소비 1만원 💸 챌..', count: 75, dur: '9일 챌린지' },
    { img: '/img/challenge3_12.png', sub: '집에서 한 끼 해결!', name: '외식 줄이기 챌린지 🍱', count: 87, dur: '한달 챌린지' },
  ],
]

const OverSVG = () => (
  <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
    <rect x="1" y="1.67" width="8" height="7.33" rx="1" stroke="white" strokeWidth="1.1"/>
    <line x1="1" y1="4.33" x2="9" y2="4.33" stroke="white" strokeWidth="1.1"/>
    <line x1="3.33" y1="1" x2="3.33" y2="2.67" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
    <line x1="6.67" y1="1" x2="6.67" y2="2.67" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
)

const ChevronSVG = () => (
  <svg width="5" height="10" viewBox="0 0 5 10" fill="none" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 1 4 5 1 9"/>
  </svg>
)

export default function Challenge() {
  const [activeDot, setActiveDot] = useState(0)
  const comingRef = useRef(null)

  const goSlide = (i) => {
    if (!comingRef.current) return
    const w = (comingRef.current.firstChild?.offsetWidth || 396) + 16
    comingRef.current.scrollTo({ left: w * i, behavior: 'smooth' })
    setActiveDot(i)
  }

  const onScroll = () => {
    if (!comingRef.current) return
    const w = (comingRef.current.firstChild?.offsetWidth || 396) + 16
    setActiveDot(Math.round(comingRef.current.scrollLeft / w))
  }

  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
      </div>
      <main className="main-scroll">
        <div className="page-header">
          <h1 className="page-title">챌린지</h1>
        </div>

        {/* 나의 챌린지 */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">나의 챌린지</h2>
            <a href="#" className="more-link">모두보기 <ChevronSVG /></a>
          </div>
          <div className="hscroll">
            {myCards.map(c => (
              <Link to={c.to} className="my-card" key={c.name}>
                <div className="my-card-left">
                  <span className="dday-badge">종료까지 {c.dday}</span>
                  <div className="my-card-content">
                    <p className="my-card-name">{c.name}</p>
                    <div className="my-card-meta">
                      <p className="meta-row">🔥 {c.count}명 참여 중</p>
                      <p className="meta-row"><CalImg />{c.date}</p>
                    </div>
                  </div>
                </div>
                <div className="my-thumb"><img src={c.img} alt={c.name} /></div>
                <div className="my-progress-track">
                  <div className="my-progress-fill" style={{ width: `${c.pct}%` }} />
                </div>
                <span className="my-progress-pct">{c.pct}%</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 지금 참여하세요 */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">지금 참여하세요 🔥</h2>
            <a href="#" className="more-link">모두보기 <ChevronSVG /></a>
          </div>
          <div className="hscroll">
            {joinCards.map(c => (
              <Link to={c.to} className="join-card" key={c.name}>
                <div className="join-img">
                  <img src={c.img} alt={c.name} className="join-img-bg" />
                  <div className="join-overlay"><OverSVG />챌린지 모집 중</div>
                </div>
                <div className="join-body">
                  <div className="join-info">
                    <div className="join-info-top">
                      <p className="join-name">{c.name}</p>
                      <span className="participant-badge">
                        <img src="/img/person_02.png" width="12" height="12" alt="" style={{ flexShrink: 0, objectFit: 'contain', display: 'block' }} />
                        {c.count}명이 함께하고 있어요!
                      </span>
                    </div>
                    <div className="join-meta-list">
                      <p className="join-meta">
                        <img src="/img/icon_check01.png" alt="" style={{ width: '12.5px', height: '12.5px', flexShrink: 0, objectFit: 'contain', display: 'block' }} />
                        {c.check}
                      </p>
                      <p className="join-meta">
                        <img src="/img/calendar.png" alt="" style={{ width: '11.25px', height: '12.5px', flexShrink: 0, objectFit: 'contain', display: 'block' }} />
                        {c.date}
                      </p>
                    </div>
                  </div>
                  <span className={`join-btn${c.done ? ' done' : ''}`}>
                    {c.done ? '챌린지 참여 완료' : '챌린지 참여하기'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 곧 시작해요 */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">곧 시작해요! D-1 ⏰</h2>
          </div>
          <div className="hscroll coming-hscroll" ref={comingRef} onScroll={onScroll}>
            {slideData.map((cards, si) => (
              <div className="coming-slide" key={si}>
                <div className="coming-grid">
                  {cards.map(m => (
                    <div className="mini-card" key={m.name}>
                      <div className="mini-thumb"><img src={m.img} alt={m.name} /></div>
                      <div className="mini-text">
                        <div className="mini-title-group">
                          <p className="mini-sub">{m.sub}</p>
                          <p className="mini-name">{m.name}</p>
                        </div>
                        <div className="mini-stats">
                          <p className="mini-count">🔥 {m.count}명 참여 중</p>
                          <p className="mini-duration"><TimeImg />{m.dur}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="slide-dots">
            {slideData.map((_, i) => (
              <span key={i} className={`dot${activeDot === i ? ' active' : ''}`} onClick={() => goSlide(i)} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
      <div className="home-indicator" />
    </div>
  )
}
