'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import avartar from '../../src/public/Banner.png'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/Hilosthone',
      label: 'GitHub',
    },
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/solihullah.sulaiman.3',
      label: 'Facebook',
    },
    {
      icon: <FaTwitter />,
      href: 'https://x.com/Hilosthone1?t=o9XCOVCSEu5IbaCSaL6HDQ&s=09',
      label: 'Twitter',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/hilosthone/',
      label: 'LinkedIn',
    },
    {
      icon: <FaTiktok />,
      href: 'https://vm.tiktok.com/ZSHcdJSvPMayf-TwhhE/',
      label: 'TikTok',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/hilosthone?igsh=MWM2am8zbXB2NTNvdg==',
      label: 'Instagram',
    },
  ]

  return (
    <section
      id='hero'
      // Use standard bg-slate classes as backup to ensure dark mode visibility
      className='flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-24 min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-500'
    >
      {/* ===== Left Content ===== */}
      <motion.div
        className='md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Explicitly set text-slate-900 for light and text-white for dark */}
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug text-slate-900 dark:text-white'>
          Hello I’m{' '}
          <span className='text-red-600 dark:text-red-500 font-extrabold drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]'>
            Hilosthone Sulyman.
          </span>{' '}
          A{' '}
          <span className='text-red-600 dark:text-red-500 font-extrabold'>
            Software Developer
          </span>{' '}
          Based In{' '}
          <span className='text-red-600 dark:text-red-500 font-extrabold'>
            Nigeria.
          </span>
        </h1>

        <div className='text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0'>
          I craft sleek, intuitive, and performant digital experiences with{' '}
          <strong className='text-slate-900 dark:text-white font-bold'>
            Next.js
          </strong>
          ,
          <strong className='text-slate-900 dark:text-white font-bold'>
            {' '}
            TypeScript
          </strong>
          , and{' '}
          <strong className='text-slate-900 dark:text-white font-bold'>
            TailwindCSS
          </strong>{' '}
          — blending design and functionality to bring ideas to life on the web.
        </div>

        {/* Social Icons */}
        <div className='flex justify-center md:justify-start space-x-4 pt-4'>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300 text-2xl'
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll Down Animation */}
        <motion.div
          className='mt-10 flex justify-center md:justify-start'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a
            href='#about'
            className='text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-500 text-sm uppercase tracking-widest font-bold'
          >
            Scroll Down ↓
          </a>
        </motion.div>
      </motion.div>

      {/* ===== Right Image ===== */}
      <motion.div
        className='md:w-1/2 flex justify-center md:justify-end items-center relative'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* The Glow Effect - adjusted for visibility */}
        <div className='absolute inset-0 bg-red-600/10 dark:bg-red-500/20 blur-[80px] rounded-full -z-10' />

        <Image
          src={avartar}
          alt='Hilosthone working illustration'
          width={700}
          height={700}
          className='max-w-[80%] lg:max-w-[100%] h-auto object-contain drop-shadow-2xl'
          priority
        />
      </motion.div>
    </section>
  )
}

export default Hero