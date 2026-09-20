import { useEffect, useState } from 'react'

/** Returns the id of the last section whose top has passed the upper third of the viewport. */
export function useScrollSpy(ids: string[], enabled: boolean) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!enabled) return
    const check = () => {
      const line = window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // bottom of the page → last section, even if it is short
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1]
      setActive(current)
    }
    // at most one measurement per frame
    let queued = false
    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(() => { queued = false; check() })
    }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, enabled])

  return active
}
