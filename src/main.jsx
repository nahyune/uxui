import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function applyPhoneScale() {
  const scale = window.innerWidth <= 429
    ? Math.min(window.innerWidth / 430, window.innerHeight / 932)
    : 1
  document.documentElement.style.setProperty('--phone-scale', scale)
}

applyPhoneScale()
window.addEventListener('resize', applyPhoneScale)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
