'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

// Asset Imports
import techDive from '../public/techDive.png'
import scholarsImg from '../public/DSA.png'
import twitterClone from '../public/TwitterClone.png'
import atmoScanImg from '../public/atmoscan.png'
import taxlatorImg from '../public/taxlator.png'

interface Project {
  id: string
  title: string
  description: string
  image: StaticImageData
  live: string
  github: string
  tags: string[]
}

const PROJECTS_DATA: Project[] = [
  {
    id: '01',
    title: 'Distinguished Scholars Academy',
    description:
      'A premium educational management system designed for institutional excellence. Built to streamline academic workflows and student engagement.',
    image: scholarsImg,
    live: 'https://distinguished-scholars-academy.vercel.app',
    github: 'https://github.com/Hilosthone/distinguished-scholars-academy',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'Auth.js'],
  },
  {
    id: '02',
    title: 'Taxlator App',
    description:
      'A specialized utility designed to simplify complex tax calculations. It bridges the gap between raw financial data and actionable tax insights.',
    image: taxlatorImg,
    live: '#',
    github: 'https://github.com/Hilosthone/taxlator',
    tags: ['React Native', 'Node.js', 'Express', 'Calculation Engine'],
  },
  {
    id: '03',
    title: 'AtmoScan (Atmosphere App)',
    description:
      'Environmental monitoring architecture that tracks real-time atmospheric data. Visualizes climate metrics with precision and minimalist UI.',
    image: atmoScanImg,
    live: '#',
    github: 'https://github.com/Hilosthone/AtmoScan',
    tags: ['React', 'OpenWeather API', 'Framer Motion', 'Chart.js'],
  },
  {
    id: '04',
    title: 'TechDive Innovations',
    description:
      'Comprehensive Edutech ecosystem featuring interactive lessons and coding challenges for the next generation of developers.',
    image: techDive,
    live: 'https://techdive-innovations.netlify.app/',
    github: 'https://github.com/Hilosthone/TechDive-Innovations',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'AOS'],
  },
  {
    id: '05',
    title: 'Twitter / X Architecture',
    description:
      'Real-time social synchronization using Firebase. Features secure authentication, media threading, and dynamic feed updates.',
    image: twitterClone,
    live: 'https://twitterclonebyhilosthone.netlify.app/',
    github: 'https://github.com/Hilosthone',
    tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind'],
  },
]

export default function Projects() {
  return (
    <section
      id='projects'
      className='bg-white dark:bg-[#0f172a] py-20 transition-colors duration-500 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-6 lg:px-12'>
        <SectionHeader title='Portfolio' subtitle='Featured Engineering.' />

        <div className='flex flex-col gap-24 md:gap-32'>
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Sub-component for Section Header
 */
const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => (
  <div className='mb-20'>
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='text-red-600 dark:text-red-500 font-black tracking-[.4em] text-[10px] uppercase block mb-3'
    >
      {title}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
    >
      {subtitle.split(' ')[0]}{' '}
      <span className='text-red-600'>{subtitle.split(' ')[1]}</span>
    </motion.h2>
  </div>
)

/**
 * Sub-component for Individual Project Cards
 */
const ProjectCard = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => {
  const isEven = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Project Image Viewport */}
      <div className='w-full md:w-1/2 group relative'>
        <div className='absolute -inset-2 bg-gradient-to-tr from-red-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500' />
        <div className='relative overflow-hidden rounded-xl aspect-video bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5'>
          <Image
            src={project.image}
            alt={`${project.title} Mockup`}
            fill
            sizes='(max-w-768px) 100vw, 50vw'
            className='object-cover transition-transform duration-700 group-hover:scale-105'
            placeholder='blur'
          />
          <ProjectOverlay live={project.live} github={project.github} />
        </div>
      </div>

      {/* Project Metadata */}
      <div className='w-full md:w-1/2 space-y-5'>
        <div className='space-y-1'>
          <span className='text-red-600 font-black text-xs tracking-widest uppercase'>
            Project {project.id}
          </span>
          <h4 className='text-2xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white'>
            {project.title}
          </h4>
        </div>

        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='px-2 py-1 text-[9px] font-black uppercase tracking-widest bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded border border-slate-200 dark:border-white/10'
            >
              {tag}
            </span>
          ))}
        </div>

        <p className='text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium max-w-lg'>
          {project.description}
        </p>

        <div className='pt-2'>
          <a
            href={project.live}
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white hover:text-red-600 transition-colors'
          >
            Explore Deploy{' '}
            <ArrowRight
              size={14}
              className='group-hover:translate-x-1 transition-transform'
            />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Hover Action Overlay for Images
 */
const ProjectOverlay = ({ live, github }: { live: string; github: string }) => (
  <div className='absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3'>
    <a
      href={live}
      target='_blank'
      rel='noopener noreferrer'
      className='p-3 bg-white rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-xl'
      aria-label='View Live Demo'
    >
      <ExternalLink size={18} />
    </a>
    <a
      href={github}
      target='_blank'
      rel='noopener noreferrer'
      className='p-3 bg-white rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-xl'
      aria-label='View Source Code'
    >
      <Github size={18} />
    </a>
  </div>
)
