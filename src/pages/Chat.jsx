import { useState } from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../styles/pages.css'

const rooms = [
  { avatar: '/img/chat_receipt.png', fire: true,  name: '소비 기록 챌린지 📝', count: 16,  time: '오후 8:45', msg: '오늘 저녁 뭐 먹었어?',               unread: 2, to: null },
  { avatar: '/img/chat_wallet.png',  fire: false, name: '통장 지키기 모임',     count: 5,   time: '오후 8:45', msg: '이번 달도 다 같이 살아남아보자 🔥', unread: 0, to: '/chatting' },
  { avatar: '/img/chat_coffee.png',  fire: true,  name: '카페 금지 챌린지 ☕',  count: 83,  time: '오후 8:45', msg: '오늘 카페 안 가신 분??',              unread: 0, to: '/chatting-challenge' },
  { avatar: '/img/chat_book.png',    fire: false, name: '텅장 방지 협회',       count: 13,  time: '오후 8:45', msg: '택시 대신 버스 탔다 ㅎㅎ',           unread: 5, to: null },
  { avatar: '/img/chat_coin.png',    fire: false, name: '💸 절약 못하면 벌금방', count: 8,  time: '오후 8:45', msg: '걸리면 벌금 5000원이야',             unread: 2, to: null },
  { avatar: '/img/chat_shopping.png',fire: true,  name: '쇼핑 금지 챌린지 🛍',  count: 52,  time: '오후 8:45', msg: '장바구니에 넣고 10분째 고민 중...', unread: 8, to: null },
  { avatar: '/img/chat_stop.png',    fire: false, name: '무지출 챌린지 💪',     count: 18,  time: '오후 7:30', msg: '오늘 드디어 무지출 성공했어요!',     unread: 0, to: null, fill: true },
  { avatar: '/img/chat_rice.png',    fire: false, name: '식비 줄이기 모임 🥗',  count: 9,   time: '오전 11:20', msg: '어제 점심 3천원에 해결했어요 😎',   unread: 3, to: null, fill: true },
]

export default function Chat() {
  const [tab, setTab] = useState(0)

  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
      </div>

      <div className="main-scroll chat-pg-scroll">
        <div className="chat-pg-header">
          <h1 className="scroll-title" style={{ padding: 0 }}>채팅</h1>
          <div className="chat-pg-icons">
            <button className="pg-icon-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button className="pg-icon-btn">
              <img src="/img/chat_plus.png" width="22" alt="" style={{ objectFit: 'contain' }} />
            </button>
            <button className="pg-icon-btn">
              <img src="/img/chat_setting.png" width="22" alt="" style={{ objectFit: 'contain' }} />
            </button>
          </div>
        </div>
        <div className="chat-pg-tabs">
          {['전체', '안읽음', '챌린지'].map((t, i) => (
            <button key={t} className={`chat-pg-tab${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
        {rooms.map((r, i) => {
          const inner = (
            <>
              <div className={`chat-pg-avatar${r.fill ? ' fill' : ''}`}>
                <img src={r.avatar} alt="" />
              </div>
              <div className="chat-pg-info">
                <div className="chat-pg-top">
                  <div className="chat-pg-name-wrap">
                    {r.fire && <img src="/img/icon_fire.png" className="chat-pg-fire" alt="" />}
                    <span className="chat-pg-name">{r.name}</span>
                    <span className="chat-pg-count">
                      <img src="/img/person_01.png" width="11" alt="" /> {r.count}
                    </span>
                  </div>
                  <span className="chat-pg-time">{r.time}</span>
                </div>
                <div className="chat-pg-bottom">
                  <p className="chat-pg-msg">{r.msg}</p>
                  {r.unread > 0 && <span className="chat-pg-unread">{r.unread}</span>}
                </div>
              </div>
            </>
          )
          return r.to
            ? <Link to={r.to} className="chat-pg-item" key={i}>{inner}</Link>
            : <div className="chat-pg-item" key={i}>{inner}</div>
        })}
      </div>

      <BottomNav />
    </div>
  )
}
