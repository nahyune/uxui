import { Link } from 'react-router-dom'
import '../styles/ob-welcome.css'

export default function OnboardingWelcome() {
  return (
    <div className="ob-welcome-phone">

      <div className="ob-welcome-top">
        <p className="ob-welcome-title">가입을 환영합니다!</p>
      </div>

      <div className="ob-welcome-cat">
        <img src="/img/welcome_cat.png" alt="" />
      </div>

      <div className="ob-welcome-bottom">
        <Link to="/home" className="ob-welcome-btn">
          <span className="ob-welcome-btn-text">홈으로</span>
        </Link>
      </div>

    </div>
  )
}
