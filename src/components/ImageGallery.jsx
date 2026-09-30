import { useEffect, useState } from 'react'
import * as Icons from './icons.jsx'

function ImageGallery({ images, title }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || images.length < 2) return undefined
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [paused, images.length])

  if (!images || images.length === 0) return null

  const go = (dir) => setActive((i) => (i + dir + images.length) % images.length)

  return (
    <div
      className="image-gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {title && <h3 className="image-gallery-title">{title}</h3>}

      <div className="image-gallery-viewport">
        {images.map((src, i) => (
          <div
            key={i}
            className={`gallery-slide ${i === active ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="gallery-controls">
          <div className="gallery-dots" role="tablist" aria-label="Gallery slides">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show image ${i + 1}`}
                className={`gallery-dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div className="gallery-arrows">
            <button type="button" className="gallery-arrow" aria-label="Previous image" onClick={() => go(-1)}>
              <Icons.IconArrow width={14} height={14} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button type="button" className="gallery-arrow" aria-label="Next image" onClick={() => go(1)}>
              <Icons.IconArrow width={14} height={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
