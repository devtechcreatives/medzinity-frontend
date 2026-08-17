import { Link } from 'react-router-dom'
import { brand, industries, services } from '../data/content.js'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <svg className="brand-mark" width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden="true">
              <path
                d="M9 4a6 6 0 1 0 0 12 8.2 8.2 0 0 0 6-2.7 8.2 8.2 0 0 0 6 2.7 6 6 0 1 0 0-12 8.2 8.2 0 0 0-6 2.7A8.2 8.2 0 0 0 9 4Z"
                stroke="#2ea3f2"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="brand-word">Medzinity</span>
          </Link>
          <p>
            Medzinity is a technology & data driven company providing healthcare
            support services and products to enhance and optimize the healthcare
            ecosystem.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about-us#Whoweare">Who We Are</Link></li>
            <li><Link to="/about-us#whatwedo">What We Do</Link></li>
            <li><Link to="/about-us#believe">What We Believe</Link></li>
            <li><Link to="/about-us#ensure">What We Ensure</Link></li>
            <li><Link to="/about-us#Joinus">Join Us</Link></li>
            <li><Link to="/medzian-community">Medzian Community</Link></li>
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
          <h4>Services</h4>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
            <li><a href={brand.phoneHref}>{brand.phone}</a></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/insights">Insights</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Medzinity. All rights reserved.</span>
        <span className="footer-signature">{brand.signature}</span>
      </div>
    </footer>
  )
}

export default Footer
