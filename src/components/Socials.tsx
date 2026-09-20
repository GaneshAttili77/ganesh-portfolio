import { Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import { socials } from '../data/content'

const icons = { github: Github, youtube: Youtube, instagram: Instagram, linkedin: Linkedin }

export default function Socials({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = icons[s.icon]
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grad-a absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Icon className="relative h-[18px] w-[18px] text-white/80 group-hover:text-white" />
          </a>
        )
      })}
    </div>
  )
}
