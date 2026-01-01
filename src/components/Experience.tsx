'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, PenTool, Code2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Software Engineer Intern',
      company: 'ResilienceNG',
      period: '2024 – Present',
      icon: <Code2 className='text-white' size={20} />,
      description:
        'Contributing to the development of end-to-end web solutions. Working with cross-functional teams to build responsive frontends and robust backend APIs, ensuring seamless data flow and high-performance code quality using the MERN stack.',
    },
    {
      role: 'CTO & Software Engineering Instructor',
      company: 'TechDive Computer Institute',
      period: 'Jan 2024 – Present',
      icon: <Briefcase className='text-white' size={20} />,
      description:
        'Oversee the technical vision and development strategies at TechDive. Lead the Software Engineering program, mentoring students in modern Web, App, and Game Development using Next.js, React, TailwindCSS, and Unity.',
    },
    {
      role: 'Academy Coordinator',
      company: 'CodePulse Academy',
      period: 'June 2024 – Present',
      icon: <GraduationCap className='text-white' size={20} />,
      description:
        'Supervise all academic and technical operations across multiple programs. Coordinate instructors, ensure curriculum consistency, and promote collaboration between departments.',
    },
    {
      role: 'UI/UX Designer',
      company: 'Freelance & Independent Projects',
      period: 'Aug 2025 – Present',
      icon: <PenTool className='text-white' size={20} />,
      description:
        'Design intuitive user interfaces and experiences that bridge beauty and usability. Skilled in Figma, Framer Motion, and responsive UI design — crafting consistent and accessible layouts.',
    },
    {
      role: 'Academic Tutor (Math & Physics)',
      company: 'Private Tutorials',
      period: '2022 – Present',
      icon: <GraduationCap className='text-white' size={20} />,
      description:
        'Deliver personalized and result-driven tutoring sessions in Mathematics and Physics for students at secondary and tertiary levels, focusing on simplifying complex concepts.',
    },
    {
      role: 'Poet & Creative Writer',
      company: 'Independent',
      period: '2024 – Present',
      icon: <PenTool className='text-white' size={20} />,
      description:
        'Express thoughts, emotions, and human experiences through poetry and storytelling. Combine creativity and depth to produce meaningful literary pieces.',
    },
  ]

  return (
    <section
      id='experience'
      className='py-24 bg-white dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-black text-slate-900 dark:text-white'
          >
            Professional{' '}
            <span className='text-red-600 dark:text-red-500'>Journey</span>
          </motion.h2>
          <div className='h-1.5 w-20 bg-red-600 mx-auto mt-4 rounded-full' />
        </div>

        <div className='relative'>
          {/* Vertical Line for Desktop */}
          <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-100 dark:bg-slate-800' />

          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Icon */}
                <div className='absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 z-10 border-4 border-white dark:border-[#0f172a] shadow-lg'>
                  {exp.icon}
                </div>

                {/* Content Card */}
                <div className='w-full md:w-[45%] ml-12 md:ml-0'>
                  <div className='p-6 md:p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 hover:border-red-600/30 transition-all group shadow-sm hover:shadow-xl'>
                    <span className='text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-[0.2em] mb-2 block'>
                      {exp.period}
                    </span>
                    <h3 className='text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-red-600 transition-colors'>
                      {exp.role}
                    </h3>
                    <p className='text-slate-500 dark:text-slate-400 font-bold mb-4 flex items-center gap-2'>
                      <span className='w-4 h-[1px] bg-slate-300 dark:bg-slate-700' />{' '}
                      {exp.company}
                    </p>
                    <p className='text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base'>
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for the other side of the timeline on desktop */}
                <div className='hidden md:block md:w-[45%]' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
