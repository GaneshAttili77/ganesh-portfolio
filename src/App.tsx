import { lazy, Suspense, useEffect, type ReactNode } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/WhatsApp'
import Home from './pages/Home'
import Effects from './components/Effects'

// Inner pages load on demand so the home page ships less JavaScript
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

function Page({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()

  // New page → start at the top (hash links are handled by Home)
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname, location.hash])

  return (
    <>
      <Background />
      <Effects />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/blog" element={<Page><BlogPage /></Page>} />
          <Route path="/blog/:slug" element={<Page><BlogPost /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
