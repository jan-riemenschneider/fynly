'use client'
import { SeparatingLine } from '@/components/custom/SeparatingLine'
import { Button } from '@/components/ui/button'
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

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  return (
    <footer className="bg-rose-50 px-6 py-12 shadow-sm">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col gap-8 sm:mb-24 md:flex-row md:justify-between">
          <section className="w-full space-y-4 md:max-w-sm">
            <h4 className="font-semibold">UNSER VERSPRECHEN</h4>
            <small className="block text-gray-600">
              Unser Ziel ist es, mit Dir den ersten Schritt zu meistern. Den
              ersten Schritt dahin, Dein Baby mit liebevoll handgefertigten
              Schnullerketten zu verwöhnen. Wir richten uns daher an Eltern, die
              Qualität schätzen und nicht lange suchen wollen. Echte Handarbeit.
              Sichere Materialien.
            </small>
          </section>

          <section>
            <h4 className="mb-4 font-semibold">PRODUKTE</h4>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Schnullerketten
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Beißketten
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Kinderwagenketten
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Babysocken
                  </Button>
                </li>
              </ul>
            </nav>
          </section>

          <section>
            <h4 className="mb-4 font-semibold">SERVICE</h4>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Versand & Lieferung
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Größenratgeber
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Pflege-Tipps
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="link" className="justify-start">
                    Rückgabe & Umtausch
                  </Button>
                </li>
              </ul>
            </nav>
          </section>

          <section>
            <h4 className="mb-4 font-semibold">RECHTLICHES</h4>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <Button
                    onClick={() => router.push('/privacyPolicy')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Datenschutz
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => router.push('/agb')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    AGB
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => router.push('/contact')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Kontakt
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => router.push('/shipping')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Versand
                  </Button>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        <div className="flex w-full flex-col items-center md:flex-row">
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
          <section className="flex flex-wrap items-center justify-center gap-4 md:w-1/3 md:justify-end">
            <ApplePay className="h-6 w-auto rounded-xs border border-gray-200 bg-white" />
            <GooglePay className="h-6 w-auto" />
            <PayPal className="h-6 w-auto" />
            <Visa className="h-6 w-auto" />
            <MasterCard className="h-6 w-auto" />
            <AmericanExpress className="h-6 w-auto" />
            <Jcb className="h-6 w-auto" />
            <UnionPay className="h-6 w-auto" />
          </section>
        </div>
      </div>
    </footer>
  )
}
