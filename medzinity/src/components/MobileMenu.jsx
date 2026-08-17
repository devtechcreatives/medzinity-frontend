import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { nav, brand } from '../data/content.js'
import { IconChevronDown, IconClose } from './icons.jsx'

function MobileMenu({ open, onClose }) {
  const [openSection, setOpenSection] = useState(null)
  const panelRef = useRef(null)

  // Collapse any open submenu once the drawer closes (derived during render, not an effect).
  const [prevOpen, setPrevOpen] = useState(open)
  if (open !== prevOpen) {
    setPrevOpen(open)
    if (!open) setOpenSection(null)
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      window.requestAnimationFrame(() => {
        panelRef.current?.querySelector('a, button')?.focus()
      })
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button type="button" className="mobile-backdrop" aria-label="Close navigation" onClick={onClose} />
      <div className="mobile-panel" ref={panelRef}>
        <div className="mobile-panel-head">
          <span className="brand-word">Medzinity</span>
          <button type="button" className="mobile-close" onClick={onClose} aria-label="Close navigation">
            <IconClose width={20} height={20} />
          </button>
        </div>

        <nav aria-label="Mobile primary">
          <ul className="mobile-links">
            {nav.map((item) => (
              <li key={item.to}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className="mobile-trigger"
                      aria-expanded={openSection === item.label}
                      onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                    >
                      {item.label}
                      <IconChevronDown width={16} height={16} className={openSection === item.label ? 'rotated' : ''} />
                    </button>
                    <ul className={`mobile-submenu ${openSection === item.label ? 'open' : ''}`}>
                      {item.submenu.map((sub) => (
                        <li key={sub.to}>
                          <Link to={sub.to} onClick={onClose}>{sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink to={item.to} end={item.end} onClick={onClose}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-panel-foot">
          <Link to="/contact-us" className="btn btn-primary" onClick={onClose}>Contact Us</Link>
          <a href={`mailto:${brand.email}`} className="mobile-contact">{brand.email}</a>
          <a href={brand.phoneHref} className="mobile-contact">{brand.phone}</a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
