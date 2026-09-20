import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navSections, profile } from '../data/content'
import { useScrollSpy } from '../hooks/useScrollSpy'

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const onHome = pathname === '/'
  const ids = useMemo(() => navSections.map((s) => s.id), [])
  const spied = useScrollSpy(ids, onHome)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // On sub-pages, highlight the section the page belongs to
  const active = onHome ? spied : pathname.startsWith('/blog') ? 'blog' : 'home'

  useEffect(() => {
    // only re-render when the state actually flips
    const onScroll = () => setScrolled((was) => (window.scrollY > 24) === was ? was : !was)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    if (onHome) {
      scrollToSection(id)
      window.history.replaceState(null, '', id === 'home' ? '/' : `/#${id}`)
    } else {
      // Home picks the hash up after the page transition and scrolls to it
      navigate(id === 'home' ? '/' : `/#${id}`)
    }
  }

  return (
    <>
      {/* Floating pill: transparent at the top, glass capsule once you scroll */}
      <header className={`fixed inset-x-0 z-50 px-3 transition-all duration-500 sm:px-5 ${scrolled ? 'top-3' : 'top-0'}`}>
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-5 ${
            scrolled
              ? 'h-[58px] border-white/10 bg-[#0a1120]/95 shadow-xl shadow-black/40'
              : 'h-[72px] border-transparent bg-transparent'
          }`}
        >
          <Link to="/" onClick={() => go('home')} className="group flex items-center gap-2.5">
            <span className="grad-a flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-bold text-white shadow-lg shadow-azure/40 transition-transform duration-500 group-hover:-rotate-12">
              {profile.name.split(' ').map((w) => w[0]).join('')}
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navSections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                    active === s.id ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-base/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grad-b absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl" />
            <div className="grad-a absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl" />
            <ul className="relative flex flex-col items-center gap-2">
              {navSections.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <button
                    onClick={() => go(s.id)}
                    className={`px-6 py-2.5 font-display text-3xl font-semibold ${
                      active === s.id ? 'grad-text' : 'text-white/80'
                    }`}
                  >
                    {s.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
