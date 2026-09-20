import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

type Props = { src: string; size?: string; alt?: string; className?: string; imgClassName?: string; eager?: boolean }

const EXTENSIONS = ['webp', 'jpg', 'png', 'jpeg']

/**
 * Shows the image for `src` if it exists in /public — in any of .webp / .jpg / .png —
 * otherwise a labelled gradient placeholder telling you which file to add and at what size.
 */
export default function Placeholder({ src, size, alt = '', className = '', imgClassName = '', eager }: Props) {
  const [attempt, setAttempt] = useState(0)
  const base = src.replace(/\.\w+$/, '')
  const missing = attempt >= EXTENSIONS.length
  const file = base.split('/').pop()

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {missing ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-cyan/40 via-azure/25 to-emerald/40 text-center">
          <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.08)_0_10px,transparent_10px_20px)]" />
          <ImageIcon className="relative h-6 w-6 text-white/70" />
          <span className="relative px-2 font-mono text-[11px] leading-tight text-white/85">{file}.webp / .jpg</span>
          {size && <span className="relative font-mono text-[10px] text-white/55">{size}</span>}
        </div>
      ) : (
        <img
          key={attempt}
          src={`${base}.${EXTENSIONS[attempt]}`}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setAttempt((a) => a + 1)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
