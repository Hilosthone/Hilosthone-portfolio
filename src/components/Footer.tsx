'use client'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Left: Logo & Name */}
        <div className='flex items-center space-x-3 group'>
          <div className='bg-white text-black font-bold rounded-full w-9 h-9 flex items-center justify-center shadow-lg shadow-white/10 group-hover:shadow-cyan-400/30 transition-all duration-300'>
            H
          </div>
          <span className='text-xl font-semibold tracking-tight group-hover:text-gray-200 transition-colors duration-300'>
            Hilosthone
          </span>
        </div>

        {/* Center: Social Links */}
        <div className='flex space-x-6'>
          <a
            href='https://github.com/Hilosthone'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110'
          >
            <Github className='w-5 h-5' />
          </a>
          <a
            href='https://x.com/Hilosthone1?t=o9XCOVCSEu5IbaCSaL6HDQ&s=09'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter (X)'
            className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110'
          >
            <Twitter className='w-5 h-5' />
          </a>
          <a
            href='https://linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110'
          >
            <Linkedin className='w-5 h-5' />
          </a>
        </div>

        {/* Right: Info Text */}
        <div className='text-center md:text-right text-sm text-gray-400 leading-relaxed'>
          <p>
            © {new Date().getFullYear()}{' '}
            <span className='text-white font-medium'>Hilosthone</span>. All
            rights reserved.
          </p>
          <p className='mt-1 text-gray-500 hover:text-gray-300 transition-colors duration-300'>
            Designed in <span className='text-cyan-400 font-medium'>Figma</span>{' '}
            • Built with{' '}
            <span className='text-blue-400 font-medium'>Next.js</span> &{' '}
            <span className='text-sky-400 font-medium'>TailwindCSS</span>
          </p>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-60'></div>
    </footer>
  )
}

// import { Github, Twitter, Linkedin } from 'lucide-react'

// export default function Footer() {
//   return (
//     <footer className='bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white border-t border-gray-800'>
//       <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex flex-col md:flex-row justify-between items-center gap-6'>
//         {/* Left: Logo */}
//         <div className='flex items-center space-x-3'>
//           <div className='bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg shadow-white/10'>
//             H
//           </div>
//           <span className='text-xl font-semibold tracking-tight hover:text-gray-200 transition-colors duration-300'>
//             Hilosthone
//           </span>
//         </div>

//         {/* Center: Social Links */}
//         <div className='flex space-x-5'>
//           <a
//             href='https://github.com/Hilosthone'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110'
//           >
//             <Github className='w-5 h-5' />
//           </a>
//           <a
//             href='https://x.com/Hilosthone1?t=o9XCOVCSEu5IbaCSaL6HDQ&s=09'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110'
//           >
//             <Twitter className='w-5 h-5' />
//           </a>
//           <a
//             href='https://linkedin.com/'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110'
//           >
//             <Linkedin className='w-5 h-5' />
//           </a>
//         </div>

//         {/* Right: Info Text */}
//         <div className='text-center md:text-right text-sm text-gray-400 leading-relaxed'>
//           <p>
//             © {new Date().getFullYear()}{' '}
//             <span className='text-white font-medium'>Hilosthone</span>. All
//             rights reserved.
//           </p>
//           <p className='mt-1 text-gray-500 hover:text-gray-300 transition-colors duration-300'>
//             Designed in Figma • Built with Next.js & TailwindCSS
//           </p>
//         </div>
//       </div>

//       {/* Subtle bottom fade line for depth */}
//       <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-60'></div>
//     </footer>
//   )
// }
