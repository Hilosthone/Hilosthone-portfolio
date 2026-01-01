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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className='py-24 bg-white dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden'>
      <div className='max-w-4xl mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16'
        >
          🌟 What People <span className='text-red-600'>Say</span>
        </motion.h2>

        <div className='relative bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-none'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col'
            >
              {/* Header: Irregular Image + Name */}
              <div className='flex items-center gap-6 mb-8'>
                <div className='relative'>
                  {/* IRREGULAR RECTANGLE SHAPE */}
                  <div className='w-24 h-24 md:w-32 md:h-32 overflow-hidden bg-red-600 rotate-3 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-lg'>
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      width={150}
                      height={150}
                      className='w-full h-full object-cover -rotate-3 scale-110'
                    />
                  </div>
                </div>

                <div className='text-left'>
                  <h3 className='text-xl md:text-2xl font-bold text-slate-900 dark:text-white'>
                    {testimonials[current].name}
                  </h3>
                  <p className='text-red-600 dark:text-red-500 font-medium'>
                    {testimonials[current].role}
                  </p>
                </div>
              </div>

              {/* Testimony Below */}
              <div className='relative'>
                <FaQuoteLeft className='absolute -top-4 -left-2 text-slate-200 dark:text-slate-800 text-5xl -z-10' />
                <p className='text-lg md:text-xl text-slate-700 dark:text-slate-300 italic leading-relaxed'>
                  {testimonials[current].text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className='flex justify-between items-center mt-10'>
            {/* Dots */}
            <div className='flex space-x-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-red-600 w-8'
                      : 'bg-slate-300 dark:bg-slate-700 w-2'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className='flex space-x-4'>
              <button
                onClick={prevSlide}
                className='p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-md hover:bg-red-600 hover:text-white transition-all'
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className='p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-md hover:bg-red-600 hover:text-white transition-all'
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}