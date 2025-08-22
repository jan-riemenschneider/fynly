'use client'
import DHL from '@/public/dhlLogo.svg'
import MadeInGermany from '@/public/madeInGermanyLogo.svg'
import Stripe from '@/public/stripeLogo.svg'
import { useRouter } from 'next/navigation'
import { FaTiktok } from 'react-icons/fa'
import { SeparatingLine } from './custom/SeparatingLine'
import { Button } from './ui/button'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  return (
    <footer className="bg-rose-50 shadow-md">
      <div className="container mx-auto px-6 py-12 md:py-14">
        <div className="mb-10 grid grid-cols-1 justify-items-center gap-10 md:mb-12 md:grid-cols-4 md:gap-12">
          <div className="space-y-4">
            <h4>UNSER VERSPRECHEN</h4>
            <small>
              Unser Ziel ist es, mit Dir den ersten Schritt zu meistern. Den
              ersten Schritt dahin, Dein Baby mit liebevoll handgefertigten
              Schnullerketten zu verwöhnen. Wir richten uns daher an Eltern, die
              Qualität schätzen und nicht lange suchen wollen. Echte Handarbeit.
              Sichere Materialien.
            </small>
          </div>

          <div>
            <h4 className="mb-4">PRODUKTE</h4>
            <div className="flex flex-wrap items-start gap-4 md:flex-col">
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

          <div>
            <p className="mb-4">SERVICE</p>
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
            <h4 className="mb-4">RECHTLICHES</h4>
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

        <div className="mb-10 grid grid-cols-1 justify-items-center gap-10 md:mb-12 md:grid-cols-4 md:gap-12">
          <div className="space-y-8"></div>

          <div className="space-y-4">
            <h4>HANDGEMACHTE QUALITÄT</h4>
            <small>
              Jede unserer Schnullerketten entsteht in liebevoller Handarbeit –
              Perle für Perle, Knoten für Knoten. Wir verwenden ausschließlich
              schadstofffreie Materialien, die höchsten Sicherheitsstandards
              entsprechen. Echtes Handwerk mit Herz.
            </small>

            <div>
              <p className="mb-4">SERVICE</p>
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
          </div>

          <SeparatingLine className="mb-6 w-full" />

          <div className="mb-8 flex items-center justify-center gap-8 md:justify-evenly md:gap-10">
            <DHL className="h-25" />
            <Stripe className="h-30" />
            <MadeInGermany className="h-25" />
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
      </div>
    </footer>
  )
}
