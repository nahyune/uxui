import { Link, useNavigate } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const spendCards = [
  { count:6, items:[{ l:'☕ 스타벅스',a:'6,100원' },{ l:'🍲 용가훠궈',a:'18,900원' },{ l:'💳 넷플릭스',a:'6,750원' }] },
  { count:4, items:[{ l:'🎤 노래방',a:'10,000원' },{ l:'🍿 CGV',a:'15,000원' },{ l:'📦 쿠팡',a:'9,800원' }] },
  { count:3, items:[{ l:'☕ 스타벅스',a:'6,100원' },{ l:'🛍 무신사',a:'62,280원' },{ l:'🎧 애플뮤직',a:'8,900원' }] },
]
const members = [{ name:'지은',isMe:true },{ name:'미주' },{ name:'수지' },{ name:'주은' },{ name:'찬희' }]

export default function ChattingSetting() {
  const navigate = useNavigate()
  return (
    <div className="phone">
      <div className="ct-header">
        <div className="status-bar" />
        <div className="ct-header-nav">
          <div className="ct-header-left">
            <Link to="/chatting" className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
            <span className="pg-title" style={{ fontSize:18 }}>설정</span>
          </div>
          <div className="ct-header-right">
            <button className="pg-icon-btn"><svg width="20" height="22" viewBox="0 0 24 26" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></button>
          </div>
        </div>
      </div>

      <div className="main-scroll cs-scroll">
        <div className="cs-profile">
          <div className="cs-profile-avatar" />
          <span className="cs-profile-name">통장 지키기 모임</span>
        </div>

        <Link to="/new-challenge" className="cs-cta">
          <div className="cs-cta-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2a10 10 0 0 1 5 18.9M14.5 2a10 10 0 0 0-5 18.9"/>
            </svg>
            챌린지를 시작해볼까요?
          </div>
        </Link>

        <div className="cs-section">
          <div className="cs-section-header">
            <div className="cs-section-header-left">
              <svg width="18" height="20" viewBox="0 0 20 24" fill="none" stroke="#F69A21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z"/></svg>
              <span className="cs-section-title">나의 소비 기록</span>
            </div>
            <a href="#" className="cs-section-more">전체보기 ›</a>
          </div>
          <div className="cs-spend-slider">
            {spendCards.map((card, ci) => (
              <div className="cs-spend-card" key={ci}>
                <div className="cs-sc-header">
                  <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                    <span className="cs-sc-title">소비 기록</span>
                    <span className="cs-sc-title" style={{ opacity:0.6 }}>{card.count}</span>
                  </div>
                  <a href="#" className="cs-sc-more">더보기 ›</a>
                </div>
                <hr className="cs-sc-divider" />
                <div className="cs-sc-items">
                  {card.items.map(i => <div className="cs-sc-item" key={i.l}><span>{i.l}</span><span>{i.a}</span></div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section members-card">
          <div className="cs-section-header">
            <div className="cs-section-header-left">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#F69A21"/><circle cx="14" cy="10" r="4" fill="#fff"/><path d="M6 22c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
              <span className="cs-section-title">대화 상대</span>
              <span className="cs-member-count">{members.length}</span>
            </div>
          </div>
          <ul className="cs-member-list">
            {members.map(m => (
              <li className="cs-member-item" key={m.name}>
                <div className="cs-member-avatar" />
                <div className="cs-member-name-wrap">
                  {m.isMe && <span className="cs-me-badge">나</span>}
                  <span className="cs-member-name">{m.name}</span>
                </div>
              </li>
            ))}
            <li className="cs-member-item">
              <div className="cs-invite-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
              <span className="cs-invite-text">초대하기</span>
            </li>
          </ul>
        </div>

        <button className="cs-leave-btn" onClick={() => { if(window.confirm('채팅방을 나가시겠어요?')) navigate('/chat') }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D32424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          채팅방 나가기
        </button>
      </div>
    </div>
  )
}
