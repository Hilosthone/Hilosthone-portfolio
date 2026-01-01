'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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
        'A fintech web app clone of Opay. It features wallet funding, transfers, and transaction history with a focus on high-speed performance.',
      image: hpayImage,
      link: 'https://hpay-hilosthone.netlify.app/',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      id: '02',
      title: 'Twitter Clone',
      description:
        'A real-time social media application featuring user authentication, post creation, and a fully responsive feed.',
      image: twitterClone,
      link: 'https://twitterclonebyhilosthone.netlify.app/',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    },
    {
      id: '03',
      title: "T's Campus Closet",
      description:
        'An e-commerce style closet app showcasing modern design principles and fluid responsive layouts.',
      image: tCampusCloset,
      link: 'https://t-campus-closet-dem-osite.netlify.app/',
      tags: ['React', 'Node.js', 'Tailwind CSS', 'AOS'],
    },
    {
      id: '04',
      title: 'Color Generator',
      description:
        'A creative tool for developers to generate and explore beautiful color palettes instantly.',
      image: colourGenerator,
      link: 'https://react-project-9-colors-generator.netlify.app/',
      tags: ['React', 'CSS3', 'Lucide React'],
    },
  ]

  return (
    <section
      id='projects'
      className='bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold mb-16'
        >
          Featured{' '}
          <span className='text-red-600 dark:text-red-500 font-extrabold'>
            Projects
          </span>
        </motion.h2>

        <div className='space-y-32'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image with Hover Effect */}
              <div className='w-full md:w-1/2 group relative'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='absolute -inset-2 bg-gradient-to-r from-red-600 to-rose-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500'></div>
                  <div className='relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-white/5'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className='w-full h-auto transition-transform duration-700 ease-out group-hover:scale-110'
                      placeholder='blur'
                    />
                  </div>
                </a>
              </div>

              {/* Text Content */}
              <div className='w-full md:w-1/2 space-y-5'>
                <h3 className='text-6xl md:text-8xl font-black text-slate-100 dark:text-slate-800/40 select-none leading-none'>
                  {project.id}
                </h3>
                <h4 className='text-2xl md:text-3xl font-bold'>
                  {project.title}
                </h4>

                {/* Tech Stack Badges */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-white/5 shadow-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
                  {project.description}
                </p>

                <div className='pt-2'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 font-bold text-lg group'
                  >
                    <span>Launch Site</span>
                    <svg
                      className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
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