import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const myItems  = [{ l:'☕ 스타벅스',a:'6,100원' },{ l:'🍲 용가훠궈',a:'18,900원' },{ l:'💳 넷플릭스',a:'6,750원' }]
const hanaItems= [{ l:'💊 약국',a:'3,500원' },{ l:'🎧 애플뮤직',a:'8,900원' },{ l:'🧺 다이소',a:'1,000원' }]

const SpendCard = ({ items, count, primary, reactions, right }) => (
  <div style={{ display:'flex', flexDirection:'column', gap:4, maxWidth:220, alignSelf: right ? 'flex-end' : 'flex-start' }}>
    <div className={`ct-spend-card${primary ? ' primary' : ' secondary'}`}>
      <div className="ct-spend-header">
        <div style={{ display:'flex', alignItems:'center', gap:4 }}>
          <span className="ct-spend-title">소비 기록</span>
          <span className="ct-spend-title" style={{ opacity:0.7 }}>{count}</span>
        </div>
        <a href="#" className="ct-spend-more">더보기 ›</a>
      </div>
      <hr className={`ct-spend-divider${primary ? '' : ' dark'}`} />
      <div className="ct-spend-items">
        {items.map(i => <div className="ct-spend-item" key={i.l}><span>{i.l}</span><span>{i.a}</span></div>)}
      </div>
    </div>
    {reactions && (
      <div className={`ct-reactions${right ? ' right' : ''}`}>
        {reactions.map(r => <span className="ct-reaction-badge" key={r}>{r}</span>)}
      </div>
    )}
  </div>
)

const CalSVG = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#959595" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

export default function ChattingChallenge() {
  return (
    <div className="phone">
      <div className="ct-header">
        <div className="status-bar" />
        <div className="ct-header-nav">
          <div className="ct-header-left">
            <Link to="/chat" className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
            <div className="ct-room-info">
              <span className="ct-room-title">카페 금지 챌린지 ☕</span>
              <div className="ct-room-meta">
                <svg width="10" height="11" viewBox="0 0 10 12" fill="none" stroke="#AFAFAF" strokeWidth="1.5" strokeLinecap="round"><path d="M5 6.5c2.2 0 4 .9 4 2v1H1v-1c0-1.1 1.8-2 4-2z"/><circle cx="5" cy="3" r="2"/></svg>
                83
              </div>
            </div>
          </div>
          <div className="ct-header-right">
            <button className="pg-icon-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
            <Link to="/chatting-setting" className="pg-icon-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></Link>
          </div>
        </div>
      </div>

      <Link to="/ranking" className="ct-banner">
        <div className="ct-banner-left">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F69A21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 21h8"/><line x1="12" y1="17" x2="12" y2="21"/>
            <path d="M5 3H19V13a7 7 0 0 1-14 0V3z"/>
          </svg>
          랭킹 보러 가기
        </div>
        <svg width="7" height="13" viewBox="0 0 7 14" fill="none" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round"><polyline points="1 1 6 7 1 13"/></svg>
      </Link>

      <div className="ct-messages">
        <div className="ct-date-pill"><CalSVG />2026년 04월 17일 금요일</div>

        <div className="ct-msg-group right">
          <SpendCard items={myItems} count={6} primary right reactions={['🔥 23','❤️ 17','🐵 11']} />
          <div className="ct-bubble-row right">
            <div className="ct-time-col right"><span className="ct-read-count">22</span><span className="ct-msg-time">오후 4:30</span></div>
            <div className="ct-bubble right"><p>오늘 소비 기록 공유합니다!</p></div>
          </div>
          <div className="ct-reactions right"><span className="ct-reaction-badge">👍 5</span></div>
        </div>

        <div className="ct-msg-group">
          <div className="ct-avatar-chat" />
          <div className="ct-msg-body">
            <span className="ct-sender">하나</span>
            <div className="ct-bubble-row">
              <div className="ct-bubble left"><p>그래도 카페 한 번이면 잘 참으신 거 아닌가요 👍</p></div>
              <div className="ct-time-col"><span className="ct-read-count">27</span><span className="ct-msg-time">오후 4:31</span></div>
            </div>
          </div>
        </div>

        <div className="ct-msg-group">
          <div className="ct-avatar-chat ct-avatar-orange" />
          <div className="ct-msg-body">
            <span className="ct-sender">하나</span>
            <SpendCard items={hanaItems} count={4} reactions={['🔥 18','❤️ 15','🐵 9']} />
            <div className="ct-bubble left" style={{ marginTop: 4 }}><p>저도 오늘 소비 공유합니다</p></div>
            <div className="ct-bubble-row">
              <div className="ct-bubble left"><p>요즘 점심 이후가 제일 어려운 것 같아요</p></div>
              <div className="ct-time-col"><span className="ct-read-count">34</span><span className="ct-msg-time">오후 4:33</span></div>
            </div>
          </div>
        </div>

        <div className="ct-msg-group right">
          <div className="ct-bubble-row right">
            <div className="ct-time-col right"><span className="ct-read-count">34</span><span className="ct-msg-time">오후 4:35</span></div>
            <div className="ct-bubble right"><p>맞아요 오후 시간대가 진짜 힘들어요ㅠ</p></div>
          </div>
        </div>

        <div className="ct-msg-group">
          <div className="ct-avatar-chat" />
          <div className="ct-msg-body">
            <span className="ct-sender">텀블러쓰기3일차</span>
            <div className="ct-bubble-row">
              <div className="ct-bubble left"><p>텀블러 들고 다니니까 확실히 덜 가게 돼요</p></div>
              <div className="ct-time-col"><span className="ct-read-count">46</span><span className="ct-msg-time">오후 4:54</span></div>
            </div>
          </div>
        </div>

        <div className="ct-msg-group">
          <div className="ct-avatar-chat" />
          <div className="ct-msg-body">
            <span className="ct-sender">라떼말고물</span>
            <div className="ct-bubble-row">
              <div className="ct-bubble left"><p>오늘 카페 안 가신 분??</p></div>
              <div className="ct-time-col"><span className="ct-read-count">73</span><span className="ct-msg-time">오후 5:07</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ct-input-area">
        <div className="ct-input-row">
          <button className="ct-plus-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#686868" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <div className="ct-input-field">
            <input type="text" className="ct-msg-input" placeholder="메시지를 입력해주세요" />
            <button className="ct-send-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
