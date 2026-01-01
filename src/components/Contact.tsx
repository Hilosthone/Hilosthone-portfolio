'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-24 bg-white dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-6xl font-black text-slate-900 dark:text-white'
          >
            Get In <span className='text-red-600'>Touch.</span>
          </motion.h2>
          <p className='text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto'>
            Have a project in mind or looking to hire? I&apos;m currently
            available for full-time roles and freelance opportunities.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left Side: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='space-y-8'
          >
            <div className='grid sm:grid-cols-2 gap-6'>
              <div className='p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10'>
                <Mail className='text-red-600 mb-4' size={24} />
                <h4 className='font-bold text-slate-900 dark:text-white'>
                  Email
                </h4>
                <p className='text-sm text-slate-500 break-all'>
                  solihullahsulyan@gmail.com
                </p>
              </div>
              <div className='p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10'>
                <MapPin className='text-red-600 mb-4' size={24} />
                <h4 className='font-bold text-slate-900 dark:text-white'>
                  Location
                </h4>
                <p className='text-sm text-slate-500'>
                  Kwara, Nigeria (Global Remote)
                </p>
              </div>
            </div>

            {/* Stylized Nigeria Map Background */}
            <div className='relative h-64 md:h-80 w-full rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-slate-900/40 flex items-center justify-center'>
              {/* This is a visual representation, you could replace with a real Google Map Embed */}
              <div className='absolute inset-0 opacity-20 dark:opacity-10 grayscale'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Nigeria_location_map.svg/800px-Nigeria_location_map.svg.png'
                  alt='Nigeria Map'
                  fill
                  className='object-contain p-8'
                />
              </div>
              <div className='relative z-10 text-center space-y-2'>
                <div className='w-4 h-4 bg-red-600 rounded-full animate-ping mx-auto' />
                <p className='font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs'>
                  Currently in Ilorin, Nigeria
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='bg-slate-50 dark:bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none'
          >
            <form className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label className='text-xs font-bold uppercase tracking-wider text-slate-500'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className='w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-600 transition-colors dark:text-white'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-xs font-bold uppercase tracking-wider text-slate-500'>
                    Email Address
                  </label> 
                  <input
                    type='email'
                    placeholder='mail@example.com'
                    className='w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-600 transition-colors dark:text-white'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-xs font-bold uppercase tracking-wider text-slate-500'>
                  Subject
                </label>
                <input
                  type='text'
                  placeholder='Job Opportunity / Project'
                  className='w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-600 transition-colors dark:text-white'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-xs font-bold uppercase tracking-wider text-slate-500'>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder='Tell me about your project...'
                  className='w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-600 transition-colors dark:text-white resize-none'
                ></textarea>
              </div>

              <button className='w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-red-600/20'>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'