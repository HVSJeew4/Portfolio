import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import ApproachSection from './sections/ApproachSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-slate-100">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ApproachSection />
        <ContactSection />
      </main>
    </div>
  )
}
