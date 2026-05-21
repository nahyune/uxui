import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../styles/pages.css'

const notifications = [
  { id:1, unread:true,  msg:'소비 기록 챌린지 📝 D-1!\n내일까지예요, 마지막까지 함께해요 💪', time:'5분 전' },
  { id:2, unread:true,  msg:'🔥 순위가 올랐어요!\n지금 5위예요, 이대로 유지해볼까요?',         time:'1시간 전' },
  { id:3, unread:false, msg:'아직 오늘 기록이 없어요 ✍️\n지금 체크하고 챌린지 이어가요!',      time:'어제' },
  { id:4, unread:false, msg:'이번 주 리포트가 도착했어요 📊\n얼마나 절약했는지 확인해보세요!', time:'2일 전' },
]

export default function Notification() {
  return (
    <div className="phone noti-phone-pg">

      {/* 헤더 — white bg, gap 28px */}
      <div className="noti-hdr">
        <div className="noti-status-bar">
          <span className="noti-time-status">9:35</span>
          <img src="/img/bell-off.png" alt="" width="17" height="17" style={{ objectFit:'contain' }} />
        </div>
        <div className="noti-pg-header">
          <Link to="/home" className="noti-back-row">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 1 1 9 9 17"/>
            </svg>
            <span className="noti-pg-title">알림</span>
          </Link>
        </div>
      </div>

      {/* 알림 목록 */}
      <div className="main-scroll noti-list-pg">
        {notifications.map(n => (
          <div className="noti-card-pg" key={n.id}>
            <span className={`noti-dot${n.unread ? ' unread' : ''}`} />
            <div className="noti-text-pg">
              <p className="noti-msg-pg">
                {n.msg.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
              <p className="noti-time-pg">{n.time}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
