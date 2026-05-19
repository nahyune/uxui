import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/chatting-challenge.css'

const myItems  = [{ l: '☕ 스타벅스', a: '6,100원' }, { l: '🍲 용가훠궈', a: '18,900원' }, { l: '💳 넷플릭스', a: '6,750원' }]
const hanaItems= [{ l: '💊 약국', a: '3,500원' }, { l: '🎧 애플뮤직', a: '8,900원' }, { l: '🧺 다이소', a: '1,000원' }]

const SpendCard = ({ items, count, primary, reactions, right }) => (
  <div style={{ display:'flex', flexDirection:'column', gap:'4px', maxWidth:'240px', alignSelf: right ? 'flex-end' : 'flex-start' }}>
    <div className={`spending-card ${primary ? 'spending-card-primary' : 'spending-card-secondary'}`}>
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">소비 기록</span>
          <span className="card-count">{count}</span>
        </div>
        <a href="#" className="card-more">더보기 ›</a>
      </div>
      <hr className="card-divider" />
      <div className="card-items">
        {items.map(i => (
          <div className="card-item" key={i.l}><span>{i.l}</span><span>{i.a}</span></div>
        ))}
      </div>
    </div>
    {reactions && (
      <div className={`reactions${right ? ' reactions-right' : ''}`}>
        {reactions.map(r => <span className="reaction-badge" key={r}>{r}</span>)}
      </div>
    )}
  </div>
)

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

export default function ChattingChallenge() {
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
              <span className="room-title">카페 금지 챌린지 ☕</span>
              <div className="room-meta">
                <svg width="10" height="11" viewBox="0 0 10 12" fill="none" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 6.5c2.2 0 4 .9 4 2v1H1v-1c0-1.1 1.8-2 4-2z"/>
                  <circle cx="5" cy="3" r="2"/>
                </svg>
                <span className="room-count">83</span>
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

      <Link to="/ranking" className="challenge-banner">
        <div className="banner-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="#F69A21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 21h8"/><line x1="12" y1="17" x2="12" y2="21"/>
            <path d="M5 3H19V13a7 7 0 0 1-14 0V3z"/>
            <path d="M5 6H3a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4"/>
            <path d="M19 6h2a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4"/>
          </svg>
        </div>
        <svg className="banner-chevron" width="8" height="14" viewBox="0 0 8 14" fill="none"
          stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 1 7 7 1 13"/>
        </svg>
      </Link>

      <div className="messages">
        <DatePill />

        {/* 나 - 소비 기록 카드 */}
        <div className="msg-group msg-right">
          <SpendCard items={myItems} count={6} primary right reactions={['🔥 23', '❤️ 17', '🐵 11']} />
          <div className="bubble bubble-right"><p>오늘 소비 기록 공유합니다!</p></div>
          <div className="bubble-row-right">
            <div className="time-col time-col-right">
              <span className="read-count">22</span>
              <span className="msg-time">오후 4:30</span>
            </div>
            <div className="bubble bubble-right"><p>점심 약속 있어서 지출이 조금 있었어요 😢</p></div>
          </div>
          <div className="reactions reactions-right"><span className="reaction-badge">👍 5</span></div>
        </div>

        {/* 하나 - 메시지 */}
        <div className="msg-group msg-left">
          <div className="avatar" />
          <div className="msg-body">
            <span className="sender-name">하나</span>
            <div className="bubble-row">
              <div className="bubble bubble-left"><p>그래도 카페 한 번이면 잘 참으신 거 아닌가요 👍</p></div>
              <div className="time-col">
                <span className="read-count">27</span>
                <span className="msg-time">오후 4:31</span>
              </div>
            </div>
          </div>
        </div>

        {/* 하나 - 소비 기록 카드 */}
        <div className="msg-group msg-left">
          <div className="avatar avatar-orange" />
          <div className="msg-body">
            <span className="sender-name">하나</span>
            <SpendCard items={hanaItems} count={4} primary={false} reactions={['🔥 18', '❤️ 15', '🐵 9']} />
            <div className="bubble bubble-left"><p>저도 오늘 소비 공유합니다</p></div>
            <div className="bubble-row">
              <div className="bubble bubble-left"><p>요즘 점심 이후가 제일 어려운 것 같아요</p></div>
              <div className="time-col">
                <span className="read-count">34</span>
                <span className="msg-time">오후 4:33</span>
              </div>
            </div>
          </div>
        </div>

        {/* 나 - 답장 */}
        <div className="msg-group msg-right">
          <div className="bubble-row-right">
            <div className="time-col time-col-right">
              <span className="read-count">34</span>
              <span className="msg-time">오후 4:35</span>
            </div>
            <div className="bubble bubble-right"><p>맞아요 오후 시간대가 진짜 힘들어요ㅠ</p></div>
          </div>
        </div>

        {/* 텀블러쓰기3일차 */}
        <div className="msg-group msg-left">
          <div className="avatar" />
          <div className="msg-body">
            <span className="sender-name">텀블러쓰기3일차</span>
            <div className="bubble-row">
              <div className="bubble bubble-left"><p>텀블러 들고 다니니까 확실히 덜 가게 돼요</p></div>
              <div className="time-col">
                <span className="read-count">46</span>
                <span className="msg-time">오후 4:54</span>
              </div>
            </div>
          </div>
        </div>

        {/* 민지 */}
        <div className="msg-group msg-left">
          <div className="avatar" />
          <div className="msg-body">
            <span className="sender-name">민지</span>
            <div className="bubble-row">
              <div className="bubble bubble-left"><p>저도 내일부터 텀블러 챙겨보려고요 🥺</p></div>
              <div className="time-col">
                <span className="read-count">49</span>
                <span className="msg-time">오후 4:55</span>
              </div>
            </div>
            <div className="reactions">
              <span className="reaction-badge">❤️ 8</span>
              <span className="reaction-badge">🐵 5</span>
            </div>
          </div>
        </div>

        {/* 라떼말고물 */}
        <div className="msg-group msg-left">
          <div className="avatar" />
          <div className="msg-body">
            <span className="sender-name">라떼말고물</span>
            <div className="bubble-row">
              <div className="bubble bubble-left"><p>오늘 카페 안 가신 분??</p></div>
              <div className="time-col">
                <span className="read-count">73</span>
                <span className="msg-time">오후 5:07</span>
              </div>
            </div>
          </div>
        </div>
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
