'use client'

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white text-gray-800'
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
        {/* Contact Form */}
        <form className='flex flex-col space-y-4'>
          <input
            type='text'
            placeholder='Your name'
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <input
            type='email'
            placeholder='Email'
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <input
            type='text'
            placeholder='Your website (if exists)'
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <textarea
            rows={5}
            placeholder='How can I help?*'
            className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none'
          ></textarea>

          <button
            type='submit'
            className='bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-all duration-300'
          >
            Get In Touch
          </button>

          {/* Social Icons */}
          <div className='flex space-x-3 mt-4'>
            <a
              href='https://www.facebook.com/solihullah.sulaiman.3'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-black text-white rounded-md hover:bg-blue-600 transition-all duration-300'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://x.com/Hilosthone1?t=o9XCOVCSEu5IbaCSaL6HDQ&s=09'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-black text-white rounded-md hover:bg-sky-500 transition-all duration-300'
            >
              <FaTwitter />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-black text-white rounded-md hover:bg-blue-700 transition-all duration-300'
            >
              <FaLinkedinIn />
            </a>
            <a
              href='https://vm.tiktok.com/ZSHcdJSvPMayf-TwhhE/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-black text-white rounded-md hover:bg-gray-900 transition-all duration-300'
            >
              <FaTiktok />
            </a>
            <a
              href='https://www.instagram.com/hilosthone?igsh=MWM2am8zbXB2NTNvdg=='
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-black text-white rounded-md hover:bg-red-400 transition-all duration-300'
            >
              <FaInstagram />
            </a>
          </div>
        </form>

        {/* Text Content */}
        <div className='space-y-6'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            Let’s{' '}
            <span className='text-red-600 underline underline-offset-4'>
              talk
            </span>{' '}
            for <br />
            <span className='text-gray-900'>Something special</span>
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed'>
            I seek to push the limits of creativity to craft high-engaging,
            user-friendly, and memorable digital experiences. Whether it’s
            design, development, or mentorship — let’s build something
            meaningful together.
          </p>

          <div>
            <p className='font-semibold text-red-600 text-lg'>
              <a
                href='http://solihullahsulyan@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                solihullahsulyan@gmail.com
              </a>
            </p>
            <p className='text-gray-700 text-lg'>
              <a href='tel:+2349051772499' className='hover:underline'>
                +234 905 177 2499
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}  