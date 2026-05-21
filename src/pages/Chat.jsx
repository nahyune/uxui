import { useState } from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../styles/pages.css'

const rooms = [
  { avatar: '/img/chat_receipt.png', fire: true,  name: '소비 기록 챌린지 📝', count: 16,  time: '오후 8:45', msg: '오늘 저녁 뭐 먹었어?',               unread: 2, to: null },
  { avatar: '/img/chat_wallet.png',  fire: false, name: '통장 지키기 모임',     count: 5,   time: '오후 6:15', msg: '이번 달도 다 같이 살아남아보자 🔥', unread: 0, to: '/chatting' },
  { avatar: '/img/chat_coffee.png',  fire: true,  name: '카페 금지 챌린지 ☕',  count: 83,  time: '오후 5:07', msg: '오늘 카페 안 가신 분??',              unread: 0, to: '/chatting-challenge' },
  { avatar: '/img/chat_book.png',    fire: false, name: '텅장 방지 협회',       count: 13,  time: '오후 4:31', msg: '택시 대신 버스 탔다 ㅎㅎ',           unread: 5, to: null },
  { avatar: '/img/chat_coin.png',    fire: false, name: '💸 절약 못하면 벌금방', count: 8,  time: '오후 3:18', msg: '걸리면 벌금 5000원이야',             unread: 2, to: null },
  { avatar: '/img/chat_shopping.png',fire: true,  name: '쇼핑 금지 챌린지 🛍',  count: 52,  time: '오후 2:05', msg: '장바구니에 넣고 10분째 고민 중...', unread: 8, to: null },
  { avatar: '/img/chat_stop.png',    fire: false, name: '무지출 챌린지 💪',     count: 18,  time: '오후 1:44', msg: '오늘 드디어 무지출 성공했어요!',     unread: 0, to: null, fill: true },
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
          <h1 className="chat-pg-title">Chat</h1>
          <div className="chat-pg-icons">
            <button className="pg-icon-btn">
              <img src="/img/search.png" alt="검색" width="24" height="24" style={{ objectFit: 'contain' }} />
            </button>
            <button className="pg-icon-btn">
              <img src="/img/chat_plus.png" alt="채팅추가" width="23" height="23" style={{ objectFit: 'contain' }} />
            </button>
            <button className="pg-icon-btn">
              <img src="/img/chat_setting.png" alt="설정" width="24" height="24" style={{ objectFit: 'contain' }} />
            </button>
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="chat-pg-tabs">
          {['전체', '안읽음', '챌린지'].map((t, i) => (
            <button key={t} className={`chat-pg-tab${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>

        {/* 채팅 목록 — 피그마 gap:16px */}
        <div className="chat-pg-list">
        {rooms.map((r, i) => {
          const inner = (
            <>
              {/* 아바타 — 피그마 65×65px, radius:24px */}
              <div className={`chat-pg-avatar${r.fill ? ' fill' : ''}`}>
                <img src={r.avatar} alt="" />
              </div>
              <div className="chat-pg-info">
                {/* 상단: 이름+인원 / 시간 */}
                <div className="chat-pg-top">
                  <div className="chat-pg-name-row">
                    <div className="chat-pg-name-fire">
                      {r.fire && <img src="/img/icon_fire.png" width="15" height="15" alt="" style={{ objectFit: 'contain', flexShrink: 0 }} />}
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
                    <span className="chat-pg-unread">{r.unread}</span>
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
      </div>

      <BottomNav />
    </div>
  )
}
