import { Link } from 'react-router-dom'

export default function NotFoundState() {
  return (
    <section className="section-shell flex min-h-[70vh] items-center">
      <div className="glass-panel w-full rounded-3xl p-8 text-center md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Article not found</p>
        <h1 className="mt-4 text-4xl font-bold text-white">This post does not exist yet.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
          The link may be outdated, or the article may still be in progress. You can return to the blog archive or explore the main portfolio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90"
            to="/blog"
          >
            Back to blog
          </Link>
          <Link
            className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
            to="/"
          >
            Go to portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
