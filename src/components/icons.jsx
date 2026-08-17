const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconGlobe = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
  </svg>
)

export const IconPulse = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M7 12h2.5l1.5-4 3 8 1.5-4H17" />
  </svg>
)

export const IconDoc = (props) => (
  <svg {...base} {...props}>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4" />
    <path d="M9.5 12h5M9.5 15.5h5M9.5 8.5h2" />
  </svg>
)

export const IconShield = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l7 3v5c0 5-3.2 8.6-7 10-3.8-1.4-7-5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const IconMic = (props) => (
  <svg {...base} {...props}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
  </svg>
)

export const IconFlask = (props) => (
  <svg {...base} {...props}>
    <path d="M9 3h6M10 3v6l-5.5 9a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3" />
    <path d="M7.5 15h9" />
  </svg>
)

export const IconLayers = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 13l9 5 9-5M3 16l9 5 9-5" />
  </svg>
)

export const IconClipboard = (props) => (
  <svg {...base} {...props}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M9 11l2 2 4-4" />
  </svg>
)

export const IconHospital = (props) => (
  <svg {...base} {...props}>
    <path d="M4 21V6l8-3 8 3v15" />
    <path d="M9 21v-6h6v6M12 7v5M9.5 9.5h5" />
  </svg>
)

export const IconBeaker = (props) => (
  <svg {...base} {...props}>
    <path d="M5 3h14M9 3v6.5L4.5 18a1.6 1.6 0 0 0 1.4 2.4h12.2A1.6 1.6 0 0 0 19.5 18L15 9.5V3" />
  </svg>
)

export const IconHeart = (props) => (
  <svg {...base} {...props}>
    <path d="M12 20s-7-4.3-9.3-8.8C1.2 8 2.7 5 6 5c2 0 3.4 1.1 4 2.3C10.6 6.1 12 5 14 5c3.3 0 4.8 3 3.3 6.2C19 15.7 12 20 12 20Z" />
  </svg>
)

export const IconBuilding = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="3" width="10" height="18" />
    <rect x="14" y="8" width="6" height="13" />
    <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" />
  </svg>
)

export const IconUsers = (props) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c.6-3.4 3-5.5 5.5-5.5s4.9 2.1 5.5 5.5" />
    <circle cx="17" cy="8.5" r="2.3" />
    <path d="M20.5 20c-.4-2.6-1.7-4.4-3.3-5.2" />
  </svg>
)

export const IconCheck = (props) => (
  <svg {...base} {...props}>
    <path d="M5 13l4 4L19 7" />
  </svg>
)

export const IconMapPin = (props) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
)

export const IconMail = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="5" width="17" height="14" rx="2" />
    <path d="M4 6.5 12 13l8-6.5" />
  </svg>
)

export const IconPhone = (props) => (
  <svg {...base} {...props}>
    <path d="M6 3.5 9 6l-1.4 2.6a13 13 0 0 0 6.8 6.8L16 13l2.5 3v2.5a2 2 0 0 1-2.2 2C9.9 20 4 14.1 3.5 7.7A2 2 0 0 1 5.5 5.5H6Z" />
  </svg>
)

export const IconArrow = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconLifecycle = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12a8 8 0 0 1 13.6-5.7M20 12a8 8 0 0 1-13.6 5.7" />
    <path d="M17.6 3.5v3.2h-3.2M6.4 20.5v-3.2h3.2" />
  </svg>
)

export const IconMenu = (props) => (
  <svg {...base} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export const IconClose = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const IconChevronDown = (props) => (
  <svg {...base} {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)
