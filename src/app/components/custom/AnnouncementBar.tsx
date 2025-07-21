'use client'
import React from 'react'
import { motion } from 'motion/react'
import DhlLogo from './../../../../public/dhl.svg'
export function AnnouncementBar() {
  return (
    <div className="bg-primary overflow-hidden py-1 text-white md:py-2">
      <motion.div
        animate={{ x: ['-90%', '100%'] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex items-center gap-4 text-center text-xs whitespace-nowrap md:text-sm"
      >
        🎉 Kostenloser Versand ab 50€! • DHL Versand
        <DhlLogo className="h-5 w-5" />
      </motion.div>
    </div>
  )
}
