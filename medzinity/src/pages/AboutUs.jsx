import { Link } from 'react-router-dom'
import { values, principles, ensure, whatWeDo, stats, brand } from '../data/content.js'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import * as Icons from '../components/icons.jsx'
import { useSEO } from '../hooks/useSEO.js'

// Slots are filled by filename prefix from src/assets/about/ — see the README
// there. Every slot is optional; a missing one leaves the frame's gradient
// showing, so the page never looks broken while the folder is empty.
const aboutFiles = import.meta.glob('../assets/about/*.{webp,avif,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

// Resolved once at module load: the glob is static, so nothing here changes
// between renders. `has-image` only lands when a file actually matched, which
// is what keeps the gradient fallback and the real image from fighting.
const media = ['about-hero', 'about-purpose', 'about-story', 'about-join'].reduce((acc, name) => {
  const hit = Object.entries(aboutFiles).find(([path]) =>
    path.split('/').pop().startsWith(name)
  )
  acc[name] = hit
    ? { className: 'has-image', style: { backgroundImage: `url(${hit[1]})` } }
    : { className: '', style: undefined }
  return acc
}, {})

function AboutUs() {
  useSEO(
    'About Us | Medzinity',
    "Medzinity is a technology & data driven company providing healthcare support services and products to enhance and optimize the healthcare ecosystem through technology and data."
  )

  const heroFacts = stats.slice(0, 3)

  return (
    <>
      {/* ---------- Immersive header ---------- */}
      <header className="about-hero">
        <div className={`about-hero-media ${media['about-hero'].className}`} style={media['about-hero'].style} aria-hidden="true" />
        <div className="about-hero-scrim" aria-hidden="true" />

        <div className="container about-hero-inner">
          <nav className="breadcrumb on-dark" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current" aria-current="page">About Us</span>
          </nav>

          <span className="eyebrow on-dark">About Us</span>
          <h1>Who We Are</h1>
          <p className="about-hero-lede">
            Medzinity is a technology &amp; data driven company providing
            healthcare support services and products to enhance and optimize the
            healthcare ecosystem through technology and data.
          </p>

          <ul className="about-hero-facts">
            {heroFacts.map(({ value, suffix, label }) => (
              <li key={label}>
                <strong>{value.toLocaleString()}{suffix}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ---------- Purpose: image bleeds left, copy card overlaps it ---------- */}
      <section id="Whoweare" className="section about-overlap-section">
        <div className="container about-overlap">
          <div className={`about-frame about-frame-tall ${media['about-purpose'].className}`} style={media['about-purpose'].style} aria-hidden="true" />

          <Reveal className="about-overlap-card">
            <span className="eyebrow">Our purpose points the way for us</span>
            <h2>
              To empower people&apos;s potential and create infinite
              possibilities through data insights and innovative technologies
            </h2>
            <p>
              Enabling businesses through innovation for a better future. Our
              vision is to transform the healthcare ecosystem by empowering our
              clients with data-driven insights and innovative products and
              solutions that enhance healthcare efficiency, productivity,
              outcomes, and a better community.
            </p>
            <p>
              People, data and technology! We are Medzinity — a global company
              serving law firms, insurances, pharmaceutical, biotechnology,
              medical device companies, hospitals &amp; physicians. We provide
              technology-driven innovative services to support the healthcare
              and medicolegal ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Story: copy left, offset framed image right ---------- */}
      <section className="section section-soft">
        <div className="container about-story">
          <Reveal className="about-story-copy">
            <span className="eyebrow">Our Story</span>
            <h2>Businesses are built on purpose</h2>
            <p>
              Born out of entrepreneurial spirit combined with the passion to
              make a change in society towards ethical healthcare for all and
              empowering the ecosystem. Purpose that can impact society and help
              it evolve for the better — we are backed by the best industry
              leaders who pave our way with their thoughtful leadership, as a
              combination of passionate and professional people.
            </p>
            <p>
              Medzinity embodies our commitment to innovation and transformation
              in the healthcare industry. We believe healthcare should be
              efficient, effective, and accessible to all, and we are dedicated
              to providing our customers with cutting-edge solutions that drive
              better outcomes.
            </p>
            <p className="about-story-signature">{brand.signature}</p>
          </Reveal>

          <div className="about-story-art">
            <div className={`about-frame about-frame-tall ${media['about-story'].className}`} style={media['about-story'].style} aria-hidden="true" />
            <span className="about-frame-outline" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ---------- What We Do: numbered panels on navy ---------- */}
      <section id="whatwedo" className="section about-steps-section">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Customized solutions across the healthcare ecosystem"
            onDark
          />
          <ol className="about-steps">
            {whatWeDo.map(({ icon, title, desc }, i) => {
              const Icon = Icons[icon]
              return (
                <Reveal as="li" className="about-step" key={title} delay={(i % 3) + 1}>
                  <span className="about-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="about-step-icon"><Icon width={22} height={22} /></span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ---------- Beliefs + principles: contrasting pair ---------- */}
      <section id="believe" className="section section-soft">
        <div className="container about-duo">
          <Reveal className="about-duo-panel about-duo-dark">
            <span className="eyebrow on-dark">Values</span>
            <h2>What We Believe</h2>
            <p className="about-duo-lede">Medzinity is committed to the following values.</p>
            <ul className="about-value-list">
              {values.map(({ title, desc }) => (
                <li key={title}>
                  <Icons.IconCheck width={18} height={18} />
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2} className="about-duo-panel about-duo-light">
            <span className="eyebrow">Principles</span>
            <h2>How We Operate</h2>
            <p className="about-duo-lede">Medzinity operates on the following principles.</p>
            <ol className="principles-list">
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

      {/* ---------- What We Ensure: five-up strip (grid-3 left an orphan row) ---------- */}
      <section id="ensure" className="section">
        <div className="container">
          <SectionHeader eyebrow="What We Ensure" title="It's all about our best practices" />
          <ul className="about-ensure">
            {ensure.map(({ icon, title, desc }, i) => {
              const Icon = Icons[icon]
              return (
                <Reveal as="li" className="about-ensure-item" key={title} delay={(i % 5) + 1}>
                  <span className="about-ensure-icon"><Icon width={20} height={20} /></span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ---------- Join us ---------- */}
      <section id="Joinus" className="about-join-section">
        <div className={`about-join-media ${media['about-join'].className}`} style={media['about-join'].style} aria-hidden="true" />
        <div className="about-join-scrim" aria-hidden="true" />
        <div className="container about-join-inner">
          <SectionHeader
            eyebrow="Join Us"
            title="We are Medzians! Find the right opportunities for you."
            description="Medzinity is committed to providing innovative and cost-effective solutions to the healthcare industry. We believe that technology can play a major role in improving the healthcare experience for patients, providers, and payers. By leveraging technology and data analytics, we believe we can help our clients reduce costs, improve efficiency, and enhance patient outcomes."
            onDark
          />
          <CTASection />
        </div>
      </section>
    </>
  )
}

export default AboutUs
