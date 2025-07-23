'use client'
import DHL from '@/public/dhl-1.svg'
import MadeInGermany from '@/public/made-in-germany.svg'
import Stripe from '@/public/stripe.svg'
import { Check } from 'lucide-react'

import { SeparatingLine } from './custom/SeparatingLine'
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-rose-200 shadow-md">
      <div className="container mx-auto p-6">
        <div className="flex justify-center gap-4">
          <small className="flex">
            <Check className="" />
            Express Checkout
          </small>
          <small className="flex">
            <Check className="" />
            Express Checkout
          </small>
        </div>
        <SeparatingLine className="w-full" />

        <div className="flex justify-center gap-4">
          <DHL className="h-20 w-20" />
          <Stripe className="h-20 w-20" />
          <MadeInGermany className="h-20 w-20" />
        </div>
        <SeparatingLine className="w-full" />
      </div>
    </footer>
  )
}
