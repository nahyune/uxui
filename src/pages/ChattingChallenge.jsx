import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const EMOJI = {
  fire:      '/img/chatting-fire.png',
  heart:     '/img/chatting-heart.png',
  thumb:     '/img/chatting-thumb.png',
  smile:     '/img/chatting-smile.png',
  surprised: '/img/chatting-surprised.png',
}

const avatarColors = {
  하나:            '#A9BDFF',
  텀블러쓰기3일차: '#FFA7A7',
  민지:            '#FFC892',
  라떼말고물:      '#A6F6CC',
}

const myItems = [
  { l: '☕ 스타벅스', a: '6,100원' },
  { l: '🍲 용가훠궈', a: '18,900원' },
  { l: '💳 넷플릭스', a: '6,750원' },
]
const hanaItems = [
  { l: '💊 약국', a: '3,500원' },
  { l: '🎧 애플뮤직', a: '8,900원' },
  { l: '🧺 다이소', a: '1,000원' },
]

const Reactions = ({ reactions, right }) => (
  <div className={`ct-reactions${right ? ' right' : ''}`}>
    <span className="ct-reaction-badge">
      {reactions.map((r, i) => (
        <span key={i} className="ct-reaction-item">
          <img src={r.img} alt="" style={{ width: 15, height: 15, objectFit: 'contain', flexShrink: 0 }} />
          {r.count && <span>{r.count}</span>}
        </span>
      ))}
    </span>
  </div>
)

const SpendCard = ({ items, count, variant }) => (
  <div className={`chc-spend-card ${variant}`}>
    <div className="chc-spend-header">
      <div className="chc-spend-title-row">
        <span className="chc-spend-title">소비 기록</span>
        <span className="chc-spend-count">{count}</span>
      </div>
      <a href="#" className="chc-spend-more no-guide">더보기</a>
    </div>
    <div className="chc-spend-divider" />
    <div className="chc-spend-items">
      {items.map(i => (
        <div className="chc-spend-item" key={i.l}>
          <span>{i.l}</span>
          <span>{i.a}</span>
        </div>
      ))}
    </div>
  </div>
)


const ChevRight = () => (
  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" stroke="#AFAFAF" strokeWidth="1.8" strokeLinecap="round">
    <polyline points="1 1 5 5.5 1 10"/>
  </svg>
)

const nowStr = () => {
  const d = new Date()
  const h = d.getHours(), m = String(d.getMinutes()).padStart(2, '0')
  return `${h >= 12 ? '오후' : '오전'} ${h % 12 || 12}:${m}`
}

export default function ChattingChallenge() {
  const [newMsgs, setNewMsgs] = useState([])
  const [text, setText] = useState('')
  const msgsRef = useRef(null)

  useEffect(() => {
    const el = msgsRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [newMsgs])

  const send = () => {
    const t = text.trim()
    if (!t) return
    setNewMsgs(prev => [...prev, { id: Date.now(), time: nowStr(), text: t }])
    setText('')
  }

  return (
    <div className="phone">

      {/* 헤더 — 흰 배경, 하단 라운드, 랭킹 배너 포함 */}
      <div className="ct-header chc-header">
        <div className="status-bar" />
        <div className="ct-header-nav">
          <div className="ct-header-left">
            <Link to="/chat" className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
            <div className="ct-room-info">
              <span className="ct-room-title">카페 금지 챌린지 ☕</span>
              <div className="ct-room-meta">
                <img src="/img/person_01.png" alt="" width="10" height="11" style={{ objectFit: 'contain', flexShrink: 0 }} />
                83
              </div>
            </div>
          </div>
          <div className="ct-header-right">
            <button className="pg-icon-btn no-guide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <Link to="/chatting-challenge-setting" className="pg-icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </Link>
          </div>
        </div>

        {/* 랭킹 배너 — 헤더 안쪽 카드 */}
        <Link to="/ranking" className="chc-rank-banner">
          <div className="chc-rank-left">
            <img src="/img/raking.png" alt="" className="chc-rank-img" />
            <div className="chc-rank-texts">
              <p className="chc-rank-line1">오늘의 절약왕 <strong className="chc-rank-winner">하나</strong> 🏆</p>
              <p className="chc-rank-line2">나는 현재 <strong className="chc-rank-pos">4위</strong>예요</p>
            </div>
          </div>
          <ChevRight />
        </Link>
      </div>

      {/* 메세지 영역 */}
      <div className="ct-messages chc-messages" ref={msgsRef}>
        <div style={{ flex: 1 }} />
        <div className="ct-date-pill">
          2026년 04월 17일 금요일
        </div>

        {/* 나 — 오른쪽: 소비카드 + 텍스트 (오후 4:30) */}
        <div className="ct-msg-group right">
          <SpendCard items={myItems} count={6} variant="green" />
          <Reactions right reactions={[
            { img: EMOJI.fire,  count: 23 },
            { img: EMOJI.heart, count: 17 },
            { img: EMOJI.thumb, count: 11 },
          ]} />
          <div className="ct-bubble-row right">
            <div className="ct-bubble right chc-bubble"><p>오늘 소비 기록 공유합니다!</p></div>
          </div>
          <div className="ct-bubble-row right">
            <div className="ct-time-col right">
              <span className="ct-read-count chc-read">22</span>
              <span className="ct-msg-time chc-time">오후 4:30</span>
            </div>
            <div className="ct-bubble right chc-bubble"><p>점심 약속 있어서 지출이 조금 있었어요 😢</p></div>
          </div>
          <Reactions right reactions={[{ img: EMOJI.thumb, count: 5 }]} />
        </div>

        {/* 하나 — 왼쪽: 텍스트 (오후 4:31) */}
        <div className="ct-msg-group">
          <div className="ct-avatar-chat chc-avatar" style={{ background: avatarColors['하나'] }} />
          <div className="ct-msg-body">
            <span className="ct-sender chc-sender">하나</span>
            <div className="ct-bubble-row">
              <div className="ct-bubble left chc-bubble"><p>그래도 카페 한 번이면 잘 참으신 거 아닌가요 👍</p></div>
              <div className="ct-time-col">
                <span className="ct-read-count chc-read">27</span>
                <span className="ct-msg-time chc-time">오후 4:31</span>
              </div>
            </div>
          </div>
        </div>

        {/* 하나 — 왼쪽: 소비카드 + 텍스트 (오후 4:33) */}
        <div className="ct-msg-group">
          <div className="ct-avatar-chat chc-avatar" style={{ background: avatarColors['하나'] }} />
          <div className="ct-msg-body">
            <span className="ct-sender chc-sender">하나</span>
            <SpendCard items={hanaItems} count={4} variant="orange" />
            <Reactions reactions={[
              { img: EMOJI.fire,      count: 18 },
              { img: EMOJI.heart,     count: 15 },
              { img: EMOJI.surprised, count: 9  },
            ]} />
            <div className="ct-bubble-row">
              <div className="ct-bubble left chc-bubble"><p>저도 오늘 소비 공유합니다</p></div>
              <div className="ct-time-col" />
            </div>
            <div className="ct-bubble-row">
              <div className="ct-bubble left chc-bubble"><p>요즘 점심 이후가 제일 어려운 것 같아요</p></div>
              <div className="ct-time-col">
                <span className="ct-read-count chc-read">34</span>
                <span className="ct-msg-time chc-time">오후 4:33</span>
              </div>
            </div>
          </div>
        </div>

        {/* 나 — 오른쪽: 텍스트 (오후 4:35) */}
        <div className="ct-msg-group right">
          <div className="ct-bubble-row right">
            <div className="ct-time-col right">
              <span className="ct-read-count chc-read">34</span>
              <span className="ct-msg-time chc-time">오후 4:35</span>
            </div>
            <div className="ct-bubble right chc-bubble"><p>맞아요 오후 시간대가 진짜 힘들어요ㅠ</p></div>
          </div>
        </div>

        {/* 텀블러쓰기3일차 — 왼쪽 */}
        <div className="ct-msg-group">
          <div className="ct-avatar-chat chc-avatar" style={{ background: avatarColors['텀블러쓰기3일차'] }} />
          <div className="ct-msg-body">
            <span className="ct-sender chc-sender">텀블러쓰기3일차</span>
            <div className="ct-bubble-row">
              <div className="ct-bubble left chc-bubble"><p>텀블러 들고 다니니까 확실히 덜 가게돼요</p></div>
              <div className="ct-time-col">
                <span className="ct-read-count chc-read">46</span>
                <span className="ct-msg-time chc-time">오후 4:54</span>
              </div>
            </div>
          </div>
        </div>

        {/* 민지 — 왼쪽 */}
        <div className="ct-msg-group">
          <div className="ct-avatar-chat chc-avatar" style={{ background: avatarColors['민지'] }} />
          <div className="ct-msg-body">
            <span className="ct-sender chc-sender">민지</span>
            <div className="ct-bubble-row">
              <div className="ct-bubble left chc-bubble"><p>저도 내일부터 텀블러 챙겨보려고요 🥺</p></div>
              <div className="ct-time-col">
                <span className="ct-read-count chc-read">49</span>
                <span className="ct-msg-time chc-time">오후 4:55</span>
              </div>
            </div>
            <Reactions reactions={[
              { img: EMOJI.heart, count: 8 },
              { img: EMOJI.smile, count: 5 },
            ]} />
          </div>
        </div>

        {/* 라떼말고물 — 왼쪽 */}
        <div className="ct-msg-group">
          <div className="ct-avatar-chat chc-avatar" style={{ background: avatarColors['라떼말고물'] }} />
          <div className="ct-msg-body">
            <span className="ct-sender chc-sender">라떼말고물</span>
            <div className="ct-bubble-row">
              <div className="ct-bubble left chc-bubble"><p>오늘 카페 안 가신 분??</p></div>
              <div className="ct-time-col">
                <span className="ct-read-count chc-read">73</span>
                <span className="ct-msg-time chc-time">오후 5:07</span>
              </div>
            </div>
          </div>
        </div>

        {/* 새로 입력한 메시지 */}
        {newMsgs.map(m => (
          <div className="ct-msg-group right" key={m.id}>
            <div className="ct-bubble-row right">
              <div className="ct-time-col right">
                <span className="ct-msg-time chc-time">{m.time}</span>
              </div>
              <div className="ct-bubble right chc-bubble"><p>{m.text}</p></div>
            </div>
          </div>
        ))}
      </div>

      {/* 입력창 */}
      <div className="ct-input-area">
        <div className="ct-input-row">
          <button className="ct-plus-btn no-guide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <div className="ct-input-field chc-input-field">
            <input
              type="text"
              className="ct-msg-input"
              placeholder="메시지를 입력해주세요"
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button className={`ct-send-btn chc-send-btn${text.trim() ? ' active' : ''}`} onClick={send}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
