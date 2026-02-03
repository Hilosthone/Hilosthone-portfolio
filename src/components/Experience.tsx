'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, PenTool, Code2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Software Engineer Intern',
      company: 'ResilienceNG',
      period: '2024 – Present',
      icon: <Code2 size={16} />,
      description:
        'Contributing to the development of end-to-end web solutions. Working with cross-functional teams to build responsive frontends and robust backend APIs using the MERN stack.',
    },
    {
      role: 'CTO & Engineering Instructor',
      company: 'TechDive Computer Institute',
      period: 'Jan 2024 – Present',
      icon: <Briefcase size={16} />,
      description:
        'Oversee technical vision and development strategies. Lead the Software Engineering program, mentoring students in Next.js, React, and Game Development.',
    },
    {
      role: 'Academy Coordinator',
      company: 'CodePulse Academy',
      period: 'June 2024 – Present',
      icon: <GraduationCap size={16} />,
      description:
        'Supervise academic operations across multiple programs. Coordinate instructors and ensure curriculum consistency across departments.',
    },
    {
      role: 'UI/UX Designer',
      company: 'Freelance',
      period: 'Aug 2025 – Present',
      icon: <PenTool size={16} />,
      description:
        'Crafting intuitive interfaces using Figma and Framer Motion, focusing on responsive, accessible, and high-conversion layouts.',
    },
  ]

  return (
    <section
      id='experience'
      className='py-20 bg-white dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden relative'
    >
      <div className='max-w-5xl mx-auto px-6'>
        {/* Pro Header */}
        <div className='mb-16'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-red-600 dark:text-red-500 font-black tracking-[.4em] text-[10px] uppercase block mb-3'
          >
            History
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
          >
            Professional <span className='text-red-600'>Journey.</span>
          </motion.h2>
        </div>

        <div className='relative'>
          {/* Technical Vertical Track */}
          <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-red-600 via-slate-200 dark:via-slate-800 to-transparent' />

          <div className='space-y-10'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Minimalist Node */}
                <div className='absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 z-10 shadow-sm'>
                  <div className='text-slate-600 dark:text-slate-400 group-hover:text-red-600 transition-colors'>
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className='w-full md:w-[45%] pl-12 md:pl-0'>
                  <div className='group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 hover:border-red-600/30 transition-all duration-300'>
                    {/* Glowing indicator on hover */}
                    <div className='absolute top-6 -left-px w-1 h-8 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity' />

                    <div className='flex justify-between items-start mb-2'>
                      <span className='text-[10px] font-black text-red-600 dark:text-red-500 uppercase tracking-widest'>
                        {exp.period}
                      </span>
                    </div>

                    <h3 className='text-lg font-black text-slate-900 dark:text-white leading-tight mb-1'>
                      {exp.role}
                    </h3>

                    <div className='flex items-center gap-2 mb-4'>
                      <span className='text-[11px] font-bold text-slate-400 uppercase tracking-wider italic'>
                        @ {exp.company}
                      </span>
                    </div>

                    <p className='text-slate-500 dark:text-slate-400 leading-relaxed text-xs md:text-sm'>
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for desktop symmetry */}
                <div className='hidden md:block md:w-[45%]' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
