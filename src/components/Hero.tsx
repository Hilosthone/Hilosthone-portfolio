'use client'

import { useState, useEffect } from 'react' // Added for Hydration Guard
import { motion, Variants } from 'framer-motion' // Properly imported Variants
import Image from 'next/image'
import avartar from '../../src/public/Banner.png'
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { ArrowRight, Mail } from 'lucide-react'

// Defined Variants outside the component to keep the render function clean
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  // Ensures animations only trigger on the client to prevent Hydration errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

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
      <motion.div
        className='md:w-1/2 space-y-8 text-center md:text-left mt-10 md:mt-0'
        initial='hidden'
        animate={isMounted ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className='space-y-4'>
          <motion.h2
            variants={itemVariants}
            className='text-red-600 dark:text-red-500 font-bold tracking-[0.2em] text-sm uppercase'
          >
            Available for hire
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white'
          >
            Hello I’m <br />
            <span className='text-red-600 dark:text-red-500 inline-block'>
              Hilosthone Sulyman.
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200'
          >
            Full-Stack & Mobile Developer
          </motion.p>
        </div>

        <motion.p
          variants={itemVariants}
          className='text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0'
        >
          I specialize in building scalable{' '}
          <span className='text-slate-900 dark:text-white font-bold'>
            Full-Stack and Mobile applications
          </span>{' '}
          using the MERN stack, Next.js, and{' '}
          <span className='text-slate-900 dark:text-white font-bold'>
            React Native (Expo)
          </span>
          . Blending performance-focused logic with intuitive, cross-platform
          design.
        </motion.p>

        {/* Buttons / CTA */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4'
        >
          <a
            href='#projects'
            className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95 group'
          >
            View My Work
            <ArrowRight
              size={18}
              className='group-hover:translate-x-1 transition-transform'
            />
          </a>
          <a
            href='mailto:solihullahsulyan@gmail.com'
            className='flex items-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10'
          >
            <Mail size={18} /> Let&apos;s Talk
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className='flex justify-center md:justify-start space-x-6 pt-6'
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-all text-2xl hover:-translate-y-1'
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* ===== Right Image ===== */}
      <motion.div
        className='md:w-1/2 flex justify-center md:justify-end items-center relative'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* The Glow Effect */}
        <div className='absolute inset-0 bg-red-600/10 dark:bg-red-500/20 blur-[100px] rounded-full -z-10' />

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
            className='max-w-[80%] lg:max-w-[90%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]'
            priority
          />
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block'>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className='w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1'
        >
          <div className='w-1 h-2 bg-red-600 rounded-full' />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
