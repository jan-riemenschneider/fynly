import { Footer } from '@/components/Footer'
import { AnnouncementBar } from '@/components/custom/AnnouncementBar'
import { NavigationBar } from '@/components/custom/NavigationBar'
import { CartProvider } from '@/context/CartContext'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import 'yet-another-react-lightbox/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
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
