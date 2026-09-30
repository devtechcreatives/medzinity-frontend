import { Link } from 'react-router-dom'

function PageHero({ crumb, title, lede, eyebrow, image }) {
  return (
    <section
      className={`page-hero${image ? ' has-bg' : ''}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {image && <div className="page-hero-scrim" />}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="sep" aria-hidden="true">/</span>
          <span className="current" aria-current="page">{crumb}</span>
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
    </section>
  )
}

export default PageHero
