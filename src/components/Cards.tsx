import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { posts } from '../data/content'
import Placeholder from './Placeholder'

export function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link to={`/blog/${post.slug}`} className="glass glass-hover group block h-full overflow-hidden p-2.5">
      <div className="overflow-hidden rounded-2xl">
        <Placeholder
          src={post.image}
          size="1200 × 750"
          alt={post.title}
          className="aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="flex items-center gap-2 text-xs text-cyan">
          <CalendarDays className="h-3.5 w-3.5" /> {post.date}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
          Read More
          <ArrowUpRight className="h-4 w-4 text-emerald transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  )
}
