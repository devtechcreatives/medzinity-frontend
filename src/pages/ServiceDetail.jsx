import { useParams, Navigate } from 'react-router-dom'
import { services } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  useSEO(
    service ? `${service.title} | Medzinity` : 'Service | Medzinity',
    service?.shortDesc
  )

  if (!service) return <Navigate to="/services" replace />

  const Icon = Icons[service.icon] || Icons.IconDoc

  return (
    <>
      <PageHero crumb={service.title} eyebrow="Services" title={service.title} lede={service.shortDesc} />

      <section className="section">
        <div className="container">
          {service.intro && (
            <Reveal>
              <p style={{ fontSize: 17, color: 'var(--text-soft)', maxWidth: 760, marginBottom: 40, lineHeight: 1.7 }}>
                {service.intro}
              </p>
            </Reveal>
          )}
          <div className="detail-list">
            {service.items.map((item, i) => (
              <Reveal as="div" className="detail-item" key={item.title} delay={(i % 4) + 1}>
                <div className="card-icon"><Icon width={20} height={20} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <CTASection />
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
