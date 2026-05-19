import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../styles/pages.css'

const CalImg = () => <img src="/img/calendar.png" alt="" style={{ width: '11px', height: '12px', flexShrink: 0, objectFit: 'contain' }} />
const TimeImg = () => <img src="/img/time.png" alt="" style={{ width: '12px', height: '12px', flexShrink: 0, objectFit: 'contain' }} />
const ChevRight = () => (
  <svg width="5" height="9" viewBox="0 0 5 9" fill="none" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round"><polyline points="1 1 4 4.5 1 8"/></svg>
)

const myCards = [
  { to: '/challenge-detail/cafe', dday: 'D-3', name: '카페 금지 챌린지 ☕', count: 83, date: '04.06(월) ~ 04.10(금)', img: '/img/challenge1_01.png', pct: 70 },
  { to: '#', dday: 'D-1', name: '소비 기록 챌린지 📝', count: 16, date: '04.06(월) ~ 04.10(금)', img: '/img/challenge1_02.png', pct: 90 },
  { to: '#', dday: 'D-3', name: '쇼핑 금지 챌린지 🛍', count: 52, date: '04.06(월) ~ 04.10(금)', img: '/img/challenge1_03.png', pct: 30 },
]
const joinCards = [
  { to: '/challenge-detail', img: '/img/challenge2_01.png', name: '무지출 챌린지 💸', count: 23, date: '26.04.06(월) ~ 04.27(월)', done: false },
  { to: '#', img: '/img/challenge2_02.png', name: '쇼핑 금지 챌린지 🛍', count: 52, date: '26.04.06(월) ~ 04.27(월)', done: true },
  { to: '#', img: '/img/challenge2_03.png', name: '소비 대신 걷기 🚶', count: 62, date: '26.04.06(월) ~ 04.27(월)', done: false },
]
const slideData = [
  [
    { img: '/img/challenge3_01.png', sub: '이번 달 버텨볼까요?', name: '월급 전 생존 챌린지 💀', count: 32, dur: '14일' },
    { img: '/img/challenge3_02.png', sub: '지갑 대신 냉장고 열기', name: '배달 끊기 챌린지 🛵', count: 28, dur: '7일' },
    { img: '/img/challenge3_03.png', sub: '어제보다 덜 쓰기', name: '소비 줄이기 챌린지', count: 53, dur: '한달' },
    { img: '/img/challenge3_04.png', sub: '장바구니 잠시 멈춰!', name: '충동 소비 금지 챌린지', count: 16, dur: '5일' },
  ],
  [
    { img: '/img/challenge3_05.png', sub: '누가 더 잘 참을까?', name: '서로 감시 챌린지 👀', count: 12, dur: '한달' },
    { img: '/img/challenge3_06.png', sub: '지금 안 사도 괜찮아', name: '장바구니 비우기 🛒', count: 45, dur: '5일' },
    { img: '/img/challenge3_07.png', sub: '냉장고 털기!', name: '집밥 챌린지 🍳', count: 30, dur: '7일' },
    { img: '/img/challenge3_08.png', sub: '소비 없이 하루', name: '같이 무지출 도전!', count: 7, dur: '3일' },
  ],
  [
    { img: '/img/challenge3_09.png', sub: '조금만 걸어볼까요?', name: '택시 금지 챌린지 🚕', count: 17, dur: '7일' },
    { img: '/img/challenge3_10.png', sub: '오늘 소비 제한', name: '하루 1번 절약하기', count: 6, dur: '5일' },
    { img: '/img/challenge3_11.png', sub: '만원의 행복', name: '하루 소비 1만원 💸', count: 75, dur: '9일' },
    { img: '/img/challenge3_12.png', sub: '집에서 한 끼!', name: '외식 줄이기 챌린지 🍱', count: 87, dur: '한달' },
  ],
]

export default function Challenge() {
  const [dot, setDot] = useState(0)
  const comingRef = useRef(null)

  const goSlide = (i) => {
    if (!comingRef.current) return
    const w = (comingRef.current.firstChild?.offsetWidth || 380) + 14
    comingRef.current.scrollTo({ left: w * i, behavior: 'smooth' })
    setDot(i)
  }

  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
      </div>

      <div className="main-scroll chal-scroll">
        <h1 className="scroll-title" style={{ paddingLeft: 16 }}>Challenge</h1>

        {/* 나의 챌린지 */}
        <div className="chal-section">
          <div className="pg-section-header">
            <h2 className="pg-section-title">나의 챌린지</h2>
            <a href="#" className="pg-more-link">모두보기 <ChevRight /></a>
          </div>
          <div className="chal-hscroll">
            {myCards.map(c => (
              <Link to={c.to} className="chal-my-card" key={c.name}>
                <div className="chal-my-left">
                  <span className="chal-dday">종료까지 {c.dday}</span>
                  <div className="chal-my-name-block">
                    <p className="chal-my-name">{c.name}</p>
                    <div className="chal-my-meta">
                      <p className="chal-meta-row">🔥 {c.count}명 참여 중</p>
                      <p className="chal-meta-row"><CalImg />{c.date}</p>
                    </div>
                  </div>
                </div>
                <div className="chal-my-thumb"><img src={c.img} alt={c.name} /></div>
                <div className="chal-my-progress-area">
                  <span className="chal-my-progress-pct">{c.pct}%</span>
                  <div className="chal-my-progress-track">
                    <div className="chal-my-progress-fill" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 지금 참여하세요 */}
        <div className="chal-section">
          <div className="pg-section-header">
            <h2 className="pg-section-title">지금 참여하세요 🔥</h2>
            <a href="#" className="pg-more-link">모두보기 <ChevRight /></a>
          </div>
          <div className="chal-hscroll">
            {joinCards.map(c => (
              <Link to={c.to} className="chal-join-card" key={c.name}>
                {/* 이미지 영역 — 피그마 193px */}
                <div className="chal-join-img">
                  <img src={c.img} alt={c.name} />
                  <div className="chal-join-overlay">
                    <svg width="11" height="11" viewBox="0 0 10 11" fill="none"><rect x="1" y="1.67" width="8" height="7.33" rx="1" stroke="white" strokeWidth="1.1"/><line x1="1" y1="4.33" x2="9" y2="4.33" stroke="white" strokeWidth="1.1"/><line x1="3.33" y1="1" x2="3.33" y2="2.67" stroke="white" strokeWidth="1.1" strokeLinecap="round"/><line x1="6.67" y1="1" x2="6.67" y2="2.67" stroke="white" strokeWidth="1.1" strokeLinecap="round"/></svg>
                    챌린지 모집 중
                  </div>
                </div>
                {/* 콘텐츠 영역 — 피그마 left:29.58px, top:213px */}
                <div className="chal-join-body">
                  {/* 이름+배지 — gap:5px */}
                  <div className="chal-join-top">
                    <p className="chal-join-name">{c.name}</p>
                    <span className="chal-p-badge">
                      <img src="/img/person_02.png" width="15" alt="" />
                      {c.count}명이 함께하고 있어요!
                    </span>
                  </div>
                  {/* 메타 행 — gap:1px */}
                  <div className="chal-join-meta-list">
                    <p className="chal-join-meta"><img src="/img/challenge_check.png" width="11" alt="" />1일 1회 소비 체크</p>
                    <p className="chal-join-meta"><CalImg />{c.date}</p>
                  </div>
                  {/* CTA 버튼 */}
                  <div className={`chal-join-btn${c.done ? ' done' : ''}`}>
                    {c.done ? '챌린지 참여 완료' : '챌린지 참여하기'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 곧 시작해요 */}
        <div className="chal-section">
          <div className="pg-section-header">
            <h2 className="pg-section-title">곧 시작해요! D-1 ⏰</h2>
          </div>
          <div className="chal-hscroll" ref={comingRef} onScroll={() => {
            if (!comingRef.current) return
            const w = (comingRef.current.firstChild?.offsetWidth || 380) + 14
            setDot(Math.round(comingRef.current.scrollLeft / w))
          }}>
            {slideData.map((cards, si) => (
              <div className="chal-coming-slide" key={si}>
                <div className="chal-coming-grid">
                  {cards.map(m => (
                    <div className="chal-mini-card" key={m.name}>
                      <div className="chal-mini-thumb"><img src={m.img} alt={m.name} /></div>
                      <div className="chal-mini-text">
                        <p className="chal-mini-sub">{m.sub}</p>
                        <p className="chal-mini-name">{m.name}</p>
                        <p className="chal-mini-count">🔥 {m.count}명</p>
                        <p className="chal-mini-dur"><TimeImg />{m.dur} 챌린지</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="chal-dots">
            {slideData.map((_, i) => (
              <span key={i} className={`chal-dot${dot === i ? ' active' : ''}`} onClick={() => goSlide(i)} />
            ))}
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  )
}
