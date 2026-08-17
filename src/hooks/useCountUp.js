import { useEffect, useState } from 'react'
import { prefersReducedMotion } from './useReveal.js'

export function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(active ? target : 0)

  useEffect(() => {
    if (!active) return

    const effectiveDuration = prefersReducedMotion() ? 1 : duration
    let raf
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / effectiveDuration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}
