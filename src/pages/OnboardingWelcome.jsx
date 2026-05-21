import { Link } from 'react-router-dom'
import '../styles/ob-welcome.css'

export default function OnboardingWelcome() {
  return (
    <div className="ob-welcome-phone">

      {/* 제목 */}
      <p className="ob-welcome-title">가입을 환영합니다!</p>

      {/* 컨페티 배경 */}
      <img src="/img/on_cat02.png" className="ob-welcome-confetti-img" alt="" />

      {/* 고양이 */}
      <img src="/img/on_cat.png" className="ob-welcome-cat-img" alt="" />

      {/* 시작하기 버튼 */}
      <Link to="/home" className="ob-welcome-btn">
        <span className="ob-welcome-btn-text">시작하기</span>
      </Link>

      {/* 홈 인디케이터 */}
      <div className="ob-welcome-indicator" />

    </div>
  )
}
