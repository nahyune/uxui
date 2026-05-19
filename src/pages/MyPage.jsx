import BottomNav from '../components/BottomNav'
import '../styles/global.css'
import '../../css/my.css'

const menuItems = [
  { icon: '/img/my_01.JPG', label: '나의 프로필' },
  { icon: '/img/my_02.JPG', label: '소비 리스트' },
  { icon: '/img/my_03.JPG', label: '친구 관리' },
  { icon: '/img/my_04.JPG', label: '1:1 고객문의' },
  { icon: '/img/my_05.JPG', label: '알림 설정' },
]

const ChevronSVG = () => (
  <svg className="chevron" viewBox="0 0 7 14" fill="none"
    stroke="#959595" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 1 6 7 1 13"/>
  </svg>
)

export default function MyPage() {
  return (
    <div className="phone">
      <div className="top-frame">
        <div className="status-bar" />
      </div>

      <main className="main-scroll">
        <div className="page-title-wrap">
          <h1 className="page-title">마이페이지</h1>
        </div>

        <div className="profile-wrap">
          <div className="profile-avatar">
            <img src="/img/my_cat.png" alt="프로필" />
          </div>
        </div>

        <div className="savings-stat-card">
          <div className="stat-item">
            <p className="stat-num">54,300<span className="stat-unit">원</span></p>
            <p className="stat-desc">이번 주 절약</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <p className="stat-num">3<span className="stat-unit">개</span></p>
            <p className="stat-desc">참여 챌린지</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <p className="stat-num">7<span className="stat-unit">일</span></p>
            <p className="stat-desc">절약 연속일</p>
          </div>
        </div>

        <div className="menu-card">
          {menuItems.map((m, i) => (
            <div key={m.label}>
              <a href="#" className="menu-item">
                <div className="menu-left">
                  <img className="menu-icon" src={m.icon} alt={m.label} />
                  <span className="menu-text">{m.label}</span>
                </div>
                <ChevronSVG />
              </a>
              {i < menuItems.length - 1 && <div className="menu-divider" />}
            </div>
          ))}
        </div>

        <div className="sub-links">
          <a href="#" className="sub-link">신고하기</a>
          <a href="#" className="sub-link">로그아웃</a>
        </div>
      </main>

      <BottomNav />
      <div className="home-indicator" />
    </div>
  )
}
