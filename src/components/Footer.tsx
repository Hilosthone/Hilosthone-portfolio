'use client'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white border-t border-slate-100 dark:border-slate-800 transition-colors duration-500'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* Left: Logo & Name */}
        <div className='flex items-center space-x-3 group cursor-default'>
          <div className='bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110'>
            H
          </div>
          <span className='text-xl font-bold tracking-tight'>Hilosthone</span>
        </div>

        {/* Center: Social Links */}
        <div className='flex space-x-6'>
          {[
            { icon: <Github />, href: 'https://github.com/Hilosthone' },
            { icon: <Twitter />, href: 'https://x.com/Hilosthone1' },
            { icon: <Linkedin />, href: 'https://linkedin.com' },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 transform hover:scale-125'
            >
              {/* Cloning the icon to ensure consistent sizing */}
              {typeof social.icon === 'object' &&
                require('react').cloneElement(social.icon, {
                  className: 'w-6 h-6',
                })}
            </a>
          ))}
        </div>

        {/* Right: Info Text */}
        <div className='text-center md:text-right text-sm text-slate-500 dark:text-slate-400 leading-relaxed'>
          <p>
            © {new Date().getFullYear()}{' '}
            <span className='text-slate-900 dark:text-white font-semibold'>
              Hilosthone
            </span>
            .
          </p>
          <p className='mt-1'>
            Built with <span className='text-blue-500'>Next.js</span> &{' '}
            <span className='text-red-500'>Framer Motion</span>
          </p>
        </div>
      </div>

      {/* Subtle Bottom Line */}
      <div className='w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent'></div>
    </footer>
  )
}