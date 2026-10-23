'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion' // Added hooks
import { Download, Menu, X, ArrowRight } from 'lucide-react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import Magnetic from './Magnetic'
import { EASE_OUT, SPRING, STAGGER } from '@/lib/animations'

// Defined at module scope so the scroll effect isn't re-subscribed every render
const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setMounted(true)
    let frame = 0

    const update = () => {
      frame = 0
      // Boolean state: React skips re-renders while the value is unchanged
      setIsScrolled(window.scrollY > 50)
      const scrollPosition = window.scrollY + 120

      // No pill while in the hero (or a section without a nav link)
      let current = ''
      links.forEach((link) => {
        const el = document.getElementById(link.href.substring(1))
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          current = el.id
        }
      })
      setActiveSection(current)
    }

    // Throttle to one measurement per animation frame
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Theme is unknown during SSR — render a neutral icon until mounted so the
  // header itself can paint immediately without a hydration mismatch
  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-red-600 z-[60] origin-left'
        style={{ scaleX }}
      />

      <header className='fixed top-0 left-0 w-full z-50 flex justify-center p-4 transition-all duration-300'>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className={`
            relative flex items-center justify-between w-full max-w-6xl px-6 py-2.5
            transition-all duration-500 ease-in-out
            ${
              isScrolled
                ? 'rounded-full border border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-xl'
                : 'rounded-none bg-transparent'
            }
          `}
        >
          {/* Logo */}
          <a
            href='#hero'
            aria-label='Hilosthone — back to top'
            className='group flex items-center gap-2'
          >
            <div className='w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-500/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-12 group-hover:scale-105'>
              H
            </div>
            <span className='text-lg font-bold tracking-tight text-slate-900 dark:text-white'>
              HILOSTHONE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            aria-label='Primary'
            className='hidden lg:flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/20 dark:border-white/5'>
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-white/5'
                  }`}
                >
                  <span className='relative z-10'>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId='nav-pill'
                      className='absolute inset-0 bg-red-600 rounded-full shadow-md shadow-red-500/20'
                      transition={SPRING.snappy}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Controls */}
          <div className='flex items-center gap-2'>
            <motion.button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              whileTap={{ scale: 0.9 }}
              transition={SPRING.snappy}
              className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300 overflow-hidden'
            >
              <AnimatePresence mode='wait' initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className='block'
                >
                  {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Wrapper owns visibility — Magnetic's own inline-flex would override `hidden` */}
            <div className='hidden sm:block'>
              <Magnetic strength={0.2}>
                <a
                  href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-bold text-xs hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-[background-color,color,transform] duration-300 group shadow-lg active:scale-95'
                >
                  Resume{' '}
                  <Download
                    size={14}
                    className='group-hover:translate-y-0.5 transition-transform duration-300'
                  />
                </a>
              </Magnetic>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label='Open navigation menu'
              aria-expanded={menuOpen}
              className='lg:hidden p-2 text-slate-900 dark:text-white rounded-full active:scale-90 transition-transform'
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Sidebar (Kept consistent with your last update) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className='fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden'
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={SPRING.soft}
              role='dialog'
              aria-modal='true'
              aria-label='Navigation menu'
              className='fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-[#0f172a] z-[70] shadow-2xl p-6 lg:hidden flex flex-col'
            >
              <div className='flex justify-between items-center mb-8 px-2'>
                <span className='font-black text-xs tracking-widest text-slate-400'>
                  MENU
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label='Close navigation menu'
                  autoFocus
                  className='p-2 rounded-full bg-slate-100 dark:bg-white/5 dark:text-white hover:rotate-90 transition-transform duration-300'
                >
                  <X size={20} />
                </button>
              </div>

              <motion.nav
                className='flex flex-col gap-2'
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: STAGGER, delayChildren: 0.1 },
                  },
                }}
              >
                {links.map((link) => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? 'location' : undefined}
                      variants={{
                        hidden: { opacity: 0, x: 24 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5, ease: EASE_OUT },
                        },
                      }}
                      className={`relative px-5 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-between group overflow-hidden ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId='active-pill-mobile'
                          className='absolute inset-0 bg-red-600 z-0'
                          transition={SPRING.snappy}
                        />
                      )}
                      <span className='relative z-10'>{link.label}</span>
                      <ArrowRight
                        size={20}
                        className={`relative z-10 transition-all duration-300 ${
                          isActive
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-4 opacity-0'
                        }`}
                      />
                    </motion.a>
                  )
                })}
              </motion.nav>

              <div className='mt-auto space-y-6 pt-6 border-t border-slate-100 dark:border-white/5'>
                <a
                  href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex justify-center items-center gap-2 bg-red-600 text-white py-4 rounded-2xl font-bold w-full shadow-lg shadow-red-600/20 active:scale-95 transition-transform'
                >
                  Download Resume <Download size={18} />
                </a>
                <div className='text-center'>
                  <p className='text-[10px] text-slate-400 uppercase tracking-widest font-bold'>
                    Get In Touch
                  </p>
                  <p className='text-sm font-medium dark:text-white mt-1'>
                    hilosthonesulyan@gmail.com
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
