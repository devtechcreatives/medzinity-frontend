import { Link } from 'react-router-dom'
import { IconChevronDown } from './icons.jsx'

function MegaMenu({ item, open, onOpen, onClose }) {
  const isMega = item.mega && item.clusters

  return (
    <li className={`nav-item${isMega ? ' nav-item-mega' : ''}`} onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`nav-trigger ${open ? 'active' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {item.label}
        <IconChevronDown width={14} height={14} aria-hidden="true" />
      </button>
      <div className={`mega-panel${isMega ? ' mega-panel-wide' : ''} ${open ? 'open' : ''}`} role="menu" aria-label={item.label}>
        {isMega ? (
          <>
            <div className="mega-grid">
              {item.clusters.map((cluster) => (
                <div className="mega-col" key={cluster.heading}>
                  <p className="mega-cluster-heading">{cluster.heading}</p>
                  <ul>
                    {cluster.items.map((sub) => (
                      <li key={sub.to} role="none">
                        <Link role="menuitem" to={sub.to} className={`mega-link${sub.flagship ? ' mega-link-flagship' : ''}`} onClick={onClose}>
                          <strong>{sub.label}</strong>
                          {sub.desc && <span>{sub.desc}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {item.footerLinks && (
              <div className="mega-foot">
                {item.footerLinks.map((fl) => (
                  <Link key={fl.to} to={fl.to} className={fl.highlight ? 'mega-foot-highlight' : ''} onClick={onClose}>
                    {fl.label}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <ul>
              {item.submenu.map((sub) => (
                <li key={sub.to} role="none">
                  <Link role="menuitem" to={sub.to} className="mega-link" onClick={onClose}>
                    <strong>{sub.label}</strong>
                    {sub.desc && <span>{sub.desc}</span>}
                  </Link>
                </li>
              ))}
            </ul>
            {item.footerLinks && (
              <div className="mega-foot">
                {item.footerLinks.map((fl) => (
                  <Link key={fl.to} to={fl.to} className={fl.highlight ? 'mega-foot-highlight' : ''} onClick={onClose}>
                    {fl.label}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </li>
  )
}

export default MegaMenu
