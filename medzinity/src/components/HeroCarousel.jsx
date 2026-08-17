import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from './icons.jsx'

function HeroCarousel({ slides, cards }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return undefined
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 6500)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const goTo = (i) => setActive((i + slides.length) % slides.length)
  const slide = slides[active]

  return (
    <section className="hero-banner">
      <div className="hero-banner-shape" aria-hidden="true">
        <div className="hero-banner-slides">
          {slides.map((s, i) => (
            <div
              key={s.image}
              className={`hero-slide-bg ${i === active ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
          ))}
        </div>
        <div className="hero-banner-scrim" />
      </div>

      <div className="container hero-banner-row">
        <div
          className="hero-banner-inner"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hero-slide-content" key={active}>
            <span className="hero-banner-eyebrow">{slide.eyebrow}</span>
            <h1 className="hero-banner-title">{slide.title}</h1>
            <p className="hero-banner-lede">{slide.lede}</p>
            <div className="hero-banner-actions">
              <Link to={slide.primaryTo} className="btn-bubble">{slide.primaryLabel}</Link>
              <Link to={slide.secondaryTo} className="btn-discover">
                {slide.secondaryLabel} <Icons.IconArrow width={14} height={14} />
              </Link>
            </div>
          </div>

          {slides.length > 1 && (
            <div className="hero-carousel-controls">
              <div className="hero-dots" role="tablist" aria-label="Slides">
                {slides.map((s, i) => (
                  <button
                    key={s.image}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
                    className={`hero-dot ${i === active ? 'is-active' : ''}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
              <div className="hero-arrows">
                <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={() => goTo(active - 1)}>
                  <Icons.IconArrow width={14} height={14} style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button type="button" className="hero-arrow" aria-label="Next slide" onClick={() => goTo(active + 1)}>
                  <Icons.IconArrow width={14} height={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {cards && cards.length > 0 && (
        <div className="hero-cards-wrap">
          <div className="container">
            <div className="hero-cards">
              {cards.map((item) => {
                const CardTag = item.to ? Link : 'a'
                const linkProps = item.to
                  ? { to: item.to }
                  : { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                return (
                  <CardTag className="hero-card" key={item.title} {...linkProps}>
                    <div className="hero-card-body">
                      <span className="hero-card-tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="hero-card-media" style={{ backgroundImage: `url(${item.image})` }}>
                      <svg className="hero-card-mark" width="22" height="13" viewBox="0 0 34 20" fill="none" aria-hidden="true">
                        <path
                          d="M9 4a6 6 0 1 0 0 12 8.2 8.2 0 0 0 6-2.7 8.2 8.2 0 0 0 6 2.7 6 6 0 1 0 0-12 8.2 8.2 0 0 0-6 2.7A8.2 8.2 0 0 0 9 4Z"
                          stroke="#ffffff"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <Icons.IconArrow className="hero-card-arrow" width={14} height={14} />
                    </div>
                  </CardTag>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroCarousel
