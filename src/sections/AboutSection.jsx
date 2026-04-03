import SectionIntro from '../components/SectionIntro'

export default function AboutSection() {
  return (
    <section id="about" className="section-shell pt-6">
      <SectionIntro
        title="About Me"
        subtitle="I build practical enterprise solutions with a systems mindset, balancing user experience, automation, and long-term maintainability."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Professional Summary</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <li>Power Platform Developer with hands-on delivery experience in Power Apps, Power Automate, and Dataverse.</li>
            <li>Focused on real-world business outcomes: automation, workflow optimization, and enterprise-grade apps.</li>
            <li>Interested in system design, data architecture, and scalable business solution patterns.</li>
          </ul>
        </article>
        <article className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Thinking Approach</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            I begin with why the problem exists, map how teams currently work, and identify the impact of delays, errors, or repetitive tasks.
            Then I design workflows and data models around measurable business value, selecting tools that reduce complexity while
            supporting growth over time.
          </p>
        </article>
      </div>
    </section>
  )
}
