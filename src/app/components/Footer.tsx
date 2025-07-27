'use client'
import DHL from '@/public/dhl-1.svg'
import Fynnly from '@/public/LogoFynnly.svg'
import MadeInGermany from '@/public/made-in-germany.svg'
import Stripe from '@/public/stripe.svg'
import { useRouter } from 'next/navigation'
import { FaTiktok } from 'react-icons/fa'
import { Checkmark } from './custom/Checkmark'
import { SeparatingLine } from './custom/SeparatingLine'
import { Button } from './ui/button'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  return (
    <footer className="bg-rose-50 shadow-md">
      <div className="container mx-auto px-6 py-12 md:py-14">
        {/* Desktop: 4-spaltig, Mobile: gestapelt */}
        <div className="mb-10 grid grid-cols-1 gap-10 md:mb-12 md:grid-cols-4 md:gap-12">
          {/* Spalte 1: Brand & USPs */}
          <div>
            <div className="flex items-center gap-2">
              <Fynnly className="h-15 w-15" />
              <small className="">Handmade with ❤️</small>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Checkmark />
                <span className="text-sm">Handgefertigt mit Liebe</span>
              </div>
              <div className="flex items-center gap-3">
                <Checkmark />
                <span className="text-sm">Aus hochwertigen Materialien</span>
              </div>
              <div className="flex items-center gap-3">
                <Checkmark />
                <span className="text-sm">
                  Sicher für Babys und Kleinkinder
                </span>
              </div>
            </div>
          </div>

          {/* Spalte 2: Produkte */}
          <div>
            <h4 className="mb-4">Produkte</h4>
            <div className="flex items-start gap-4 md:flex-col">
              <Button variant="link" size="link">
                Schnullerketten
              </Button>
              <Button variant="link" size="link">
                Beißketten
              </Button>
              <Button variant="link" size="link">
                Kinderwagenketten
              </Button>
              <Button variant="link" size="link">
                Babysocken
              </Button>
            </div>
          </div>

          {/* Spalte 3: Service */}
          <div>
            <h4 className="mb-4">Service</h4>
            <div className="flex flex-wrap items-start gap-4 md:flex-col">
              <Button variant="link" size="link">
                Versand & Lieferung
              </Button>
              <Button variant="link" size="link">
                Größenratgeber
              </Button>
              <Button variant="link" size="link">
                Pflege-Tipps
              </Button>
              <Button variant="link" size="link">
                Rückgabe & Umtausch
              </Button>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Rechtliches</h4>
            <div className="flex flex-wrap items-start gap-4 md:flex-col">
              <Button
                onClick={() => router.push('/privacyPolicy')}
                variant="link"
                size="link"
              >
                Datenschutz
              </Button>
              <Button
                onClick={() => router.push('/agb')}
                variant="link"
                size="link"
              >
                AGB
              </Button>
              <Button
                onClick={() => router.push('/contact')}
                variant="link"
                size="link"
              >
                Kontakt
              </Button>
              <Button
                onClick={() => router.push('/shipping')}
                variant="link"
                size="link"
              >
                Versand
              </Button>
            </div>
          </div>
        </div>

        <SeparatingLine className="mb-8 w-full" />

        <div className="mb-8 flex items-center justify-center gap-8 md:justify-evenly md:gap-10">
          <DHL className="h-16 w-24" />
          <Stripe className="h-16 w-24" />
          <MadeInGermany className="h-16 w-24" />
        </div>

        <SeparatingLine className="mb-8 w-full" />

        <div className="flex flex-col items-center gap-4 text-center">
          <h4> Entdecke uns auf TikTok!</h4>
          <div className="flex space-x-2">
            <Button size="lg" className="mb-1">
              <FaTiktok />
              <p className="text-white">@fynly</p>
            </Button>
          </div>
        </div>

        <div className="pt-8 text-center md:pt-10">
          <small>© {currentYear} fynly - Alle Rechte vorbehalten</small>
        </div>
      </div>
    </footer>
  )
}
