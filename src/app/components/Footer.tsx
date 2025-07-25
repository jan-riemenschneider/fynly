'use client'
import DHL from '@/public/dhl-1.svg'
import MadeInGermany from '@/public/made-in-germany.svg'
import Stripe from '@/public/stripe.svg'
import Fynnly from '@/publicLogoFynnly.svg'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { SeparatingLine } from './custom/SeparatingLine'
import { Button } from './ui/button'
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const router = useRouter()
  return (
    <footer className="bg-rose-50 shadow-md">
      <div className="container mx-auto p-6">
        <div className="mb-6 w-full space-y-4">
          <p className="flex gap-2">
            <Check className="text-primary" />
            Handgefertigt mit Liebe
          </p>
          <p className="flex gap-2">
            <Check className="text-primary" /> Aus hochwertigen Materialien
          </p>
          <p className="flex gap-2">
            <Check className="text-primary" />
            Sicher für Babys und Kleinkinder
          </p>
        </div>
        <SeparatingLine className="mb-4 w-full border-rose-300" />
        <div className="6 mb-4 flex items-center justify-evenly">
          <DHL className="h-15 w-15" />
          <Stripe className="h-20 w-20" />
          <MadeInGermany className="h-25 w-25" />
        </div>
        <SeparatingLine className="w-full border-rose-300" />
        <div className="relative mb-6 flex justify-center">
          <Fynnly className="h-35 w-35"></Fynnly>
          <div className="absolute bottom-4 text-sm text-gray-500">
            Handmade with ❤️
          </div>
        </div>
        <div className="mb-4 flex flex-col items-start justify-start">
          <Button onClick={router.back} variant="link">
            Datenschutz
          </Button>
          <Button onClick={router.back} variant="link">
            Allgemeine Geschäftsbedingungen
          </Button>
          <Button onClick={router.back} variant="link">
            Kontakt
          </Button>
          <Button onClick={router.back} variant="link">
            Versand
          </Button>
        </div>
        <small className="text-center">
          © {currentYear} Alle Rechte vorbehalten
        </small>
      </div>
    </footer>
  )
}
