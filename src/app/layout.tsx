'use client' // Note: AOS initialization needs a client component context

import './globals.css'
import 'aos/dist/aos.css' // Import AOS styles
import { useEffect } from 'react'
import AOS from 'aos'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

// Metadata remains the same (moved to a separate file or handled by Next.js)
// Note: In Next.js App Router, 'use client' files cannot export metadata.
// It is better to keep the metadata in a separate 'page.tsx' or a 'metadata.ts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body
        className={`${inter.className} min-h-screen w-full overflow-x-hidden bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />

          <div className='fixed bottom-24 right-6 md:bottom-32 md:left-8 z-40'>
            <Link
              href='https://linkedin.com/in/hilosthone'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative block'
            >
              <span className='absolute -top-1 -right-1 flex h-4 w-4 z-50'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-4 w-4 bg-red-600'></span>
              </span>

              <div className='absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000' />

              <div className='relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-red-500'>
                <Image
                  src='/Hilosthone.jpeg'
                  alt='Hilosthone Portrait'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </Link>
          </div>

          <main className='flex-grow w-full max-w-[100vw] overflow-x-hidden'>
            {children}
          </main>

          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
