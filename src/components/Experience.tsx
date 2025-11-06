'use client'
import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      role: 'CTO & Software Engineering Instructor',
      company: 'TechDive Computer Institute',
      period: 'Jan 2024 – Present',
      description:
        'Oversee the technical vision and development strategies at TechDive. Lead the Software Engineering program, mentoring students in modern Web, App, and Game Development using Next.js, React, TailwindCSS, and Unity. Designed a 6-month structured training curriculum integrating creativity and technical rigor.',
    },
    {
      role: 'Academy Coordinator',
      company: 'CodePulse Academy',
      period: 'June 2024 – Present',
      description:
        'Supervise all academic and technical operations across multiple programs. Coordinate instructors, ensure curriculum consistency, and promote collaboration between departments to deliver exceptional learning experiences.',
    },
    {
      role: 'UI/UX Designer',
      company: 'Freelance & Independent Projects',
      period: 'Aug 2025 – Present',
      description:
        'Design intuitive user interfaces and experiences that bridge beauty and usability. Skilled in Figma, Framer Motion, and responsive UI design — crafting consistent, accessible, and visually engaging layouts for web applications.',
    },
    {
      role: 'Academic Tutor (Mathematics & Physics)',
      company: 'Private Tutorials',
      period: '2022 – Present',
      description:
        'Deliver personalized and result-driven tutoring sessions in Mathematics and Physics for students at secondary and tertiary levels. Focused on simplifying complex concepts through real-world problem solving and interactive methods.',
    },
    {
      role: 'Poet & Creative Writer',
      company: 'Independent',
      period: '2024 – Present',
      description:
        'Express thoughts, emotions, and human experiences through poetry and storytelling. Combine creativity and depth to produce meaningful literary pieces that inspire and connect with audiences.',
    },
  ]

  return (
    <section
      id='experience'
      className='py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200 px-5 md:px-10 lg:px-20'
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-3xl md:text-4xl font-bold text-center mb-12'
      >
        My <span className='text-red-600'>Experience</span>
      </motion.h2>

      <div className='max-w-5xl mx-auto space-y-10'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700'
          >
            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                {exp.role}
              </h3>
              <p className='text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0'>
                {exp.period}
              </p>
            </div>
            <p className='text-red-600 font-medium mb-3'>{exp.company}</p>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
