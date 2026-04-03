import { Link } from 'react-router-dom'
import { getFeaturedPosts } from '../blog/blogUtils'
import BlogCard from '../components/BlogCard'
import SectionIntro from '../components/SectionIntro'

const latestPosts = getFeaturedPosts(3)

export default function LatestArticlesSection() {
  return (
    <section id="articles" className="section-shell pt-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionIntro
          title="Latest Articles"
          subtitle="Technical writing focused on engineering judgment, system design, and the tradeoffs behind practical business software."
        />
        <Link className="text-sm font-semibold text-indigo-200 transition hover:text-white" to="/blog">
          View all articles
        </Link>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        {latestPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
