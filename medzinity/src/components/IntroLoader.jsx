import { useCallback, useEffect, useRef, useState } from 'react'
import introVideo from '../assets/video/connecting-dots.mp4'

const SEEN_KEY = 'medzinity:intro-seen'
// The source clip runs ~13s — far too long to hold the site. At 4x it lands
// around 3.3s, which is loader territory.
const PLAYBACK_RATE = 2
// Leaves the skip control on screen for most of the (shortened) run.
const SKIP_AFTER = 900
// If autoplay is refused or the 2.8MB file stalls, get out of the way.
const START_TIMEOUT = 2500
// Keep in step with the .intro fade-out in App.css.
const FADE_MS = 600

function shouldPlay() {
  if (typeof window === 'undefined') return false
  // An unskippable full-screen animation is exactly what this setting opts out of.
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    // Private mode can throw on access — treat it as "not seen yet".
    return true
  }
}

function IntroLoader() {
  const [visible, setVisible] = useState(shouldPlay)
  const [leaving, setLeaving] = useState(false)
  const [skippable, setSkippable] = useState(false)
  const videoRef = useRef(null)
  const barRef = useRef(null)
  const started = useRef(false)
  const dismissed = useRef(false)

  const dismiss = useCallback(() => {
    if (dismissed.current) return
    dismissed.current = true
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      // Nothing to do — the intro just plays again next load.
    }
    setLeaving(true)
    setTimeout(() => setVisible(false), FADE_MS)
  }, [])

  useEffect(() => {
    if (!visible) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const skipTimer = setTimeout(() => setSkippable(true), SKIP_AFTER)
    const startTimer = setTimeout(() => {
      if (!started.current) dismiss()
    }, START_TIMEOUT)

    const onKey = (e) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      clearTimeout(skipTimer)
      clearTimeout(startTimer)
      window.removeEventListener('keydown', onKey)
    }
  }, [visible, dismiss])

  // Loading a source resets playbackRate in some browsers, so set it once
  // metadata lands rather than on the element up front.
  const applyRate = () => {
    const video = videoRef.current
    if (video) video.playbackRate = PLAYBACK_RATE
  }

  // Written straight to the node — a progress bar isn't worth a re-render 4x a second.
  const onTimeUpdate = () => {
    const video = videoRef.current
    const bar = barRef.current
    if (!video || !bar || !video.duration) return
    bar.style.transform = `scaleX(${video.currentTime / video.duration})`
  }

  if (!visible) return null

  return (
    <div
      className={`intro ${leaving ? 'is-leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Medzinity intro"
    >
      <video
        ref={videoRef}
        className="intro-video"
        src={introVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedMetadata={applyRate}
        onPlaying={() => { started.current = true; applyRate() }}
        onTimeUpdate={onTimeUpdate}
        onEnded={dismiss}
        onError={dismiss}
      />

      <button
        type="button"
        className={`intro-skip ${skippable ? 'is-shown' : ''}`}
        onClick={dismiss}
      >
        Skip intro
      </button>

      <div className="intro-progress" aria-hidden="true">
        <span ref={barRef} />
      </div>
    </div>
  )
}

export default IntroLoader
