import { services } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { useSEO } from '../hooks/useSEO.js'

function Services() {
  useSEO(
    'Solutions | Medzinity',
    'Seven solutions on one clinical foundation: medical-legal, RCM, LPO, AI & automation, CRM, product life cycle and pharmacovigilance.'
  )

  return (
    <>
      <PageHero
        crumb="Solutions"
        eyebrow="Solutions"
        title="Seven solutions. One clinical foundation."
        lede="From medical record review to revenue cycle management to pharmacovigilance, every Medzinity solution is built on expert reading of clinical information."
      />

      <section className="section">
        <div className="container grid-3">
          {services.map((service, i) => (
            <ServiceCard service={service} index={i} key={service.slug} delay={(i % 3) + 1} basePath="/solutions" />
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader
            eyebrow="How Our Solutions Connect"
            title="How our solutions connect"
            description="Clinical intelligence built for a legal case feeds the legal support around it. The clinical documentation behind care is the same documentation behind every claim. Technology runs underneath, speeding up each step."
          />
          <Reveal>
            <p style={{ color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75, maxWidth: 700 }}>
              That&rsquo;s why clients work with one Medzinity team rather than separate vendors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTASection />
        </div>
      </section>
    </>
  )
}

export default Services
