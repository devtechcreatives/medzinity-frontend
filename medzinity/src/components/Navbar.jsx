import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { nav } from '../data/content.js'
import { IconMenu, IconClose } from './icons.jsx'
import MegaMenu from './MegaMenu.jsx'
import MobileMenu from './MobileMenu.jsx'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()

  // Close any open menu when the route changes (derived during render, not an effect).
  const [prevPath, setPrevPath] = useState(location.pathname)
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname)
    setOpenMenu(null)
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        clearTimeout(closeTimer.current)
        setOpenMenu(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openNow = (label) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }

  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160)
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Medzinity home" onClick={() => setOpenMenu(null)}>
          <svg className="brand-mark" width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="brandGrad" x1="0" y1="0" x2="34" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2ea3f2" />
                <stop offset="1" stopColor="#0f2c44" />
              </linearGradient>
            </defs>
            <path
              d="M9 4a6 6 0 1 0 0 12 8.2 8.2 0 0 0 6-2.7 8.2 8.2 0 0 0 6 2.7 6 6 0 1 0 0-12 8.2 8.2 0 0 0-6 2.7A8.2 8.2 0 0 0 9 4Z"
              stroke="url(#brandGrad)"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="brand-word">Medzinity</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <ul>
            {nav.map((item) =>
              item.submenu ? (
                <MegaMenu
                  key={item.to}
                  item={item}
                  open={openMenu === item.label}
                  onOpen={() => openNow(item.label)}
                  onClose={closeSoon}
                />
              ) : (
                <li key={item.to} className="nav-item">
                  <NavLink to={item.to} end={item.end}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="nav-cta">
          <Link to="/contact-us" className="btn btn-primary btn-sm">
            Contact Us
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose width={22} height={22} /> : <IconMenu width={22} height={22} />}
          </button>
        </div>
      </div>
    </header>

    <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

export default Navbar
