import { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

function useDragScroll() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let isDown = false, startX = 0, scrollLeft = 0, hasDragged = false
    const onMouseDown = e => { isDown = true; hasDragged = false; startX = e.pageX; scrollLeft = el.scrollLeft; el.style.cursor = 'grabbing'; el.style.userSelect = 'none'; e.preventDefault() }
    const onMouseUp = () => { isDown = false; el.style.cursor = 'grab'; el.style.userSelect = '' }
    const onMouseMove = e => { if (!isDown) return; e.preventDefault(); const dx = e.pageX - startX; if (Math.abs(dx) > 3) hasDragged = true; el.scrollLeft = scrollLeft - dx }
    const onClick = e => { if (hasDragged) { e.preventDefault(); e.stopPropagation(); hasDragged = false } }
    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('click', onClick, true)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove, { passive: false })
    el.style.cursor = 'grab'
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('click', onClick, true)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  return ref
}

const spendCards = [
  { count: 6,  items: [{ l:'☕ 스타벅스', a:'6,100원' }, { l:'🍲 용가훠궈', a:'18,900원' }, { l:'💳 넷플릭스', a:'6,750원' }] },
  { count: 4,  items: [{ l:'💊 약국',     a:'3,500원' }, { l:'🎧 애플뮤직', a:'8,900원' },  { l:'🧺 다이소',  a:'1,000원' }] },
  { count: 7,  items: [{ l:'🍿 CGV',      a:'15,000원'}, { l:'📦 쿠팡',    a:'9,800원' },   { l:'☕ 메가커피', a:'3,500원' }] },
]

const avatarColors = {
  '하나':            '#FFD54F',
  '텀블러쓰기3일차': '#FFB74D',
  '민지':            '#F48FB1',
  '라떼말고물':      '#A8D8A8',
}
const members = [
  { name:'하나', isMe:false }, { name:'텀블러쓰기3일차' }, { name:'민지' }, { name:'라떼말고물' },
]

const ChevRight = () => (
  <svg width="5" height="10" viewBox="0 0 5 10" fill="none" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round">
    <polyline points="1 1 4 5 1 9"/>
  </svg>
)

export default function ChattingChallengeSetting() {
  const navigate = useNavigate()
  const sliderRef = useDragScroll()

  return (
    <div className="phone">

      {/* 헤더 */}
      <div className="ct-header">
        <div className="status-bar" />
        <div className="ct-header-nav">
          <div className="ct-header-left">
            <Link to="/chatting-challenge" className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
            <span className="css-title">설정</span>
          </div>
          <div className="ct-header-right">
            <button className="pg-icon-btn">
              <img src="/img/setting_icon.png" alt="알림" width="21" height="23" style={{ objectFit:'contain' }} />
            </button>
            <button className="pg-icon-btn">
              <img src="/img/chat_setting.png" alt="설정" width="24" height="24" style={{ objectFit:'contain' }} />
            </button>
          </div>
        </div>
      </div>

      <div className="main-scroll css-scroll">

        {/* 프로필 섹션 */}
        <div className="css-profile-section">
          <div className="css-room-avatar">
            <img src="/img/chat_coffee.png" alt="카페 금지 챌린지" />
          </div>
          <span className="css-room-name">카페 금지 챌린지 ☕</span>
          <Link to="/new-challenge" className="css-cta-btn">
            <img src="/img/chat_start.png" alt="" width="25" height="25" style={{ objectFit:'contain' }} />
            챌린지를 시작해볼까요?
          </Link>
        </div>

        {/* 나의 소비 기록 */}
        <div className="css-card">
          <div className="css-card-header">
            <div className="css-card-header-left">
              <img src="/img/setting_bookmark.png" alt="" width="18" height="22" style={{ objectFit:'contain' }} />
              <span className="css-card-title">나의 소비 기록</span>
            </div>
            <a href="#" className="css-card-more">전체보기 <ChevRight /></a>
          </div>
          <div className="css-spend-slider" ref={sliderRef}>
            {spendCards.map((card, ci) => (
              <div className="css-spend-card" key={ci}>
                <div className="css-sc-header">
                  <div className="css-sc-title-row">
                    <span className="css-sc-title">소비 기록</span>
                    <span className="css-sc-count">{card.count}</span>
                  </div>
                  <a href="#" className="css-sc-more">더보기 <ChevRight /></a>
                </div>
                <hr className="css-sc-divider" />
                <div className="css-sc-items">
                  {card.items.map(i => (
                    <div className="css-sc-item" key={i.l}>
                      <span>{i.l}</span><span>{i.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 대화 상대 */}
        <div className="css-card">
          <div className="css-card-header">
            <div className="css-card-header-left">
              <img src="/img/setting_person.png" alt="" width="17" height="21" style={{ objectFit:'contain' }} />
              <span className="css-card-title">대화 상대</span>
              <span className="css-member-count">{members.length}</span>
            </div>
          </div>
          <ul className="css-member-list">
            {members.map(m => (
              <li className="css-member-item" key={m.name}>
                <div className="css-member-avatar" style={{ background: avatarColors[m.name] }} />
                <div className="css-member-name-wrap">
                  {m.isMe && <span className="css-me-badge">나</span>}
                  <span className="css-member-name">{m.name}</span>
                </div>
              </li>
            ))}
            <li className="css-member-item">
              <div className="css-invite-avatar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
              <span className="css-invite-text">초대하기</span>
            </li>
          </ul>
        </div>

        {/* 채팅방 나가기 */}
        <button className="css-leave-btn" onClick={() => { if(window.confirm('채팅방을 나가시겠어요?')) navigate('/chat') }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D32424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          채팅방 나가기
        </button>

      </div>
    </div>
  )
}
