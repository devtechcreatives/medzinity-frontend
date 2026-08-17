import { services } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { useSEO } from '../hooks/useSEO.js'

function Services() {
  useSEO(
    'Services | Medzinity',
    'Medzinity services: Medical Records Processing, Revenue Cycle Management, Pharmacovigilance, and Product Life Cycle Management.'
  )

  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Services"
        title="Healthcare support services purpose-built for scale"
        lede="From medical records processing to pharmacovigilance, every service is built to enhance and optimize the healthcare ecosystem."
      />

      <section className="section">
        <div className="container grid-3">
          {services.map((service, i) => (
            <ServiceCard service={service} index={i} key={service.slug} delay={(i % 3) + 1} />
          ))}
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

export default Services
