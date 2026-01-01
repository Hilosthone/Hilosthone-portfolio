'use client'

import Image from 'next/image'
import avartar from '../public/avartar.png'

export default function AboutMe() {
  const skills = [
    // Frontend
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '🚀' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'Redux/Toolkit', icon: '⚡' },
    // Backend
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Mongoose', icon: '🦅' },
    // DevOps & Auth
    { name: 'AWS (S3/EC2)', icon: '☁️' },
    { name: 'JWT Auth', icon: '🔐' },
    { name: 'Supabase', icon: '⚡' },
    // Design & Tools
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Figma', icon: '📐' },
    { name: 'Git & GitHub', icon: '🐙' },
  ]

  return (
    <section
      id='about'
      className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20 px-6 md:px-16 lg:px-24 bg-white dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 transition-colors duration-500 overflow-hidden'
    >
      {/* IMAGE SECTION */}
      <div
        data-aos='fade-right'
        className='w-full flex justify-center lg:justify-start'
      >
        <Image
          src={avartar}
          alt='Hilosthone illustration'
          width={420}
          height={420}
          className='object-contain w-[260px] md:w-[350px] lg:w-[420px] drop-shadow-xl dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]'
          priority
        />
      </div>

      {/* TEXT SECTION */}
      <div
        data-aos='fade-left'
        className='max-w-2xl text-center lg:text-left space-y-6'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white'>
          About <span className='text-red-600 dark:text-red-500'>Me</span>
        </h2>

        <p className='text-lg leading-relaxed'>
          I am a{' '}
          <span className='font-semibold text-slate-900 dark:text-white'>
            Full-Stack MERN Developer
          </span>{' '}
          specializing in building scalable architectures. My expertise spans
          from crafting pixel-perfect frontends to deploying secure,
          cloud-integrated backends using{' '}
          <span className='text-red-600 dark:text-red-500 font-medium'>
            AWS and JWT.
          </span>
        </p>

        {/* SKILLS GRID */}
        <div className='pt-6'>
          <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-4'>
            Tech Stack & Cloud 🛠️
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm'>
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos='zoom-in'
                data-aos-delay={index * 50}
                className='flex items-center gap-2 bg-white dark:bg-slate-800/50 cursor-default shadow-sm border border-slate-200 dark:border-slate-700 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300'
              >
                <span>{skill.icon}</span>
                <span className='font-medium'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}