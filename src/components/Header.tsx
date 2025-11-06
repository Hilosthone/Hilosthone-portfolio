// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Download, Menu, X } from "lucide-react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeSection, setActiveSection] = useState<string>("");

//   const sectionIds = ["about", "skills", "projects", "contact"];

//   // Handle scroll background animation
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Observe sections for active highlighting
//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     sectionIds.forEach((id) => {
//       const section = document.getElementById(id);
//       if (section) {
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting) {
//               setActiveSection(id);
//             }
//           },
//           { threshold: 0.6 }
//         );
//         observer.observe(section);
//         observers.push(observer);
//       }
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   const links = [
//     { href: "#about", label: "About Me" },
//     { href: "#skills", label: "Skills" },
//     { href: "#projects", label: "Projects" },
//     { href: "#contact", label: "Contact Me" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       style={{
//         backgroundColor:
//           scrollY > 50 ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 1)",
//         backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
//         transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
//       }}
//       className="fixed top-0 left-0 w-full text-white z-50 shadow-md"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4" id="about">
//         {/* Left: Logo / Name */}
//         <h1 className="text-xl md:text-2xl font-bold tracking-wide hover:text-gray-400 transition-colors">
//           Hilosthone
//         </h1>

//         {/* Center: Navigation Links */}
//         <nav className="hidden md:flex space-x-8 text-sm lg:text-base hover:font-semibold">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`transition-colors duration-200`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Right: Resume Button */}
//         <div className="hidden md:flex items-center hover:gap-3 transition-all duration-300">
//           <a
//             href="https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit?tab=t.0"
//             download
//             className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
//             target="_blank"
//           >
//             Resume
//             <Download size={18} />
//           </a>
//         </div>

//         {/* Hamburger Menu (Mobile & Tablet) */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-all"
//         >
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -10, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-black bg-opacity-95 text-white flex flex-col items-center space-y-6 py-6 border-t border-gray-800"
//           >
//             {links.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`text-lg font-medium transition-colors duration-200 ${
//                   activeSection === link.href.substring(1)
//                     ? "text-red-400 font-semibold"
//                     : "hover:text-gray-300"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Resume Button in Mobile Menu */}
//             <a
//               href="https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit?tab=t.0"
//               download
//               onClick={() => setMenuOpen(false)}
//               className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
//               target="_blank"
//             >
//               Resume
//               <Download size={18} />
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('')

  const sectionIds = ['about', 'skills', 'projects', 'contact']

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          },
          { threshold: 0.6 }
        )
        observer.observe(section)
        observers.push(observer)
      }
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const links = [
    { href: '#about', label: 'About Me' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact Me' },
  ]

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        backgroundColor:
          scrollY > 50 ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 1)',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
      className='fixed top-0 left-0 w-full text-white z-50 shadow-md'
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4'>
        {/* Left: Logo / Name */}
        <h1 className='text-xl md:text-2xl font-bold tracking-wide hover:text-gray-400 transition-colors'>
          Hilosthone
        </h1>

        {/* Center: Navigation Links */}
        <nav className='hidden md:flex space-x-8 text-sm lg:text-base relative'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 pb-1 ${
                activeSection === link.href.substring(1)
                  ? 'text-red-400 font-semibold border-b-2 border-red-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Resume Button */}
        <div className='hidden md:flex items-center'>
          <a
            href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit?tab=t.0'
            target='_blank'
            download
            className='flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300'
          >
            Resume
            <Download size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-all'
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-black bg-opacity-95 text-white flex flex-col items-center space-y-6 py-6 border-t border-gray-800'
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? 'text-red-400 font-semibold'
                    : 'hover:text-gray-300'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Resume Button in Mobile Menu */}
            <a
              href='https://docs.google.com/document/d/13WtzPaF3GVk0-ZhLvyvf--6h8UD84fq2bAqGim5_g0M/edit?tab=t.0'
              target='_blank'
              download
              onClick={() => setMenuOpen(false)}
              className='flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300'
            >
              Resume
              <Download size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
