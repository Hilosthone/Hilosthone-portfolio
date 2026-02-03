'use client'

import { useEffect, useState } from 'react' // Added useState
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import Image from 'next/image'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // 1. Set mounted to true so we know we are on the client
    setMounted(true)

    // 2. Initialize AOS with a slight delay or refresh to ensure DOM is ready
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      delay: 50, // Slight delay helps sync with React hydration
    })
  }, [])

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <Toaster
        position='top-right'
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className:
            'dark:bg-slate-900 dark:text-white bg-white text-slate-900 border border-slate-200 dark:border-white/10 font-sans text-sm font-medium',
          duration: 4000,
          success: {
            iconTheme: {
              primary: '#dc2626',
              secondary: '#fff',
            },
          },
        }}
      />

      <Header />

      {/* Floating LinkedIn Portrait */}
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

      {/* 3. HYDRATION GUARD: 
          We use a subtle CSS trick. If not mounted, we keep content hidden 
          or static to prevent AOS from injecting classes too early.
      */}
      <main
        className={`flex-grow w-full max-w-[100vw] overflow-x-hidden min-h-screen ${!mounted ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
      >
        {children}
      </main>

      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}
