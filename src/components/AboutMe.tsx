'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import avartar from '../public/avartar.png'
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const skillCategories = [
    {
      title: 'Mobile & Tools',
      description: 'On-the-go.',
      items: ['React Native', 'Expo', 'JWT', 'Firebase', 'Supabase', 'Git'],
      widthClass: 'lg:w-[calc(50%-10px)] xl:w-[calc(50%-12px)]',
    },
    {
      title: 'Frontend Stack',
      description: 'Interfaces.',
      items: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind',
        'Redux',
        'Framer',
      ],
      widthClass: 'lg:w-[calc(50%-10px)] xl:w-[calc(50%-12px)]',
    },
    {
      title: 'Backend & Cloud',
      description: 'Infrastructure.',
      items: ['Node.js', 'Express', 'MongoDB', 'Postgres', 'AWS', 'Docker'],
      widthClass: 'lg:w-full',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section
      id='about'
      className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-16 lg:py-24 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 bg-white dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 transition-colors duration-500 overflow-hidden'
    >
      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={isMounted ? { opacity: 1, x: 0 } : {}}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className='hidden lg:flex w-full lg:w-[35%] justify-center lg:justify-start'
      >
        <div className='relative group'>
          <div className='absolute -inset-4 border border-red-600/20 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500' />
          <Image
            src={avartar}
            alt='Hilosthone Sulyman'
            width={340}
            height={340}
            className='relative z-10 object-contain w-[260px] lg:w-[340px] drop-shadow-2xl'
            priority
          />
        </div>
      </motion.div>

      {/* TEXT SECTION */}
      <div className='w-full lg:w-[60%] text-center lg:text-left space-y-8'>
        <motion.div
          className='space-y-4'
          initial='hidden'
          whileInView={isMounted ? 'visible' : 'hidden'}
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className='text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
          >
            Engineering{' '}
            <span className='text-red-600 dark:text-red-500'>
              Digital Excellence
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-sm lg:text-base xl:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0'
          >
            I am a{' '}
            <span className='font-bold text-slate-900 dark:text-white uppercase tracking-tighter'>
              Full-Stack & Mobile Engineer
            </span>{' '}
            specializing in high-performance cross-platform interfaces.
          </motion.p>
        </motion.div>

        {/* STACK SLIDER / WRAPPER */}
        <div className='relative group'>
          <div className='lg:hidden flex justify-between items-center mb-3 px-1'>
            <h4 className='text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono'>
              Technical Arsenal
            </h4>
            <div className='flex gap-2'>
              <button
                onClick={() => scroll('left')}
                className='p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm'
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                className='p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm'
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <motion.div
            ref={scrollRef}
            initial='hidden'
            whileInView={isMounted ? 'visible' : 'hidden'}
            viewport={{ once: true }}
            variants={containerVariants}
            className='flex lg:flex-row lg:flex-wrap gap-5 xl:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className={`min-w-[90%] sm:min-w-[48%] lg:min-w-0 snap-center bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4 transition-all hover:border-red-600/40 hover:bg-white dark:hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-red-600/5 ${category.widthClass}`}
              >
                <div>
                  <h4 className='text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-1'>
                    {category.title}
                  </h4>
                  <p className='text-[11px] font-bold text-slate-400 uppercase tracking-tight'>
                    {category.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 gap-y-3 gap-x-2'>
                  {category.items.map((skill, index) => (
                    <li
                      key={index}
                      className='flex items-center gap-2 text-[12px] font-bold text-slate-800 dark:text-slate-200'
                    >
                      <CheckCircle2
                        size={12}
                        className='text-red-600 shrink-0'
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* STATS & SCROLL ARROW */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={isMounted ? { opacity: 1 } : {}}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800 gap-8'
        >
          <div className='flex flex-row gap-10 items-center'>
            <div className='flex flex-col text-center sm:text-left'>
              <span className='text-2xl font-black text-slate-900 dark:text-white leading-none'>
                3+
              </span>
              <span className='text-[9px] font-black uppercase tracking-widest text-slate-400'>
                Years Exp
              </span>
            </div>
            <div className='flex flex-col text-center sm:text-left'>
              <span className='text-2xl font-black text-slate-900 dark:text-white leading-none'>
                20+
              </span>
              <span className='text-[9px] font-black uppercase tracking-widest text-slate-400'>
                Shipped
              </span>
            </div>
          </div>

          <a
            href='#projects'
            className='group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-red-700 transition-all'
          >
            Explore Projects
            <div className='p-2.5 bg-red-50 dark:bg-red-950/30 rounded-full group-hover:bg-red-600 group-hover:text-white group-hover:-translate-y-1 transition-all shadow-sm'>
              <ChevronRight size={16} className='rotate-90' />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
