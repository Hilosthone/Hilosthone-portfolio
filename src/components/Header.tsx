'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion' // Added hooks
import { Download, Menu, X, ArrowRight } from 'lucide-react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('about')

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sectionElements = links.map((link) =>
        document.getElementById(link.href.substring(1))
      )
      const scrollPosition = window.scrollY + 120

      sectionElements.forEach((el) => {
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(el.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [links])

  if (!mounted) return null

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
          className={`
            relative flex items-center justify-between w-full max-w-6xl px-6 py-2.5
            transition-all duration-500 ease-in-out
            ${
              scrollY > 50
                ? 'rounded-full border border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-xl'
                : 'rounded-none bg-transparent'
            }
          `}
        >
          {/* Logo */}
          <a href='#' className='group flex items-center gap-2'>
            <div className='w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-500/20 transition-transform group-hover:rotate-12'>
              H
            </div>
            <h1 className='text-lg font-bold tracking-tight text-slate-900 dark:text-white'>
              HILOSTHONE
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/20 dark:border-white/5'>
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className='relative z-10'>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId='nav-pill'
                      className='absolute inset-0 bg-red-600 rounded-full shadow-md shadow-red-500/20'
                      transition={{
                        type: 'spring',
                        duration: 0.6,
                        bounce: 0.2,
                      }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Controls */}
          <div className='flex items-center gap-2'>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300'
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <a
              href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit'
              target='_blank'
              className='hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-bold text-xs hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all group shadow-lg active:scale-95'
            >
              Resume{' '}
              <Download
                size={14}
                className='group-hover:translate-y-0.5 transition-transform'
              />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className='lg:hidden p-2 text-slate-900 dark:text-white'
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
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-[#0f172a] z-[70] shadow-2xl p-6 lg:hidden flex flex-col'
            >
              <div className='flex justify-between items-center mb-8 px-2'>
                <span className='font-black text-xs tracking-widest text-slate-400'>
                  MENU
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='p-2 rounded-full bg-slate-100 dark:bg-white/5 dark:text-white'
                >
                  <X size={20} />
                </button>
              </div>

              <nav className='flex flex-col gap-2'>
                {links.map((link) => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`relative px-5 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-between group overflow-hidden ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId='active-pill-mobile'
                          className='absolute inset-0 bg-red-600 z-0'
                          transition={{ type: 'spring', duration: 0.6 }}
                        />
                      )}
                      <span className='relative z-10'>{link.label}</span>
                      <ArrowRight
                        size={20}
                        className={`relative z-10 transition-all ${
                          isActive
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-4 opacity-0'
                        }`}
                      />
                    </a>
                  )
                })}
              </nav>

              <div className='mt-auto space-y-6 pt-6 border-t border-slate-100 dark:border-white/5'>
                <a
                  href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit'
                  target='_blank'
                  className='flex justify-center items-center gap-2 bg-red-600 text-white py-4 rounded-2xl font-bold w-full shadow-lg shadow-red-600/20 active:scale-95 transition-transform'
                >
                  Download Resume <Download size={18} />
                </a>
                <div className='text-center'>
                  <p className='text-[10px] text-slate-400 uppercase tracking-widest font-bold'>
                    Get In Touch
                  </p>
                  <p className='text-sm font-medium dark:text-white mt-1'>
                    solihullahsulyan@gmail.com
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
