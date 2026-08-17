import { Link } from 'react-router-dom'
import { whatWeDo, services, clientele, insights } from '../data/content.js'
import CTASection from '../components/CTASection.jsx'
import StatsSection from '../components/StatsSection.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import InsightCard from '../components/InsightCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

function Home() {
  useSEO(
    'Medzinity | Healthcare Support Services & Data Analytics',
    'Medzinity is a technology & data driven company providing healthcare support services and products — Medical Records Processing, Revenue Cycle Management, Pharmacovigilance, and Product Life Cycle Management — to enhance and optimize the healthcare ecosystem.'
  )

  const featuredServices = services.slice(0, 3)
  const featuredInsights = insights.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Redefining Healthcare Solutions</span>
            <h1>Innovate. Empower. Evolve.</h1>
            <p className="lede">
              Medzinity is a technology & data driven company providing
              healthcare support services and products to enhance and optimize
              the healthcare ecosystem.
            </p>
            <div className="hero-actions">
              <Button to="/about-us">Learn More</Button>
              <Link to="/services" className="btn-link">
                Explore Our Services <Icons.IconArrow width={15} height={15} />
              </Link>
            </div>
            <div className="hero-trust">
              <div><strong>10+</strong>Years of Experience</div>
              <div><strong>120+</strong>Clients</div>
              <div><strong>2,830+</strong>Projects</div>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="glow g1" />
            <div className="glow g2" />
            <div className="hero-chip c1"><span className="dot" /> 100% Compliance</div>
            <div className="hero-chip c2"><span className="dot" /> Healthcare Data Analytics</div>
            <div className="hero-chip c3"><span className="dot" /> Innovation & Research</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-art" aria-hidden="true">
            <svg viewBox="0 0 220 160" width="82%" fill="none">
              <circle cx="40" cy="40" r="5" fill="var(--primary)" />
              <circle cx="110" cy="24" r="4" fill="var(--mid-blue)" />
              <circle cx="180" cy="52" r="6" fill="var(--navy)" />
              <circle cx="60" cy="110" r="4" fill="var(--mid-blue)" />
              <circle cx="150" cy="120" r="5" fill="var(--primary)" />
              <circle cx="30" cy="150" r="3.5" fill="var(--navy)" />
              <path
                d="M40 40 110 24 180 52 150 120 60 110 40 40M110 24 60 110M150 120 30 150"
                stroke="var(--border-strong)"
                strokeWidth="1.4"
              />
              <path
                d="M10 90h30l8-24 12 48 10-36 8 20h140"
                stroke="var(--primary)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Reveal delay={1}>
            <span className="eyebrow">About Medzinity</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginTop: 14 }}>
              A technology & data driven healthcare company
            </h2>
            <p style={{ marginTop: 20, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              With a decade of experience with data and insights, we are working
              with global enterprises by empowering their businesses and strategic
              partnerships. We drive the transformation through technology and
              data insights and navigate to the infinite possibilities. We are
              committed to being an organization governed by the policies and
              ethical values.
            </p>
            <p style={{ marginTop: 14, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              Medzinity aims to provide innovative and cost-effective products
              and solutions to healthcare providers, law firms, insurance
              companies, pharma and research companies. We offer customized
              healthcare solutions, data analytics, and innovation-driven
              healthcare transformation services.
            </p>
            <Button to="/about-us" variant="outline" style={{ marginTop: 28 }}>Learn More</Button>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="What We Do" title="Three pillars behind every engagement" />
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

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Our Services" title="Healthcare support services built for scale" />
          <div className="grid-3">
            {featuredServices.map((service, i) => (
              <ServiceCard service={service} index={i} key={service.slug} delay={(i % 3) + 1} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Button to="/services" variant="outline">
              View All Services <Icons.IconArrow width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <StatsSection eyebrow="Connecting Dots" title="To Infinite Possibilities" />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Who We Serve" title="Clientele and industries we serve" />
          <div className="industry-grid">
            {clientele.map(({ label, to }) =>
              to ? (
                <Link to={to} className="industry-chip linked" key={label}>
                  {label} <Icons.IconArrow width={14} height={14} />
                </Link>
              ) : (
                <span className="industry-chip static" key={label}>{label}</span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="Insights" title="Better Insights. Better World." />
          <div className="insights-grid">
            {featuredInsights.map((insight, i) => (
              <InsightCard insight={insight} key={insight.title} delay={(i % 3) + 1} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Button to="/insights" variant="outline">View All Insights</Button>
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

export default Home
