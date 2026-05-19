import { Link, useNavigate } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const spendCards = [
  { count: 6,  items: [{ l:'☕ 스타벅스', a:'6,100원' }, { l:'🍲 용가훠궈', a:'18,900원' }, { l:'💳 넷플릭스', a:'6,750원' }] },
  { count: 8,  items: [{ l:'🎤 노래방',   a:'10,000원' }, { l:'🍿 CGV',     a:'15,000원' }, { l:'📦 쿠팡',    a:'9,800원' }] },
  { count: 10, items: [{ l:'🛍 무신사',   a:'62,280원' }, { l:'🎧 애플뮤직',a:'8,900원'  }, { l:'☕ 메가커피', a:'3,500원' }] },
]

const avatarColors = { '지은':'#A8D8A8', '미주':'#F48FB1', '수지':'#90CAF9', '주은':'#C5E1A5', '찬희':'#FFD54F' }
const members = [
  { name:'지은', isMe:true }, { name:'미주' }, { name:'수지' }, { name:'주은' }, { name:'찬희' },
]

export default function ChattingSetting() {
  const navigate = useNavigate()

  return (
    <div className="phone">

      {/* 헤더 — 피그마 height:125px */}
      <div className="ct-header">
        <div className="status-bar" />
        <div className="ct-header-nav">
          <div className="ct-header-left">
            <Link to="/chatting" className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
            <span className="css-title">설정</span>
          </div>
          <div className="ct-header-right">
            <button className="pg-icon-btn">
              <svg width="21" height="23" viewBox="0 0 24 26" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>
            <button className="pg-icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="main-scroll css-scroll">

        {/* 프로필 섹션 — 피그마 avatar(85px) + roomName + CTA */}
        <div className="css-profile-section">
          <div className="css-room-avatar">
            <img src="/img/chat_wallet.png" alt="통장 지키기 모임" />
          </div>
          <span className="css-room-name">통장 지키기 모임</span>
          <Link to="/new-challenge" className="css-cta-btn">
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2a10 10 0 0 1 5 18.9M14.5 2a10 10 0 0 0-5 18.9"/>
            </svg>
            챌린지를 시작해볼까요?
          </Link>
        </div>

        {/* 나의 소비 기록 카드 */}
        <div className="css-card">
          <div className="css-card-header">
            <div className="css-card-header-left">
              <svg width="22" height="22" viewBox="0 0 20 24" fill="none" stroke="#F69A21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z"/>
              </svg>
              <span className="css-card-title">나의 소비 기록</span>
            </div>
            <a href="#" className="css-card-more">전체보기 ›</a>
          </div>
          <div className="css-spend-slider">
            {spendCards.map((card, ci) => (
              <div className="css-spend-card" key={ci}>
                <div className="css-sc-header">
                  <div className="css-sc-title-row">
                    <span className="css-sc-title">소비 기록</span>
                    <span className="css-sc-count">{card.count}</span>
                  </div>
                  <a href="#" className="css-sc-more">더보기 ›</a>
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

        {/* 대화 상대 카드 */}
        <div className="css-card">
          <div className="css-card-header">
            <div className="css-card-header-left">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#F69A21"/>
                <circle cx="14" cy="10" r="4" fill="#fff"/>
                <path d="M6 22c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round">
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
