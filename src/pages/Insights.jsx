import { insights } from '../data/content.js'
import PageHero from '../components/PageHero.jsx'
import InsightCard from '../components/InsightCard.jsx'
import { useSEO } from '../hooks/useSEO.js'

function Insights() {
  useSEO(
    'Insights | Medzinity',
    'Practical perspectives on medical records, case strategy, revenue cycle and responsible AI.'
  )

  return (
    <>
      <PageHero
        crumb="Insights"
        eyebrow="Insights"
        title="Insights"
        lede="Practical perspectives on medical records, case strategy, revenue cycle and the responsible use of AI."
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
