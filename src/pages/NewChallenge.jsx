import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const cats = ['전체', '식비', '교통', '의료', '쇼핑', '카페', '여가', '생활', '기타']

function useDragScroll() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let isDown = false, startX = 0, scrollLeft = 0, hasDragged = false
    const onMouseDown = e => { isDown = true; hasDragged = false; startX = e.pageX; scrollLeft = el.scrollLeft; el.style.cursor = 'grabbing'; e.preventDefault() }
    const onMouseUp = () => { isDown = false; el.style.cursor = 'grab' }
    const onMouseMove = e => { if (!isDown) return; e.preventDefault(); const dx = e.pageX - startX; if (Math.abs(dx) > 3) hasDragged = true; el.scrollLeft = scrollLeft - dx }
    const onClick = e => { if (hasDragged) { e.preventDefault(); e.stopPropagation(); hasDragged = false } }
    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('click', onClick, true)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove, { passive: false })
    el.style.cursor = 'grab'
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('click', onClick, true)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  return ref
}

export default function NewChallenge() {
  const [cat, setCat]         = useState(0)
  const catRef = useDragScroll()
  const [title, setTitle]     = useState('')
  const [amount, setAmount]   = useState('')
  const [intro, setIntro]     = useState('')
  const [startDate, setStart] = useState('')
  const [endDate,   setEnd]   = useState('')
  const startRef = useRef(null)
  const endRef   = useRef(null)

  const fmt = v => v ? v.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1.$2.$3') : ''

  return (
    <div className="phone nc-phone">

      {/* 헤더 */}
      <div className="ct-header">
        <div className="status-bar" />
        <div className="ct-header-nav">
          <div className="ct-header-left">
            <Link to="-1" onClick={e => { e.preventDefault(); window.history.back() }} className="pg-back">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 스크롤 영역 */}
      <div className="main-scroll nc-scroll">

        {/* 폼 카드 */}
        <div className="nc-card">

          {/* 제목 — 🔥 새 챌린지 만들기 */}
          <div className="nc-card-header">
            <img src="/img/challenge_fire.png" alt="" width="26" height="26" style={{ objectFit:'contain' }} />
            <span className="nc-card-title">새 챌린지 만들기</span>
          </div>

          {/* 카테고리 — 소비올리기와 동일 스타일 */}
          <div className="add-cat-scroll nc-cat-override" ref={catRef}>
            {cats.map((c, i) => (
              <button
                key={c}
                className={`add-cat-btn${cat === i ? ' active' : ''}`}
                onClick={() => setCat(i)}
              >{c}</button>
            ))}
          </div>

          {/* 폼 필드 */}
          <div className="nc-fields">

            <div className="nc-field-group">
              <label className="nc-field-label">챌린지 제목</label>
              <div className="nc-field-line">
                <input
                  type="text"
                  className="nc-field-input"
                  placeholder="챌린지 이름을 입력하세요"
                  maxLength={20}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="nc-field-group">
              <label className="nc-field-label">목표 금액</label>
              <div className="nc-field-line">
                <input
                  type="number"
                  className="nc-field-input"
                  placeholder="1,000원 단위로 입력 가능"
                  min={1000} step={1000}
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="nc-field-group">
              <label className="nc-field-label">기간</label>
              <div className="nc-date-row">
                <div className="nc-date-field">
                  <input
                    type="text"
                    className="nc-date-input"
                    placeholder="시작일"
                    readOnly
                    value={fmt(startDate)}
                  />
                  <button className="nc-cal-btn" onClick={() => startRef.current?.showPicker?.()}>
                    <img src="/img/challenge_calender.png" alt="" width="15" height="15" style={{ objectFit:'contain' }} />
                  </button>
                  <input type="date" ref={startRef} className="nc-hidden-date" onChange={e => setStart(e.target.value)} />
                </div>
                <div className="nc-date-field">
                  <input
                    type="text"
                    className="nc-date-input"
                    placeholder="종료일"
                    readOnly
                    value={fmt(endDate)}
                  />
                  <button className="nc-cal-btn" onClick={() => endRef.current?.showPicker?.()}>
                    <img src="/img/challenge_calender.png" alt="" width="15" height="15" style={{ objectFit:'contain' }} />
                  </button>
                  <input type="date" ref={endRef} className="nc-hidden-date" onChange={e => setEnd(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="nc-field-group">
              <label className="nc-field-label">챌린지 소개</label>
              <div className="nc-field-line">
                <input
                  type="text"
                  className="nc-field-input"
                  placeholder="챌린지를 소개해주세요"
                  maxLength={200}
                  value={intro}
                  onChange={e => setIntro(e.target.value)}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA 버튼 */}
      <div className="nc-cta-wrap">
        <button className="nc-cta-btn">챌린지 시작하기</button>
      </div>

    </div>
  )
}
