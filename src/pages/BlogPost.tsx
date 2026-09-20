import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { posts, profile } from '../data/content'
import { PostCard } from '../components/Cards'
import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const others = posts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <PageHeader title={post.title} crumbs={[{ label: 'Blog', to: '/blog' }, { label: 'Post' }]} />

      <article className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
        <p className="mb-6 flex items-center justify-center gap-2 text-sm text-cyan">
          <CalendarDays className="h-4 w-4" /> {post.date} · by {profile.name}
        </p>
        <Reveal className="glass p-2.5">
          <Placeholder src={post.image} size="1600 × 900" alt={post.title} className="aspect-video rounded-2xl" />
        </Reveal>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-white/80">
          {post.body.map((para, i) => (
            <Reveal key={i}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>
        <Link to="/blog" className="btn-ghost mt-12">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </article>

      {others.length > 0 && (
        <div className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
          <h2 className="mb-8 text-center text-2xl font-semibold">More <span className="grad-text">Posts</span></h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
