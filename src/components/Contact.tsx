'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
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
      id='contact'
      className='py-20 bg-transparent transition-colors duration-500 overflow-hidden relative'
    >
      {/* Visual Divider Line */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent' />

      <div className='max-w-6xl mx-auto px-6 lg:px-12 relative z-10'>
        {/* Header */}
        <div className='text-center mb-12 lg:mb-16'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-red-600 dark:text-red-500 font-black tracking-[.3em] text-[9px] uppercase block mb-3'
          >
            Available for Hire
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter'
          >
            Get In <span className='text-red-600'>Touch.</span>
          </motion.h2>
        </div>

        <div className='grid lg:grid-cols-5 gap-8 lg:gap-12 items-start'>
          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='lg:col-span-2 space-y-6'
          >
            <div className='group p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-100 dark:border-white/5 hover:border-red-600/30 transition-all'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300'>
                  <Mail
                    className='text-red-600 group-hover:text-white transition-colors'
                    size={18}
                  />
                </div>
                <div>
                  <h4 className='font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px]'>
                    Email
                  </h4>
                  <p className='text-xs font-bold text-slate-500 dark:text-slate-400'>
                    solihullahsulyan@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className='group p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-100 dark:border-white/5 hover:border-red-600/30 transition-all'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300'>
                  <MapPin
                    className='text-red-600 group-hover:text-white transition-colors'
                    size={18}
                  />
                </div>
                <div>
                  <h4 className='font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px]'>
                    Location
                  </h4>
                  <p className='text-xs font-bold text-slate-500 dark:text-slate-400'>
                    Kwara, Nigeria (Remote)
                  </p>
                </div>
              </div>
            </div>

            <div className='relative h-48 w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40'>
              <div className='absolute inset-0 opacity-20 grayscale brightness-50 dark:brightness-100'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Nigeria_location_map.svg/800px-Nigeria_location_map.svg.png'
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                    <div className='space-y-1.5'>
                      <label className='text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1'>
                        Name
                      </label>
                      <input
                        required
                        name='from_name'
                        type='text'
                        placeholder='Full Name'
                        className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all dark:text-white'
                      />
                    </div>
                    <div className='space-y-1.5'>
                      <label className='text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1'>
                        Email
                      </label>
                      <input
                        required
                        name='reply_to'
                        type='email'
                        placeholder='Email Address'
                        className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1'>
                      Subject
                    </label>
                    <input
                      required
                      name='subject'
                      type='text'
                      placeholder='Project Inquiry'
                      className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all dark:text-white'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1'>
                      Message
                    </label>
                    <textarea
                      required
                      name='message'
                      rows={4}
                      placeholder='How can I help?'
                      className='w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all dark:text-white resize-none'
                    ></textarea>
                  </div>
                  <button
                    disabled={isPending}
                    type='submit'
                    className='w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.97] shadow-lg shadow-red-600/20 group disabled:opacity-70 disabled:cursor-not-allowed'
                  >
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
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key='success-message'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='text-center space-y-4'
                >
                  <div className='flex justify-center'>
                    <div className='w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20'>
                      <CheckCircle2 className='text-green-500' size={40} />
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
