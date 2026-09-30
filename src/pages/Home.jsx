import { services, insights, flagshipCapabilities, solutionStrand } from '../data/content.js'
import CTASection from '../components/CTASection.jsx'
import StatsSection from '../components/StatsSection.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import InsightCard from '../components/InsightCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import IndustryShowcase from '../components/IndustryShowcase.jsx'
import ClienteleOrbit from '../components/ClienteleOrbit.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

import cardLawFirms from '../assets/cards/law.jpg'
import cardMedicoLegal from '../assets/cards/legal.jpg'
import cardInsight from '../assets/cards/insight.jpg'
import cardInsurance from '../assets/cards/insurance.jpg'
import aboutMedzinity from '../assets/homepage/about.jpg'
import tileHealthcareProviders from '../assets/industries/healthcare.webp'
import tileLawFirms from '../assets/industries/law.webp'
import tileInsuranceCompanies from '../assets/industries/insurance.webp'
import tilePharma from '../assets/industries/pharma.webp'
import tileTechnology from '../assets/industries/tech.webp'

// Hero backgrounds are picked up straight from src/assets/hero/ in filename
// order — drop new images in and they become slide backgrounds, no code change.
const heroImages = Object.entries(
  import.meta.glob('../assets/hero/*.{webp,avif,jpg,jpeg,png}', { eager: true, import: 'default' })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

function Home() {
  useSEO(
    'Medzinity \u2014 Clinical Intelligence Behind Every Decision',
    'Medical record review, RCM, legal support and pharmacovigilance from one clinical team. For law firms, providers and pharma.'
  )

  const featuredSolutions = services.slice(0, 3)
  const featuredInsights = insights.slice(0, 3)

  const heroSlides = [
    {
      image: heroImages[0],
      eyebrow: 'Clinical Intelligence',
      title: <>Clinical intelligence behind <span className="accent">every decision.</span></>,
      lede: 'Medical, legal and operational information turned into decision-ready intelligence for law firms, healthcare providers and pharmaceutical and medical device companies.',
      primaryLabel: 'Talk to Medzinity',
      primaryTo: '/contact-us',
      secondaryLabel: 'Request a Sample Chronology',
      secondaryTo: '/contact-us',
    },
    {
      image: heroImages[1],
      eyebrow: 'Our Flagship Solution',
      title: <>Clinical intelligence for <span className="accent">legal decisions</span></>,
      lede: 'A case often starts as thousands of pages of medical records. Our clinical reviewers turn that volume into a clear chronology and analysis your attorneys can use right away.',
      primaryLabel: 'Explore Medical-Legal Services',
      primaryTo: '/solutions/medical-legal-services',
      secondaryLabel: 'Request a Sample Chronology',
      secondaryTo: '/contact-us',
    },
    {
      image: heroImages[2],
      eyebrow: 'Revenue Cycle Management',
      title: <>From patient care to <span className="accent">revenue, protected.</span></>,
      lede: 'Revenue leakage is rarely one problem. Medzinity works across the cycle, with a team that understands the clinical documentation behind every claim.',
      primaryLabel: 'Discuss Your RCM Needs',
      primaryTo: '/contact-us',
      secondaryLabel: 'Explore RCM',
      secondaryTo: '/solutions/revenue-cycle-management',
    },
    {
      image: heroImages[3],
      eyebrow: 'Seven Solutions. One Foundation.',
      title: <>One team, <span className="accent">one clinical foundation</span></>,
      lede: 'Every Medzinity solution starts from the same place: people who know how to read clinical information closely.',
      primaryLabel: 'Talk to Medzinity',
      primaryTo: '/contact-us',
      secondaryLabel: 'View All Solutions',
      secondaryTo: '/solutions',
    },
  ]

  const heroCards = [
    { image: cardLawFirms, tag: 'Industry', title: 'Law Firms: chronologies and case analysis for attorneys', to: '/industries/law-firms' },
    { image: cardMedicoLegal, tag: 'Flagship', title: 'Medical-Legal Services \u2014 clinical intelligence for legal decisions', to: '/solutions/medical-legal-services' },
    { image: cardInsight, tag: featuredInsights[0].category, title: featuredInsights[0].title, href: featuredInsights[0].url },
    { image: cardInsurance, tag: 'Industry', title: 'Healthcare Providers: revenue cycle and workflow support', to: '/industries/healthcare-providers' },
  ]

  const industryTiles = [
    { label: 'Law Firms', image: tileLawFirms, to: '/industries/law-firms' },
    { label: 'Healthcare Providers', image: tileHealthcareProviders, to: '/industries/healthcare-providers' },
    { label: 'Insurance', image: tileInsuranceCompanies, to: '/industries/insurance-companies' },
    { label: 'Pharma / Medical Device', image: tilePharma, to: '/industries/pharma-medical-device-companies' },
    { label: 'Technology & AI', image: tileTechnology, to: '/technology-ai' },
  ]

  return (
    <>
      <HeroCarousel slides={heroSlides} cards={heroCards} />

      <section className="section">
        <div className="container split-section">
          <div className="split-art" aria-hidden="true">
            <img src={aboutMedzinity} alt="" style={{ width: '100%', borderRadius: 16, objectFit: 'cover' }} />
          </div>
          <Reveal delay={1}>
            <span className="eyebrow">About Medzinity</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginTop: 14 }}>
              Built on the medical record
            </h2>
            <p style={{ marginTop: 20, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              Medzinity turns complex clinical, legal and operational information
              into decision-ready intelligence. The medical record is the one
              document that legal, financial and operational decisions all depend
              on &mdash; yet it is usually reviewed once, by one team, for one
              purpose.
            </p>
            <p style={{ marginTop: 14, color: 'var(--text-soft)', fontSize: 16.5, lineHeight: 1.75 }}>
              We read it closely and put that understanding to work wherever it&rsquo;s
              needed &mdash; for law firms, healthcare providers, and pharmaceutical
              and medical device companies.
            </p>
            <Button to="/about-us" variant="outline" style={{ marginTop: 28 }}>Learn More</Button>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader
            eyebrow="Our Flagship Solution"
            title="Clinical Intelligence for Legal Decision-Making"
            description="A case often starts as thousands of pages of medical records. Our clinical reviewers turn that volume into a clear chronology and analysis your attorneys can use right away."
          />
          <div className="grid-3" style={{ marginTop: 24 }}>
            {flagshipCapabilities.map((cap, i) => (
              <Reveal as="div" className="card" key={cap} delay={(i % 3) + 1}>
                <div className="card-icon"><Icons.IconCheck width={20} height={20} /></div>
                <h3 style={{ fontSize: '1rem' }}>{cap}</h3>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Button to="/solutions/medical-legal-services" variant="outline">
              Explore Medical-Legal Services <Icons.IconArrow width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Solutions" title="Seven solutions. One clinical foundation." description="Every Medzinity solution starts from the same place: people who know how to read clinical information closely." />
          <div className="grid-3">
            {featuredSolutions.map((service, i) => (
              <ServiceCard service={service} index={i} key={service.slug} delay={(i % 3) + 1} basePath="/solutions" />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Button to="/solutions" variant="outline">
              View All Solutions <Icons.IconArrow width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <StatsSection eyebrow="Connecting Dots" title="To Infinite Possibilities" />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Why One Team?" title="Why one team instead of several vendors?" description="Clinical understanding built for one purpose informs the next, so work is reused, not rebuilt." />
          <div className="grid-3" style={{ marginTop: 8 }}>
            {solutionStrand.map((step, i) => (
              <Reveal as="div" className="card" key={step.title} delay={(i % 3) + 1}>
                <span className="card-step">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 32, color: 'var(--text-soft)', fontSize: 16, textAlign: 'center', maxWidth: 700, marginInline: 'auto' }}>
            One clinical understanding runs underneath every step. You manage one relationship, with one point of accountability.
          </p>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Button to="/about-us/why-medzinity" variant="outline">Why Medzinity</Button>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="Who We Serve" title="Built for the organizations that depend on clinical detail" />
          <IndustryShowcase
            eyebrow="Industries"
            title="Purpose-built support for every part of the healthcare ecosystem."
            lede="Our specialists are skilled, efficient, and attuned to the compliance and workflow needs of each industry we serve."
            items={industryTiles}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Clientele"
            title="Who we work with"
            description="Law firms, healthcare providers, insurers and life-science teams all work from the same medical record. Medzinity sits in the middle of that exchange \u2014 turning one set of data into the format each side can act on."
          />
          <ClienteleOrbit />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="Insights" title="From our team" description="Practical perspectives on medical records, case strategy, revenue and responsible use of AI." />
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
