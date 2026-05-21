import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SizeToggle from './components/SizeToggle'
import Onboarding01 from './pages/Onboarding01'
import Onboarding02 from './pages/Onboarding02'
import Onboarding03 from './pages/Onboarding03'
import OnboardingWelcome from './pages/OnboardingWelcome'
import Home from './pages/Home'
import Check from './pages/Check'
import AddSpending from './pages/AddSpending'
import Challenge from './pages/Challenge'
import ChallengeDetail from './pages/ChallengeDetail'
import ChallengeDetailCafe from './pages/ChallengeDetailCafe'
import Chat from './pages/Chat'
import Chatting from './pages/Chatting'
import ChattingChallenge from './pages/ChattingChallenge'
import ChattingSetting from './pages/ChattingSetting'
import ChattingChallengeSetting from './pages/ChattingChallengeSetting'
import Notification from './pages/Notification'
import Ranking from './pages/Ranking'
import NewChallenge from './pages/NewChallenge'
import MyPage from './pages/MyPage'

export default function App() {
  return (
    <BrowserRouter>
      <SizeToggle />
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding/1" replace />} />
        <Route path="/onboarding/1" element={<Onboarding01 />} />
        <Route path="/onboarding/2" element={<Onboarding02 />} />
        <Route path="/onboarding/3" element={<Onboarding03 />} />
        <Route path="/welcome" element={<OnboardingWelcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/check" element={<Check />} />
        <Route path="/add-spending" element={<AddSpending />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/challenge-detail" element={<ChallengeDetail />} />
        <Route path="/challenge-detail/cafe" element={<ChallengeDetailCafe />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/chatting-challenge" element={<ChattingChallenge />} />
        <Route path="/chatting-setting" element={<ChattingSetting />} />
        <Route path="/chatting-challenge-setting" element={<ChattingChallengeSetting />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/new-challenge" element={<NewChallenge />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
