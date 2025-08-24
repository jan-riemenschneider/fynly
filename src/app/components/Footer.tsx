'use client'
import { SeparatingLine } from '@/components/custom/SeparatingLine'
import AmericanExpress from '@/public/payment/american-express.svg'
import ApplePay from '@/public/payment/apple-pay.svg'
import GooglePay from '@/public/payment/google-pay.svg'
import Jcb from '@/public/payment/jcb.svg'
import MasterCard from '@/public/payment/mastercard.svg'
import PayPal from '@/public/payment/paypal.svg'
import UnionPay from '@/public/payment/unionpay.svg'
import Visa from '@/public/payment/visa.svg'
import { useRouter } from 'next/navigation'
import { FaTiktok } from 'react-icons/fa'
import { Button } from './ui/button'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  return (
    <footer className="bg-rose-50 px-6 py-12 shadow-sm">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-8 sm:mb-16 md:flex-row md:justify-between">
          <div className="w-full space-y-4 md:max-w-sm">
            <h4 className="font-semibold">UNSER VERSPRECHEN</h4>
            <small className="block text-gray-600">
              Unser Ziel ist es, mit Dir den ersten Schritt zu meistern. Den
              ersten Schritt dahin, Dein Baby mit liebevoll handgefertigten
              Schnullerketten zu verwöhnen. Wir richten uns daher an Eltern, die
              Qualität schätzen und nicht lange suchen wollen. Echte Handarbeit.
              Sichere Materialien.
            </small>
          </div>

          <div className="">
            <h4 className="mb-4 font-semibold">PRODUKTE</h4>
            <nav className="flex flex-col gap-2">
              <Button variant="link" size="link" className="justify-start">
                Schnullerketten
              </Button>
              <Button variant="link" size="link" className="justify-start">
                Beißketten
              </Button>
              <Button variant="link" size="link" className="justify-start">
                Kinderwagenketten
              </Button>
              <Button variant="link" size="link" className="justify-start">
                Babysocken
              </Button>
            </nav>
          </div>

          {/* Service */}
          <div className="">
            <h4 className="mb-4 font-semibold">SERVICE</h4>
            <nav className="flex flex-col gap-2">
              <Button variant="link" size="link" className="justify-start">
                Versand & Lieferung
              </Button>
              <Button variant="link" size="link" className="justify-start">
                Größenratgeber
              </Button>
              <Button variant="link" size="link" className="justify-start">
                Pflege-Tipps
              </Button>
              <Button variant="link" size="link" className="justify-start">
                Rückgabe & Umtausch
              </Button>
            </nav>
          </div>

          {/* Rechtliches */}
          <div className="">
            <h4 className="mb-4 font-semibold">RECHTLICHES</h4>
            <nav className="flex flex-col gap-2">
              <Button
                onClick={() => router.push('/privacyPolicy')}
                variant="link"
                size="link"
                className="justify-start"
              >
                Datenschutz
              </Button>
              <Button
                onClick={() => router.push('/agb')}
                variant="link"
                size="link"
                className="justify-start"
              >
                AGB
              </Button>
              <Button
                onClick={() => router.push('/contact')}
                variant="link"
                size="link"
                className="justify-start"
              >
                Kontakt
              </Button>
              <Button
                onClick={() => router.push('/shipping')}
                variant="link"
                size="link"
                className="justify-start"
              >
                Versand
              </Button>
            </nav>
          </div>
        </div>

        <section className="mt-16 flex w-full flex-col items-center md:mt-20 md:flex-row">
          <div className="flex flex-col items-center md:w-1/3 md:items-start">
            <div className="flex items-center gap-4">
              <p>FOLGE UNS AUF TIKTOK!</p>
              <Button size="sm">
                <FaTiktok />
              </Button>
            </div>
          </div>
          <small className="flex justify-center text-gray-500 md:w-1/3">
            © {currentYear} fynly - Alle Rechte vorbehalten
          </small>
          <SeparatingLine className="my-10 w-full md:hidden" />
          <div className="flex flex-wrap items-center justify-center gap-4 md:w-1/3">
            <ApplePay className="h-6 w-auto rounded-xs border border-gray-200 bg-white" />
            <GooglePay className="h-6 w-auto" />
            <PayPal className="h-6 w-auto" />
            <Visa className="h-6 w-auto" />
            <MasterCard className="h-6 w-auto" />
            <AmericanExpress className="h-6 w-auto" />
            <Jcb className="h-6 w-auto" />
            <UnionPay className="h-6 w-auto" />
          </div>
        </section>
      </div>
    </footer>
  )
}
