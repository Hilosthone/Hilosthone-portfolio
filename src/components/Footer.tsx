'use client'
import React from 'react'
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ]

  const socials = [
    { icon: <Github size={20} />, href: 'https://github.com/Hilosthone' },
    { icon: <Twitter size={20} />, href: 'https://x.com/Hilosthone1' },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/hilosthone',
    },
  ]

  return (
    <footer className='bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white border-t border-slate-100 dark:border-slate-800 transition-colors duration-500'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>
          {/* Column 1: Brand & Availability */}
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-3 group cursor-default'>
              <div className='bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-xl w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:rotate-12'>
                H
              </div>
              <span className='text-2xl font-bold tracking-tight'>
                Hilosthone
              </span>
            </div>
            <p className='text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed'>
              Building high-performance MERN applications and mentoring the next
              generation of developers.
            </p>
            {/* Professional Status Tag */}
            <div className='flex items-center space-x-2 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full w-fit'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className='flex flex-col space-y-4'>
            <h4 className='font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs'>
              Quick Links
            </h4>
            <nav className='grid grid-cols-2 gap-2'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 text-sm transition-colors flex items-center gap-1 group'
                >
                  {link.name}
                  <ExternalLink
                    size={12}
                    className='opacity-0 group-hover:opacity-100 transition-opacity'
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div className='flex flex-col space-y-4 md:items-end'>
            <h4 className='font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs'>
              Let&apos;s Connect
            </h4>
            <div className='flex space-x-4'>
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-white hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1'
                >
                  {social.icon}
                </a>
              ))}
              <a
                href='mailto:solihullahsulyan@gmail.com'
                className='p-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-white hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1'
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Tech Stack */}
        <div className='mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500'>
          <p>© {currentYear} Hilosthone Sulyman. All rights reserved.</p>
          <p className='flex items-center gap-2'>
            <span>Built with</span>
            <span className='font-semibold text-slate-800 dark:text-slate-200'>
              Next.js
            </span>
            <span>•</span>
            <span className='font-semibold text-slate-800 dark:text-slate-200'>
              Tailwind
            </span>
            <span>•</span>
            <span className='font-semibold text-slate-800 dark:text-slate-200'>
              AOS
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}