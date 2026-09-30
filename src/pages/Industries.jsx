import { industries } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import IndustryCard from '../components/IndustryCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { useSEO } from '../hooks/useSEO.js'

function Industries() {
  useSEO(
    'Industries We Serve | Medzinity',
    'Law firms, healthcare providers, and pharmaceutical and medical device companies. See the solutions for your industry.'
  )

  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Industries"
        title="Built around the way your industry works."
        lede="Choose your industry to see the Medzinity solutions that fit your work."
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
