import { posts } from '../data/content'
import { PostCard } from '../components/Cards'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function BlogPage() {
  return (
    <>
      <PageHeader title="The" highlight="Blog" crumbs={[{ label: 'Blog' }]} />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={0.1 * (i % 3)}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>
    </>
  )
}
