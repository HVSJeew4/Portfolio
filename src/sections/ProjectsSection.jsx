import SectionIntro from '../components/SectionIntro'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Vehicle Maintenance System',
    description: 'A system to manage and track vehicle maintenance schedules and activities without IoT devices.',
    features: ['Maintenance tracking', 'Notifications & reminders', 'Multi-vehicle management'],
    tech: ['Power Apps', 'Dataverse', 'Power Automate'],
  },
  {
    title: 'Employee Leave Management System',
    description: 'A digital leave management workflow that streamlines requests, approvals, and communications.',
    features: ['Leave request workflow', 'Approval system', 'Email notifications'],
    tech: ['Power Apps', 'Power Automate', 'SharePoint'],
  },
  {
    title: 'Onboarding Automation System',
    description: 'An onboarding solution to automate employee setup, task ownership, and document handling.',
    features: ['Employee onboarding workflows', 'Document handling', 'Task automation'],
    tech: ['Power Platform', 'SharePoint'],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell pt-10">
      <SectionIntro title="Projects" subtitle="Selected solution builds that demonstrate process automation, system thinking, and enterprise delivery discipline." />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
