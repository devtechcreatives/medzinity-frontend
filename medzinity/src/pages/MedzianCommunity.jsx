import { communityPillars, communityActivities } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import { useSEO } from '../hooks/useSEO.js'

function MedzianCommunity() {
  useSEO(
    'Medzian Community | Medzinity',
    'Medzinity is a fast-paced, entrepreneurial company with a strong culture of innovation and collaboration.'
  )

  return (
    <>
      <PageHero
        crumb="Medzian Community"
        eyebrow="Medzian Community"
        title="Medzian Community"
        lede="Medzinity is a fast-paced, entrepreneurial company with a strong culture of innovation and collaboration."
      />

      <section className="section">
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Culture</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', marginTop: 14 }}>
              A workplace built to thrive and grow
            </h2>
            <p style={{ marginTop: 20, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              We are committed to creating a workplace where our team can
              thrive and grow. We offer a competitive salary and benefits
              package, as well as opportunities for professional development
              and advancement.
            </p>
            <p style={{ marginTop: 14, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              We ensure the community is inclusive and open to all team
              members with a diverse range of backgrounds, job roles, and
              interests to create a vibrant and welcoming environment.
            </p>
          </Reveal>
          <div className="split-art" aria-hidden="true">
            <svg viewBox="0 0 220 160" width="80%" fill="none">
              <circle cx="70" cy="60" r="20" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="1.6" />
              <circle cx="140" cy="50" r="14" fill="var(--bg-deep)" stroke="var(--mid-blue)" strokeWidth="1.6" />
              <circle cx="110" cy="110" r="17" fill="var(--primary-light)" stroke="var(--navy)" strokeWidth="1.6" />
              <path d="M70 60 140 50M140 50 110 110M110 110 70 60" stroke="var(--border-strong)" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="How We Build Community" title="What holds Medzian Community together" />
          <div className="grid-3">
            {communityPillars.map((pillar, i) => (
              <Reveal as="div" className="card" key={pillar.title} delay={(i % 3) + 1}>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Activities" title="Community activities & events" />
          <Reveal className="activity-tags">
            {communityActivities.map((activity) => (
              <span className="tag" key={activity}>{activity}</span>
            ))}
          </Reveal>
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

export default MedzianCommunity
