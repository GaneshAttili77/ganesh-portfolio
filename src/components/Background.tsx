import { useEffect, useRef, useState } from 'react'

/**
 * Drifting nodes joined by faint lines — a quiet "network" loop behind the page.
 * Kept deliberately cheap: desktop only, 1x resolution, ~30 fps, few nodes, paused when hidden.
 */
function Network() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const LINK = 150
    const FRAME = 1000 / 30
    let w = 0, h = 0, raf = 0, last = 0
    let nodes: { x: number; y: number; vx: number; vy: number }[] = []

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const count = Math.min(30, Math.round((w * h) / 50000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }))
    }

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      if (now - last < FRAME) return
      last = now

      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 > LINK * LINK) continue
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.16 * (1 - Math.sqrt(d2) / LINK)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
      ctx.fillStyle = 'rgba(103, 232, 249, 0.55)'
      for (const n of nodes) ctx.fillRect(n.x - 1, n.y - 1, 2, 2)
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70" />
}

/** Only run the canvas where it is cheap: wide screens, capable CPUs, motion allowed. */
function useCanAnimate() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cores = navigator.hardwareConcurrency ?? 8
    setOk(!reduced && window.innerWidth >= 1024 && cores > 4)
  }, [])
  return ok
}

/** Fixed, looping ambient background — sits behind everything. */
export default function Background() {
  const network = useCanAnimate()
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-lines" />
      {network && <Network />}
      <div className="grain" />
    </div>
  )
}
