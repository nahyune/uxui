import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const avatarColors = {
  '주은': '#A8D8A8',
  '수지': '#90CAF9',
  '미주': '#F48FB1',
  '찬희': '#FFD54F',
}

const EMOJI = {
  sad:   '/img/chatting-unsmile.png',
  heart: '/img/chatting-heart.png',
  thumb: '/img/chatting-thumb.png',
  fire:  '/img/chatting-fire.png',
}

const msgs = [
  { id:1, side:'left',  sender:'주은', time:'오후 5:16',
    text:'월급 들어오자마자 왜 이렇게 쓰고 싶을까…' },
  { id:2, side:'right', time:'오후 5:18',
    text:'그때가 제일 위험한 타이밍이야' },
  { id:3, side:'left',  sender:'수지', time:'오후 5:18',
    text:'맞아 월급날 챌린지 따로 만들어야 돼' },
  { id:4, side:'left',  sender:'미주', time:'오후 5:18',
    text:'월급 생존 챌린지 웃기다ㅋㅋㅋ' },
  { id:5, side:'left',  sender:'찬희', time:'오후 5:19',
    text:'오늘 카페 갈 사람?',
    reactions:[{ img: EMOJI.sad, count:2 }] },
  { id:6, side:'left',  sender:'수지', time:'오후 5:39',
    text:'안 돼. 우리 방 이름 다시 보고 와' },
  { id:7, side:'left',  sender:'주은', time:'오후 5:40',
    text:'아메리카노 하나는 괜찮지 않나…?',
    reactions:[{ img: EMOJI.heart }] },
  { id:8, side:'left',  sender:'미주', time:'오후 6:05',
    text:'월급 3일차 통장 잔액 지키기 시작.', read:1,
    reactions:[{ img: EMOJI.thumb, count:2 }, { img: EMOJI.heart, count:2 }] },
  { id:9, side:'right', time:'오후 6:15',
    text:'이번 달도 다 같이 살아남아보자 🔥', read:1,
    reactions:[{ img: EMOJI.fire, count:3 }, { img: EMOJI.heart, count:2 }] },
]

const CalSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#959595" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const Reactions = ({ reactions, right }) => (
  <div className={`ct-reactions${right ? ' right' : ''}`}>
    <span className="ct-reaction-badge">
      {reactions.map((r, i) => (
        <span key={i} className="ct-reaction-item">
          <img src={r.img} alt="" style={{ width:16, height:16, objectFit:'contain', flexShrink:0 }} />
          {r.count && <span>{r.count}</span>}
        </span>
      ))}
    </span>
  </div>
)

export default function Chatting() {
  return (
    <div className="phone">
      {/* 헤더 — 피그마 height:125px */}
      <div className="ct-header">
        <div className="status-bar" />
        <div className="ct-header-nav">
          <div className="ct-header-left">
            <Link to="/chat" className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
            <div className="ct-room-info">
              <span className="ct-room-title">통장 지키기 모임</span>
              <div className="ct-room-meta">
                <svg width="10" height="11" viewBox="0 0 10 12" fill="none" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 6.5c2.2 0 4 .9 4 2v1H1v-1c0-1.1 1.8-2 4-2z"/>
                  <circle cx="5" cy="3" r="2"/>
                </svg>
                5
              </div>
            </div>
          </div>
          <div className="ct-header-right">
            <button className="pg-icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <Link to="/chatting-setting" className="pg-icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 메세지 영역 — 피그마 bg:#F2F2F2 */}
      <div className="ct-messages">
        {/* 날짜 구분선 — 피그마 bg:#DDD, radius:50px */}
        <div className="ct-date-pill">
          <CalSVG />2026년 04월 17일 금요일
        </div>

        {msgs.map(m => (
          <div className={`ct-msg-group${m.side === 'right' ? ' right' : ''}`} key={m.id}>
            {/* 왼쪽 (타인) 메세지 */}
            {m.side === 'left' && (
              <>
                <div className="ct-avatar-chat" style={{ background: avatarColors[m.sender] }} />
                <div className="ct-msg-body">
                  <span className="ct-sender">{m.sender}</span>
                  <div className="ct-bubble-row">
                    <div className="ct-bubble left"><p>{m.text}</p></div>
                    <div className="ct-time-col">
                      {m.read && <span className="ct-read-count">{m.read}</span>}
                      <span className="ct-msg-time">{m.time}</span>
                    </div>
                  </div>
                  {m.reactions && <Reactions reactions={m.reactions} />}
                </div>
              </>
            )}
            {/* 오른쪽 (나) 메세지 */}
            {m.side === 'right' && (
              <div className="ct-msg-body">
                <div className="ct-bubble-row right">
                  <div className="ct-time-col right">
                    {m.read && <span className="ct-read-count">{m.read}</span>}
                    <span className="ct-msg-time">{m.time}</span>
                  </div>
                  <div className="ct-bubble right"><p>{m.text}</p></div>
                </div>
                {m.reactions && <Reactions reactions={m.reactions} right />}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 입력창 — 피그마 height:102px */}
      <div className="ct-input-area">
        <div className="ct-input-row">
          <button className="ct-plus-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#686868" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <div className="ct-input-field">
            <input type="text" className="ct-msg-input" placeholder="메시지를 입력해주세요" />
            <button className="ct-send-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
