// 'use client'

// import { useState, useEffect } from 'react' // Added for Hydration Guard
// import { motion, Variants } from 'framer-motion' // Properly imported Variants
// import Image from 'next/image'
// import avartar from '../../src/public/Banner.png'
// import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
// import { ArrowRight, Mail } from 'lucide-react'

// // Defined Variants outside the component to keep the render function clean
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// }

// const itemVariants: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// }

// const Hero = () => {
//   const [isMounted, setIsMounted] = useState(false)

//   // Ensures animations only trigger on the client to prevent Hydration errors
//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   const socialLinks = [
//     {
//       icon: <FaGithub />,
//       href: 'https://github.com/Hilosthone',
//       label: 'GitHub',
//     },
//     {
//       icon: <FaLinkedinIn />,
//       href: 'https://www.linkedin.com/in/hilosthone/',
//       label: 'LinkedIn',
//     },
//     {
//       icon: <FaTwitter />,
//       href: 'https://x.com/Hilosthone1',
//       label: 'Twitter',
//     },
//     {
//       icon: <FaInstagram />,
//       href: 'https://www.instagram.com/hilosthone',
//       label: 'Instagram',
//     },
//   ]

//   return (
//     <section
//       id='hero'
//       className='relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-24 min-h-screen bg-transparent transition-colors duration-500 overflow-hidden'
//     >
//       {/* Background Subtle Gradient */}
//       <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
//         <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/5 dark:bg-red-500/10 blur-[120px] rounded-full' />
//       </div>

//       {/* ===== Left Content ===== */}
//       <motion.div
//         className='md:w-1/2 space-y-8 text-center md:text-left mt-10 md:mt-0'
//         initial='hidden'
//         animate={isMounted ? 'visible' : 'hidden'}
//         variants={containerVariants}
//       >
//         <div className='space-y-4'>
//           <motion.h2
//             variants={itemVariants}
//             className='text-red-600 dark:text-red-500 font-bold tracking-[0.2em] text-sm uppercase'
//           >
//             Available for hire
//           </motion.h2>
//           <motion.h1
//             variants={itemVariants}
//             className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white'
//           >
//             Hello I’m <br />
//             <span className='text-red-600 dark:text-red-500 inline-block'>
//               Hilosthone Sulyman.
//             </span>
//           </motion.h1>
//           <motion.p
//             variants={itemVariants}
//             className='text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200'
//           >
//             Full-Stack & Mobile Developer
//           </motion.p>
//         </div>

//         <motion.p
//           variants={itemVariants}
//           className='text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0'
//         >
//           I specialize in building scalable{' '}
//           <span className='text-slate-900 dark:text-white font-bold'>
//             Full-Stack and Mobile applications
//           </span>{' '}
//           using the MERN stack, Next.js, and{' '}
//           <span className='text-slate-900 dark:text-white font-bold'>
//             React Native (Expo)
//           </span>
//           . Blending performance-focused logic with intuitive, cross-platform
//           design.
//         </motion.p>

//         {/* Buttons / CTA */}
//         <motion.div
//           variants={itemVariants}
//           className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4'
//         >
//           <a
//             href='#projects'
//             className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95 group'
//           >
//             View My Work
//             <ArrowRight
//               size={18}
//               className='group-hover:translate-x-1 transition-transform'
//             />
//           </a>
//           <a
//             href='mailto:hilosthonesulyan@gmail.com'
//             className='flex items-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10'
//           >
//             <Mail size={18} /> Let&apos;s Talk
//           </a>
//         </motion.div>

//         {/* Social Icons */}
//         <motion.div
//           variants={itemVariants}
//           className='flex justify-center md:justify-start space-x-6 pt-6'
//         >
//           {socialLinks.map((social, index) => (
//             <a
//               key={index}
//               href={social.href}
//               target='_blank'
//               rel='noopener noreferrer'
//               className='text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-all text-2xl hover:-translate-y-1'
//             >
//               {social.icon}
//             </a>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* ===== Right Image ===== */}
//       <motion.div
//         className='md:w-1/2 flex justify-center md:justify-end items-center relative'
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={
//           isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
//         }
//         transition={{ duration: 1, ease: 'easeOut' }}
//       >
//         {/* The Glow Effect */}
//         <div className='absolute inset-0 bg-red-600/10 dark:bg-red-500/20 blur-[100px] rounded-full -z-10' />

//         {/* Floating Animation for Image */}
//         <motion.div
//           animate={{ y: [0, -15, 0] }}
//           transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
//           className='relative w-full flex justify-center md:justify-end'
//         >
//           <Image
//             src={avartar}
//             alt='Hilosthone Portfolio Banner'
//             width={600}
//             height={600}
//             className='max-w-[80%] lg:max-w-[90%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]'
//             priority
//           />
//         </motion.div>
//       </motion.div>

//       {/* Scroll Down Indicator */}
//       <div className='absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block'>
//         <motion.div
//           animate={{ y: [0, 12, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className='w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1'
//         >
//           <div className='w-1 h-2 bg-red-600 rounded-full' />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Hero



'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import avartar from '../../src/public/Banner.png'
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { ArrowRight, Mail } from 'lucide-react'
import Magnetic from './Magnetic'
import HeroVisual from './hero/HeroVisual'
import { PRESS, SPRING } from '@/lib/animations'

const TITLES = [
  'Full-Stack Developer',
  'Mobile Application Developer',
  'AI Engineer',
]

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/Hilosthone',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/hilosthone/',
    label: 'LinkedIn',
  },
  {
    icon: <FaTwitter />,
    href: 'https://x.com/Hilosthone1',
    label: 'Twitter',
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/hilosthone',
    label: 'Instagram',
  },
]

// Entrance timeline (ms) — CSS-driven so it runs from first paint
const delay = (ms: number) =>
  ({ '--rise-delay': `${ms}ms` }) as React.CSSProperties

/**
 * Typing/deleting title loop, isolated so its 100ms ticks only re-render
 * this line rather than the whole hero. Screen readers get the full list once.
 */
const TypingTitle = () => {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setText(TITLES.join(' · '))
      return
    }

    const full = TITLES[index]
    const finished = !deleting && text === full
    const timer = setTimeout(
      () => {
        if (finished) setDeleting(true)
        else if (deleting && text === '') {
          setDeleting(false)
          setIndex((prev) => (prev + 1) % TITLES.length)
        } else setText(full.substring(0, text.length + (deleting ? -1 : 1)))
      },
      finished ? 2000 : deleting ? 100 : 150
    )
    return () => clearTimeout(timer)
  }, [text, deleting, index, reduceMotion])

  return (
    <p className='text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200'>
      <span className='sr-only'>{TITLES.join(', ')}</span>
      <span aria-hidden>
        {text}
        {!reduceMotion && (
          <span className='animate-pulse text-red-600 dark:text-red-500 font-bold ml-1'>
            |
          </span>
        )}
      </span>
    </p>
  )
}

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-24 min-h-screen bg-transparent transition-colors duration-500 overflow-hidden'
    >
      {/* Background Subtle Gradient */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/5 dark:bg-red-500/10 blur-[120px] rounded-full' />
      </div>

      {/* ===== Left Content ===== */}
      <div className='relative z-10 md:w-1/2 space-y-8 text-center md:text-left mt-10 md:mt-0'>
        <div className='space-y-4'>
          <p
            className='rise-in text-red-600 dark:text-red-500 font-bold tracking-[0.2em] text-sm uppercase'
            style={delay(100)}
          >
            Available for hire
          </p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white'>
            <span className='rise-in inline-block' style={delay(200)}>
              Hello
            </span>{' '}
            <span className='rise-in inline-block' style={delay(280)}>
              I’m
            </span>
            <br />
            <span className='text-red-600 dark:text-red-500'>
              <span className='rise-in inline-block' style={delay(380)}>
                Hilosthone
              </span>{' '}
              <span className='rise-in inline-block' style={delay(460)}>
                Sulyman.
              </span>
            </span>
          </h1>

          {/* Typing Title Effect */}
          <div
            className='rise-in min-h-10 flex items-center justify-center md:justify-start'
            style={delay(600)}
          >
            <TypingTitle />
          </div>
        </div>

        <p
          className='rise-in text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0'
          style={delay(700)}
        >
          I specialize in building scalable{' '}
          <span className='mark-in text-slate-900 dark:text-white font-bold'>
            Full-Stack, Mobile, and AI-driven applications
          </span>{' '}
          using the MERN stack, Next.js, FastAPI, and{' '}
          <span className='text-slate-900 dark:text-white font-bold'>
            React Native (Expo) and Flutter (Dart),
          </span>
          . Blending performance-focused logic with intelligent solutions.
        </p>

        {/* Buttons / CTA */}
        <div
          className='rise-in flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4'
          style={delay(820)}
        >
          <Magnetic>
            <motion.a
              href='#projects'
              whileTap={PRESS}
              transition={SPRING.snappy}
              className='group relative isolate overflow-hidden flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/35 transition-shadow duration-300'
            >
              {/* Fill sweep */}
              <span
                aria-hidden
                className='absolute inset-0 -z-10 bg-gradient-to-r from-red-700 to-rose-600 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
              />
              View My Work
              <ArrowRight
                size={18}
                className='group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
              />
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a
              href='mailto:hilosthonesulyan@gmail.com'
              whileTap={PRESS}
              transition={SPRING.snappy}
              className='group relative isolate overflow-hidden flex items-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold border border-slate-200 dark:border-white/10 hover:border-red-600/40 transition-colors duration-300'
            >
              <span
                aria-hidden
                className='absolute inset-0 -z-10 bg-white dark:bg-white/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
              />
              <Mail
                size={18}
                className='group-hover:-rotate-12 group-hover:text-red-600 transition-[transform,color] duration-300'
              />{' '}
              Let&apos;s Talk
            </motion.a>
          </Magnetic>
        </div>

        {/* Social Icons */}
        <div
          className='rise-in flex justify-center md:justify-start space-x-6 pt-6'
          style={delay(920)}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              transition={SPRING.snappy}
              className='text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors text-2xl'
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* ===== Right Image ===== */}
      <div
        className='pop-in md:w-1/2 flex justify-center md:justify-end items-center relative'
        style={delay(300)}
      >
        {/* The Glow Effect */}
        <div className='absolute inset-0 bg-red-600/10 dark:bg-red-500/20 blur-[100px] rounded-full -z-20' />

        {/* 3D Engineering Core — floats in the open space behind the illustration */}
        <HeroVisual className='absolute -z-10 aspect-square w-[78%] md:w-[90%] max-w-[540px] left-1/2 -translate-x-[62%] md:-translate-x-[60%] lg:-translate-x-[78%] top-1/2 -translate-y-[44%] md:-translate-y-[56%] opacity-70 md:opacity-100' />

        {/* Floating Animation for Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className='relative w-full flex justify-center md:justify-end'
        >
          <Image
            src={avartar}
            alt='Hilosthone Portfolio Banner'
            width={600}
            height={600}
            sizes='(max-width: 768px) 80vw, 45vw'
            className='w-[600px] max-w-[80%] lg:max-w-[90%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]'
            priority
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href='#about'
        aria-label='Scroll to About section'
        className='absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block'
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className='w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1'
        >
          <div className='w-1 h-2 bg-red-600 rounded-full' />
        </motion.div>
      </a>
    </section>
  )
}

export default Hero
