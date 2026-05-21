import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function applyPhoneScale() {
  const sw = Math.min(screen.width, screen.height)
  const viewport = document.querySelector('meta[name=viewport]')
  if (sw < 430) {
    const scale = (sw / 430).toFixed(4)
    viewport.content = `width=430,initial-scale=${scale},viewport-fit=cover`
    document.documentElement.style.setProperty('--phone-scale', scale)
  } else {
    viewport.content = 'width=device-width,initial-scale=1.0,viewport-fit=cover'
    document.documentElement.style.setProperty('--phone-scale', 1)
  }
}

applyPhoneScale()
window.addEventListener('resize', applyPhoneScale)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
