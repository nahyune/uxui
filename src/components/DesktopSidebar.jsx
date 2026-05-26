import { useState } from 'react'

export default function DesktopSidebar() {
  const [size, setSize] = useState(430)
  const [guide, setGuide] = useState(false)

  const apply = (s) => {
    setSize(s)
    document.documentElement.classList.toggle('preview-360', s === 360)
  }

  const toggleGuide = () => {
    const next = !guide
    setGuide(next)
    document.documentElement.classList.toggle('guide-mode', next)
  }

  return (
    <div className="ds-sidebar">
      <img src="/img/logo_white.png" className="ds-logo" alt="MOA" />

      <div className="ds-headline">
        <p>소비를 기록하면</p>
        <p><span className="ds-highlight">진짜 절약</span>이 보여요</p>
      </div>

      <p className="ds-sub">
        매일 한 번의 체크와 챌린지로 만드는<br />
        가장 쉬운 절약 습관, MOA
      </p>

      <div className="ds-size-btns">
        <button className={`ds-btn${size === 430 ? ' active' : ''}`} onClick={() => apply(430)}>430</button>
        <button className={`ds-btn${size === 360 ? ' active' : ''}`} onClick={() => apply(360)}>360</button>
      </div>

      <button className={`ds-guide-btn${guide ? ' active' : ''}`} onClick={toggleGuide}>
        <span className="ds-guide-dot" />
        클릭 가이드 {guide ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}
