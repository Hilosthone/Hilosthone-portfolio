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
      className='flex flex-col-reverse md:flex-row items-center md:items-center justify-between px-6 md:px-12 lg:px-24 py-24  min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black'
    >
      {/* ===== Left Content ===== */} 
      <motion.div
        className='md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug'>
          Hello I’m{' '}
          <span className='text-red-600 font-extrabold'>
            Hilosthone Sulyman.
          </span>{' '}
          A{' '}
          <span className='text-red-600 font-extrabold'>
            Software Developer
          </span>{' '}
          Based In <span className='text-red-600 font-extrabold'>Nigeria.</span>
        </h1>

        <div className='text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0'>
          I craft sleek, intuitive, and performant digital experiences with{' '}
          <strong>Next.js</strong>, <strong>TypeScript</strong>, and{' '}
          <strong>TailwindCSS</strong> — blending design and functionality to
          bring ideas to life on the web. Skilled in <strong>HTML</strong>,{' '}
          <strong>CSS</strong>, <strong>JavaScript</strong>,{' '}
          <strong>React</strong>, <strong>Bootstrap</strong>,{' '}
          <strong>Framer Motion</strong>, <strong>Node.js</strong>,{' '}
          <strong>Git</strong>, and <strong>Python</strong>, I build clean,
          scalable, and engaging interfaces that deliver real impact.
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
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className='text-gray-500 hover:text-red-500 transition-colors duration-300 text-2xl md:text-3xl'
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll Down Animation */}
        <motion.div
          className='mt-10 flex justify-center md:justify-start'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a
            href='#skills'
            className='text-gray-400 hover:text-red-500 text-sm uppercase tracking-wide'
          >
            Scroll Down ↓
          </a>
        </motion.div>
      </motion.div>

      {/* ===== Right Image ===== */}
      <motion.div
        className='md:w-1/2 flex justify-center md:justify-end items-center'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={avartar}
          alt='Hilosthone working illustration'
          width={700}
          height={700}
          className='max-w-[80%] sm:max-w-[60%] md:max-w-[80%] lg:max-w-[100%] h-auto object-contain'
          priority
        />
      </motion.div>
    </section>
  )
}

export default Hero
