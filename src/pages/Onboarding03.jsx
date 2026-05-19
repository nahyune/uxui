import { Link } from 'react-router-dom'
import '../styles/ob3-figma.css'

export default function Onboarding03() {
  return (
    <div className="ob3-phone">

      {/* MOA 로고 — image 216.png */}
      <div className="ob3-logo">
        <img src="/img/image 216.png" alt="MOA" />
      </div>

      {/* 헤드라인 */}
      <div className="ob3-text">
        <p>
          <span>아끼고</span>
          <span className="ob3-accent-green">, </span>
        </p>
        <p>
          <span>기록하고</span>
          <span className="ob3-accent-orange">,</span>
        </p>
        <p>
          함께 바꾸는<br />
          소비 습관 챌린지
        </p>
      </div>

      {/* SNS 로그인 섹션 */}
      <div className="ob3-sns-section">

        <div className="ob3-sns-group">
          <p className="ob3-sns-label">SNS 계정으로 간편 가입하기</p>

          <div className="ob3-btn-row">
            {/* 카카오 */}
            <Link to="/welcome" className="ob3-sns-btn ob3-btn-kakao" aria-label="카카오로 시작하기">
              <img src="/img/kakao.png" alt="카카오" />
            </Link>

            {/* 네이버 */}
            <Link to="/welcome" className="ob3-sns-btn ob3-btn-naver" aria-label="네이버로 시작하기">
              <img src="/img/naver.png" alt="네이버" />
            </Link>

            {/* 애플 */}
            <Link to="/welcome" className="ob3-sns-btn ob3-btn-apple" aria-label="Apple로 시작하기">
              <img src="/img/apple.png" alt="Apple" />
            </Link>

            {/* 구글 */}
            <Link to="/welcome" className="ob3-sns-btn ob3-btn-google" aria-label="Google로 시작하기">
              <img src="/img/google.png" alt="Google" />
            </Link>
          </div>
        </div>

        {/* 로그인 도움말 */}
        <button className="ob3-login-help">로그인에 어려움이 있나요?</button>

      </div>

      {/* 홈 인디케이터 */}
      <div className="ob3-indicator" />

    </div>
  )
}
