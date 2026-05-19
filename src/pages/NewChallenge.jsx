import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const cats = ['전체', '식비', '교통', '의료', '쇼핑', '카페', '여가', '생활', '기타']

export default function NewChallenge() {
  const [cat, setCat] = useState(0)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [intro, setIntro] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const startRef = useRef(null)
  const endRef   = useRef(null)

  const fmt = v => v ? v.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1.$2.$3') : ''

  return (
    <div className="phone">
      <div className="nc-top-hdr">
        <div className="status-bar" />
        <div className="nc-hdr-nav">
          <Link to="/chatting-setting" className="pg-back">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 1 1 9 9 17"/></svg>
          </Link>
        </div>
      </div>

      <div className="main-scroll nc-scroll-pg">
        <div className="nc-form-card">
          <div className="nc-title-row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2c-1.5 3-5 5-5 9a5 5 0 0 0 10 0c0-4-3.5-6-5-9z" fill="#F69A21"/>
              <path d="M12 14c-1 1.5-2 2.5-2 3.5a2 2 0 0 0 4 0c0-1-.8-2-2-3.5z" fill="#fff"/>
            </svg>
            <span className="nc-card-title">새 챌린지 만들기</span>
          </div>

          <div className="nc-cat-scroll">
            {cats.map((c, i) => (
              <button key={c} className={`nc-cat-btn${cat === i ? ' active' : ''}`} onClick={() => setCat(i)}>{c}</button>
            ))}
          </div>

          <div className="nc-fields">
            <div className="nc-field-group">
              <label className="nc-field-label">챌린지 제목</label>
              <div className="nc-field-wrap">
                <input type="text" className="nc-field-input" placeholder="챌린지 이름을 입력하세요" maxLength={20} value={title} onChange={e => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="nc-field-group">
              <label className="nc-field-label">목표 금액</label>
              <div className="nc-field-wrap">
                <input type="number" className="nc-field-input" placeholder="1,000원 단위로 입력 가능" min={1000} step={1000} value={amount} onChange={e => setAmount(e.target.value)} />
              </div>
            </div>
            <div className="nc-field-group">
              <label className="nc-field-label">기간</label>
              <div className="nc-date-row">
                <div className="nc-date-field">
                  <input type="text" className="nc-date-input" placeholder="시작일" readOnly value={fmt(startDate)} />
                  <button className="nc-cal-btn" onClick={() => startRef.current?.showPicker?.() || startRef.current?.click()}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </button>
                  <input type="date" ref={startRef} className="nc-hidden-picker" onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="nc-date-field">
                  <input type="text" className="nc-date-input" placeholder="종료일" readOnly value={fmt(endDate)} />
                  <button className="nc-cal-btn" onClick={() => endRef.current?.showPicker?.() || endRef.current?.click()}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </button>
                  <input type="date" ref={endRef} className="nc-hidden-picker" onChange={e => setEndDate(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="nc-field-group">
              <label className="nc-field-label">챌린지 소개</label>
              <div className="nc-field-wrap">
                <input type="text" className="nc-field-input" placeholder="챌린지를 소개해주세요" maxLength={200} value={intro} onChange={e => setIntro(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nc-cta-area-pg">
        <button className="nc-cta-btn-pg">챌린지 시작하기</button>
      </div>
    </div>
  )
}
