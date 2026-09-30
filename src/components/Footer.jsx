import { Link } from 'react-router-dom'
import { brand, industries, services } from '../data/content.js'
import logo from '../assets/logo/logo.png'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand" aria-label="Medzinity home">
            <img src={logo} className="brand-logo brand-logo-inverse" alt="Medzinity" width="300" height="65" />
          </Link>
          <p>{brand.signature}</p>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/solutions/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link to={`/industries/${industry.slug}`}>{industry.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about-us">About Medzinity</Link></li>
            <li><Link to="/about-us/why-medzinity">Why Medzinity</Link></li>
            <li><Link to="/about-us/quality-security-compliance">Quality, Security & Compliance</Link></li>
            <li><Link to="/technology-ai">Technology & AI</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
            <li><a href={brand.phoneHref}>{brand.phone}</a></li>
            <li><Link to="/insights">Insights</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {year} Medzinity Solutions. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
