'use client'

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-24 px-6 md:px-16 lg:px-24 bg-white dark:bg-[#0f172a] transition-colors duration-500'
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='order-2 md:order-1'
        >
          <form
            className='flex flex-col space-y-4'
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type='text'
              placeholder='Your name'
              className='bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white transition-all'
            />
            <input
              type='email'
              placeholder='Email'
              className='bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white transition-all'
            />
            <textarea
              rows={5}
              placeholder='How can I help?*'
              className='bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white resize-none transition-all'
            ></textarea>

            <button
              type='submit'
              className='bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 active:scale-95'
            >
              Get In Touch
            </button>

            {/* Social Icons - Now correctly inside the parent motion div */}
            <div className='flex space-x-4 mt-6 justify-center md:justify-start'>
              {[
                {
                  icon: <FaFacebookF />,
                  href: 'https://www.facebook.com/solihullah.sulaiman.3',
                  color: 'hover:text-blue-600',
                },
                {
                  icon: <FaTwitter />,
                  href: 'https://x.com/Hilosthone1',
                  color: 'hover:text-sky-500',
                },
                {
                  icon: <FaLinkedinIn />,
                  href: 'https://linkedin.com/in/hilosthone/',
                  color: 'hover:text-blue-700',
                },
                {
                  icon: <FaTiktok />,
                  href: 'https://vm.tiktok.com/ZSHcdJSvPMayf-TwhhE/',
                  color: 'hover:text-pink-500',
                },
                {
                  icon: <FaInstagram />,
                  href: 'https://instagram.com/hilosthone',
                  color: 'hover:text-rose-500',
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`text-2xl text-slate-400 dark:text-slate-500 ${social.color} transition-all duration-300 transform hover:scale-125`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </form>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='space-y-8 order-1 md:order-2'
        >
          <h2 className='text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight'>
            Let’s <span className='text-red-600'>talk</span> <br />
            for something special
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md'>
            I seek to push the limits of creativity to craft high-engaging,
            user-friendly, and memorable digital experiences. Let’s build
            something meaningful together.
          </p>

          <div className='space-y-2'>
            <p className='font-bold text-slate-900 dark:text-white text-xl'>
              <a
                href='mailto:solihullahsulyan@gmail.com'
                className='hover:text-red-600 transition-colors'
              >
                solihullahsulyan@gmail.com
              </a>
            </p>
            <p className='text-slate-500 dark:text-slate-400 text-lg font-medium'>
              <a
                href='tel:+2349051772499'
                className='hover:text-slate-900 dark:hover:text-white transition-colors'
              >
                +234 905 177 2499
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}