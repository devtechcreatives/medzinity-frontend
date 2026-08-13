import { Link } from 'react-router-dom'
import * as Icons from './icons.jsx'
import Reveal from './Reveal.jsx'

function ServiceCard({ service, index = 0, delay }) {
  const Icon = Icons[service.icon] || Icons.IconDoc
  return (
    <Reveal as="article" className="service-card" delay={delay}>
      <div className="service-card-top">
        <span className="service-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div className="card-icon">
          <Icon width={24} height={24} />
        </div>
      </div>
      <h3>{service.title}</h3>
      <p>{service.shortDesc}</p>
      <Link to={`/services/${service.slug}`} className="card-link">
        Learn More <Icons.IconArrow width={13} height={13} />
      </Link>
    </Reveal>
  )
}

export default ServiceCard
