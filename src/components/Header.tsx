'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { FiSun, FiMoon } from 'react-icons/fi' // Professional icons
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('about')

  const sectionIds = ['about', 'skills', 'projects', 'contact']

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id)
          },
          { threshold: 0.6 }
        )
        observer.observe(section)
        observers.push(observer)
      }
    })
    return () => observers.forEach((observer) => observer.disconnect())
  }, [sectionIds])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  if (!mounted) return null

  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 flex justify-center p-4'>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`
            relative flex items-center justify-between w-full max-w-5xl px-6 py-2
            transition-all duration-500 ease-in-out
            ${
              scrollY > 50
                ? 'rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-lg'
                : 'rounded-none bg-transparent'
            }
          `}
        >
          {/* Logo Link */}
          <a href='#' className='group'>
            <h1 className='text-xl font-black tracking-tighter text-slate-900 dark:text-white transition-transform duration-300 group-hover:scale-105'>
              HILOSTHONE
              <span className='text-red-500 transition-all duration-300 group-hover:animate-pulse'>
                .
              </span>
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center gap-1'>
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId='nav-pill'
                      className='absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full'
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Right Section */}
          <div className='flex items-center gap-3'>
            {/* Professional Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90 text-slate-700 dark:text-slate-300'
              aria-label='Toggle Theme'
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </button>

            <a
              href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-all'
            >
              Resume <Download size={16} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className='md:hidden text-slate-900 dark:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg'
            >
              <Menu size={26} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className='fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden'
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-950 z-[70] shadow-2xl p-8 md:hidden border-l border-black/5 dark:border-white/10'
            >
              <div className='flex flex-col h-full'>
                <div className='flex justify-between items-center mb-12'>
                  <span className='font-bold text-lg dark:text-white text-slate-900'>
                    Menu
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className='p-2 bg-slate-100 dark:bg-white/5 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-colors'
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className='flex flex-col gap-6'>
                  {links.map((link) => {
                    const isActive = activeSection === link.href.substring(1)
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-2xl font-bold transition-all flex items-center group ${
                          isActive
                            ? 'text-red-500 translate-x-2'
                            : 'text-slate-600 dark:text-slate-400 hover:text-red-500'
                        }`}
                      >
                        <span
                          className={`mr-2 h-2 w-2 rounded-full bg-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                            isActive ? 'opacity-100' : ''
                          }`}
                        />
                        {link.label}
                      </motion.a>
                    )
                  })}
                </nav>

                <div className='mt-auto'>
                  <a
                    href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex justify-center items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold w-full shadow-lg hover:shadow-red-500/20 transition-all'
                  >
                    Download Resume <Download size={18} />
                  </a>
                  <p className='text-center text-xs text-slate-400 mt-6 font-medium'>
                    HILOSTHONE © 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}