import { Quote } from 'lucide-react'
import { clients } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const initials = (name: string) =>
  name.split(' ').filter((w) => /^[A-Za-z0-9]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join('')

/** Clients I have built for. A client's own words appear only when a real `quote` is added in content.ts. */
export default function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading no="05" eyebrow="Clients" title="Businesses I have" highlight="built for" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={0.1 * i}>
              <article className="glass glass-hover flex h-full flex-col p-7">
                <div className="flex items-center gap-4">
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-bold ${i % 2 ? 'grad-b' : 'grad-a'}`}>
                    {initials(c.name)}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{c.name}</h3>
                    <p className="mt-1 font-mono text-[11px] text-emerald">{c.type}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-white/75">{c.work}</p>

                {c.quote && (
                  <blockquote className="relative mt-5 border-l-2 border-cyan/50 pl-4 text-sm italic text-white/85">
                    <Quote className="absolute -left-2.5 -top-3 h-4 w-4 text-cyan" />“{c.quote}”
                  </blockquote>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
