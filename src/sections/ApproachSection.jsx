import SectionIntro from '../components/SectionIntro'

const approach = [
  {
    title: '1. Understand the Business Problem',
    text: 'Define the root problem, current process constraints, and measurable business outcomes before proposing any technical implementation.',
  },
  {
    title: '2. Design the Data Flow',
    text: 'Map entities, ownership, process states, and integration touchpoints so the system remains clear, auditable, and maintainable.',
  },
  {
    title: '3. Choose the Right Tooling',
    text: 'Decide intentionally between Power Apps, Power Automate, Dataverse, SharePoint, or API layers based on complexity and scale.',
  },
  {
    title: '4. Build for Scale and Maintenance',
    text: 'Implement reusable patterns, clear naming, and versioned solution structures to support evolving business needs safely.',
  },
]

export default function ApproachSection() {
  return (
    <section id="approach" className="section-shell pt-10">
      <SectionIntro title="How I Build Solutions" subtitle="I approach every solution as a product: solve the right problem first, then engineer for reliability, adoption, and scale." />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {approach.map((item) => (
          <article key={item.title} className="glass-panel rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
