import { insights } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import InsightCard from '../components/InsightCard.jsx'
import { useSEO } from '../hooks/useSEO.js'

function Insights() {
  useSEO(
    'Insights | Medzinity',
    'Better Insights…Better World… — perspectives on medical records, preventive care, and healthcare data from Medzinity.'
  )

  return (
    <>
      <PageHero
        crumb="Insights"
        eyebrow="Insights"
        title="Better Insights…Better World…"
        lede="Perspectives on medical records, preventive care, and the role data plays in better healthcare decisions."
      />

      <section className="section">
        <div className="container insights-grid">
          {insights.map((insight, i) => (
            <InsightCard insight={insight} key={insight.title} delay={(i % 3) + 1} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Insights
