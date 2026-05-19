import { Link } from 'react-router-dom'
import '../styles/ob-welcome.css'

export default function OnboardingWelcome() {
  return (
    <div className="ob-welcome-phone">

      {/* 제목 */}
      <p className="ob-welcome-title">가입을 환영합니다!</p>

      {/* 고양이 + 컨페티 이미지 */}
      <div className="ob-welcome-cat">
        <img src="/img/welcome_cat.png" alt="" />
      </div>

      {/* 홈으로 버튼 */}
      <Link to="/home" className="ob-welcome-btn">
        <span className="ob-welcome-btn-text">홈으로</span>
      </Link>

    </div>
  )
}
