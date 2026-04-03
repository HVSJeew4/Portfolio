export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute -left-24 top-20 h-64 w-64 animate-pulse rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-8 h-72 w-72 animate-pulse rounded-full bg-fuchsia-500/10 blur-3xl [animation-delay:700ms]" />
    </div>
  )
}
