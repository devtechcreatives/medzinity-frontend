import { values, principles, ensure, aboutContent, compliance } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import ImageGallery from '../components/ImageGallery.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

function AboutUs() {
  useSEO(
    'About Medzinity',
    'Medzinity turns complex clinical, legal and operational information into decision-ready intelligence. Our story and values.'
  )

  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Medzinity"
        title="About Medzinity"
        lede="Medzinity turns complex clinical, legal and operational information into decision-ready intelligence."
      />

      <section id="story" className="section">
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Built on the medical record</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', marginTop: 14 }}>
              Our Story
            </h2>
            {aboutContent.story.map((paragraph, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 20 : 14, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
                {paragraph}
              </p>
            ))}
          </Reveal>
          <div className="split-art" aria-hidden="true">
            <svg viewBox="0 0 220 160" width="82%" fill="none">
              <rect x="14" y="14" width="192" height="132" rx="18" fill="var(--white)" stroke="var(--border)" />
              <circle cx="52" cy="52" r="16" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="1.6" />
              <path d="M44 52h16M52 44v16" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" />
              <rect x="82" y="40" width="104" height="9" rx="4.5" fill="var(--border)" />
              <rect x="82" y="58" width="76" height="9" rx="4.5" fill="var(--border)" />
              <rect x="26" y="92" width="168" height="9" rx="4.5" fill="var(--primary-light)" />
              <rect x="26" y="110" width="130" height="9" rx="4.5" fill="var(--bg-deep)" />
              <rect x="26" y="128" width="96" height="9" rx="4.5" fill="var(--border)" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-section reverse">
          <Reveal>
            <span className="eyebrow">Mission, Vision & Purpose</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              What drives us
            </h2>
            <div style={{ marginTop: 24 }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>Mission</h3>
              <p style={{ color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75, marginBottom: 24 }}>
                {aboutContent.mission}
              </p>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>Vision</h3>
              <p style={{ color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75, marginBottom: 24 }}>
                {aboutContent.vision}
              </p>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>Purpose</h3>
              <p style={{ color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
                {aboutContent.purpose}
              </p>
            </div>
          </Reveal>
          <div className="split-art" aria-hidden="true">
            <svg viewBox="0 0 220 160" width="70%" fill="none">
              <circle cx="110" cy="80" r="46" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
              <circle cx="110" cy="80" r="30" stroke="var(--mid-blue)" strokeWidth="2" opacity="0.6" />
              <circle cx="110" cy="80" r="6" fill="var(--navy)" />
            </svg>
          </div>
        </div>
      </section>

      <section id="values" className="section">
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Values</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              What We Believe
            </h2>
            <div className="value-list" style={{ marginTop: 32 }}>
              {values.map(({ title, desc }) => (
                <div className="value-item" key={title}>
                  <div className="card-icon"><Icons.IconCheck width={20} height={20} /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <span className="eyebrow">Our Approach</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              How We Operate
            </h2>
            <ol className="principles-list" style={{ marginTop: 32 }}>
              {principles.map((p, i) => (
                <li key={p}>
                  <span className="principle-num">{String(i + 1).padStart(2, '0')}</span>
                  {p}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="ensure" className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="What We Ensure" title="Confidentiality is the default, not an add-on" />
          <div className="grid-3">
            {ensure.map(({ icon, title, desc }, i) => {
              const Icon = Icons[icon]
              return (
                <Reveal as="div" className="card" key={title} delay={(i % 3) + 1}>
                  <div className="card-icon"><Icon width={22} height={22} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="compliance" className="section">
        <div className="container">
          <SectionHeader eyebrow="Quality, Security & Compliance" title={compliance.title} />
          <div className="split-section">
            <Reveal>
              <p style={{ color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
                {compliance.description}
              </p>
            </Reveal>
            <Reveal delay={2}>
              <ImageGallery images={compliance.images} />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="cta" className="section section-soft">
        <div className="container">
          <CTASection />
        </div>
      </section>
    </>
  )
}

export default AboutUs
