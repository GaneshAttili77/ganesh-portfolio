import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import {
  Atom, Bot, ClipboardList, Cloud, Code2, Coffee, CreditCard, KeyRound, Mail, MapPin,
  MessageCircle, Plug, Rocket, Search, Smartphone, Sparkles, Video,
} from 'lucide-react'
import { aiTools, integrations, process, techStack } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useSeen } from '../hooks/useSeen'

const stackIcons = { coffee: Coffee, atom: Atom, phone: Smartphone, cloud: Cloud }
const integrationIcons = { card: CreditCard, chat: MessageCircle, mail: Mail, video: Video, key: KeyRound, map: MapPin }
const processIcons = { plan: ClipboardList, code: Code2, plug: Plug, rocket: Rocket, search: Search }

const delayVar = (s: number) => ({ '--sd': `${s}s` }) as CSSProperties

function SubHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="mb-8 mt-14 sm:mt-20">
      <p className="font-mono text-sm text-emerald">// {kicker}</p>
      <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{title}</h3>
    </Reveal>
  )
}

/** Plan → Build → Integrate → Deploy → Optimise, with a line that fills on scroll. */
function Pipeline() {
  const [ref, seen] = useSeen<HTMLDivElement>(140)
  return (
    <div ref={ref} className="relative">
      <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] rounded bg-white/10 lg:block">
        <motion.div
          className="h-full origin-left rounded bg-gradient-to-r from-azure via-cyan to-emerald"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: seen ? 1 : 0 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {process.map((p, i) => {
          const Icon = processIcons[p.icon]
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.4 }}
            >
              <span className="grad-a pulse-ring relative z-10 flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-base" style={delayVar(i * 0.5)}>
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-mono text-xs text-cyan">step {String(i + 1).padStart(2, '0')}</p>
              <h4 className="mt-1 text-lg font-semibold">{p.title}</h4>
              <p className="mt-1.5 text-sm text-muted">{p.text}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function Stack() {
  return (
    <section id="stack" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading no="03" eyebrow="Tech Stack" title="The tools I use to" highlight="build & ship" />

        {/* Core stack */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((g, i) => {
            const Icon = stackIcons[g.icon]
            return (
              <Reveal key={g.group} delay={0.08 * i}>
                <div className="glass glass-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${i % 2 ? 'grad-b' : 'grad-a'}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{g.group}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Integrations */}
        <SubHeading kicker="integrations" title="Services I connect to your product" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((it, i) => {
            const Icon = integrationIcons[it.icon]
            return (
              <Reveal key={it.title} delay={0.08 * (i % 3)}>
                <div className="glass glass-hover group h-full p-6">
                  <span className="signal" style={delayVar(i * 0.45)} />
                  <div className="flex items-center gap-4">
                    <span className="pulse-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan group-hover:text-[#060a13]" style={delayVar(i * 0.45)}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold">{it.title}</h4>
                      <p className="flex items-center gap-1.5 font-mono text-[11px] text-emerald">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> connected
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{it.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* AI tools */}
        <SubHeading kicker="ai-assisted workflow" title="AI tools that make me faster" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div className="glass glass-hover h-full p-6">
                <span className="shimmer-layer" style={delayVar(i * 0.6)} />
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-cyan">
                    {i % 2 ? <Sparkles className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                  </span>
                  <span className="font-mono text-[11px] text-white/30">ai.{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-5 text-lg font-semibold">{t.name}</h4>
                <p className="mt-1.5 text-sm text-muted">{t.use}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Delivery pipeline */}
        <SubHeading kicker="how i ship" title="From idea to live, step by step" />
        <Pipeline />
      </div>
    </section>
  )
}
