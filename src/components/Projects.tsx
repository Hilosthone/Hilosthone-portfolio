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
        'A fintech web app clone of Opay, built with Next.js, TypeScript, and Tailwind CSS. It features wallet funding, transfers, transaction history, dark mode, and a responsive UI.',
      image: hpayImage,
      link: 'https://hpay-hilosthone.netlify.app/',
    },
    {
      id: '02',
      title: 'Twitter Clone Application',
      description:
        'A Twitter clone built with Next.js, Tailwind CSS, and TypeScript. It features user authentication, real-time updates, and a fully responsive design.',
      image: twitterClone,
      link: 'https://twitterclonebyhilosthone.netlify.app/',
    },
    {
      id: '03',
      title: "T's Campus Closet",
      description:
        'A stylish online closet app built with React and Tailwind CSS, showcasing modern design and responsive layouts.',
      image: tCampusCloset,
      link: 'https://t-campus-closet-dem-osite.netlify.app/',
    },
    {
      id: '04',
      title: 'Color Generator',
      description:
        'A color palette generator built with React. It allows users to create, copy, and explore beautiful color schemes easily.',
      image: colourGenerator,
      link: 'https://react-project-9-colors-generator.netlify.app/',
    },
  ]

  return (
    <section
      id='projects'
      // Standardized background for theme compatibility
      className='bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold mb-16'
        >
          My{' '}
          <span className='text-red-600 dark:text-red-500 font-extrabold'>
            Projects
          </span>
        </motion.h2>

        {/* Projects List */}
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
              {/* Image Container */}
              <div className='w-full md:w-1/2 group relative'>
                <div className='absolute -inset-2 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500'></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className='relative rounded-2xl shadow-xl shadow-slate-200 dark:shadow-none hover:scale-[1.02] transition-transform duration-500 cursor-pointer'
                  placeholder='blur'
                  quality={90}
                />
              </div>

              {/* Text Content */}
              <div className='w-full md:w-1/2 space-y-4'>
                <h3 className='text-6xl md:text-8xl font-black text-slate-100 dark:text-slate-800 transition-colors'>
                  {project.id}
                </h3>
                <h4 className='text-2xl md:text-3xl font-bold text-slate-900 dark:text-white'>
                  {project.title}
                </h4>
                <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg'>
                  {project.description}
                </p>

                <div className='pt-4'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 font-bold text-lg transition-all group'
                  >
                    <span>View Project</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2.5}
                      stroke='currentColor'
                      className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform'
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