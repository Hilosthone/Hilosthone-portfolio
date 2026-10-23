'use client'

import { useState, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import TiltCard from './motion/TiltCard'
import {
  PRESS,
  SPRING,
  VIEWPORT,
  fadeIn,
  fadeSide,
  fadeUp,
} from '@/lib/animations'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Decorative orb drifts against the scroll for a touch of depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const orbY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)

    // These point to your .env.local keys
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

    try {
      if (!formRef.current) return

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      )

      setIsSuccess(true)
      toast.success('Message sent successfully!')

      // Reset success state after 5 seconds to show form again
      setTimeout(() => setIsSuccess(false), 5000)
      formRef.current.reset()
    } catch (error) {
      console.error('Email Error:', error)
      toast.error('Failed to send. Please try again or email directly.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id='contact'
      className='py-20 bg-transparent transition-colors duration-500 overflow-hidden relative'
    >
      <motion.div
        aria-hidden
        style={{ y: orbY }}
        className='absolute top-1/4 -right-32 w-[420px] h-[420px] bg-red-600/[0.06] dark:bg-red-500/10 blur-[120px] rounded-full -z-10'
      />

      {/* Visual Divider Line */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent' />

      <div className='max-w-6xl mx-auto px-6 lg:px-12 relative z-10'>
        {/* Header */}
        <div className='text-center mb-12 lg:mb-16'>
          <motion.span
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={VIEWPORT}
            className='text-red-600 dark:text-red-500 font-black tracking-[.3em] text-[9px] uppercase block mb-3'
          >
            Available for Hire
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={VIEWPORT}
            className='text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
          >
            Get In <span className='text-red-600'>Touch.</span>
          </motion.h2>
        </div>

        <div className='grid lg:grid-cols-5 gap-8 lg:gap-12 items-start'>
          {/* Sidebar Info */}
          <motion.div
            variants={fadeSide('left')}
            initial='hidden'
            whileInView='visible'
            viewport={VIEWPORT}
            className='lg:col-span-2 space-y-6'
          >
            {/* Email card is a direct mailto — the fastest way to reach out */}
            <TiltCard max={3} className='rounded-2xl'>
              <a
                href='mailto:hilosthonesulyan@gmail.com'
                className='group block p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-100 dark:border-white/5 hover:border-red-600/30 transition-colors duration-300'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300'>
                    <Mail
                      className='text-red-600 group-hover:text-white transition-colors'
                      size={18}
                    />
                  </div>
                  <div>
                    <h3 className='font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px]'>
                      Email
                    </h3>
                    <p className='text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors'>
                      hilosthonesulyan@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </TiltCard>

            <div className='group p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-100 dark:border-white/5 hover:border-red-600/30 transition-all'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300'>
                  <MapPin
                    className='text-red-600 group-hover:text-white transition-colors'
                    size={18}
                  />
                </div>
                <div>
                  <h3 className='font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px]'>
                    Location
                  </h3>
                  <p className='text-xs font-bold text-slate-500 dark:text-slate-400'>
                    Kwara, Nigeria (Remote)
                  </p>
                </div>
              </div>
            </div>

            <div className='relative h-48 w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40'>
              <div className='absolute inset-0 opacity-20 grayscale brightness-50 dark:brightness-100'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nigeria_location_map.svg/960px-Nigeria_location_map.svg.png'
                  alt='Nigeria Map'
                  fill
                  className='object-contain p-6'
                />
              </div>
              <div className='absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5'>
                <div className='w-2 h-2 bg-red-600 rounded-full animate-pulse' />
                <span className='font-black text-[9px] uppercase tracking-wider text-slate-900 dark:text-white'>
                  Ilorin, NG
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <motion.div
            variants={fadeSide('right')}
            initial='hidden'
            whileInView='visible'
            viewport={VIEWPORT}
            className='lg:col-span-3 min-h-[480px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-white/10'
          >
            <AnimatePresence mode='wait'>
              {!isSuccess ? (
                <motion.form
                  key='contact-form'
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className='w-full space-y-4'
                >
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='group/field space-y-1.5'>
                      <label
                        htmlFor='contact-name'
                        className='text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-focus-within/field:text-red-600 transition-colors ml-1'
                      >
                        Name
                      </label>
                      <input
                        id='contact-name'
                        required
                        name='from_name'
                        type='text'
                        placeholder='Full Name'
                        className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 hover:border-slate-300 dark:hover:border-white/15 transition-[border-color,box-shadow] duration-300 dark:text-white'
                      />
                    </div>
                    <div className='group/field space-y-1.5'>
                      <label
                        htmlFor='contact-email'
                        className='text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-focus-within/field:text-red-600 transition-colors ml-1'
                      >
                        Email
                      </label>
                      <input
                        id='contact-email'
                        required
                        name='reply_to'
                        type='email'
                        placeholder='Email Address'
                        className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 hover:border-slate-300 dark:hover:border-white/15 transition-[border-color,box-shadow] duration-300 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='group/field space-y-1.5'>
                    <label
                      htmlFor='contact-subject'
                      className='text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-focus-within/field:text-red-600 transition-colors ml-1'
                    >
                      Subject
                    </label>
                    <input
                      id='contact-subject'
                      required
                      name='subject'
                      type='text'
                      placeholder='Project Inquiry'
                      className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 hover:border-slate-300 dark:hover:border-white/15 transition-[border-color,box-shadow] duration-300 dark:text-white'
                    />
                  </div>
                  <div className='group/field space-y-1.5'>
                    <label
                      htmlFor='contact-message'
                      className='text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-focus-within/field:text-red-600 transition-colors ml-1'
                    >
                      Message
                    </label>
                    <textarea
                      id='contact-message'
                      required
                      name='message'
                      rows={4}
                      placeholder='How can I help?'
                      className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 hover:border-slate-300 dark:hover:border-white/15 transition-[border-color,box-shadow] duration-300 dark:text-white resize-none'
                    ></textarea>
                  </div>
                  <motion.button
                    disabled={isPending}
                    type='submit'
                    whileTap={isPending ? undefined : PRESS}
                    transition={SPRING.snappy}
                    className='relative isolate overflow-hidden w-full bg-red-600 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-shadow duration-300 group disabled:opacity-70 disabled:cursor-not-allowed'
                  >
                    {/* Fill sweep — shared with the hero CTA */}
                    <span
                      aria-hidden
                      className='absolute inset-0 -z-10 bg-gradient-to-r from-red-700 to-rose-600 -translate-x-[101%] group-hover:group-enabled:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
                    />
                    {isPending ? (
                      <Loader2 className='animate-spin' size={16} />
                    ) : (
                      <>
                        <Send
                          size={14}
                          className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'
                        />{' '}
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key='success-message'
                  role='status'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={SPRING.soft}
                  className='text-center space-y-4'
                >
                  <div className='flex justify-center'>
                    <div className='relative w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20'>
                      <motion.span
                        aria-hidden
                        className='absolute inset-0 rounded-full border border-green-500/40'
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                      <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ ...SPRING.snappy, delay: 0.1 }}
                      >
                        <CheckCircle2 className='text-green-500' size={40} />
                      </motion.span>
                    </div>
                  </div>
                  <h3 className='text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter'>
                    Email Sent!
                  </h3>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Thanks, Hilosthone will be in touch soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
