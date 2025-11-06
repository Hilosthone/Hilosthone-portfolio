'use client'

import Image from 'next/image'
import twitterClone from '../public/TwitterClone.png'
import colourGenerator from '../public/colourGenerator.png'
import tCampusCloset from '../public/tCampusCloset.png'

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Twitter Clone Application',
      description:
        'A Twitter clone built with Next.js, Tailwind CSS, and TypeScript. It features user authentication, real-time updates, and a fully responsive design.',
      image: twitterClone,
      link: 'https://twitterclonebyhilosthone.netlify.app/',
    },
    {
      id: '02',
      title: "T's Campus Closet",
      description:
        'A stylish online closet app built with React and Tailwind CSS, showcasing modern design and responsive layouts.',
      image: tCampusCloset,
      link: 'https://t-campus-closet-dem-osite.netlify.app/',
    },
    {
      id: '03',
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
      className='bg-black text-white py-24 px-6 md:px-12 lg:px-24'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 className='text-3xl md:text-4xl font-bold mb-12'>
          My <span className='text-gray-300 font-extrabold'>Projects</span>
        </h2>

        {/* Projects List */}
        <div className='space-y-20'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className='w-full md:w-1/2'>
                <Image
                  src={project.image}
                  alt={project.title}
                  className='rounded-2xl shadow-lg shadow-gray-900/40 hover:scale-[1.02] transition-transform duration-500'
                  placeholder='blur'
                  quality={90}
                />
              </div>

              {/* Text */}
              <div className='w-full md:w-1/2'>
                <h3 className='text-6xl font-extrabold text-gray-600 mb-2'>
                  {project.id}
                </h3>
                <h4 className='text-2xl font-semibold mb-4'>{project.title}</h4>
                <p className='text-gray-400 mb-4 leading-relaxed'>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-gray-300 hover:text-white font-medium transition-colors'
                >
                  <span>View Project</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-4 h-4 ml-2'
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
          ))}
        </div>
      </div>
    </section>
  )
}
