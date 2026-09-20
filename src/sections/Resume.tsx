import { motion } from 'framer-motion'
import { Briefcase, Download, Gauge, type LucideIcon } from 'lucide-react'
import { experience, marqueeText, profile, skills } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useSeen } from '../hooks/useSeen'

type Entry = { period: string; title: string; place: string; points?: string[] }

function Timeline({ title, icon: Icon, items, pink }: { title: string; icon: LucideIcon; items: Entry[]; pink?: boolean }) {
  const [lineRef, seen] = useSeen<HTMLSpanElement>(120)
  return (
    <div>
      <Reveal className="mb-8 flex items-center gap-3">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pink ? 'grad-b' : 'grad-a'}`}>
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </Reveal>

      <div className="relative pl-8">
        {/* line draws itself as the column scrolls into view */}
        <motion.span
          ref={lineRef}
          className={`absolute left-[7px] top-2 w-0.5 origin-top rounded-full ${
            pink ? 'bg-gradient-to-b from-emerald to-cyan/10' : 'bg-gradient-to-b from-cyan to-azure/10'
          }`}
          style={{ height: 'calc(100% - 1rem)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: seen ? 1 : 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <div className="space-y-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={0.15 * i} className="relative">
              <span className={`absolute -left-8 top-7 h-4 w-4 rounded-full ring-4 ring-base ${pink ? 'grad-b' : 'grad-a'}`} />
              <div className="glass glass-hover p-6">
                <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-cyan">{it.period}</span>
                <h4 className="mt-3 text-lg font-semibold">{it.title}</h4>
                <p className="mt-1 text-sm text-muted">{it.place}</p>
                {it.points && (
                  <ul className="mt-4 space-y-2.5">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-white/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" /> {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

function Bar({ level, pink, delay }: { level: number; pink: boolean; delay: number }) {
  const [ref, seen] = useSeen<HTMLDivElement>(20)
  return (
    <motion.div
      ref={ref}
      className={`h-full rounded-full ${pink ? 'grad-b' : 'grad-a'}`}
      initial={{ width: 0 }}
      animate={{ width: seen ? `${level}%` : 0 }}
      transition={{ duration: 1.3, delay, ease: 'easeOut' }}
    />
  )
}

export default function Resume() {
  return (
    <section id="resume" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading no="04" eyebrow="Resume" title="Experience and" highlight="hands-on skills" />

        <Reveal className="-mt-6 mb-14 flex">
          <a href={profile.resumeFile} download className="btn">
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <Timeline title="Experience" icon={Briefcase} items={experience} />

          <div>
            <Reveal className="mb-8 flex items-center gap-3">
              <span className="grad-b flex h-12 w-12 items-center justify-center rounded-2xl">
                <Gauge className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-semibold">Skills</h3>
            </Reveal>
            <div className="space-y-6">
              {skills.map((s, i) => (
                <Reveal key={s.name} delay={0.05 * i}>
                  <div className="flex items-baseline justify-between">
                    <p className="font-mono text-sm text-white/85">
                      <span className="text-emerald">$</span> {s.name}
                    </p>
                    <p className="grad-text font-display text-lg font-bold">{s.level}%</p>
                  </div>
                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <Bar level={s.level} pink={i % 2 === 1} delay={0.15 + 0.05 * i} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 overflow-hidden border-y border-white/5 bg-white/[0.02] py-6">
        <div className="marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className={`mx-8 whitespace-nowrap font-display text-4xl font-bold sm:text-6xl ${i % 2 ? 'stroke-text' : 'grad-text'}`}
            >
              {marqueeText} <span className="mx-6 text-emerald">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
