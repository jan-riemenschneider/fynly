'use client'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import DhlLogo from './../../../../public/dhl.svg'
import Stripe from './../../../../public/stripe.svg'

const announcements = [
  {
    text: '🎉 Kostenloser Versand ab 50€!',
    icon: <DhlLogo className="h-5 w-5" />,
  },
  {
    text: '⭐ Handgefertigt mit Liebe',
    icon: '💝',
  },
  {
    text: '🚀 Schnelle Lieferung in 3-5 Tagen',
    icon: <DhlLogo className="h-5 w-5" />,
  },
  {
    text: '✨ 14 Tage Rückgaberecht',
    icon: '📦',
  },
  {
    text: 'Schneller Bezahlung & ohne Anmeldung',
    icon: <Stripe className="h-5 w-5" />,
  },
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary overflow-hidden py-2 text-white">
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex items-center gap-2 text-center text-xs whitespace-nowrap md:text-sm"
          >
            <span className="text-white">
              {announcements[currentIndex].text}
            </span>
            <span className="flex items-center">
              {announcements[currentIndex].icon}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
