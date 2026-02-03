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
  SiExpo,
  SiSupabase,
} from 'react-icons/si'

const skills = [
  // --- MOBILE & FRONTEND (Prioritized) ---
  { icon: <FaReact className='text-[#61DAFB]' />, name: 'React Native' },
  { icon: <SiExpo className='text-slate-900 dark:text-white' />, name: 'Expo' },
  {
    icon: <SiNextdotjs className='text-slate-900 dark:text-white' />,
    name: 'Next.js',
  },
  { icon: <FaReact className='text-[#61DAFB]' />, name: 'React.js' },
  { icon: <SiTypescript className='text-[#3178C6]' />, name: 'TypeScript' },
  { icon: <SiTailwindcss className='text-[#06B6D4]' />, name: 'Tailwind' },
  { icon: <SiFramer className='text-[#0055FF]' />, name: 'Framer' },

  // --- BACKEND & FOUNDATION ---
  { icon: <FaNodeJs className='text-[#339933]' />, name: 'Node.js' },
  {
    icon: <SiExpress className='text-slate-600 dark:text-slate-400' />,
    name: 'Express',
  },
  { icon: <SiJsonwebtokens className='text-[#d63384]' />, name: 'JWT Auth' },
  { icon: <SiPostgresql className='text-[#4169E1]' />, name: 'PostgreSQL' },
  { icon: <SiMongodb className='text-[#47A248]' />, name: 'MongoDB' },
  { icon: <SiSupabase className='text-[#3ECF8E]' />, name: 'Supabase' },
  { icon: <FaPython className='text-[#3776AB]' />, name: 'Python' },

  // --- TOOLS & DEPLOYMENT ---
  { icon: <FaAws className='text-[#FF9900]' />, name: 'AWS Cloud' },
  { icon: <SiDocker className='text-[#2496ED]' />, name: 'Docker' },
  { icon: <FaGitAlt className='text-[#F05032]' />, name: 'Git' },
  { icon: <SiFirebase className='text-[#FFCA28]' />, name: 'Firebase' },
  { icon: <FaJs className='text-[#F7DF1E]' />, name: 'JavaScript' },
  { icon: <FaHtml5 className='text-[#E34F26]' />, name: 'HTML5' },
  { icon: <FaCss3Alt className='text-[#1572B6]' />, name: 'CSS3' },
]

const Skills = () => {
  return (
    <section
      id='skills'
      className='bg-white dark:bg-[#0f172a] py-24 px-6 md:px-12 lg:px-32 transition-colors duration-500 relative overflow-hidden'
    >
      {/* Background Decor Lights */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -z-10' />
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10' />

      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-red-600 dark:text-red-500 font-black tracking-[.4em] text-[10px] uppercase block mb-4'
          >
            Technical Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter'
          >
            Mastered{' '}
            <span className='text-red-600 dark:text-red-500'>
              Technologies.
            </span>
          </motion.h2>
        </div>

        {/* Responsive Grid */}
        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
              className='group relative bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center transition-all hover:shadow-xl hover:shadow-red-600/10 hover:border-red-600/30'
            >
              <div className='text-4xl md:text-5xl relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]'>
                {skill.icon}
              </div>

              <p className='relative z-10 mt-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white font-black text-[9px] uppercase tracking-widest text-center transition-colors'>
                {skill.name}
              </p>

              {/* Subtle inner glow on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/[0.03] group-hover:to-transparent rounded-2xl transition-all duration-500' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
