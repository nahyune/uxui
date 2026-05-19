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

        {/* 헤더 — 피그마 "Chatting" 24px + 아이콘 3개 */}
        <div className="chat-pg-header">
          <h1 className="chat-pg-title">Chatting</h1>
          <div className="chat-pg-icons">
            <button className="pg-icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button className="pg-icon-btn">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="4" y1="4" x2="20" y2="20"/></svg>
            </button>
            <button className="pg-icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </button>
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="chat-pg-tabs">
          {['전체', '안읽음', '챌린지'].map((t, i) => (
            <button key={t} className={`chat-pg-tab${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>

        {/* 채팅 목록 */}
        {rooms.map((r, i) => {
          const inner = (
            <>
              {/* 아바타 — 피그마 65×65px, radius:24px */}
              <div className="chat-pg-avatar">
                <img src={r.avatar} alt="" />
              </div>
              <div className="chat-pg-info">
                {/* 상단: 이름+인원 / 시간 */}
                <div className="chat-pg-top">
                  <div className="chat-pg-name-row">
                    <div className="chat-pg-name-fire">
                      {r.fire && <img src="/img/icon_fire.png" width="18" height="18" alt="" style={{ objectFit: 'contain', flexShrink: 0 }} />}
                      <span className="chat-pg-name">{r.name}</span>
                    </div>
                    <span className="chat-pg-count">
                      <svg width="8" height="9" viewBox="0 0 8 10" fill="#AFAFAF"><path d="M4 5C5.38 5 6.5 3.88 6.5 2.5S5.38 0 4 0 1.5 1.12 1.5 2.5 2.62 5 4 5zm0 1C2.33 6 -1 6.83 -1 8.5V10h10V8.5C9 6.83 5.67 6 4 6z"/></svg>
                      {r.count}
                    </span>
                  </div>
                  <span className="chat-pg-time">{r.time}</span>
                </div>
                {/* 하단: 메세지 / 안읽음 */}
                <div className="chat-pg-bottom">
                  <p className="chat-pg-msg">{r.msg}</p>
                  {r.unread > 0 && (
                    <span className={`chat-pg-unread${r.unread === 2 && r.fire ? ' green' : ''}`}>{r.unread}</span>
                  )}
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
