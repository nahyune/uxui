import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const { pathname } = useLocation()
  const cls = (p) => `nav-item${pathname === p ? ' active' : ''}`

  return (
    <nav className="bottom-nav">
      <Link to="/home" className={cls('/home')}>
        <span className="nav-icon-wrap">
          <img src={pathname === '/home' ? '/img/home_02.png' : '/img/home.png'} className="nav-icon-home" alt="홈" />
        </span>
        <span className="nav-label">홈</span>
      </Link>
      <Link to="/check" className={cls('/check')}>
        <span className="nav-icon-wrap">
          <img src={pathname === '/check' ? '/img/check_02.png' : '/img/check.png'} className="nav-icon-check" alt="소비체크" />
        </span>
        <span className="nav-label">소비체크</span>
      </Link>
      <Link to="/challenge" className={cls('/challenge')}>
        <span className="nav-icon-wrap">
          <img src={pathname === '/challenge' ? '/img/challenge_02.png' : '/img/challenge.png'} className="nav-icon-challenge" alt="챌린지" />
        </span>
        <span className="nav-label">챌린지</span>
      </Link>
      <Link to="/chat" className={cls('/chat')}>
        <span className="nav-icon-wrap">
          <img src={pathname === '/chat' ? '/img/chatting_02.png' : '/img/chatting.png'} className="nav-icon-chat" alt="채팅" />
        </span>
        <span className="nav-label">채팅</span>
      </Link>
      <Link to="/my" className={cls('/my')}>
        <span className="nav-icon-wrap">
          <img src={pathname === '/my' ? '/img/mypage_02.png' : '/img/mypage.png'} className="nav-icon-my" alt="마이" />
        </span>
        <span className="nav-label">마이</span>
      </Link>
    </nav>
  )
}
