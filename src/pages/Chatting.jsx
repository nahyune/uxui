import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/chatting.css'

const msgs = [
  { id: 1, side: 'left',  sender: '주은', time: '오후 5:16', text: '월급 들어오자마자 왜 이렇게 쓰고 싶을까…' },
  { id: 2, side: 'right', time: '오후 5:18', text: '그때가 제일 위험한 타이밍이야' },
  { id: 3, side: 'left',  sender: '수지', time: '오후 5:18', text: '맞아 월급날 챌린지 따로 만들어야 돼' },
  { id: 4, side: 'left',  sender: '미주', time: '오후 5:18', text: '월급 생존 챌린지 웃기다ㅋㅋㅋ' },
  { id: 5, side: 'left',  sender: '찬희', time: '오후 5:19', text: '오늘 카페 갈 사람?', reactions: ['😡 2'] },
  { id: 6, side: 'left',  sender: '수지', time: '오후 5:39', text: '안 돼. 우리 방 이름 다시 보고 와' },
  { id: 7, side: 'left',  sender: '주은', time: '오후 5:40', text: '아메리카노 하나는 괜찮지 않나…?', reactions: ['❤️'] },
  { id: 8, side: 'left',  sender: '미주', time: '오후 6:05', text: '월급 3일차 통장 잔액 지키기 시작.', read: 1, reactions: ['👍 2', '❤️ 2'] },
  { id: 9, side: 'right', time: '오후 6:15', text: '이번 달도 다 같이 살아남아보자 🔥', read: 1, reactions: ['🔥 3', '❤️ 2'] },
]

const DatePill = () => (
  <div className="date-pill">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#959595" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
    2026년 04월 17일 금요일
  </div>
)

export default function Chatting() {
  return (
    <div className="phone">
      <div className="chat-header">
        <div className="status-bar" />
        <div className="header-nav">
          <div className="header-left">
            <Link to="/chat" className="back-btn" aria-label="뒤로가기">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 1 1 9 9 17"/>
              </svg>
            </Link>
            <div className="room-info">
              <span className="room-title">통장 지키기 모임</span>
              <div className="room-meta">
                <svg width="10" height="11" viewBox="0 0 10 12" fill="none" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 6.5c2.2 0 4 .9 4 2v1H1v-1c0-1.1 1.8-2 4-2z"/>
                  <circle cx="5" cy="3" r="2"/>
                </svg>
                <span className="room-count">5</span>
              </div>
            </div>
          </div>
          <div className="header-right">
            <button className="icon-btn" aria-label="검색">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <Link to="/chatting-setting" className="icon-btn" aria-label="메뉴">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="messages">
        <DatePill />
        {msgs.map(m => (
          <div className={`msg-group msg-${m.side}`} key={m.id}>
            {m.side === 'left' && <div className="avatar" />}
            <div className={m.side === 'left' ? 'msg-body' : ''}>
              {m.side === 'left' && <span className="sender-name">{m.sender}</span>}
              <div className={m.side === 'right' ? 'bubble-row-right' : 'bubble-row'}>
                {m.side === 'right' && (
                  <div className="time-col time-col-right">
                    {m.read && <span className="read-count">{m.read}</span>}
                    <span className="msg-time">{m.time}</span>
                  </div>
                )}
                <div className={`bubble bubble-${m.side}`}><p>{m.text}</p></div>
                {m.side === 'left' && (
                  <div className="time-col">
                    {m.read && <span className="read-count">{m.read}</span>}
                    <span className="msg-time">{m.time}</span>
                  </div>
                )}
              </div>
              {m.reactions && (
                <div className={`reactions${m.side === 'right' ? ' reactions-right' : ''}`}>
                  {m.reactions.map(r => <span className="reaction-badge" key={r}>{r}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="input-area">
        <div className="input-row">
          <button className="plus-btn" aria-label="파일 첨부">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#686868" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          <div className="input-field">
            <input type="text" className="msg-input" placeholder="메시지를 입력해주세요" />
            <button className="send-btn" aria-label="전송">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="home-indicator" />
      </div>
    </div>
  )
}
