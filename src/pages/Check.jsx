import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../styles/pages.css'

const stats = [
  { img: '/img/check_food.png', name: '식비', pct: 45 },
  { img: '/img/check_bus.png',  name: '교통', pct: 30 },
  { img: '/img/check_medical.png', name: '의료', pct: 25 },
  { img: '/img/check_shop.png', name: '쇼핑', pct: 15 },
]
const bars = [
  { h: 70, day: '월' }, { h: 90, day: '화' }, { h: 120, day: '수' },
  { h: 105, day: '목' }, { h: 135, day: '금' },
  { h: 160, day: '토', active: true }, { h: 95, day: '일' },
]

export default function Check() {
  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
        <div className="pg-header">
          <h1 className="pg-title">소비체크</h1>
        </div>
      </div>

      <div className="main-scroll check-scroll">
        {/* 오늘의 소비 카드 */}
        <div className="check-today-card">
          <p className="check-today-label">오늘의 소비</p>
          <p className="check-today-amount">118,830원</p>
          <span className="check-today-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E16500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
              <polyline points="17 18 23 18 23 12"/>
            </svg>
            훌륭해요! 예산보다 5% 절약 중
          </span>
          <img src="/img/today_cat.png" className="check-today-cat" alt="" />
        </div>

        {/* 소비 올리기 */}
        <Link to="/add-spending" className="check-upload-btn">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="13" fill="rgba(255,255,255,0.35)"/>
            <line x1="13" y1="8" x2="13" y2="18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="8" y1="13" x2="18" y2="13" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          소비 올리기
        </Link>

        {/* 소비 통계 */}
        <div className="check-stats-card">
          <div className="check-card-row">
            <span className="check-card-title">소비 통계</span>
            <a href="#" className="pg-more-link">더보기 ›</a>
          </div>
          <div className="check-stat-rows">
            {stats.map(s => (
              <div className="check-stat-row" key={s.name}>
                <img src={s.img} className="check-stat-icon" alt={s.name} />
                <div className="check-stat-body">
                  <div className="check-stat-meta">
                    <span className="check-stat-name">{s.name}</span>
                    <span className="check-stat-pct">{s.pct}%</span>
                  </div>
                  <div className="check-progress-bar">
                    <div className="check-progress-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 주간 리포트 */}
        <div className="check-weekly-card">
          <div className="check-weekly-header">
            <p className="check-weekly-title">주간 리포트</p>
            <p className="check-weekly-sub">최근 7일 소비 패턴</p>
          </div>
          <div className="check-chart">
            {bars.map(b => (
              <div className="check-bar-group" key={b.day}>
                <div className={`check-bar${b.active ? ' active' : ''}`} style={{ height: `${b.h}px` }} />
                <span className="check-day-label">{b.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
