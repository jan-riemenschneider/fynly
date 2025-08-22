'use client'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const announcements = [
  {
    text: 'Made in Germany 🇩🇪',
  },
  {
    text: 'Jedes Stück eine Unikat ⭐✨ ',
  },
  {
    text: 'Schnelle Lieferung mit DHL 🚀',
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
    <div className="bg-primary overflow-hidden py-1 text-white">
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <span className="flex items-center gap-3 text-center whitespace-nowrap text-white">
              {announcements[currentIndex].text.toUpperCase()}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
