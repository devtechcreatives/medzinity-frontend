import { useParams, Navigate } from 'react-router-dom'
import { industries } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import { useSEO } from '../hooks/useSEO.js'

function IndustryDetail() {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug)

  useSEO(
    industry ? `${industry.title} | Medzinity` : 'Industry | Medzinity',
    industry?.shortDesc
  )

  if (!industry) return <Navigate to="/industries" replace />

  return (
    <>
      <PageHero crumb={industry.title} eyebrow="Industries" title={industry.title} />

      <section className="section">
        <div className="container split-section">
          <Reveal>
            {industry.quotes?.map((quote) => (
              <p className="quote-block" key={quote}>&ldquo;{quote}&rdquo;</p>
            ))}
            {industry.body.map((paragraph, i) => (
              <p
                key={paragraph}
                style={{ marginTop: i === 0 && !industry.quotes ? 0 : 16, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {industry.expertise && (
              <Reveal delay={2} as="div" className="card">
                <h3>Areas of Expertise</h3>
                <ul className="capability-list" style={{ marginTop: 18 }}>
                  {industry.expertise.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            <Reveal delay={3} as="div" className="card">
              <h3>What We Help With</h3>
              <ul className="capability-list" style={{ marginTop: 18 }}>
                {industry.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </Reveal>
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

export default IndustryDetail
