import SectionIntro from '../components/SectionIntro'

const skillGroups = [
  {
    title: 'Power Platform',
    skills: ['Power Apps (Canvas, Model-driven)', 'Power Automate', 'Dataverse', 'Solution Architecture'],
  },
  {
    title: 'Development',
    skills: ['React (basic/intermediate)', 'JavaScript', 'ASP.NET Core Web API'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Azure DevOps', 'Git / GitHub', 'SharePoint', 'Microsoft 365'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell pt-10">
      <SectionIntro title="Skills" subtitle="Core technologies and platforms I use to design, build, and deliver reliable enterprise solutions." />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-panel rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
