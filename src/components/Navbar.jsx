import { Link, NavLink, useLocation } from 'react-router-dom'

const portfolioItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Articles', href: '/#articles' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const location = useLocation()
  const isBlogPage = location.pathname.startsWith('/blog')

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f19]/80 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link to="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
          SJ Portfolio
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {portfolioItems.map((item) => (
            <li key={item.label}>
              <a className="text-sm text-slate-300 transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-sm transition hover:text-white ${isActive || isBlogPage ? 'text-white' : 'text-slate-300'}`
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
