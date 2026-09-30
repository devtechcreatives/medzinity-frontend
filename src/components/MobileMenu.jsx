import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { nav, brand } from '../data/content.js'
import { IconChevronDown, IconClose } from './icons.jsx'
import logo from '../assets/logo/logo.png'

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

  // Flatten clusters into submenu items for mobile display
  const getSubmenuItems = (item) => {
    if (item.submenu) return item.submenu
    if (item.clusters) return item.clusters.flatMap((c) => c.items)
    return []
  }

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button type="button" className="mobile-backdrop" aria-label="Close navigation" onClick={onClose} />
      <div className="mobile-panel" ref={panelRef}>
        <div className="mobile-panel-head">
          <img src={logo} className="brand-logo brand-logo-sm" alt="Medzinity" width="300" height="65" />
          <button type="button" className="mobile-close" onClick={onClose} aria-label="Close navigation">
            <IconClose width={20} height={20} />
          </button>
        </div>

        <nav aria-label="Mobile primary">
          <ul className="mobile-links">
            {nav.map((item) => {
              const submenuItems = getSubmenuItems(item)
              return (
                <li key={item.to}>
                  {submenuItems.length > 0 ? (
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
                        {submenuItems.map((sub) => (
                          <li key={sub.to}>
                            <Link to={sub.to} onClick={onClose}>
                              <strong>{sub.label}</strong>
                              {sub.desc && <span className="mobile-sub-desc">{sub.desc}</span>}
                            </Link>
                          </li>
                        ))}
                        {item.footerLinks && item.footerLinks.map((fl) => (
                          <li key={fl.to} className="mobile-submenu-footer">
                            <Link to={fl.to} onClick={onClose}>{fl.label}</Link>
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
              )
            })}
          </ul>
        </nav>

        <div className="mobile-panel-foot">
          <Link to="/contact-us" className="btn btn-primary" onClick={onClose}>Talk to Medzinity</Link>
          <a href={`mailto:${brand.email}`} className="mobile-contact">{brand.email}</a>
          <a href={brand.phoneHref} className="mobile-contact">{brand.phone}</a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
