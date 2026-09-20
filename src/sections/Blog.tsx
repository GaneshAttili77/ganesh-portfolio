import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { posts } from '../data/content'
import { PostCard } from '../components/Cards'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Blog() {
  return (
    <section id="blog" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading no="06" eyebrow="Blog" title="Notes from real" highlight="builds & deployments" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={0.1 * i}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link to="/blog" className="btn-ghost">
            All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
