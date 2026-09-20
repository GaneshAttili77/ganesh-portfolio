import { useEffect, useRef } from 'react'

/**
 * Page-wide polish, each throttled to one update per frame:
 *  - scroll progress bar
 *  - cursor spotlight on every .glass card (sets --mx / --my, CSS does the rest)
 */
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scrollQueued = false
    const paintBar = () => {
      scrollQueued = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    const onScroll = () => {
      if (scrollQueued) return
      scrollQueued = true
      requestAnimationFrame(paintBar)
    }
    paintBar()
    window.addEventListener('scroll', onScroll, { passive: true })

    let moveQueued = false
    let last: MouseEvent | null = null
    const paintSpot = () => {
      moveQueued = false
      const card = (last?.target as HTMLElement | null)?.closest?.('.glass') as HTMLElement | null
      if (!card || !last) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${last.clientX - r.left}px`)
      card.style.setProperty('--my', `${last.clientY - r.top}px`)
    }
    const onMove = (e: MouseEvent) => {
      last = e
      if (moveQueued) return
      moveQueued = true
      requestAnimationFrame(paintSpot)
    }
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (fine) window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div
      ref={bar}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-azure via-cyan to-emerald will-change-transform"
    />
  )
}
