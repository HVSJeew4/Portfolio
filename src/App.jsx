import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLoader from './components/PageLoader'
import SiteShell from './components/SiteShell'

const PortfolioHome = lazy(() => import('./pages/PortfolioHome'))
const BlogList = lazy(() => import('./blog/BlogList'))
const BlogPost = lazy(() => import('./blog/BlogPost'))

export default function App() {
  return (
    <SiteShell>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>
    </SiteShell>
  )
}
