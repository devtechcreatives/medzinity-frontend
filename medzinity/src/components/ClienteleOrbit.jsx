import { Link } from 'react-router-dom'
import { clientele, brand } from '../data/content.js'
import Reveal from './Reveal.jsx'
import * as Icons from './icons.jsx'

// Nodes sit on an ellipse rather than a circle so the diagram stays a
// comfortable height on desktop. Values are percentages of the orbit box, which
// is what lets the SVG (viewBox 0 0 100 100, non-uniform scale) line its spokes
// up exactly with the absolutely positioned nodes.
const RX = 34
const RY = 32

function ClienteleOrbit() {
  const nodes = clientele.map((item, i) => {
    const angle = ((-90 + (360 / clientele.length) * i) * Math.PI) / 180
    return {
      ...item,
      x: 50 + RX * Math.cos(angle),
      y: 50 + RY * Math.sin(angle),
    }
  })

  return (
    <Reveal className="orbit-wrap">
      <div className="orbit">
        <svg className="orbit-web" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {nodes.map((n) => (
            <line
              key={n.label}
              className="orbit-spoke"
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <ellipse
            className="orbit-ring"
            cx="50"
            cy="50"
            rx={RX}
            ry={RY}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="orbit-hub">
          <svg className="orbit-hub-mark" width="46" height="27" viewBox="0 0 34 20" fill="none" aria-hidden="true">
            <path
              d="M9 4a6 6 0 1 0 0 12 8.2 8.2 0 0 0 6-2.7 8.2 8.2 0 0 0 6 2.7 6 6 0 1 0 0-12 8.2 8.2 0 0 0-6 2.7A8.2 8.2 0 0 0 9 4Z"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="orbit-hub-name">{brand.name}</span>
          <span className="orbit-hub-note">Connecting dots</span>
        </div>

        {nodes.map((n, i) => {
          const Icon = Icons[n.icon]
          const style = { '--x': `${n.x}%`, '--y': `${n.y}%`, '--i': i }
          const body = (
            <>
              <span className="orbit-node-icon"><Icon width={17} height={17} /></span>
              <span className="orbit-node-label">{n.label}</span>
              {n.to && <Icons.IconArrow className="orbit-node-arrow" width={14} height={14} />}
            </>
          )

          return n.to ? (
            <Link to={n.to} className="orbit-node linked" key={n.label} style={style}>
              {body}
            </Link>
          ) : (
            <span className="orbit-node static" key={n.label} style={style}>
              {body}
            </span>
          )
        })}
      </div>
    </Reveal>
  )
}

export default ClienteleOrbit
