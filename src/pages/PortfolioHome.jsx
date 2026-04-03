import Seo from '../components/Seo'
import AboutSection from '../sections/AboutSection'
import ApproachSection from '../sections/ApproachSection'
import ContactSection from '../sections/ContactSection'
import ExperienceSection from '../sections/ExperienceSection'
import HeroSection from '../sections/HeroSection'
import LatestArticlesSection from '../sections/LatestArticlesSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'

export default function PortfolioHome() {
  return (
    <>
      <Seo title="Subhash Jeewantha | Associate Software Engineer" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LatestArticlesSection />
      <ExperienceSection />
      <ApproachSection />
      <ContactSection />
    </>
  )
}
