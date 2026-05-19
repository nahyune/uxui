import { Link } from 'react-router-dom'
import '../styles/ob-welcome.css'

export default function OnboardingWelcome() {
  return (
    <div className="ob-welcome-phone">

      {/* 제목 */}
      <div className="ob-welcome-top">
        <p className="ob-welcome-title">가입을 환영합니다!</p>
      </div>

      {/* 고양이 + 컨페티 레이어 */}
      <div className="ob-welcome-cat">
        <div className="ob-welcome-cat-wrap">
          {/* 컨페티 — 뒤에서 터지는 이펙트 */}
          <img
            src="/img/on_cat02.png"
            className="ob-welcome-confetti-img"
            alt=""
          />
          {/* 고양이 — 정적, 컨페티 위에 */}
          <img
            src="/img/on_cat.png"
            className="ob-welcome-cat-img"
            alt=""
          />
        </div>
      </div>

      {/* 버튼 */}
      <div className="ob-welcome-bottom">
        <Link to="/home" className="ob-welcome-btn">
          <span className="ob-welcome-btn-text">홈으로</span>
        </Link>
      </div>

    </div>
  )
}
