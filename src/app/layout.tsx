import { Footer } from '@/components/layout/Footer'
import { NavigationBar } from '@/components/layout/NavigationBar'
import { CartProvider } from '@/context/CartContext'
import type { Metadata } from 'next'
import { Inter, Meow_Script, Rasa } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

const meow_Script = Meow_Script({
  weight: '400',
})

const rasa = Rasa({
  subsets: ['latin'],
})

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
    <html
      lang="de"
      className={(inter.className, meow_Script.className, rasa.className)}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="bg-main-background overflow-x-hidden scroll-smooth">
        <CartProvider>
          <NavigationBar />
          <div className="h-26" />
          <main className="grid grid-cols-12">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
