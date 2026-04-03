import AnimatedBackground from './AnimatedBackground'
import Navbar from './Navbar'
import ScrollManager from './ScrollManager'

export default function SiteShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-slate-100">
      <AnimatedBackground />
      <ScrollManager />
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
