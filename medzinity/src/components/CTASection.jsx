import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { cta as defaultCta } from '../data/content.js'

function CTASection({ cta = defaultCta }) {
  return (
    <Reveal as="div" className="cta-banner">
      <div>
        <span className="eyebrow on-dark">{cta.title}</span>
        <h2>{cta.subtitle}</h2>
        {cta.body && <p>{cta.body}</p>}
      </div>
      <div className="cta-actions">
        {cta.secondaryLabel && (
          <Button to={cta.secondaryTo} variant="ghost-light">
            {cta.secondaryLabel}
          </Button>
        )}
        <Button to={cta.primaryTo} variant="white">
          {cta.primaryLabel}
        </Button>
      </div>
    </Reveal>
  )
}

export default CTASection
