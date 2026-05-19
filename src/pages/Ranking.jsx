import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/ranking.css'

const days = [
  { label: '월', type: 'check' }, { label: '화', type: 'fail' },
  { label: '수', type: 'check' }, { label: '목', type: 'check' },
  { label: '금', type: 'today' }, { label: '토', type: 'empty' }, { label: '일', type: 'empty' },
]

const ranks = [
  { rank: 1, name: '하나', isMe: false },
  { rank: 2, name: '텀블러쓰기3일차', isMe: false },
  { rank: 2, name: '민지', isMe: false },
  { rank: 2, name: '지은', isMe: true },
  { rank: 2, name: '라떼말고물', isMe: false },
]

export default function Ranking() {
  return (
    <div className="phone">
      <div className="top-header">
        <div className="status-bar" />
        <div className="header-nav">
          <div className="header-left">
            <Link to="/chatting-challenge" className="back-btn" aria-label="뒤로가기">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 1 1 9 9 17"/>
              </svg>
            </Link>
            <span className="page-title">랭킹</span>
          </div>
        </div>
      </div>

      <div className="scroll-body">
        <div className="rk-card">
          <h2 className="card-title">이번 주 소비 체크</h2>
          <div className="day-row">
            {days.map(d => (
              <div className="day-col" key={d.label}>
                <span className={`day-label${d.type === 'today' ? ' day-label-today' : ''}`}>{d.label}</span>
                <div className={`day-circle day-${d.type}`}>
                  {d.type === 'check' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                  {d.type === 'fail' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2.8" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="progress-section">
            <div className="progress-meta">
              <span className="progress-label">목표까지</span>
              <span className="progress-pct">72%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '72%' }} />
            </div>
            <div className="progress-detail">
              <span className="detail-left">아낀 금액 <strong>36,000원</strong></span>
              <span className="detail-right">50,000원</span>
            </div>
          </div>
        </div>

        <div className="rk-card">
          <h2 className="card-title">전체 랭킹</h2>
          <ul className="rank-list">
            {ranks.map((r, i) => (
              <li className={`rank-row${r.isMe ? ' rank-me' : ''}`} key={i}>
                {r.rank === 1 ? (
                  <div className="rank-badge-wrap">
                    <div className="star-badge">
                      <svg width="46" height="44" viewBox="0 0 46 44" fill="#F69A21">
                        <path d="M23 2l5.09 10.26L40 14.14l-8.5 8.28 2.01 11.69L23 28.77l-10.51 5.34L14.5 22.42 6 14.14l11.91-1.88L23 2z"/>
                      </svg>
                      <span className="star-num">1</span>
                    </div>
                  </div>
                ) : (
                  <div className="rank-num-wrap"><span className="rank-num">{r.rank}</span></div>
                )}
                <div className="rank-user">
                  <div className="rank-avatar" />
                  <div className="rank-name-wrap">
                    {r.isMe && <span className="me-badge">나</span>}
                    <span className="rank-name">{r.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="view-all">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="#686868" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 1 6 6 11 1"/>
            </svg>
            전체보기
          </div>
        </div>

        <div className="bottom-spacer" />
      </div>

      <div className="home-indicator" />
    </div>
  )
}
