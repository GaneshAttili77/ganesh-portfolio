import { useEffect, useRef, useState } from 'react'

/**
 * One scroll/resize listener for the whole page (rAF-throttled) instead of one per element.
 * Each subscriber returns true once it is done and wants to be dropped.
 */
const watchers = new Set<() => boolean>()
let scheduled = false
let listening = false

function run() {
  scheduled = false
  watchers.forEach((check) => check() && watchers.delete(check))
}
function schedule() {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(run)
}
function watch(check: () => boolean) {
  watchers.add(check)
  if (!listening) {
    listening = true
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  }
  schedule()
  return () => void watchers.delete(check)
}

/** True once the element has scrolled into the viewport (stays true). */
export function useSeen<T extends HTMLElement>(offset = 80) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    if (seen) return
    const check = () => {
      const el = ref.current
      if (!el) return false
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight - offset && r.bottom > 0) {
        setSeen(true)
        return true
      }
      return false
    }
    const stop = watch(check)
    // re-check shortly after mount so page-transition offsets have settled
    const t = setTimeout(schedule, 500)
    return () => {
      clearTimeout(t)
      stop()
    }
  }, [seen, offset])

  return [ref, seen] as const
}
