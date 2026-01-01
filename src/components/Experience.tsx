'use client'
import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'ResilienceNG',
      period: '2024 – Present',
      description:
        'Contributing to the development of scalable web solutions. Working with cross-functional teams to build and maintain responsive user interfaces while ensuring high performance and code quality using modern frontend technologies.',
    },
    {
      role: 'CTO & Software Engineering Instructor',
      company: 'TechDive Computer Institute',
      period: 'Jan 2024 – Present',
      description:
        'Oversee the technical vision and development strategies at TechDive. Lead the Software Engineering program, mentoring students in modern Web, App, and Game Development using Next.js, React, TailwindCSS, and Unity.',
    },
    {
      role: 'Academy Coordinator',
      company: 'CodePulse Academy',
      period: 'June 2024 – Present',
      description:
        'Supervise all academic and technical operations across multiple programs. Coordinate instructors, ensure curriculum consistency, and promote collaboration between departments.',
    },
    {
      role: 'UI/UX Designer',
      company: 'Freelance & Independent Projects',
      period: 'Aug 2025 – Present',
      description:
        'Design intuitive user interfaces and experiences that bridge beauty and usability. Skilled in Figma, Framer Motion, and responsive UI design — crafting consistent and accessible layouts.',
    },
    {
      role: 'Academic Tutor (Mathematics & Physics)',
      company: 'Private Tutorials',
      period: '2022 – Present',
      description:
        'Deliver personalized and result-driven tutoring sessions in Mathematics and Physics for students at secondary and tertiary levels, focusing on simplifying complex concepts.',
    },
    {
      role: 'Poet & Creative Writer',
      company: 'Independent',
      period: '2024 – Present',
      description:
        'Express thoughts, emotions, and human experiences through poetry and storytelling. Combine creativity and depth to produce meaningful literary pieces.',
    },
  ]

  return (
    <section
      id='experience'
      // Standardized background for our navy dark mode
      className='py-24 bg-white dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 px-5 md:px-10 lg:px-20 transition-colors duration-500'
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white'
      >
        My <span className='text-red-600 dark:text-red-500'>Experience</span>
      </motion.h2>

      <div className='max-w-5xl mx-auto space-y-8'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            // Card styling adjusted for dark mode visibility
            className='bg-slate-50 dark:bg-slate-900/50 shadow-md dark:shadow-none rounded-2xl p-6 md:p-8 hover:shadow-xl dark:hover:bg-slate-800/60 transition-all duration-300 border border-slate-100 dark:border-slate-800'
          >
            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                {exp.role}
              </h3>
              <span className='text-gray-500 dark:text-slate-400 text-sm font-medium'>
                {exp.period}
              </span>
            </div>

            <p className='text-red-600 dark:text-red-500 font-semibold mb-4 italic'>
              {exp.company}
            </p>

            <p className='text-slate-600 dark:text-slate-400 leading-relaxed text-base'>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}