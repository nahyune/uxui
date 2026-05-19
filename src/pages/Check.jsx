import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../../css/check.css'

const stats = [
  { img: '/img/check_food.png', name: '식비', pct: 45 },
  { img: '/img/check_bus.png',  name: '교통', pct: 30 },
  { img: '/img/check_medical.png', name: '의료', pct: 25 },
  { img: '/img/check_shop.png', name: '쇼핑', pct: 15 },
]

const bars = [
  { h: 80, day: '월' }, { h: 106, day: '화' }, { h: 145, day: '수' },
  { h: 125, day: '목' }, { h: 158, day: '금' },
  { h: 210, day: '토', active: true }, { h: 109, day: '일' },
]

export default function Check() {
  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
      </div>
      <main className="main-scroll" style={{ padding: '0 16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="page-header" style={{ padding: '12px 0 32px' }}>
          <h1 className="page-title">소비체크</h1>
        </div>

        {/* 오늘의 소비 카드 */}
        <section className="today-card">
          <p className="today-label">오늘의 소비</p>
          <div className="today-content">
            <p className="today-amount">118,830원</p>
            <span className="today-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="#E16500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                <polyline points="17 18 23 18 23 12"/>
              </svg>
              훌륭해요! 예산보다 5% 절약 중
            </span>
          </div>
          <img src="/img/check_cat.png" className="today-cat" alt="" />
        </section>

        {/* 소비 올리기 버튼 */}
        <Link to="/add-spending" className="upload-btn">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="13" fill="white"/>
            <line x1="13" y1="8.667" x2="13" y2="17.333" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <line x1="8.667" y1="13" x2="17.333" y2="13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          소비 올리기
        </Link>

        {/* 소비 통계 카드 */}
        <section className="stats-card">
          <div className="card-header">
            <span className="card-title">소비 통계</span>
            <a href="#" className="more-link">
              더보기
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M1 1L5 5.5L1 10" stroke="#AFAFAF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="stats-body">
            {stats.map(s => (
              <div className="stat-row" key={s.name}>
                <img src={s.img} className="stat-icon" alt={s.name} />
                <div className="stat-body">
                  <div className="stat-name-row">
                    <span className="stat-name">{s.name}</span>
                    <span className="stat-percent">{s.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 주간 리포트 카드 */}
        <section className="weekly-card">
          <div className="weekly-header">
            <p className="weekly-title">주간 리포트</p>
            <p className="weekly-sub">최근 7일 소비 패턴</p>
          </div>
          <div className="chart">
            {bars.map(b => (
              <div className="bar-group" key={b.day}>
                <div className={`bar${b.active ? ' bar-active' : ''}`} style={{ height: `${b.h}px` }} />
                <span className="day-label">{b.day}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
      <div className="home-indicator" />
    </div>
  )
}
