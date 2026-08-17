import { IconArrow } from './icons.jsx'
import Reveal from './Reveal.jsx'

function InsightCard({ insight, delay, featured = false }) {
  return (
    <Reveal as="article" className={`insight-card-lg ${featured ? 'featured' : ''}`} delay={delay}>
      <div className="insight-meta">
        <span className="insight-category">{insight.category}</span>
        <span className="insight-date">{insight.date}</span>
      </div>
      <h3>{insight.title}</h3>
      <p>{insight.excerpt}</p>
      <a href={insight.url} target="_blank" rel="noopener noreferrer" className="card-link">
        Read More <IconArrow width={13} height={13} />
      </a>
    </Reveal>
  )
}

export default InsightCard
