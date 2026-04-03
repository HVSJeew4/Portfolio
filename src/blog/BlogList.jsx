import { useMemo, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Seo from '../components/Seo'
import { getAllPosts, getAllTags } from './blogUtils'

const allPosts = getAllPosts()
const allTags = getAllTags()

export default function BlogList() {
  const [activeTag, setActiveTag] = useState('All')

  const visiblePosts = useMemo(() => {
    if (activeTag === 'All') {
      return allPosts
    }

    return allPosts.filter((post) => post.tags.includes(activeTag))
  }, [activeTag])

  return (
    <>
      <Seo
        title="Engineering Blog | Subhash Jeewantha"
        description="Technical essays on Power Platform architecture, system design, implementation tradeoffs, and practical business solution thinking."
      />
      <section className="section-shell pb-10 pt-24 md:pt-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Engineering blog</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Real-world system thinking for Power Platform and business software.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            These articles focus on problem framing, tradeoffs, implementation choices, and lessons learned from building practical business systems.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {['All', ...allTags].map((tag) => {
            const active = tag === activeTag

            return (
              <button
                key={tag}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? 'border-indigo-300/60 bg-indigo-400/20 text-white'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
                onClick={() => setActiveTag(tag)}
                type="button"
              >
                {tag}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {visiblePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
