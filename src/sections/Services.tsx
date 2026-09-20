import { Cloud, Globe, Plug, Search, Server, Smartphone } from 'lucide-react'
import { services } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = { globe: Globe, phone: Smartphone, server: Server, plug: Plug, cloud: Cloud, search: Search }

export default function Services() {
  return (
    <section id="services" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading no="02" eyebrow="Services" title="Everything your product needs," highlight="under one roof" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.title} delay={0.08 * (i % 3)}>
                <article className="glass glass-hover group h-full overflow-hidden p-7">
                  {/* glow that follows the hover */}
                  <div className="grad-a absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
                  <div className="relative flex items-start justify-between">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                        i % 2 ? 'grad-b shadow-emerald/30' : 'grad-a shadow-azure/40'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-sm text-white/20 transition-colors group-hover:text-cyan">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
