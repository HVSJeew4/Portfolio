import SectionIntro from '../components/SectionIntro'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell pt-10">
      <SectionIntro title="Experience" subtitle="Enterprise-focused delivery experience in building scalable apps and automating high-impact business workflows." />
      <article className="glass-panel mt-8 rounded-2xl p-6 md:p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-indigo-200">Role</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Associate Software Engineer – Power Platform Developer</h3>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300 md:text-base">
          <li>Build and maintain enterprise applications using Power Apps, Dataverse, and integrated Microsoft 365 services.</li>
          <li>Automate business processes with Power Automate to reduce manual effort and improve process reliability.</li>
          <li>Collaborate with clients and stakeholders to translate business needs into scalable technical solutions.</li>
          <li>Deliver maintainable architecture patterns with focus on performance, governance, and long-term supportability.</li>
        </ul>
      </article>
    </section>
  )
}
