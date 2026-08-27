import { brand, taglineBeats } from '../data/content.js'
import Reveal from './Reveal.jsx'
import * as Icons from './icons.jsx'

// Replaces the decorative SVG that used to sit beside the Home "About" copy:
// the company tagline, opened up into its three beats and closed with the
// signature line. Same slot in .split-section, but it carries meaning.
function TaglinePanel() {
  return (
    <Reveal className="tagline-panel">
      <div className="tagline-panel-head">
        <svg className="tagline-panel-mark" width="40" height="24" viewBox="0 0 34 20" fill="none" aria-hidden="true">
          <path
            d="M9 4a6 6 0 1 0 0 12 8.2 8.2 0 0 0 6-2.7 8.2 8.2 0 0 0 6 2.7 6 6 0 1 0 0-12 8.2 8.2 0 0 0-6 2.7A8.2 8.2 0 0 0 9 4Z"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="tagline-panel-eyebrow">{brand.tagline}</span>
      </div>

      <ol className="tagline-beats">
        {taglineBeats.map(({ icon, title, desc }) => {
          const Icon = Icons[icon]
          return (
            <li className="tagline-beat" key={title}>
              <span className="tagline-beat-dot">
                <Icon width={18} height={18} />
              </span>
              <div className="tagline-beat-body">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="tagline-signature">{brand.signature}</p>
    </Reveal>
  )
}

export default TaglinePanel
