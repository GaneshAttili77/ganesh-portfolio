import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Mail, Send } from 'lucide-react'
import { profile } from '../data/content'
import { WhatsAppIcon } from '../components/WhatsApp'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend needed: the form opens a WhatsApp chat with the details pre-filled.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = [
      `Hi ${profile.firstName}, I found you through your portfolio.`,
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Mobile: ${data.get('mobile')}`,
      `Project: ${data.get('details')}`,
    ].join('\n')
    window.open(`${profile.whatsapp.split('?')[0]}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    e.currentTarget.reset()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading no="07" eyebrow="Contact" title="Have a project? Let’s" highlight="build it" />

        <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-6">
            <Reveal>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="glass glass-hover group flex gap-5 p-7">
                <span className="pulse-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25d366] text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">WhatsApp <span className="ml-1 rounded-md bg-emerald/15 px-2 py-0.5 align-middle font-mono text-[10px] text-emerald">fastest</span></h3>
                  <p className="mt-1 text-sm text-muted">{profile.phone}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-emerald">
                    Start a chat <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass glass-hover flex gap-5 p-7">
                <span className="grad-b flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Phone & Email</h3>
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="block break-all py-1.5 text-sm text-muted hover:text-white">
                    {profile.phone}
                  </a>
                  <a href={`mailto:${profile.email}`} className="block break-all py-1.5 text-sm text-muted hover:text-white">
                    {profile.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass relative grid gap-4 p-7 sm:grid-cols-2 sm:p-9">
              <input className="field sm:col-span-2" name="name" placeholder="Full Name*" required />
              <input className="field" name="email" type="email" placeholder="Email*" required />
              <input className="field" name="mobile" type="tel" placeholder="Mobile*" pattern="[0-9+\s\-]{7,15}" required />
              <textarea className="field resize-none sm:col-span-2" name="details" rows={5} placeholder="Write Project Details*" required />
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button type="submit" className="btn">
                  Send via WhatsApp <Send className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm text-emerald-300"
                    >
                      <CheckCircle2 className="h-4 w-4" /> WhatsApp opened — just press send there.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
