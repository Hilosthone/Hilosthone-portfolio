// import './globals.css'
// import Header from '@/components/Header'
// import Hero from '@/components/Hero'
// import Skills from '@/components/Skills'
// import Experience from '@/components/Experience'
// import Testimonial from '@/components/Testimonial'
// import AboutMe from '@/components/AboutMe'
// import Contact from '@/components/Contact'
// import Footer from '@/components/Footer'
// import Projects from '@/components/Projects'

// export const metadata = {
//   title: 'Hilosthone | Portfolio',
//   description: 'Creative Software Engineer building modern web apps',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang='en'>
//       <body className='bg-white text-gray-900'>
//         <Header />
//         <Hero />
//         <Skills />
//         <Experience />
//         <Testimonial />
//         <AboutMe />
//         <Contact />
//         <Projects />
//         <Footer />
//         {/* <main className='pt-20'>{children}</main> */}
//       </body>
//     </html>
//   )
// }

// ❌ Do NOT include "use client" here
import './globals.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Testimonial from '@/components/Testimonial'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export const metadata = {
  title: 'Hilosthone | Portfolio',
  description: 'Creative Software Engineer building modern web apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-white text-gray-900'>
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Testimonial />
        <AboutMe />
        <Contact />
        <Projects />
        <Footer />
        {/* Optional: <main className='pt-20'>{children}</main> */}
      </body>
    </html>
  )
}
