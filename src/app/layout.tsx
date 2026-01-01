import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hilosthone | Full-Stack Software Engineer',
  description:
    'Creative Full-Stack Software Engineer specializing in building high-performance web applications with Next.js, TypeScript, and Tailwind CSS. Explore my portfolio of modern digital solutions.',

  metadataBase: new URL('https://hilosthone-portfolio.netlify.app'),

  icons: {
    icon: '/Hilosthone.jpeg',
    apple: '/Hilosthone.jpeg',
  },
  openGraph: {
    title: 'Hilosthone | Full-Stack Software Engineer',
    description:
      'Building modern, scalable web apps with Next.js and Tailwind CSS. Check out my latest projects and skills.',
    url: 'https://hilosthone-portfolio.netlify.app',
    siteName: 'Hilosthone Portfolio',
    images: [
      {
        url: '/Hilosthone.jpeg',
        width: 1200,
        height: 630,
        alt: 'Hilosthone Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hilosthone | Full-Stack Software Engineer',
    description:
      'Creative Full-Stack Developer specializing in Next.js and Tailwind CSS.',
    images: ['/Hilosthone.jpeg'], 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />

          {/* Floating Linked Portrait - Collision-proof layout */}
          <div className='fixed bottom-24 right-6 md:bottom-32 md:left-8 z-40'>
            <Link
              href='https://linkedin.com/in/hilosthone'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative block'
            >
              {/* Notification Ping Animation */}
              <span className='absolute -top-1 -right-1 flex h-4 w-4 z-50'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-4 w-4 bg-red-600'></span>
              </span>

              {/* Glow Effect */}
              <div className='absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000' />

              <div className='relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-red-500'>
                <Image
                  src='/Hilosthone.jpeg'
                  alt='Hilosthone Portrait'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </Link>
          </div>

          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}