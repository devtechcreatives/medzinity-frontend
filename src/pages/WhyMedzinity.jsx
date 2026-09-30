import { whyMedzinity } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

function WhyMedzinity() {
  useSEO(
    'Why Medzinity',
    'Clinical reviewers, work product built for use, and one accountable team across connected services.'
  )

  return (
    <>
      <PageHero
        crumb="Why Medzinity"
        eyebrow="About"
        title="Why Medzinity"
        lede="What makes working with Medzinity different &mdash; and what it means for your cases, revenue and operations."
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="One team that reads the record closely"
            title="Six reasons to work with Medzinity"
          />
          <div className="grid-3">
            {whyMedzinity.reasons.map(({ title, desc }, i) => (
              <Reveal as="div" className="card" key={title} delay={(i % 3) + 1}>
                <span className="card-step">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader
            eyebrow="How We Compare"
            title="How we compare"
            description="Many providers offer one capability &mdash; records, billing, staffing or software. We connect clinical understanding to the legal, financial and operational work that depends on it."
          />
          <div className="comparison-table" style={{ marginTop: 32 }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.96rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '14px 18px', color: 'var(--text-soft)', fontWeight: 600 }}>vs.</th>
                    <th style={{ textAlign: 'left', padding: '14px 18px', color: 'var(--text-soft)', fontWeight: 600 }}>Their approach</th>
                    <th style={{ textAlign: 'left', padding: '14px 18px', color: 'var(--text-soft)', fontWeight: 600 }}>Medzinity</th>
                  </tr>
                </thead>
                <tbody>
                  {whyMedzinity.comparisons.map(({ competitor, theirApproach, ourApproach }) => (
                    <tr key={competitor} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 600 }}>{competitor}</td>
                      <td style={{ padding: '14px 18px', color: 'var(--text-soft)' }}>{theirApproach}</td>
                      <td style={{ padding: '14px 18px' }}>{ourApproach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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

export default WhyMedzinity
