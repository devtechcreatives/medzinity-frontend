import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from './icons.jsx'

function useVisibleCount() {
  const getCount = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 560) return 1
    if (window.innerWidth <= 900) return 2
    return 3
  }
  const [count, setCount] = useState(getCount)

  useEffect(() => {
    const onResize = () => setCount(getCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return count
}

function IndustryShowcase({ eyebrow, title, lede, items }) {
  const visible = useVisibleCount()
  const maxIndex = Math.max(0, items.length - visible)
  const [rawIndex, setRawIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const index = Math.min(rawIndex, maxIndex)

  const go = (dir) => setRawIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)))

  useEffect(() => {
    if (paused || maxIndex === 0) return undefined
    const id = setInterval(() => {
      setRawIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 3200)
    return () => clearInterval(id)
  }, [paused, maxIndex])

  return (
    <div className="industry-showcase">
      <div className="industry-intro">
        <span className="industry-intro-eyebrow">{eyebrow}</span>
        <p className="industry-intro-title">{title}</p>
        <p className="industry-intro-lede">{lede}</p>
      </div>

      <div
        className="industry-track-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="industry-track"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {items.map((item) => (
            <Link to={item.to} className="industry-tile" key={item.label} style={{ backgroundImage: `url(${item.image})` }}>
              <span className="industry-tile-label">{item.label}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="industry-arrow industry-arrow-prev"
          aria-label="Previous industries"
          onClick={() => go(-1)}
          disabled={index === 0}
        >
          <Icons.IconArrow width={16} height={16} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button
          type="button"
          className="industry-arrow industry-arrow-next"
          aria-label="Next industries"
          onClick={() => go(1)}
          disabled={index === maxIndex}
        >
          <Icons.IconArrow width={16} height={16} />
        </button>
      </div>
    </div>
  )
}

export default IndustryShowcase
