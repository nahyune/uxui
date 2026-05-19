import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const cats = ['전체', '식비', '교통', '의료', '쇼핑', '카페', '여가', '생활', '기타']
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
  { avatar: '/img/chat_wallet.png',  fire: false, name: '통장 지키기 모임',     count: 5  },
  { avatar: '/img/chat_coffee.png',  fire: true,  name: '카페 금지 챌린지 ☕',  count: 83 },
  { avatar: '/img/chat_book.png',    fire: false, name: '텅장 방지 협회',       count: 13 },
]

export default function AddSpending() {
  const [cat, setCat] = useState(0)
  const [checked, setChecked] = useState({})
  const [overlay, setOverlay] = useState(false)
  const [modalTab, setModalTab] = useState(0)

  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
        <div className="add-header">
          <Link to="/check" className="pg-back">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 1 1 9 9 17"/>
            </svg>
          </Link>
          <span className="add-header-title">소비 올리기</span>
        </div>
        <div className="add-cat-scroll">
          {cats.map((c, i) => (
            <button key={c} className={`add-cat-btn${cat === i ? ' active' : ''}`} onClick={() => setCat(i)}>{c}</button>
          ))}
        </div>
      </div>

      <ul className="main-scroll add-list">
        {items.map((item, i) => (
          <li className={`add-item${checked[i] ? ' add-item-checked' : ''}`} key={item.label} onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))}>
            <span className="add-item-label">{item.label}</span>
            <div className="add-item-right">
              <span className="add-item-amount">{item.amount}</span>
              <label className="add-check-wrap" onClick={e => e.stopPropagation()}>
                <input type="checkbox" className="add-check-input" checked={!!checked[i]} onChange={() => setChecked(p => ({ ...p, [i]: !p[i] }))} />
                <span className="add-check-box" />
              </label>
            </div>
          </li>
        ))}
      </ul>

      <div className="add-share-area">
        <button className="add-share-btn" onClick={() => setOverlay(true)}>소비 공유하기</button>
      </div>

      {overlay && (
        <div className="add-overlay open">
          <div className="add-overlay-bg" onClick={() => setOverlay(false)} />
          <div className="add-overlay-modal">
            <button className="add-modal-close" onClick={() => setOverlay(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/>
              </svg>
            </button>
            <p className="add-modal-title">공유할 채팅방</p>
            <div className="add-modal-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#686868" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input type="text" className="add-modal-input" placeholder="채팅방 검색" />
            </div>
            <div className="add-modal-tabs">
              {['전체', '친구', '최근 공유'].map((t, i) => (
                <button key={t} className={`add-modal-tab${modalTab === i ? ' active' : ''}`} onClick={() => setModalTab(i)}>{t}</button>
              ))}
            </div>
            <ul className="add-room-list">
              {rooms.map(r => (
                <li className="add-room-item" key={r.name}>
                  <div className="add-room-avatar"><img src={r.avatar} alt="" /></div>
                  <div className="add-room-info">
                    <div className="add-room-name-row">
                      {r.fire && <img src="/img/icon_fire.png" width="14" alt="" />}
                      <span className="add-room-name">{r.name}</span>
                    </div>
                    <div className="add-room-count">
                      <img src="/img/person_01.png" width="11" alt="" /> {r.count}
                    </div>
                  </div>
                  <div className="add-room-check" />
                </li>
              ))}
            </ul>
            <button className="add-modal-send" onClick={() => setOverlay(false)}>보내기</button>
          </div>
        </div>
      )}
    </div>
  )
}
