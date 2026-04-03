import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import BlogCTA from '../components/BlogCTA'
import NotFoundState from '../components/NotFoundState'
import Seo from '../components/Seo'
import { getPostBySlug } from './blogUtils'

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

const markdownComponents = {
  h1: ({ node, ...props }) => <h1 className="mt-12 text-4xl font-bold text-white md:text-5xl" {...props} />,
  h2: ({ node, ...props }) => <h2 className="mt-12 text-3xl font-semibold text-white md:text-4xl" {...props} />,
  h3: ({ node, ...props }) => <h3 className="mt-10 text-2xl font-semibold text-white" {...props} />,
  p: ({ node, ...props }) => <p className="mt-6 text-lg leading-8 text-slate-300" {...props} />,
  ul: ({ node, ...props }) => <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-300" {...props} />,
  ol: ({ node, ...props }) => <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-300" {...props} />,
  li: ({ node, ...props }) => <li className="pl-1" {...props} />,
  blockquote: ({ node, ...props }) => <blockquote className="mt-8 border-l-4 border-indigo-300/50 pl-6 text-slate-200" {...props} />,
  code: ({ inline, children, ...props }) =>
    inline ? (
      <code className="rounded bg-white/10 px-1.5 py-1 text-sm text-indigo-100" {...props}>
        {children}
      </code>
    ) : (
      <code className="block overflow-x-auto rounded-2xl border border-white/10 bg-[#0f172a] p-4 text-sm leading-7 text-slate-100" {...props}>
        {children}
      </code>
    ),
  pre: ({ node, ...props }) => <pre className="mt-8 overflow-x-auto" {...props} />,
  a: ({ node, ...props }) => <a className="text-indigo-200 underline decoration-indigo-300/60 underline-offset-4 hover:text-white" {...props} />,
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <>
        <Seo title="Article Not Found | Subhash Jeewantha" />
        <NotFoundState />
      </>
    )
  }

  return (
    <>
      <Seo title={`${post.title} | Subhash Jeewantha`} description={post.excerpt} />
      <article className="section-shell pb-16 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          <Link className="text-sm font-semibold text-indigo-200 transition hover:text-white" to="/blog">
            Back to all articles
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-indigo-200">
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-indigo-200/80" />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="glass-panel mt-12 rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
            <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
          </div>

          <BlogCTA />
        </div>
      </article>
    </>
  )
}
