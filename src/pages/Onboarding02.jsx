import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/ob1-figma.css'
import '../styles/ob2-figma.css'

export default function Onboarding02() {
  const navigate = useNavigate()
  useEffect(() => {
    document.body.style.background = '#fff'
    return () => { document.body.style.background = '' }
  }, [])

  return (
    <div className="ob1-phone" onClick={() => navigate('/onboarding/3')}>

      {/* 헤드라인 */}
      <div className="ob1-text">
        <p>기록하면 보이고,</p>
        <p>줄이면 달라져요</p>
      </div>

      {/* 고양이 이미지 */}
      <div className="ob2-cat">
        <img src="/img/on_02.png" alt="" />
      </div>

      {/* 홈 인디케이터 */}
      <div className="ob1-indicator" />

    </div>
  )
}
