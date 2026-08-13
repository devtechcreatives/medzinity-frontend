import { Link } from 'react-router-dom'
import { IconChevronDown } from './icons.jsx'

function MegaMenu({ item, open, onOpen, onClose }) {
  return (
    <li className="nav-item" onMouseEnter={onOpen} onMouseLeave={onClose}>
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
      <div className={`mega-panel ${open ? 'open' : ''}`} role="menu" aria-label={item.label}>
        <ul>
          {item.submenu.map((sub) => (
            <li key={sub.to} role="none">
              <Link role="menuitem" to={sub.to} onClick={onClose}>
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default MegaMenu
