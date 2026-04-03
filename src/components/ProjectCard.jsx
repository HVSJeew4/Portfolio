import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="glass-panel group rounded-2xl p-6"
    >
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
