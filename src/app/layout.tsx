import { Footer } from '@/components/Footer'
import { AnnouncementBar } from '@/components/custom/AnnouncementBar'
import { NavigationBar } from '@/components/custom/NavigationBar'
import { CartProvider } from '@/context/CartContext'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import 'yet-another-react-lightbox/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default:
      'fyly - Handgemachte Schnullerketten & Baby Zubehör - Made in Germany',
    template: '%s | fyly',
  },
  description:
    'Handgemachte Schnullerketten, Beißketten & Baby-Zubehör aus Deutschland. Personalisierbar, babysicher und schadstofffrei. Jetzt entdecken!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="mx-auto flex min-h-screen flex-col overflow-x-hidden scroll-smooth">
        <Toaster position="top-right" reverseOrder={false} />
        <CartProvider>
          <AnnouncementBar />
          <NavigationBar />
          <main className="bg-main-background flex flex-1 flex-col pb-16 md:pb-24">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
