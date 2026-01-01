'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
  FaPython,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
} from 'react-icons/si' 

const skills = [
  { icon: <FaHtml5 className='text-orange-600 text-5xl' />, name: 'HTML' },
  { icon: <FaCss3Alt className='text-blue-600 text-5xl' />, name: 'CSS' },
  { icon: <FaJs className='text-yellow-500 text-5xl' />, name: 'JavaScript' },
  {
    icon: <SiTypescript className='text-blue-700 text-5xl' />,
    name: 'TypeScript',
  },
  {
    icon: <SiTailwindcss className='text-cyan-500 text-5xl' />,
    name: 'Tailwind CSS',
  },
  { icon: <FaReact className='text-blue-400 text-5xl' />, name: 'React' },
  {
    // Next.js icon needs specific dark mode handling
    icon: (
      <SiNextdotjs className='text-slate-900 dark:text-white text-5xl transition-colors' />
    ),
    name: 'Next.js',
  },
  { icon: <FaPython className='text-yellow-400 text-5xl' />, name: 'Python' },
  {
    icon: <FaBootstrap className='text-purple-600 text-5xl' />,
    name: 'Bootstrap',
  },
  { icon: <FaGitAlt className='text-orange-500 text-5xl' />, name: 'Git' },
  { icon: <FaNodeJs className='text-green-600 text-5xl' />, name: 'Node.js' },
  {
    icon: <SiFramer className='text-pink-500 text-5xl' />,
    name: 'Framer Motion',
  },
]

const Skills = () => {
  return (
    <section
      id='skills'
      // UPDATED: Standardizing background colors with Hero/About sections
      className='bg-white dark:bg-[#0f172a] text-center py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500'
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-4xl font-bold mb-16 text-slate-900 dark:text-white'
      >
        My <span className='text-red-600 dark:text-red-500'>Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 justify-items-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            // UPDATED: Styled cards to pop against the dark navy background
            className='group bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none flex flex-col items-center justify-center p-6 w-36 h-36 md:w-40 md:h-40 cursor-pointer transition-all duration-300'
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
              borderColor: 'rgba(220, 38, 38, 0.5)', // Glows red on hover
            }}
          >
            <div className='transition-transform duration-300 group-hover:scale-110'>
              {skill.icon}
            </div>
            <p className='mt-4 text-slate-700 dark:text-slate-300 font-bold text-sm'>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills