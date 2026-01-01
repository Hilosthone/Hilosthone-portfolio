'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import avartar from '../public/avartar.png'

export default function AboutMe() {
  return (
    <section
      id='about'
      // UPDATED: Added adaptive background and text colors
      className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20 px-6 md:px-16 lg:px-24 bg-white dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 transition-colors duration-500'
    >
      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='w-full flex justify-center lg:justify-start'
      >
        <Image
          src={avartar}
          alt='Hilosthone illustration'
          width={420}
          height={420}
          className='object-contain w-[260px] md:w-[350px] lg:w-[420px] drop-shadow-xl dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]'
          priority
        />
      </motion.div>

      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='max-w-2xl text-center lg:text-left space-y-6'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white'>
          About <span className='text-red-600 dark:text-red-500'>Me</span>
        </h2>

        <p className='text-lg leading-relaxed'>
          I’m{' '}
          <span className='font-semibold text-slate-900 dark:text-white'>
            Hilosthone Sulyman
          </span>
          , a passionate{' '}
          <span className='text-red-600 dark:text-red-500 font-medium'>
            Software Engineer, UI/UX Designer,
          </span>{' '}
          and{' '}
          <span className='text-red-600 dark:text-red-500 font-medium'>
            Tech Instructor
          </span>{' '}
          who loves crafting modern, functional, and visually captivating
          digital experiences. I specialize in building beautiful, performant
          web apps using{' '}
          <span className='font-semibold text-slate-900 dark:text-white'>
            Next.js, React, TypeScript, and TailwindCSS
          </span>
          .
        </p>

        <p className='leading-relaxed'>
          As the{' '}
          <span className='font-semibold text-slate-900 dark:text-white'>
            CTO
          </span>{' '}
          and{' '}
          <span className='font-semibold text-slate-900 dark:text-white'>
            Software Engineering Instructor
          </span>{' '}
          at{' '}
          <span className='text-red-600 dark:text-red-500 font-medium'>
            TechDive Computer Institute
          </span>
          , and the{' '}
          <span className='font-semibold text-slate-900 dark:text-white'>
            Academy Coordinator
          </span>{' '}
          at{' '}
          <span className='text-red-600 dark:text-red-500 font-medium'>
            CodePulse Academy
          </span>
          , I mentor developers and lead technical projects that combine
          creativity, problem-solving, and purpose.
        </p>

        {/* SKILLS GRID */}
        <div className='pt-6'>
          <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-4'>
            Core Skills & Tools 🧠
          </h3>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className='grid grid-cols-2 md:grid-cols-3 gap-3 text-sm'
          >
            {[
              'Next.js',
              'React.js',
              'TypeScript',
              'TailwindCSS',
              'Node.js',
              'Supabase',
              'UI/UX Design',
              'Figma',
              'Git & GitHub',
              'Leadership',
              'Mentorship',
              'Problem Solving',
              'Communication',
              'Agile',
            ].map((skill, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                // UPDATED: Added dark mode classes for the skill chips
                className='bg-white dark:bg-slate-800/50 cursor-pointer shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-center text-slate-700 dark:text-slate-300 hover:font-semibold hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-900 font-medium transition-all duration-300'
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}