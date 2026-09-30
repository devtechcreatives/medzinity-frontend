import Reveal from './Reveal.jsx'

function SectionHeader({ eyebrow, title, description, center = true, onDark = false, align }) {
  const centered = align ? align === 'center' : center
  return (
    <Reveal className={`section-head ${centered ? 'center' : ''}`}>
      {eyebrow && <span className={`eyebrow ${onDark ? 'on-dark' : ''}`}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  )
}

export default SectionHeader
