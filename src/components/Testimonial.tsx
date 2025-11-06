'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
    role: 'Software Engineer, Collaborator',
    image:
      'https://media.istockphoto.com/id/1439699853/photo/businessman-with-grizzled-hair-crossing-his-arms.jpg?s=612x612&w=0&k=20&c=-d7s1AeWfCXu8yCLy1_m8E1qMz1azt9fi6FQjsSLDEI=',
    text: 'Collaborating with Hilosthone has been one of my best professional experiences. His technical depth and calm leadership make every project smoother and smarter.',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className='py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-10'>
          🌟 What People Say About Me
        </h2>

        <div className='relative'>
          {/* Arrow buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-red-600 hover:text-white text-gray-700 rounded-full p-3 shadow-md transition-all'
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-red-600 hover:text-white text-gray-700 rounded-full p-3 shadow-md transition-all'
          >
            <FaChevronRight size={18} />
          </button>

          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className='flex flex-col items-center space-y-6 px-6'
            >
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={120}
                height={120}
                className='rounded-full object-cover shadow-lg w-24 h-24 md:w-32 md:h-32'
              />
              <p className='text-base md:text-lg text-gray-700 max-w-2xl italic leading-relaxed'>
                “{testimonials[current].text}”
              </p>
              <div>
                <h3 className='text-lg md:text-xl font-semibold text-gray-900'>
                  {testimonials[current].name}
                </h3>
                <p className='text-sm text-gray-500'>
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className='flex justify-center mt-8 space-x-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-red-600 w-5'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
