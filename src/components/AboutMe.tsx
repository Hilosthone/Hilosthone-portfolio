'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import avartar from '../public/avartar.png'

export default function AboutMe() {
  return (
    <section
      id='about'
      className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white text-gray-700'
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
          className='object-contain w-[260px] md:w-[350px] lg:w-[420px]'
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
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
          About <span className='text-red-600'>Me</span>
        </h2>

        <p className='text-lg leading-relaxed'>
          I’m{' '}
          <span className='font-semibold text-gray-900'>
            Hilosthone Sulyman
          </span>
          , a passionate{' '}
          <span className='text-red-600 font-medium'>
            Software Engineer, UI/UX Designer,
          </span>{' '}
          and <span className='text-red-600 font-medium'>Tech Instructor</span>{' '}
          who loves crafting modern, functional, and visually captivating
          digital experiences. I specialize in building beautiful, performant
          web apps using{' '}
          <span className='font-semibold text-gray-900'>
            Next.js, React, TypeScript, and TailwindCSS
          </span>
          .
        </p>

        <p className='leading-relaxed'>
          As the <span className='font-semibold text-gray-900'>CTO</span> and{' '}
          <span className='font-semibold text-gray-900'>
            Software Engineering Instructor
          </span>{' '}
          at{' '}
          <span className='text-red-600 font-medium'>
            TechDive Computer Institute
          </span>
          , and the{' '}
          <span className='font-semibold text-gray-900'>
            Academy Coordinator
          </span>{' '}
          at <span className='text-red-600 font-medium'>CodePulse Academy</span>
          , I mentor developers and lead technical projects that combine
          creativity, problem-solving, and purpose.
        </p>

        <p className='leading-relaxed'>
          When I’m not coding or designing, I write poetry, explore the art of
          simplicity in design, and share ideas about technology, creativity,
          and education. My focus is always on inspiring others while
          continuously learning and evolving.
        </p>

        {/* SKILLS GRID */}
        <div className='pt-6'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-3'>
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
            className='grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 text-sm'
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
              'Poetry',
              'Mathematics',
              'Problem Solving',
              'Creativity',
              'Critical Thinking',
              'Collaboration',
              'Adaptability',
              'Time Management',
              'Attention to Detail',
              'Project Management',
              'Agile Methodologies',
              'Communication',
              'Continuous Learning',
              'Self-Discipline',
              'Adaptability',
            ].map((skill, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className='bg-white cursor-pointer shadow-md border border-gray-200 px-3 py-2 rounded-lg text-center hover:font-semibold hover:bg-red-50 hover:text-red-700 font-medium transition-all duration-300'
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
