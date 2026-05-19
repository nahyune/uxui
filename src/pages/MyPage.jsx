import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../styles/pages.css'

const menu = [
  { icon: '/img/my_01.JPG', label: '나의 프로필' },
  { icon: '/img/my_02.JPG', label: '소비 리스트' },
  { icon: '/img/my_03.JPG', label: '친구 관리' },
  { icon: '/img/my_04.JPG', label: '1:1 고객문의' },
  { icon: '/img/my_05.JPG', label: '알림 설정' },
]

export default function MyPage() {
  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
      </div>

      <div className="main-scroll my-scroll">
        <h1 className="scroll-title">마이페이지</h1>
        <div className="my-profile">
          <div className="my-avatar">
            <img src="/img/my_cat.png" alt="프로필" />
          </div>
        </div>

        <div className="my-stat-card">
          <div className="my-stat-item">
            <p className="my-stat-num">54,300<span className="my-stat-unit">원</span></p>
            <p className="my-stat-desc">이번 주 절약</p>
          </div>
          <div className="my-stat-div" />
          <div className="my-stat-item">
            <p className="my-stat-num">3<span className="my-stat-unit">개</span></p>
            <p className="my-stat-desc">참여 챌린지</p>
          </div>
          <div className="my-stat-div" />
          <div className="my-stat-item">
            <p className="my-stat-num">7<span className="my-stat-unit">일</span></p>
            <p className="my-stat-desc">절약 연속일</p>
          </div>
        </div>

        <div className="my-menu-card">
          {menu.map((m, i) => (
            <div key={m.label}>
              <a href="#" className="my-menu-item">
                <div className="my-menu-left">
                  <img className="my-menu-icon" src={m.icon} alt={m.label} />
                  <span className="my-menu-text">{m.label}</span>
                </div>
                <svg width="7" height="13" viewBox="0 0 7 14" fill="none" stroke="#959595" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 1 6 7 1 13"/>
                </svg>
              </a>
              {i < menu.length - 1 && <div className="my-menu-divider" />}
            </div>
          ))}
        </div>

        <div className="my-sub-links">
          <a href="#" className="my-sub-link">신고하기</a>
          <a href="#" className="my-sub-link">로그아웃</a>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
