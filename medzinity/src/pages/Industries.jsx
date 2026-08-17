import { industries } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import IndustryCard from '../components/IndustryCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { useSEO } from '../hooks/useSEO.js'

function Industries() {
  useSEO(
    'Industries We Serve | Medzinity',
    'Our dedication to excellence extends to healthcare providers, insurance companies, pharma/medical device companies, and technology software solutions.'
  )

  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Industries"
        title="Industries we serve"
        lede="Our dedication to excellence extends to healthcare providers, insurance companies, pharma/medical device companies, and technology software solutions."
      />

      <section className="section">
        <div className="container grid-2">
          {industries.map((industry, i) => (
            <IndustryCard industry={industry} key={industry.slug} delay={(i % 2) + 1} />
          ))}
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

export default Industries
