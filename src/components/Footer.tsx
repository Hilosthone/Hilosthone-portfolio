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
    { icon: <Github size={18} />, href: 'https://github.com/Hilosthone' },
    { icon: <Twitter size={18} />, href: 'https://x.com/Hilosthone1' },
    {
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/hilosthone',
    },
  ]

  return (
    <footer className='bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white border-t border-slate-100 dark:border-slate-800 transition-colors duration-500'>
      <div className='max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 items-start'>
          {/* Brand & Status - 5 Cols */}
          <div className='md:col-span-5 space-y-5'>
            <div className='flex items-center space-x-3 group cursor-pointer w-fit'>
              <div className='bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-lg w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:-rotate-6'>
                H
              </div>
              <span className='text-xl font-black tracking-tighter uppercase'>
                Hilosthone
              </span>
            </div>
            <p className='text-slate-500 dark:text-slate-400 text-xs md:text-sm max-w-sm leading-relaxed font-medium'>
              Full-Stack & Mobile Engineer focused on building high-performance
              applications and scalable digital infrastructure.
            </p>
            <div className='flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 px-3 py-1.5 rounded-md w-fit border border-green-100 dark:border-green-900/30'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Quick Nav - 3 Cols */}
          <div className='md:col-span-3 space-y-4'>
            <h4 className='font-black text-slate-400 uppercase tracking-[0.2em] text-[10px]'>
              Sitemap
            </h4>
            <nav className='flex flex-col gap-3'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-white text-xs font-bold transition-all flex items-center gap-2 group w-fit'
                >
                  {link.name}
                  <ExternalLink
                    size={10}
                    className='opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0'
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Socials - 4 Cols */}
          <div className='md:col-span-4 md:text-right space-y-4'>
            <h4 className='font-black text-slate-400 uppercase tracking-[0.2em] text-[10px]'>
              Connect
            </h4>
            <div className='flex md:justify-end space-x-3'>
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300'
                >
                  {social.icon}
                </a>
              ))}
              <a
                href='mailto:solihullahsulyan@gmail.com'
                className='p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300'
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>
            © {currentYear} Hilosthone Sulyman
          </p>
          <div className='flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-100 dark:border-white/5'>
            <span className='text-slate-900 dark:text-slate-200'>Next.js</span>
            <span className='text-slate-300 dark:text-slate-700'>/</span>
            <span className='text-slate-900 dark:text-slate-200'>Tailwind</span>
            <span className='text-slate-300 dark:text-slate-700'>/</span>
            <span className='text-slate-900 dark:text-slate-200'>Framer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
