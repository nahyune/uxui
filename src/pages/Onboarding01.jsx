import { useNavigate } from 'react-router-dom'
import '../styles/ob1-figma.css'

export default function Onboarding01() {
  const navigate = useNavigate()

  return (
    <div className="ob1-phone" onClick={() => navigate('/onboarding/2')}>

      {/* 헤드라인 */}
      <div className="ob1-text">
        <p>
          <span>무심코 나가는 </span>
          <span className="ob1-accent">소비</span>
          <span>,</span>
        </p>
        <p>생각보다 많지 않나요?</p>
      </div>

      {/* 고양이 이미지 */}
      <div className="ob1-cat">
        <img src="/img/on_01.png" alt="" />
      </div>

      {/* 홈 인디케이터 */}
      <div className="ob1-indicator" />

    </div>
  )
}
