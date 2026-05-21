import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const days = [
  { label:'월', type:'check' },
  { label:'화', type:'fail' },
  { label:'수', type:'check' },
  { label:'목', type:'check' },
  { label:'금', type:'today' },
  { label:'토', type:'empty' },
  { label:'일', type:'empty' },
]

const avatarColors = {
  '하나':            '#A9BDFF',
  '텀블러쓰기3일차': '#FFA7A7',
  '민지':            '#FFC892',
  '지은':            '#DFC9F3',
  '라떼말고물':      '#A6F6CC',
}

const ranks = [
  { rank:1, name:'하나',            streak:'5일 연속 성공', isMe:false },
  { rank:2, name:'텀블러쓰기3일차', streak:'3일 연속 성공', isMe:false },
  { rank:3, name:'민지',            streak:null,            isMe:false },
  { rank:4, name:'지은',            streak:'2일 연속 성공', isMe:true },
  { rank:5, name:'라떼말고물',      streak:null,            isMe:false },
]

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const FailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2.8" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

export default function Ranking() {
  return (
    <div className="phone rk-phone">

      {/* 헤더 */}
      <div className="rk-header">
        <div className="rk-status-bar">
          <span className="rk-time">9:35</span>
          <img src="/img/bell-off.png" alt="" width="17" height="17" style={{ objectFit:'contain' }} />
        </div>
        <div className="rk-header-nav">
          <Link to="/chatting-challenge" className="pg-back">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
          </Link>
          <span className="rk-title">랭킹</span>
        </div>
      </div>

      <div className="main-scroll rk-scroll">

        {/* ── 소비 체크 카드 ── */}
        <div className="rk-card">
          <div className="rk-check-header">
            <h2 className="rk-card-title">이번 주 소비 체크</h2>
            <div className="rk-date-badge">
              <img src="/img/calendar.png" alt="" width="10" height="11" style={{ objectFit:'contain' }} />
              <span>5.4 (월) ~ 5.10 (일)</span>
            </div>
          </div>

          {/* 요일 행 */}
          <div className="rk-day-row">
            {days.map(d => (
              <div className="rk-day-col" key={d.label}>
                <span className={`rk-day-label${d.type === 'today' ? ' today' : ''}`}>{d.label}</span>
                <div className={`rk-day-circle rk-day-${d.type}`}>
                  {d.type === 'check' && <CheckIcon />}
                  {d.type === 'fail'  && <FailIcon />}
                </div>
              </div>
            ))}
          </div>

          {/* 진행 섹션 */}
          <div className="rk-progress-wrap">
            <div className="rk-progress-top">
              <span className="rk-progress-label">목표까지</span>
              <span className="rk-progress-pct">72%</span>
            </div>
            <div className="rk-bar-track">
              <div className="rk-bar-fill" style={{ width:'72%' }} />
            </div>
            <div className="rk-progress-bottom">
              <span className="rk-saved-text">아낀 금액 <strong className="rk-saved-amt">36,000원</strong></span>
              <span className="rk-goal-text">50,000원</span>
            </div>
          </div>
        </div>

        {/* ── 전체 랭킹 카드 ── */}
        <div className="rk-card">
          <h2 className="rk-card-title" style={{ marginBottom: -22 }}>전체 랭킹</h2>
          <ul className="rk-rank-list">
            {ranks.map((r) => (
              <li className="rk-rank-row" key={r.rank}>
                {/* 순위 영역 */}
                <div className="rk-rank-left">
                  {r.rank === 1 ? (
                    <img src="/img/raking_crown.png" alt="1등" className="rk-crown" />
                  ) : (
                    <span className="rk-num">{r.rank}</span>
                  )}
                </div>
                {/* 아바타 + 이름 */}
                <div className="rk-rank-user">
                  <div className="rk-avatar" style={{ background: avatarColors[r.name] }} />
                  {r.isMe && <span className="rk-me-badge">나</span>}
                  <span className="rk-name">{r.name}</span>
                </div>
                {/* 연속 성공 배지 */}
                {r.streak && (
                  <div className="rk-streak-badge">{r.streak}</div>
                )}
              </li>
            ))}
          </ul>
          <div className="rk-view-all">
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" stroke="#686868" strokeWidth="1.5" strokeLinecap="round">
              <polyline points="1 1 5 6 9 1"/>
            </svg>
            <span>전체보기</span>
          </div>
        </div>

      </div>
    </div>
  )
}
