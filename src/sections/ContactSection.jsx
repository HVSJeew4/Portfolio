import SectionIntro from '../components/SectionIntro'

const links = [
  { label: 'Email', value: 'subhash@example.com', href: 'mailto:subhash@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/subhash-jeewantha', href: 'https://linkedin.com/in/subhash-jeewantha' },
  { label: 'GitHub', value: 'github.com/subhashjeewantha', href: 'https://github.com/subhashjeewantha' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell pt-10">
      <SectionIntro title="Contact" subtitle="Let’s discuss enterprise automation, Power Platform solution architecture, or product-minded engineering opportunities." />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {links.map((item) => (
              <li key={item.label}>
                <span className="font-medium text-white">{item.label}:</span>{' '}
                <a href={item.href} className="underline decoration-indigo-400/60 underline-offset-4 hover:text-white" target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="glass-panel space-y-4 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Send a Message</h3>
          <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none" type="text" placeholder="Your name" />
          <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none" type="email" placeholder="Your email" />
          <textarea rows="5" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none" placeholder="Your message" />
          <button type="button" className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
