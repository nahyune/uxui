import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/add-spending.css'

const categories = ['전체', '식비', '교통', '의료', '쇼핑', '카페', '여가', '생활', '기타']

const items = [
  { label: '☕ 스타벅스', amount: '6,100원' },
  { label: '🛍 무신사',   amount: '62,280원' },
  { label: '🎤 노래방',   amount: '10,000원' },
  { label: '🍿 CGV',      amount: '15,000원' },
  { label: '📦 쿠팡',     amount: '9,800원' },
  { label: '💳 넷플릭스', amount: '6,750원' },
  { label: '🎧 애플뮤직', amount: '8,900원' },
  { label: '🛒 마켓컬리', amount: '34,500원' },
  { label: '🚕 카카오택시', amount: '12,400원' },
]

const rooms = [
  { avatar: '/img/chat_receipt.png', fire: true,  name: '소비 기록 챌린지 📝', count: 16 },
  { avatar: '/img/chat_wallet.png',  fire: false, name: '통장 지키기 모임',     count: 5 },
  { avatar: '/img/chat_coffee.png',  fire: true,  name: '카페 금지 챌린지 ☕',  count: 83 },
  { avatar: '/img/chat_book.png',    fire: false, name: '텅장 방지 협회',       count: 13 },
]

export default function AddSpending() {
  const [activeCat, setActiveCat] = useState(0)
  const [checked, setChecked] = useState({})
  const [overlay, setOverlay] = useState(false)
  const [modalTab, setModalTab] = useState(0)

  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
        <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px' }}>
          <Link to="/check" style={{ display: 'flex', alignItems: 'center' }} aria-label="뒤로가기">
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
              stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="10 1 1 10 10 19"/>
            </svg>
          </Link>
          <h1 className="header-title">소비 올리기</h1>
        </div>
      </div>

      <main className="main-scroll">
        <div className="category-scroll">
          {categories.map((c, i) => (
            <button key={c} className={`cat-btn${activeCat === i ? ' active' : ''}`}
              onClick={() => setActiveCat(i)}>{c}</button>
          ))}
        </div>

        <ul className="spending-list">
          {items.map((item, i) => (
            <li className="spending-item" key={item.label}>
              <div className="item-left">
                <span className="item-label">{item.label}</span>
              </div>
              <div className="item-right">
                <span className="item-amount">{item.amount}</span>
                <label className="check-wrap">
                  <input type="checkbox" className="item-check"
                    checked={!!checked[i]} onChange={() => setChecked(p => ({ ...p, [i]: !p[i] }))} />
                  <span className="check-custom" />
                </label>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <div className="share-wrap">
        <button className="share-btn" onClick={() => setOverlay(true)}>소비 공유하기</button>
      </div>
      <div className="home-indicator" />

      {/* 공유 오버레이 */}
      {overlay && (
        <div className="overlay open">
          <div className="overlay-backdrop" id="overlayBackdrop" onClick={() => setOverlay(false)} />
          <div className="overlay-modal">
            <button className="modal-close" onClick={() => setOverlay(false)}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                stroke="#555" strokeWidth="2.2" strokeLinecap="round">
                <line x1="2" y1="2" x2="16" y2="16"/>
                <line x1="16" y1="2" x2="2" y2="16"/>
              </svg>
            </button>
            <h2 className="modal-title">공유할 채팅방</h2>
            <div className="modal-search">
              <svg className="search-icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input type="text" className="search-input" placeholder="공유하고 싶은 친구, 채팅방 검색" />
            </div>
            <div className="modal-tabs">
              {['전체', '친구', '최근 공유'].map((t, i) => (
                <button key={t} className={`modal-tab${modalTab === i ? ' active' : ''}`}
                  onClick={() => setModalTab(i)}>{t}</button>
              ))}
            </div>
            <ul className="chatroom-list">
              {rooms.map(r => (
                <li className="chatroom-item" key={r.name}>
                  <div className="room-avatar"><img src={r.avatar} alt={r.name} /></div>
                  <div className="room-info">
                    <div className="room-name-row">
                      {r.fire && <img src="/img/icon_fire.png" className="room-fire" alt="" />}
                      <span className="room-name">{r.name}</span>
                    </div>
                    <div className="room-count">
                      <img src="/img/person_01.png" className="room-person" alt="" />
                      <span>{r.count}</span>
                    </div>
                  </div>
                  <div className="room-check" />
                </li>
              ))}
            </ul>
            <button className="send-btn" onClick={() => setOverlay(false)}>보내기</button>
          </div>
        </div>
      )}
    </div>
  )
}
