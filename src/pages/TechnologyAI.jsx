import { technologyAI } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

import aiTechImg1 from '../assets/sections/ai-technology/ai-1.jpg'

function TechnologyAI() {
  useSEO(
    'Technology & AI | Medzinity',
    'How AI and automation speed up our clinical and legal work, and why every output is reviewed by a specialist.'
  )

  return (
    <>
      <PageHero
        crumb="Technology & AI"
        eyebrow="Technology & AI"
        title="Technology & AI"
        lede="AI and automation run through every Medzinity service. Our specialists review every output before it reaches you."
        image={aiTechImg1}
      />

      <section className="section">
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Technology-enabled, not technology-led</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              Technology that speeds up expert judgment &mdash; not replaces it
            </h2>
            <p style={{ marginTop: 20, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              {technologyAI.principle}
            </p>
          </Reveal>
          <div className="split-art" aria-hidden="true">
            <svg viewBox="0 0 220 160" width="78%" fill="none">
              <rect x="20" y="20" width="180" height="120" rx="14" fill="var(--white)" stroke="var(--border)" />
              <circle cx="60" cy="60" r="12" fill="var(--primary-light)" stroke="var(--primary)" strokeWidth="1.4" />
              <path d="M54 60h12M60 54v12" stroke="var(--primary)" strokeWidth="1.4" strokeLinecap="round" />
              <rect x="84" y="52" width="96" height="6" rx="3" fill="var(--border)" />
              <rect x="84" y="64" width="70" height="6" rx="3" fill="var(--border)" />
              <rect x="34" y="92" width="152" height="6" rx="3" fill="var(--primary-light)" />
              <rect x="34" y="106" width="120" height="6" rx="3" fill="var(--bg-deep)" />
              <rect x="34" y="120" width="80" height="6" rx="3" fill="var(--border)" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="Where Technology Works" title="Five areas where technology makes a difference" />
          <div className="grid-3">
            {technologyAI.capabilities.map(({ icon, title, desc }, i) => {
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

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="How It Works" title="AI-assisted processing with human review" />
          <div className="grid-3">
            {technologyAI.pipeline.map(({ title, desc }, i) => (
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
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Our Position</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              Where AI shouldn&rsquo;t be trusted alone
            </h2>
            <p style={{ marginTop: 20, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              {technologyAI.limits}
            </p>
          </Reveal>
          <div className="split-art" aria-hidden="true">
            <svg viewBox="0 0 220 160" width="60%" fill="none">
              <circle cx="110" cy="80" r="50" stroke="var(--primary)" strokeWidth="2" opacity="0.4" />
              <circle cx="110" cy="80" r="32" stroke="var(--mid-blue)" strokeWidth="2" opacity="0.5" />
              <circle cx="110" cy="80" r="14" stroke="var(--navy)" strokeWidth="2" opacity="0.6" />
              <circle cx="110" cy="80" r="4" fill="var(--navy)" />
            </svg>
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

export default TechnologyAI
