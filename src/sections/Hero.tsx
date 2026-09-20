import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { profile, techMarquee } from '../data/content'
import Placeholder from '../components/Placeholder'
import Socials from '../components/Socials'
import Typewriter from '../components/Typewriter'
import { WhatsAppIcon } from '../components/WhatsApp'
import { scrollToSection } from '../components/Navbar'

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

// [text, token class] — k keyword, a annotation, s string, t type, f function, c comment
type Tok = [string, string?]
const code: Tok[][] = [
  [['@RestController', 'tok-a']],
  [['public class ', 'tok-k'], ['Developer', 'tok-t'], [' {']],
  [],
  [['  String ', 'tok-t'], ['name'], [' = '], [`"${profile.name}"`, 'tok-s'], [';']],
  [['  String ', 'tok-t'], ['role'], [' = '], ['"Java Full Stack"', 'tok-s'], [';']],
  [],
  [['  List', 'tok-t'], ['<'], ['String', 'tok-t'], ['> '], ['stack', 'tok-f'], ['() {']],
  [['    return ', 'tok-k'], ['List', 'tok-t'], ['.of('], ['"Java"', 'tok-s'], [', '], ['"MySQL"', 'tok-s'], [',']],
  [['        '], ['"React JS"', 'tok-s'], [', '], ['"React Native"', 'tok-s'], [');']],
  [['  }']],
  [],
  [['  @PostMapping', 'tok-a'], ['('], ['"/deploy"', 'tok-s'], [')']],
  [['  Status ', 'tok-t'], ['ship', 'tok-f'], ['() {']],
  [['    return ', 'tok-k'], ['cloud.'], ['deploy', 'tok-f'], ['('], ['"AWS"', 'tok-s'], [');'], ['  // ✓ live', 'tok-c']],
  [['  }']],
  [['}']],
]

const chips = [
  { label: 'Java', cls: '-left-4 top-16 float', dot: 'bg-amber' },
  { label: 'React', cls: '-right-3 top-28 float-slow', dot: 'bg-cyan' },
  { label: 'MySQL', cls: '-left-6 bottom-24 float-slow', dot: 'bg-azure' },
  { label: 'AWS', cls: '-right-5 bottom-10 float', dot: 'bg-emerald' },
]

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center pt-24 sm:pt-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        {/* Left: intro */}
        <motion.div className="min-w-0" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80"
          >
            <span className="status-dot" /> Available for freelance & full-time work
          </motion.span>

          <motion.p variants={item} className="mt-7 font-mono text-sm text-muted">
            <span className="text-emerald">const</span> developer <span className="text-cyan">=</span>
          </motion.p>
          <motion.h1 variants={item} className="mt-2 text-[2.75rem] font-semibold leading-[0.98] tracking-tight sm:text-7xl xl:text-[5.4rem]">
            {profile.name.split(' ')[0]}
            <br />
            <span className="grad-text grad-anim">{profile.name.split(' ').slice(1).join(' ')}</span>
            <span className="text-cyan">.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-5 min-h-[3.4em] font-mono text-lg font-medium text-white/90 sm:min-h-[1.6em] sm:text-2xl">
            <span className="text-emerald">&gt;</span> <Typewriter words={profile.typedRoles} />
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <button className="btn flex-1 justify-center sm:flex-none" onClick={() => scrollToSection('contact')}>
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </button>
            <a className="btn-ghost flex-1 justify-center whitespace-nowrap sm:flex-none" href={profile.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="h-4 w-4 text-[#25d366]" /> WhatsApp Me
            </a>
            <a className="btn-ghost w-full justify-center sm:w-auto" href={profile.resumeFile} download>
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-5">
            <span className="h-px w-10 bg-gradient-to-r from-cyan to-transparent" />
            <Socials />
          </motion.div>
        </motion.div>

        {/* Right: live code window */}
        <motion.div
          className="relative mx-auto w-full min-w-0 max-w-xl"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grad-a absolute -inset-6 rounded-[2rem] opacity-25 blur-3xl" />

          <div className="code-window relative overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted">Developer.java</span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[11.5px] leading-6 sm:text-[13px]">
              {code.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.11, duration: 0.35 }}
                >
                  <span className="mr-4 w-5 shrink-0 select-none text-right text-white/20">{i + 1}</span>
                  <span className="text-white/85">
                    {line.map(([text, cls], k) => (
                      <span key={k} className={cls}>{text}</span>
                    ))}
                    {i === code.length - 1 && <span className="caret" />}
                  </span>
                </motion.div>
              ))}
            </pre>
            <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 font-mono text-[11px] text-muted">
              <span className="flex items-center gap-2"><span className="status-dot" /> build passing</span>
              <span>UTF-8 · Java 17</span>
            </div>
          </div>

          {/* photo badge */}
          <div className="absolute -top-12 right-5 overflow-hidden rounded-2xl p-[2px] shadow-xl shadow-azure/30 sm:-top-16">
            <div className="spin-slow absolute -inset-[40%] rounded-full bg-[conic-gradient(#22d3ee,#3b82f6,#34d399,#22d3ee)]" />
            <div className="relative overflow-hidden rounded-[0.9rem]">
              <Placeholder src={profile.heroImage} size="400²" alt={profile.name} eager className="h-24 w-24 bg-surface sm:h-32 sm:w-32" />
            </div>
          </div>

          {chips.map((c) => (
            <span
              key={c.label}
              className={`glass absolute hidden items-center gap-2 px-3.5 py-2 font-mono text-xs font-medium sm:flex ${c.cls}`}
            >
              <span className={`h-2 w-2 rounded-full ${c.dot}`} /> {c.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Tech strip */}
      <div className="marquee-wrap fade-x mt-16 overflow-hidden border-y border-white/5 bg-white/[0.02] py-4">
        <div className="marquee">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 whitespace-nowrap font-mono text-sm text-white/65">
              {t} <span className="text-cyan/70">/</span>
            </span>
          ))}
        </div>
      </div>

      <button
        aria-label="Scroll down"
        onClick={() => scrollToSection('about')}
        className="mx-auto my-6 hidden text-muted hover:text-white sm:block"
      >
        <motion.span className="block" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </button>
    </section>
  )
}
