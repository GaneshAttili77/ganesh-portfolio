import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'
import { useSeen } from '../hooks/useSeen'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { profile, stats } from '../data/content'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [ref, inView] = useSeen<HTMLSpanElement>(40)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="grad-text font-display text-4xl font-bold sm:text-5xl">
      {String(n).padStart(2, '0')}
      {suffix}
    </span>
  )
}

export default function About() {
  const contact = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with me', href: profile.whatsapp },
  ]

  return (
    <section id="about" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading no="01" eyebrow="About Me" title="From database to" highlight="deployed product" />

        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="grad-a absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl" />
            <div className="glass relative p-2.5">
              <Placeholder src={profile.aboutImage} size="800 × 960" alt={profile.name} className="aspect-[5/6] rounded-2xl" />
            </div>
            <div className="glass float absolute -bottom-5 -right-3 px-5 py-3 sm:-right-6">
              <p className="text-xs text-muted">Available for</p>
              <p className="grad-text font-display font-semibold">Freelance & full-time</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-mono text-sm text-emerald">// {profile.role}</p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{profile.fullName}</h3>
              {profile.bio.map((para, i) => (
                <p key={i} className="mt-4 leading-relaxed text-white/75">{para}</p>
              ))}
            </Reveal>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i} className="glass glass-hover p-4 text-center sm:p-6">
                  <Counter to={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-xs text-muted sm:text-sm">{s.label}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-9 grid gap-4 sm:grid-cols-3">
              {contact.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-3">
                  <span className="grad-b flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
