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
  title: 'Hilosthone | Portfolio',
  description: 'Creative Software Engineer building modern web apps',
  // This shows your picture in the browser tab
  icons: {
    icon: '/Hilosthone.jpeg',
    apple: '/Hilosthone.jpeg',
  },
  openGraph: {
    title: 'Hilosthone | Portfolio',
    description: 'Creative Software Engineer building modern web apps',
    url: 'https://hilosthone.com', // Replace with your domain when live
    siteName: 'Hilosthone Portfolio',
    images: [
      {
        url: '/HilosthoneMetaImage.png',
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
    title: 'Hilosthone | Portfolio',
    description: 'Creative Software Engineer building modern web apps',
    images: ['/HilosthoneMetaImage.png'],
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

          {/* Floating Linked Portrait */}
          <div className='fixed bottom-32 left-8 z-40 hidden xl:block'>
            <Link
              href='https://linkedin.com/in/hilosthone'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative block'
            >
              {/* Glow Effect */}
              <div className='absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000' />

              <div className='relative w-14 h-14 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-red-500'>
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