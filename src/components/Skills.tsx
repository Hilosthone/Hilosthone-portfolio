'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaAws,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiPostgresql,
  SiDocker,
  SiExpress,
  SiReactivex,
} from 'react-icons/si'

const skills = [
  // --- CORE FOUNDATION ---
  { icon: <FaHtml5 className='text-[#E34F26] text-5xl' />, name: 'HTML5' },
  { icon: <FaCss3Alt className='text-[#1572B6] text-5xl' />, name: 'CSS3' },
  { icon: <FaJs className='text-[#F7DF1E] text-5xl' />, name: 'JavaScript' },
  {
    icon: <SiTypescript className='text-[#3178C6] text-5xl' />,
    name: 'TypeScript',
  },

  // --- FRONTEND FRAMEWORKS ---
  { icon: <FaReact className='text-[#61DAFB] text-5xl' />, name: 'React.js' },
  {
    icon: <SiNextdotjs className='text-slate-900 dark:text-white text-5xl' />,
    name: 'Next.js',
  },
  {
    icon: <SiReactivex className='text-[#61DAFB] text-5xl' />,
    name: 'Native',
  },
  {
    icon: <SiTailwindcss className='text-[#06B6D4] text-5xl' />,
    name: 'Tailwind',
  },

  // --- BACKEND & SECURITY ---
  { icon: <FaNodeJs className='text-[#339933] text-5xl' />, name: 'Node.js' },
  {
    icon: <SiExpress className='text-slate-600 dark:text-slate-400 text-5xl' />,
    name: 'Express',
  },
  {
    icon: <SiJsonwebtokens className='text-[#d63384] text-5xl' />,
    name: 'JWT Auth',
  },
  { icon: <FaPython className='text-[#3776AB] text-5xl' />, name: 'Python' },

  // --- DATABASE & CLOUD ---
  { icon: <SiMongodb className='text-[#47A248] text-5xl' />, name: 'MongoDB' },
  {
    icon: <SiPostgresql className='text-[#4169E1] text-5xl' />,
    name: 'PostgreSQL',
  },
  { icon: <FaAws className='text-[#FF9900] text-5xl' />, name: 'AWS Cloud' },
  { icon: <SiDocker className='text-[#2496ED] text-5xl' />, name: 'Docker' },

  // --- TOOLS ---
  { icon: <FaGitAlt className='text-[#F05032] text-5xl' />, name: 'Git' },
  {
    icon: <SiFirebase className='text-[#FFCA28] text-5xl' />,
    name: 'Firebase',
  },
  { icon: <SiFramer className='text-[#0055FF] text-5xl' />, name: 'Framer' },
]

const Skills = () => {
  return (
    <section
      id='skills'
      className='bg-white dark:bg-[#0f172a] py-24 px-6 md:px-12 lg:px-24 transition-colors duration-500 relative overflow-hidden'
    >
      {/* Background Decor Lights */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -z-10' />
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10' />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-red-600 dark:text-red-500 font-bold tracking-[.4em] text-[10px] uppercase block mb-4'
          >
            My Technical Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-6xl font-black text-slate-900 dark:text-white'
          >
            Skills &{' '}
            <span className='text-red-600 dark:text-red-500'>Tools.</span>
          </motion.h2>
        </div>

        {/* Dynamic Grid */}
        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className='group relative bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center transition-all hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-500/20'
            >
              <div className='relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.2)]'>
                {skill.icon}
              </div>

              <p className='relative z-10 mt-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white font-bold text-[9px] uppercase tracking-widest text-center'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills