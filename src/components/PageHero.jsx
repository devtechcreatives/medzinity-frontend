import { Link } from 'react-router-dom'

function PageHero({ crumb, title, lede, eyebrow }) {
  return (
    <section className="page-hero">
      <div className="container">
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
