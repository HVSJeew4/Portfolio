import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="section-shell pb-28 pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-8 md:p-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-200">Associate Software Engineer</p>
        <h1 className="mt-4 max-w-3xl bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          Subhash Jeewantha
        </h1>
        <p className="mt-4 text-xl font-medium text-slate-100">Power Platform Developer</p>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          Building scalable business solutions using Microsoft Power Platform and modern web technologies.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}
