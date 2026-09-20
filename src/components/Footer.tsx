import { ArrowUp, Mail } from 'lucide-react'
import { navSections, profile } from '../data/content'
import Socials from './Socials'
import Reveal from './Reveal'
import { WhatsAppIcon } from './WhatsApp'

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/5">
      {/* Closing call to action */}
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <p className="font-mono text-sm text-emerald">// got an idea?</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Let’s build something <span className="grad-text">people actually use.</span>
          </h2>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a className="btn-ghost max-w-full break-all" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Giant outlined name */}
      <div aria-hidden className="marquee-wrap mt-14 select-none overflow-hidden sm:mt-20">
        <div className="marquee [animation-duration:48s]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={`mx-6 whitespace-nowrap font-display text-[18vw] font-bold uppercase leading-none tracking-tighter lg:text-[11rem] ${i % 2 ? 'grad-text opacity-80' : 'outline-text'}`}>
              {profile.name} —
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 lg:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Designed & built by me.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-muted">
          {navSections.slice(1).map((s) => (
            <li key={s.id}>
              <a href={`/#${s.id}`} className="transition-colors hover:text-white">{s.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 pr-0 lg:pr-0">
          <Socials />
          <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grad-a flex h-11 w-11 items-center justify-center rounded-xl shadow-lg shadow-azure/40 transition-transform hover:-translate-y-1"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
