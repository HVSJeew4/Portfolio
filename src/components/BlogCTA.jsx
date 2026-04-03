import { Link } from 'react-router-dom'

export default function BlogCTA() {
  return (
    <section className="glass-panel mt-14 rounded-3xl p-8 md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Continue exploring</p>
      <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">See how this thinking translates into shipped solutions.</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
        I use the same problem-first approach in delivery work: understand constraints, shape the system carefully, and build for maintainability.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90"
          to="/#projects"
        >
          View my projects
        </Link>
        <Link
          className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
          to="/"
        >
          Explore my portfolio
        </Link>
      </div>
    </section>
  )
}
