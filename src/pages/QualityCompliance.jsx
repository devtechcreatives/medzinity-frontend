import { qualitySecurityCompliance } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import ImageGallery from '../components/ImageGallery.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

function QualityCompliance() {
  useSEO(
    'Quality, Security & Compliance | Medzinity',
    'How Medzinity protects quality, patient data and privileged information across every engagement.'
  )

  return (
    <>
      <PageHero
        crumb="Quality, Security & Compliance"
        eyebrow="About"
        title="Quality, Security & Compliance"
        lede="How we protect quality, data and privileged information across every engagement."
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <Reveal as="div" className="card" delay={1}>
              <div className="card-icon"><Icons.IconCheck width={22} height={22} /></div>
              <h3>Quality Assurance</h3>
              <p>{qualitySecurityCompliance.qualityAssurance}</p>
            </Reveal>
            <Reveal as="div" className="card" delay={2}>
              <div className="card-icon"><Icons.IconPulse width={22} height={22} /></div>
              <h3>Human Review</h3>
              <p>{qualitySecurityCompliance.humanReview}</p>
            </Reveal>
            <Reveal as="div" className="card" delay={3}>
              <div className="card-icon"><Icons.IconShield width={22} height={22} /></div>
              <h3>Confidentiality</h3>
              <p>{qualitySecurityCompliance.confidentiality}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader
            eyebrow="Compliance"
            title="Confidentiality is the default, not an add-on"
            description="Protected health information and privileged material are treated as the default risk in every engagement."
          />
          <Reveal>
            <ImageGallery images={qualitySecurityCompliance.images} />
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

export default QualityCompliance
