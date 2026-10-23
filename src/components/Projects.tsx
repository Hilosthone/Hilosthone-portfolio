//src/components/Projects.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import Magnetic from './Magnetic'
import TiltCard from './motion/TiltCard'
import {
  AI_PROJECTS,
  FEATURED_PROJECTS,
  MORE_PROJECTS,
  type Project,
} from '@/lib/data'
import {
  VIEWPORT,
  fadeIn,
  fadeSide,
  fadeUp,
  staggerContainer,
} from '@/lib/animations'

export default function Projects() {
  return (
    <section
      id='projects'
      className='bg-white dark:bg-[#0f172a] py-20 transition-colors duration-500 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-6 lg:px-12'>
        <SectionHeader title='Portfolio' subtitle='Featured Engineering.' />

        <div className='flex flex-col gap-24 md:gap-32'>
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>

        <SubHeader
          eyebrow='AI & Machine Learning'
          title='AI'
          accent='Applications.'
          note={`${AI_PROJECTS.length} shipped tools`}
        />

        <motion.ul
          variants={staggerContainer()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
        >
          {AI_PROJECTS.map((project) => (
            <AIProjectCard key={project.id} project={project} />
          ))}
        </motion.ul>

        <SubHeader
          eyebrow='Full-Stack Applications'
          title='More'
          accent='Builds.'
        />

        <div className='flex flex-col gap-24 md:gap-32'>
          {MORE_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={FEATURED_PROJECTS.length + index}
            />
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
      variants={fadeIn}
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}
      className='text-red-600 dark:text-red-500 font-black tracking-[.4em] text-[10px] uppercase block mb-3'
    >
      {title}
    </motion.span>
    <motion.h2
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}
      className='text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
    >
      {subtitle.split(' ')[0]}{' '}
      <span className='text-red-600'>{subtitle.split(' ')[1]}</span>
    </motion.h2>
  </div>
)

/**
 * Smaller header used to group project categories within the section
 */
const SubHeader = ({
  eyebrow,
  title,
  accent,
  note,
}: {
  eyebrow: string
  title: string
  accent: string
  note?: string
}) => (
  <motion.div
    variants={fadeUp}
    initial='hidden'
    whileInView='visible'
    viewport={VIEWPORT}
    className='mt-28 md:mt-36 mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-slate-100 dark:border-white/5 pb-6'
  >
    <div>
      <span className='text-red-600 dark:text-red-500 font-black tracking-[.4em] text-[10px] uppercase block mb-3'>
        {eyebrow}
      </span>
      <h3 className='text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter'>
        {title} <span className='text-red-600'>{accent}</span>
      </h3>
    </div>
    {note && (
      <span className='text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400'>
        {note}
      </span>
    )}
  </motion.div>
)

/**
 * Sub-component for Individual Project Cards
 */
const ProjectCard = ({
  project,
  index,
  featured = false,
}: {
  project: Project
  index: number
  featured?: boolean
}) => {
  const isEven = index % 2 === 1
  // Featured rows follow the section h2; "More Builds" rows follow an h3
  const Title = featured ? 'h3' : 'h4'

  return (
    <motion.article
      variants={staggerContainer(0.12)}
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}
      className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Project Image Viewport */}
      <motion.div
        variants={fadeSide(isEven ? 'right' : 'left')}
        className='w-full md:w-1/2'
      >
        <TiltCard
          max={featured ? 4 : 3}
          className='group rounded-xl [transform-style:preserve-3d]'
        >
          {/* Depth plate — sits behind the screenshot, so tilting reveals parallax */}
          <div
            aria-hidden
            className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-600/25 via-red-600/5 to-transparent border border-red-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500'
            style={{ transform: 'translate3d(14px, 14px, -40px)' }}
          />
          <div className='relative overflow-hidden rounded-xl aspect-video bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm group-hover:shadow-2xl group-hover:shadow-red-600/10 transition-shadow duration-500'>
            {project.image ? (
              <div
                className='absolute inset-0'
                style={
                  project.imageCrop && {
                    transform: `scale(${project.imageCrop.scale})`,
                    transformOrigin: project.imageCrop.origin,
                  }
                }
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
                  placeholder='blur'
                />
              </div>
            ) : (
              <ProjectFallback project={project} />
            )}
            <ProjectOverlay live={project.live} github={project.githubPrivate ? undefined : project.github} />
          </div>

          {/* Floating chip — lifted toward the viewer on featured cards */}
          {featured && (
            <span
              aria-hidden
              className='absolute -top-3 left-5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg text-[9px] font-black uppercase tracking-[0.25em] text-red-600 dark:text-red-500 pointer-events-none'
              style={{ transform: 'translateZ(36px)' }}
            >
              {project.category.split('·')[0].trim()}
            </span>
          )}
          </TiltCard>
      </motion.div>

      {/* Project Metadata */}
      <motion.div variants={fadeUp} className='w-full md:w-1/2 space-y-5'>
        <div className='space-y-1'>
          <div className='flex flex-wrap items-center gap-x-3 gap-y-1'>
            <span className='text-red-600 font-black text-xs tracking-widest uppercase'>
              Project {project.id}
              {featured && ' · Featured'}
            </span>
            {project.status && (
              <span className='px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full bg-red-600/10 text-red-600 dark:text-red-500'>
                {project.status}
              </span>
            )}
          </div>
          <Title className='text-2xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white'>
            {project.title}
          </Title>
          {project.tagline && (
            <p className='text-sm font-bold text-slate-500 dark:text-slate-400 italic'>
              {project.tagline}
            </p>
          )}
          <p className='text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 pt-1'>
            {project.category}
          </p>
        </div>

        <TagList tags={project.tags} />

        <p className='text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium max-w-lg'>
          {project.description}
        </p>

        {project.role && (
          <p className='text-xs font-bold text-slate-900 dark:text-white'>
            <span className='text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px] font-black mr-2'>
              Role
            </span>
            {project.role}
          </p>
        )}

        {project.highlights && (
          <ul className='grid sm:grid-cols-2 gap-x-4 gap-y-2 max-w-lg'>
            {project.highlights.map((item) => (
              <li
                key={item}
                className='flex items-start gap-2 text-[12px] font-semibold text-slate-700 dark:text-slate-300'
              >
                <CheckCircle2
                  size={12}
                  className='text-red-600 shrink-0 mt-[3px]'
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className='pt-2 flex flex-wrap items-center gap-x-8 gap-y-3'>
          {project.live && (
            <Magnetic>
              <a
                href={project.live}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${project.title} live demo`}
                className='group/link inline-flex items-center gap-2 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors'
              >
                Live Demo
                <ArrowRight
                  size={14}
                  className='group-hover/link:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
                />
              </a>
            </Magnetic>
          )}
          <GithubAction project={project} />
        </div>
      </motion.div>
    </motion.article>
  )
}

/**
 * Compact card for the AI applications grid
 */
const AIProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.li variants={fadeUp} className='h-full'>
      <TiltCard className='group h-full flex flex-col p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 transition-[border-color,box-shadow] duration-500 overflow-hidden'>
        <div className='relative flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 shrink-0 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300'>
            <Sparkles
              size={18}
              className='text-red-600 group-hover:text-white group-hover:rotate-12 transition-all duration-300'
            />
          </div>
          <span className='text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 leading-tight'>
            {project.category}
          </span>
        </div>

        <h4 className='relative text-lg font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-2'>
          {project.title}
        </h4>
        <p className='relative text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5'>
          {project.description}
        </p>

        <div className='relative mt-auto space-y-5'>
          <TagList tags={project.tags} />

          <div className='flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-slate-200/70 dark:border-white/5'>
            {project.live && (
              <CardLink
                href={project.live}
                label='Live'
                ariaLabel={`${project.title} live demo`}
              >
                <ArrowUpRight size={13} />
              </CardLink>
            )}
            {project.liveAlt && (
              <CardLink
                href={project.liveAlt}
                label='Mirror'
                ariaLabel={`${project.title} mirror deployment`}
              >
                <ArrowUpRight size={13} />
              </CardLink>
            )}
            {project.github && (
              <CardLink
                href={project.github}
                label='Code'
                ariaLabel={`${project.title} source code on GitHub`}
              >
                <FaGithub size={13} />
              </CardLink>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.li>
  )
}

const CardLink = ({
  href,
  label,
  ariaLabel,
  children,
}: {
  href: string
  label: string
  ariaLabel?: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={ariaLabel}
    className='group/link inline-flex items-center gap-1.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors'
  >
    {label}
    <span className='group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'>
      {children}
    </span>
  </a>
)

const TagList = ({ tags }: { tags: string[] }) => (
  <div className='flex flex-wrap gap-2'>
    {tags.map((tag) => (
      <span
        key={tag}
        className='px-2 py-1 text-[9px] font-black uppercase tracking-widest bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded border border-slate-200 dark:border-white/10 hover:border-red-600/40 hover:text-slate-900 dark:hover:text-white hover:-translate-y-0.5 transition-[color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
      >
        {tag}
      </span>
    ))}
  </div>
)

/**
 * GitHub action for featured rows — a private repo renders as a label
 */
const GithubAction = ({ project }: { project: Project }) => {
  if (!project.github) return null

  if (project.githubPrivate) {
    return (
      <span className='inline-flex items-center gap-2 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
        <Lock size={12} /> Private Repo
      </span>
    )
  }

  return (
    <Magnetic>
      <a
        href={project.github}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`${project.title} source code on GitHub`}
        className='group/link inline-flex items-center gap-2 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors'
      >
        <FaGithub
          size={14}
          className='group-hover/link:-rotate-12 transition-transform duration-300'
        />
        Source
      </a>
    </Magnetic>
  )
}

/**
 * Branded stand-in for projects without a screenshot
 */
const ProjectFallback = ({ project }: { project: Project }) => (
  <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950'>
    <div
      aria-hidden
      className='absolute inset-0 opacity-[0.07]'
      style={{
        backgroundImage:
          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />
    <div
      aria-hidden
      className='absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 bg-red-600/30 blur-[80px] rounded-full'
    />
    <span className='relative text-[10px] font-black uppercase tracking-[.4em] text-red-500 mb-3'>
      {project.category.split('·')[0].trim()}
    </span>
    <span className='relative text-3xl md:text-5xl font-black tracking-tighter text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'>
      {project.title}
    </span>
    {project.tagline && (
      <span className='relative mt-3 text-sm font-bold text-slate-300 italic'>
        {project.tagline}
      </span>
    )}
  </div>
)

/**
 * Hover Action Overlay for Images — pointer-only shortcut; the same links are
 * always available as text actions beside the image, so the overlay is kept
 * out of the tab order and hidden on touch devices.
 */
const ProjectOverlay = ({
  live,
  github,
}: {
  live?: string
  github?: string
}) => {
  if (!live && !github) return null

  const buttonClass =
    'p-3 bg-white text-slate-900 rounded-lg shadow-xl translate-y-3 group-hover:translate-y-0 hover:bg-red-600 hover:text-white transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'

  return (
    <div
      aria-hidden
      className='absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden [@media(hover:hover)]:flex items-center justify-center gap-3'
    >
      {live && (
        <a
          href={live}
          target='_blank'
          rel='noopener noreferrer'
          tabIndex={-1}
          className={buttonClass}
        >
          <ExternalLink size={18} />
        </a>
      )}
      {github && (
        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          tabIndex={-1}
          className={`${buttonClass} delay-75`}
        >
          <FaGithub size={18} />
        </a>
      )}
    </div>
  )
}
