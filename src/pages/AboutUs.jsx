import { values, principles, ensure, whatWeDo } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

function AboutUs() {
  useSEO(
    'About Us | Medzinity',
    "Medzinity is a technology & data driven company providing healthcare support services and products to enhance and optimize the healthcare ecosystem through technology and data."
  )

  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Us"
        title="Who We Are"
        lede="Medzinity is a technology & data driven company providing healthcare support services and products to enhance and optimize the healthcare ecosystem through technology and data."
      />

      <section id="Whoweare" className="section">
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Our purpose points the way for us</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', marginTop: 14 }}>
              To empower people's potential and create infinite possibilities
              through data insights and innovative technologies
            </h2>
            <p style={{ marginTop: 20, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              Enabling businesses through innovation for a better future. Our
              vision is to transform the healthcare ecosystem by empowering our
              clients with data-driven insights and innovative products and
              solutions that enhance healthcare efficiency, productivity,
              outcomes, and a better community.
            </p>
            <p style={{ marginTop: 14, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              People, data and technology! We are Medzinity — a global company
              serving law firms, insurances, pharmaceutical, biotechnology,
              medical device companies, hospitals & physicians. We provide
              technology-driven innovative services to support the healthcare
              and medicolegal ecosystem.
            </p>
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
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              Businesses are built on purpose
            </h2>
            <p style={{ marginTop: 18, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              Born out of entrepreneurial spirit combined with the passion to
              make a change in society towards ethical healthcare for all and
              empowering the ecosystem. Purpose that can impact society and
              help it evolve for the better — we are backed by the best
              industry leaders who pave our way with their thoughtful
              leadership, as a combination of passionate and professional
              people.
            </p>
            <p style={{ marginTop: 14, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              Medzinity embodies our commitment to innovation and
              transformation in the healthcare industry. We believe healthcare
              should be efficient, effective, and accessible to all, and we
              are dedicated to providing our customers with cutting-edge
              solutions that drive better outcomes.
            </p>
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

      <section id="whatwedo" className="section">
        <div className="container">
          <SectionHeader eyebrow="What We Do" title="Customized solutions across the healthcare ecosystem" />
          <div className="grid-3">
            {whatWeDo.map(({ icon, title, desc }, i) => {
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

      <section id="believe" className="section section-soft">
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Values</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              What We Believe
            </h2>
            <p style={{ marginTop: 14, color: 'var(--text-soft)', fontSize: 16 }}>
              Medzinity is committed to the following values.
            </p>
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
            <span className="eyebrow">Principles</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', marginTop: 14 }}>
              How We Operate
            </h2>
            <p style={{ marginTop: 14, color: 'var(--text-soft)', fontSize: 16 }}>
              Medzinity operates on the following principles.
            </p>
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

      <section id="ensure" className="section">
        <div className="container">
          <SectionHeader eyebrow="What We Ensure" title="It's all about our best practices" />
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

      <section id="Joinus" className="section section-soft">
        <div className="container">
          <SectionHeader
            eyebrow="Join Us"
            title="We are Medzians! Find the right opportunities for you."
            description="Medzinity is committed to providing innovative and cost-effective solutions to the healthcare industry. We believe that technology can play a major role in improving the healthcare experience for patients, providers, and payers. By leveraging technology and data analytics, we believe we can help our clients reduce costs, improve efficiency, and enhance patient outcomes. We are excited to continue to grow our business and make a positive impact on the healthcare industry."
          />
          <CTASection />
        </div>
      </section>
    </>
  )
}

export default AboutUs
