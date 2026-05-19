import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/new-challenge.css'

const cats = ['전체', '식비', '교통', '의료', '쇼핑', '카페', '여가', '생활', '기타']

export default function NewChallenge() {
  const [activeCat, setActiveCat] = useState(0)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [intro, setIntro] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const startRef = useRef(null)
  const endRef = useRef(null)

  const fmt = (v) => v ? v.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1.$2.$3') : ''

  return (
    <div className="phone">
      <div className="top-header">
        <div className="status-bar" />
        <div className="header-nav">
          <Link to="/chatting-setting" className="back-btn" aria-label="뒤로가기">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
              stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 1 1 9 9 17"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className="scroll-body">
        <div className="form-card">
          <div className="card-title-row">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M12 2c-1.5 3-5 5-5 9a5 5 0 0 0 10 0c0-4-3.5-6-5-9z"
                fill="#F69A21" stroke="#F69A21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14c-1 1.5-2 2.5-2 3.5a2 2 0 0 0 4 0c0-1-.8-2-2-3.5z" fill="#fff" stroke="none"/>
            </svg>
            <span className="card-title">새 챌린지 만들기</span>
          </div>

          <div className="cat-scroll" id="catScroll">
            {cats.map((c, i) => (
              <button key={c} className={`cat-btn${activeCat === i ? ' active' : ''}`}
                data-cat={c} onClick={() => setActiveCat(i)}>{c}</button>
            ))}
          </div>

          <div className="fields">
            <div className="field-group">
              <label className="field-label">챌린지 제목</label>
              <div className="field-input-wrap">
                <input type="text" className="field-input" placeholder="챌린지 이름을 입력하세요"
                  maxLength={20} value={title} onChange={e => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">목표 금액</label>
              <div className="field-input-wrap">
                <input type="number" className="field-input" placeholder="1,000원 단위로 입력 가능"
                  min={1000} step={1000} value={amount} onChange={e => setAmount(e.target.value)} />
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">기간</label>
              <div className="date-row">
                <div className="date-field">
                  <input type="text" className="date-input" id="startDate" placeholder="시작일" readOnly value={fmt(startDate)} />
                  <button className="cal-btn" aria-label="시작일 선택"
                    onClick={() => startRef.current?.showPicker?.() || startRef.current?.click()}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </button>
                  <input type="date" ref={startRef} className="hidden-picker"
                    onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="date-field">
                  <input type="text" className="date-input" id="endDate" placeholder="종료일" readOnly value={fmt(endDate)} />
                  <button className="cal-btn" aria-label="종료일 선택"
                    onClick={() => endRef.current?.showPicker?.() || endRef.current?.click()}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </button>
                  <input type="date" ref={endRef} className="hidden-picker"
                    onChange={e => setEndDate(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">챌린지 소개</label>
              <div className="field-input-wrap">
                <input type="text" className="field-input" placeholder="챌린지를 소개해주세요"
                  maxLength={200} value={intro} onChange={e => setIntro(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-gap" />
      </div>

      <div className="cta-area">
        <button className="cta-btn" id="submitBtn">챌린지 시작하기</button>
        <div className="home-indicator" />
      </div>
    </div>
  )
}
