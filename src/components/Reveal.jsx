import { useReveal } from '../hooks/useReveal.js'

function Reveal({ as: Tag = 'div', delay, className = '', children, ...rest }) {
  const { ref, visible } = useReveal()
  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <Tag ref={ref} className={['reveal', visible ? 'is-visible' : '', delayClass, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal
