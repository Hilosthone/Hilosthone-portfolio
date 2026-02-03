'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Evren Shah',
    role: 'Designer',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    text: 'Hilosthone is an exceptional software engineer with a perfect blend of logic, design, and empathy. His problem-solving mindset and creativity make him a rare talent in tech.',
  },
  {
    name: 'TechDive CEO',
    role: 'Mentor & Leader',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    text: 'As our CTO, Hilosthone demonstrates leadership and innovation, shaping the next generation of engineers at TechDive.',
  },
  {
    name: 'CodePulse Academy',
    role: 'Team Coordinator',
    image:
      'https://media.istockphoto.com/id/168266874/photo/smiling-executive-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=4i9naD1WuDZfp8P6HHD0gFyG-94JJwavHFfW1ilR4eo=',
    text: 'Working with Hilosthone is an inspiring journey. He brings clarity, creativity, and focus to every project.',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }
  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    animate: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      filter: 'blur(8px)',
    }),
  }

  return (
    <section
      id='testimonials'
      className='py-20 bg-white dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden relative'
    >
      <div className='max-w-4xl mx-auto px-6'>
        {/* Pro Header */}
        <div className='text-center mb-12'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-red-600 dark:text-red-500 font-black tracking-[.4em] text-[10px] uppercase block mb-3'
          >
            Endorsements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
          >
            Trusted by <span className='text-red-600'>Experts.</span>
          </motion.h2>
        </div>

        <div className='relative bg-slate-50 dark:bg-slate-900/40 rounded-[2rem] p-8 md:p-12 border border-slate-100 dark:border-white/5'>
          <FaQuoteLeft className='absolute top-8 left-8 text-slate-200 dark:text-white/5 text-6xl pointer-events-none' />

          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className='relative z-10 flex flex-col md:flex-row items-center gap-10'
            >
              {/* Image Container */}
              <div className='shrink-0 relative'>
                <div className='absolute -inset-2 bg-red-600/20 rounded-2xl rotate-3' />
                <div className='relative w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-2xl border-2 border-white dark:border-slate-800 shadow-xl'>
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              {/* Quote Content */}
              <div className='flex-1 text-center md:text-left'>
                <p className='text-lg md:text-xl text-slate-700 dark:text-slate-300 font-bold leading-relaxed mb-6 italic'>
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div>
                  <h3 className='text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight'>
                    {testimonials[current].name}
                  </h3>
                  <p className='text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-[0.2em] mt-1'>
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Moderate Controls Bar */}
          <div className='flex flex-row justify-between items-center mt-10 pt-6 border-t border-slate-200 dark:border-white/10'>
            <div className='flex space-x-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === current
                      ? 'bg-red-600 w-8'
                      : 'bg-slate-300 dark:bg-slate-800 w-2'
                  }`}
                />
              ))}
            </div>

            <div className='flex space-x-2'>
              <button
                onClick={prevSlide}
                className='w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-red-600 hover:text-white transition-all active:scale-95'
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                onClick={nextSlide}
                className='w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-red-600 hover:text-white transition-all active:scale-95'
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
