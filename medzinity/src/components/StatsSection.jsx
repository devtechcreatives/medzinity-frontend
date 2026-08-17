import { stats } from '../data/content.js'
import AnimatedCounter from './AnimatedCounter.jsx'
import { useReveal } from '../hooks/useReveal.js'

function StatsSection({ eyebrow, title }) {
  const { ref, visible } = useReveal({ threshold: 0.4 })

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        {(eyebrow || title) && (
          <div className="stats-head">
            {eyebrow && <span className="eyebrow on-dark">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} active={visible} />
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
