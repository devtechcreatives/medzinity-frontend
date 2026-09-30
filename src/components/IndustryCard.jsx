import { Link } from 'react-router-dom'
import * as Icons from './icons.jsx'
import Reveal from './Reveal.jsx'

function IndustryCard({ industry, delay }) {
  const Icon = Icons[industry.icon] || Icons.IconBuilding
  return (
    <Reveal as="article" className="industry-card-lg" delay={delay}>
      <div className="card-icon">
        <Icon width={24} height={24} />
      </div>
      <h3>{industry.title}</h3>
      <p>{industry.shortDesc}</p>
      {industry.capabilities && (
        <ul className="capability-list">
          {industry.capabilities.slice(0, 4).map((cap) => (
            <li key={cap}>{cap}</li>
          ))}
        </ul>
      )}
      <Link to={`/industries/${industry.slug}`} className="card-link">
        Learn More <Icons.IconArrow width={13} height={13} />
      </Link>
    </Reveal>
  )
}

export default IndustryCard
