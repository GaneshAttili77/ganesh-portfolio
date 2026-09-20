import Reveal from './Reveal'

type Props = { no?: string; eyebrow: string; title: string; highlight?: string }

/** Editorial heading: index number + label on a hairline, big left-aligned title. */
export default function SectionHeading({ no, eyebrow, title, highlight }: Props) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        {no && <span className="text-cyan">{no}</span>}
        <span className="h-px w-10 bg-gradient-to-r from-cyan to-transparent" />
        <span>{eyebrow}</span>
        <span className="hidden h-px flex-1 bg-white/5 sm:block" />
      </div>
      <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[3.25rem]">
        {title} {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
    </Reveal>
  )
}
