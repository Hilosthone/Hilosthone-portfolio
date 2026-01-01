'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react' // Modern icons
import hpayImage from '../public/hpayImage.jpg'
import twitterClone from '../public/TwitterClone.png'
import colourGenerator from '../public/colourGenerator.png'
import tCampusCloset from '../public/tCampusCloset.png'

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Hpay — Hilosthone Pay',
      description:
        'A comprehensive fintech solution. Features include wallet management, P2P transfers, and real-time transaction tracking with high-performance edge computing.',
      image: hpayImage,
      live: 'https://hpay-hilosthone.netlify.app/',
      github: '#', // Add your repo link here
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      id: '02',
      title: 'Twitter / X Clone',
      description:
        'Real-time social architecture. Implemented secure authentication, media uploads, and a dynamic feed using Firebase synchronization.',
      image: twitterClone,
      live: 'https://twitterclonebyhilosthone.netlify.app/',
      github: '#',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    },
    {
      id: '03',
      title: "T's Campus Closet",
      description:
        'A specialized e-commerce platform for student commerce. Optimized for mobile-first shopping with fluid transitions and catalog filtering.',
      image: tCampusCloset,
      live: 'https://t-campus-closet-dem-osite.netlify.app/',
      github: '#',
      tags: ['React', 'Node.js', 'Tailwind CSS', 'AOS'],
    },
    {
      id: '04',
      title: 'Dynamic Color Engine',
      description:
        'Advanced tool for design systems. Generates WCAG-compliant color palettes and shade variations instantly for developer workflows.',
      image: colourGenerator,
      live: 'https://react-project-9-colors-generator.netlify.app/',
      github: '#',
      tags: ['React', 'CSS3', 'Lucide React'],
    },
  ]

  return (
    <section
      id='projects'
      className='bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='mb-20 space-y-4'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-red-600 dark:text-red-500 font-bold tracking-[0.3em] text-xs uppercase'
          >
            My Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl lg:text-6xl font-black'
          >
            Featured{' '}
            <span className='text-red-600 dark:text-red-500'>Projects</span>
          </motion.h2>
        </div>

        <div className='flex flex-col gap-32 md:gap-48'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className='w-full md:w-3/5 group relative'>
                <div className='absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200'></div>
                <div className='relative overflow-hidden rounded-2xl aspect-[16/10] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-700 ease-in-out group-hover:scale-105'
                    placeholder='blur'
                  />
                  {/* Overlay on hover */}
                  <div className='absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    <a
                      href={project.live}
                      target='_blank'
                      className='p-3 bg-white text-black rounded-full hover:bg-red-600 hover:text-white transition-colors'
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target='_blank'
                      className='p-3 bg-white text-black rounded-full hover:bg-red-600 hover:text-white transition-colors'
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className='w-full md:w-2/5 space-y-6'>
                <div className='relative'>
                  <span className='absolute -top-12 -left-4 text-7xl md:text-9xl font-black text-slate-100 dark:text-white/[0.03] select-none'>
                    {project.id}
                  </span>
                  <h4 className='text-3xl font-black tracking-tight relative z-10'>
                    {project.title}
                  </h4>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-white/10'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium'>
                  {project.description}
                </p>

                <div className='flex items-center gap-6 pt-4'>
                  <a
                    href={project.live}
                    target='_blank'
                    className='group flex items-center gap-2 text-sm font-black uppercase tracking-tighter hover:text-red-600 dark:hover:text-red-500 transition-colors'
                  >
                    Launch Case Study
                    <div className='w-8 h-[2px] bg-red-600 dark:bg-red-500 group-hover:w-12 transition-all' />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}