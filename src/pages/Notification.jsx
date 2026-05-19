import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../../css/notification.css'

const notifications = [
  { id: 1, unread: true,  msg: '소비 기록 챌린지 📝 <strong>D-1!</strong>\n내일까지예요, 마지막까지 함께해요 💪', time: '5분 전' },
  { id: 2, unread: true,  msg: '🔥 순위가 올랐어요!\n지금 5위예요, 이대로 유지해볼까요?',          time: '1시간 전' },
  { id: 3, unread: false, msg: '아직 오늘 기록이 없어요 ✍️\n지금 체크하고 챌린지 이어가요!',      time: '어제' },
  { id: 4, unread: false, msg: '이번 주 리포트가 도착했어요 📊\n얼마나 절약했는지 확인해보세요!', time: '2일 전' },
]

export default function Notification() {
  return (
    <div className="screen">
      <div className="header">
        <div className="status-bar" />
        <div className="page-header">
          <Link to="/home" className="back-row" aria-label="뒤로가기">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
              stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 1 1 9 9 17"/>
            </svg>
            <span className="page-title">알림</span>
          </Link>
        </div>
      </div>

      <main className="noti-list">
        {notifications.map(n => (
          <div className="noti-card" key={n.id}>
            <span className={`dot${n.unread ? ' unread' : ''}`} />
            <div className="noti-text">
              <p className="noti-msg">
                {n.msg.split('\n').map((line, i, arr) => (
                  <span key={i} dangerouslySetInnerHTML={{ __html: line + (i < arr.length - 1 ? '<br/>' : '') }} />
                ))}
              </p>
              <p className="noti-time">{n.time}</p>
            </div>
          </div>
        ))}
      </main>

      <div className="home-indicator" />
    </div>
  )
}
