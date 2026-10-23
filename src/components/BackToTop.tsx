'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronUp } from 'react-icons/fa'
import { PRESS, SPRING } from '@/lib/animations'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down 400px
  useEffect(() => {
    // Boolean state: React skips re-renders while the value is unchanged
    const toggleVisibility = () => setIsVisible(window.scrollY > 400)

    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    // Native smooth scrolling already falls back to instant under reduced motion
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ y: -3 }}
          whileTap={PRESS}
          transition={SPRING.snappy}
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 p-4 rounded-full bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 transition-[background-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
          aria-label='Back to top'
        >
          <FaChevronUp className='w-5 h-5' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
