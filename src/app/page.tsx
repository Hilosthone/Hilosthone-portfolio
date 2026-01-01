'use client'

import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  )
}