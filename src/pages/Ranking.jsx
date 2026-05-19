import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const days = [
  { label:'월', type:'check' }, { label:'화', type:'fail' },
  { label:'수', type:'check' }, { label:'목', type:'check' },
  { label:'금', type:'today' }, { label:'토', type:'empty' }, { label:'일', type:'empty' },
]
const ranks = [
  { rank:1, name:'하나', isMe:false },
  { rank:2, name:'텀블러쓰기3일차', isMe:false },
  { rank:2, name:'민지', isMe:false },
  { rank:2, name:'지은', isMe:true },
  { rank:2, name:'라떼말고물', isMe:false },
]

export default function Ranking() {
  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
        <div className="pg-header">
          <Link to="/chatting-challenge" className="pg-back">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
          </Link>
          <span className="pg-title">랭킹</span>
        </div>
      </div>

      <div className="main-scroll rk-scroll-pg">
        <div className="rk-card-pg">
          <h2 className="rk-card-title">이번 주 소비 체크</h2>
          <div className="rk-day-row">
            {days.map(d => (
              <div className="rk-day-col" key={d.label}>
                <span className={`rk-day-label${d.type === 'today' ? ' today' : ''}`}>{d.label}</span>
                <div className={`rk-day-circle ${d.type}`}>
                  {d.type === 'check' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                  {d.type === 'fail'  && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2.8" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
                </div>
              </div>
            ))}
          </div>
          <div className="rk-progress-section">
            <div className="rk-progress-meta">
              <span className="rk-progress-label">목표까지</span>
              <span className="rk-progress-pct">72%</span>
            </div>
            <div className="rk-progress-track"><div className="rk-progress-fill" style={{ width:'72%' }} /></div>
            <div className="rk-progress-detail">
              <span>아낀 금액 <strong>36,000원</strong></span>
              <span>50,000원</span>
            </div>
          </div>
        </div>

        <div className="rk-card-pg">
          <h2 className="rk-card-title">전체 랭킹</h2>
          <ul className="rk-rank-list">
            {ranks.map((r, i) => (
              <li className={`rk-rank-row${r.isMe ? ' rk-rank-me' : ''}`} key={i}>
                {r.rank === 1 ? (
                  <div className="rk-badge-wrap">
                    <div className="rk-star-badge">
                      <svg width="44" height="42" viewBox="0 0 46 44" fill="#F69A21"><path d="M23 2l5.09 10.26L40 14.14l-8.5 8.28 2.01 11.69L23 28.77l-10.51 5.34L14.5 22.42 6 14.14l11.91-1.88L23 2z"/></svg>
                      <span className="rk-star-num">1</span>
                    </div>
                  </div>
                ) : (
                  <div className="rk-num-wrap"><span className="rk-num">{r.rank}</span></div>
                )}
                <div className="rk-user">
                  <div className="rk-avatar-pg" />
                  <div className="rk-name-wrap">
                    {r.isMe && <span className="rk-me-badge">나</span>}
                    <span className="rk-name">{r.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="rk-view-all">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="#686868" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 1 6 6 11 1"/></svg>
            전체보기
          </div>
        </div>
      </div>
    </div>
  )
}
