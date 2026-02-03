import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from './ClientLayout'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Modern way to handle theme-color and scaling in Next.js
export const viewport: Viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: {
    default: 'Hilosthone Sulyman | Dev Portfolio',
    template: '%s | Hilosthone',
  },
  description:
    'Full-Stack Developer specializing in MERN stack, Next.js, and React Native.',
  metadataBase: new URL('https://hilosthone-portfolio.netlify.app'),

  openGraph: {
    title: 'Hilosthone Sulyman | Portfolio',
    description:
      'Full-Stack & Mobile Developer building scalable applications.',
    url: 'https://hilosthone-portfolio.netlify.app',
    siteName: 'Hilosthone Portfolio',
    images: [
      {
        url: '/Hilosthone.jpeg',
        width: 1200,
        height: 630,
        alt: 'Hilosthone Sulyman Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hilosthone Sulyman | Portfolio',
    description: 'Full-Stack & Mobile Developer',
    images: ['/Hilosthone.jpeg'],
  },

  manifest: '/manifest.json',

  icons: {
    icon: [
      { url: '/Hilosthone.jpeg' },
      { url: '/Hilosthone.jpeg', sizes: '32x32', type: 'image/jpeg' },
    ],
    shortcut: '/Hilosthone.jpeg',
    apple: [{ url: '/Hilosthone.jpeg', sizes: '180x180', type: 'image/jpeg' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body
        className={`${inter.className} bg-white dark:bg-[#0f172a] selection:bg-red-500/30 overflow-x-hidden`}
      >
        {/* The YouTube-style top loading bar in your brand Red */}
        <NextTopLoader
          color='#dc2626'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing='ease'
          speed={200}
          shadow='0 0 10px #dc2626,0 0 5px #dc2626'
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
