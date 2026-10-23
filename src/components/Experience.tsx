'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import TiltCard from './motion/TiltCard'
import {
  SPRING,
  VIEWPORT,
  fadeIn,
  fadeSide,
} from '@/lib/animations'
import {
  Briefcase,
  GraduationCap,
  PenTool,
  Code2,
  Smartphone,
  Globe,
  Calculator,
} from 'lucide-react'

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track fill follows the reader through the timeline
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 60%', 'end 60%'],
  })
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  // Clamp so the spring's settle never draws past the end of the track
  const progress = useTransform(smoothed, [0, 1], [0, 1])

  const experiences = [
    {
      role: 'Founder, CEO & Software Engineer',
      company: 'GleamLearn',
      period: '2026 – Present',
      icon: <Code2 size={16} />,
      description:
        'Founded and lead GleamLearn, an AI-powered learning platform transforming educational materials into interactive lessons, quizzes, and intelligent tutoring experiences. Drive product strategy, technical architecture, and end-to-end software development across the platform.',
    },
    {
      role: 'Full Stack Engineer',
      company: 'BuildON',
      period: '2026 – Present',
      icon: <Code2 size={16} />,
      description:
        'Building cutting-edge AI products, robust B2B platforms, and scalable web solutions. Architecting end-to-end systems that deliver performance, speed, and exceptional user experiences for diverse enterprise and consumer clients.',
    },
    {
      role: 'Mobile Developer',
      company: 'Taxlator',
      period: '2026 – Present',
      icon: <Calculator size={16} />,
      description:
        'Engineering a specialized mobile utility for precise tax computations. Implementing complex fiscal logic to automate PAYE, VAT, and other tax types for individuals and businesses.',
    },
    {
      role: 'Mobile Developer',
      company: 'JustXend',
      period: '2026 – Present',
      icon: <Smartphone size={16} />,
      description:
        'Developing a cross-border fintech application handling multi-currency transactions with automated conversion logic. Engineering a seamless experience where senders and receivers interact regardless of their local base currencies.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Propifix',
      period: '2026 – Present',
      icon: <Globe size={16} />,
      description:
        'Building a comprehensive Nigerian real estate ecosystem connecting users, landlords, caretakers, and artisans. Implementing complex role-based workflows and real-time management tools for the property sector.',
    },
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
    {
      role: 'Mobile Developer',
      company: 'SkiFlux',
      period: '2026 – Present',
      icon: <Smartphone size={16} />,
      description:
        'Contributing to mobile application development at SkiFlux, building responsive and intuitive mobile experiences with a focus on usability, maintainability, and reliable functionality.',
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
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={VIEWPORT}
            className='text-red-600 dark:text-red-500 font-black tracking-[.4em] text-[10px] uppercase block mb-3'
          >
            History
          </motion.span>
          <motion.h2
            variants={fadeSide('left')}
            initial='hidden'
            whileInView='visible'
            viewport={VIEWPORT}
            className='text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
          >
            Professional <span className='text-red-600'>Journey.</span>
          </motion.h2>
        </div>

        <div ref={trackRef} className='relative'>
          {/* Technical Vertical Track */}
          <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-red-600 via-slate-200 dark:via-slate-800 to-transparent' />
          {/* Progress fill — grows down the track as the journey is read */}
          <motion.div
            aria-hidden
            style={{ scaleY: progress }}
            className='absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-[2px] origin-top bg-gradient-to-b from-red-600 to-red-500/60 rounded-full'
          />

          <ol className='space-y-10'>
            {experiences.map((exp, index) => {
              const isActive = activeIndex === index
              const cardOnRight = index % 2 === 0

              return (
                <motion.li
                  key={exp.company + exp.role}
                  variants={fadeSide(cardOnRight ? 'right' : 'left')}
                  initial='hidden'
                  whileInView='visible'
                  viewport={VIEWPORT}
                  className={`group/row relative flex flex-col md:flex-row items-start gap-8 ${
                    cardOnRight ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Minimalist Node — lights up while its role is mid-screen */}
                  <motion.div
                    onViewportEnter={() => setActiveIndex(index)}
                    viewport={{ margin: '-45% 0px -45% 0px' }}
                    animate={{ scale: isActive ? 1.12 : 1 }}
                    transition={SPRING.snappy}
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-lg border z-10 transition-colors duration-500 ${
                      isActive
                        ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 shadow-sm group-hover/row:text-red-600 group-hover/row:border-red-600/40'
                    }`}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Content Card */}
                  <div className='w-full md:w-[45%] pl-12 md:pl-0'>
                    <TiltCard max={3} className='rounded-2xl'>
                      <div
                        className={`group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 transition-[border-color,box-shadow] duration-500 ${
                          isActive
                            ? 'border-red-600/25'
                            : 'border-slate-100 dark:border-white/5'
                        }`}
                      >
                        <div
                          className={`absolute top-6 -left-px w-1 h-8 bg-red-600 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? 'scale-y-100' : 'scale-y-0'
                          }`}
                        />

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
                    </TiltCard>
                  </div>

                  <div className='hidden md:block md:w-[45%]' />
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
