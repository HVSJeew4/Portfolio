const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f19]/80 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
          SJ Portfolio
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className="text-sm text-slate-300 transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
