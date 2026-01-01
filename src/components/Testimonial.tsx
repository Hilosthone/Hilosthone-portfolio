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
  {
    name: 'Miriam Adesina',
    role: 'UI/UX Designer',
    image:
      'https://media.istockphoto.com/id/1136016993/photo/successful-female-graphic-designer-watching-tutorial-about-creative-ideas-at-laptop-computer.jpg?s=612x612&w=0&k=20&c=wNrie1-hgODfdYaMTgb3j1fF_7LRVXFVzjfAPhUmj-c=',
    text: 'Hilosthone has an incredible eye for detail. His ability to merge aesthetics with functionality always amazes me.',
  },
  {
    name: 'David Nwachukwu',
    role: 'Software Engineer',
    image:
      'https://media.istockphoto.com/id/1439699853/photo/businessman-with-grizzled-hair-crossing-his-arms.jpg?s=612x612&w=0&k=20&c=-d7s1AeWfCXu8yCLy1_m8E1qMz1azt9fi6FQjsSLDEI=',
    text: 'Collaborating with Hilosthone has been one of my best professional experiences. His technical depth and calm leadership make every project smoother.',
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

  // Animation Variants for the Slide
  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(10px)',
    }),
    animate: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      filter: 'blur(10px)',
    }),
  }

  return (
    <section
      id='testimonials'
      className='py-24 bg-white dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden'
    >
      <div className='max-w-5xl mx-auto px-6'>
        <div className='text-center mb-16 space-y-4'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-red-600 dark:text-red-500 font-bold tracking-[0.3em] text-xs uppercase'
          >
            Social Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-black text-slate-900 dark:text-white'
          >
            Kind words from <span className='text-red-600'>colleagues.</span>
          </motion.h2>
        </div>

        <div className='relative bg-slate-50/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 border border-slate-200/50 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none'>
          {/* Big Quote Background Icon */}
          <FaQuoteLeft className='absolute top-12 left-12 text-slate-200/50 dark:text-white/5 text-8xl md:text-9xl pointer-events-none' />

          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.4, ease: 'circOut' }}
              className='relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12'
            >
              {/* Profile Image with Irregular Shape */}
              <div className='shrink-0'>
                <div className='relative w-32 h-32 md:w-44 md:h-44'>
                  <div className='absolute inset-0 bg-red-600 rotate-6 rounded-[2.5rem_0.5rem_2.5rem_0.5rem] transition-transform group-hover:rotate-12 duration-500' />
                  <div className='relative w-full h-full overflow-hidden rounded-[2.5rem_0.5rem_2.5rem_0.5rem] border-4 border-white dark:border-slate-800 shadow-xl'>
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
              </div>

              {/* Text Area */}
              <div className='flex-1 text-center md:text-left pt-4'>
                <p className='text-xl md:text-2xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed mb-8'>
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div>
                  <h3 className='text-2xl font-black text-slate-900 dark:text-white'>
                    {testimonials[current].name}
                  </h3>
                  <p className='text-red-600 dark:text-red-500 font-bold text-sm tracking-widest uppercase mt-1'>
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center mt-12 gap-8 border-t border-slate-200 dark:border-white/10 pt-8'>
            {/* Progress Indicators */}
            <div className='flex space-x-3'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === current
                      ? 'bg-red-600 w-12'
                      : 'bg-slate-300 dark:bg-slate-700 w-4 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className='flex space-x-4'>
              <button
                onClick={prevSlide}
                className='p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all active:scale-90 group'
              >
                <FaChevronLeft className='group-hover:-translate-x-1 transition-transform' />
              </button>
              <button
                onClick={nextSlide}
                className='p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all active:scale-90 group'
              >
                <FaChevronRight className='group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}