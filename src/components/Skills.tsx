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
    icon: <SiNextdotjs className='text-gray-900 dark:text-white text-5xl' />,
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
      className='bg-white dark:bg-black text-center py-20 px-6 md:px-12 lg:px-24'
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-4xl font-bold mb-12 text-gray-900 dark:text-white'
      >
        My <span className='text-red-600'>Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 w-36 h-36 cursor-pointer hover:shadow-2xl transition-all duration-300'
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            {skill.icon}
            <p className='mt-3 text-gray-700 dark:text-gray-300 font-semibold'>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
