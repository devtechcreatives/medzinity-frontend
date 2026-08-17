import { useCountUp } from '../hooks/useCountUp.js'

function AnimatedCounter({ value, suffix = '', active }) {
  const display = useCountUp(value, active)
  return (
    <>
      {display.toLocaleString('en-US')}
      {suffix}
    </>
  )
}

export default AnimatedCounter
