import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; to?: string }

export default function PageHeader({ title, highlight, crumbs }: { title: string; highlight?: string; crumbs: Crumb[] }) {
  return (
    <div className="px-5 pb-12 pt-36 text-center sm:px-8">
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
        {title} {highlight && <span className="grad-text">{highlight}</span>}
      </h1>
      <nav className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted">
        <Link to="/" className="hover:text-white">Home</Link>
        {crumbs.map((c) => (
          <span key={c.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-emerald" />
            {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
          </span>
        ))}
      </nav>
    </div>
  )
}
