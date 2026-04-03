import { Link } from 'react-router-dom'

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export default function BlogCard({ post }) {
  return (
    <article className="glass-panel flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-indigo-200">
        <span>{formatDate(post.date)}</span>
        <span className="h-1 w-1 rounded-full bg-indigo-200/80" />
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
        <Link className="transition hover:text-indigo-200" to={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{post.excerpt}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            {tag}
          </span>
        ))}
      </div>

      <Link
        className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-200 transition hover:text-white"
        to={`/blog/${post.slug}`}
      >
        Read article
      </Link>
    </article>
  )
}
