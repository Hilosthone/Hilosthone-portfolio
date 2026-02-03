'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className='fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0f172a]'>
      <div className='relative flex items-center justify-center'>
        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className='w-16 h-16 border-4 border-slate-200 dark:border-slate-800 border-t-red-600 rounded-full'
        />

        {/* Inner Pulsing Core */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute w-6 h-6 bg-red-600 rounded-full'
        />
      </div>

      {/* Branded Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='mt-6 flex flex-col items-center'
      >
        <span className='text-[10px] font-black uppercase tracking-[0.4em] text-red-600'>
          Initializing
        </span>
        <span className='text-xs font-bold text-slate-500 dark:text-slate-400 mt-1'>
          Hilosthone Sulyman
        </span>
      </motion.div>
    </div>
  )
}
