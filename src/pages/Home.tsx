import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Stack from '../sections/Stack'
import Resume from '../sections/Resume'
import Testimonials from '../sections/Testimonials'
import Blog from '../sections/Blog'
import Contact from '../sections/Contact'
import { scrollToSection } from '../components/Navbar'

export default function Home() {
  const { hash } = useLocation()

  // Deep links (/#resume) and nav clicks coming from other pages
  useEffect(() => {
    if (!hash) return
    const id = setTimeout(() => scrollToSection(hash.slice(1)), 450)
    return () => clearTimeout(id)
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stack />
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  )
}
