import { useState } from 'react'

export default function SizeToggle() {
  const [size, setSize] = useState(430)

  const apply = (s) => {
    setSize(s)
    if (s === 360) {
      document.documentElement.classList.add('preview-360')
    } else {
      document.documentElement.classList.remove('preview-360')
    }
  }

  return (
    <div className="size-toggle">
      <button className={`size-btn${size === 430 ? ' active' : ''}`} onClick={() => apply(430)}>430</button>
      <button className={`size-btn${size === 360 ? ' active' : ''}`} onClick={() => apply(360)}>360</button>
    </div>
  )
}
