'use client'
import { Heading } from '@/components/typography/heading'
import { List } from '@/components/typography/list'
import { Text } from '@/components/typography/text'
import { SeparatingLine } from '@/components/ui/SeparatingLine'
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
        <div className="mb-24 flex flex-col gap-8 px-6 md:mb-28 md:flex-row md:justify-between">
          <section className="w-full md:max-w-sm">
            <Heading level={4} variant="footer" className="mb-4">
              UNSER VERSPRECHEN
            </Heading>
            <Text level="p" variant="small">
              Unser Ziel ist es, mit Dir den ersten Schritt zu meistern. Den
              ersten Schritt dahin, Dein Baby mit liebevoll handgefertigten
              Schnullerketten zu verwöhnen. Wir richten uns daher an Eltern, die
              Qualität schätzen und nicht lange suchen wollen. Echte Handarbeit.
              Sichere Materialien.
            </Text>
          </section>

          <section className="flex flex-col">
            <Heading level={4} variant="footer" className="mb-4">
              PRODUKTE
            </Heading>
            <nav className="flex-1">
              <List className="flex h-full flex-col justify-between">
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Schnullerketten
                  </Button>
                </List.Item>
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Beißketten
                  </Button>
                </List.Item>
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Kinderwagenketten
                  </Button>
                </List.Item>
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Babysocken
                  </Button>
                </List.Item>
              </List>
            </nav>
          </section>

          <section className="flex flex-col">
            <Heading level={4} variant="footer" className="mb-4">
              SERVICE
            </Heading>
            <nav className="flex-1">
              <List className="flex h-full flex-col justify-between">
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Versand & Lieferung
                  </Button>
                </List.Item>
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Größenratgeber
                  </Button>
                </List.Item>
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Pflege-Tipps
                  </Button>
                </List.Item>
                <List.Item>
                  <Button variant="link" size="link" className="justify-start">
                    Rückgabe & Umtausch
                  </Button>
                </List.Item>
              </List>
            </nav>
          </section>

          <section className="flex flex-col">
            <Heading level={4} variant="footer" className="mb-4">
              RECHTLICHES
            </Heading>
            <nav className="flex-1">
              <List className="flex h-full flex-col justify-between">
                <List.Item>
                  <Button
                    onClick={() => router.push('/privacyPolicy')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Datenschutz
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push('/agb')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    AGB
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push('/contact')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Kontakt
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push('/shipping')}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Versand
                  </Button>
                </List.Item>
              </List>
            </nav>
          </section>
        </div>

        <div className="flex w-full flex-col items-center px-6 md:flex-row">
          <div className="flex flex-col items-center md:w-1/3 md:items-start">
            <div className="flex items-center gap-4">
              <Text variant="body" level="p">
                FOLGE UNS AUF TIKTOK!
              </Text>
              <Button size="sm">
                <FaTiktok />
              </Button>
            </div>
          </div>
          <Text
            variant="small"
            level="small"
            className="flex justify-center md:w-1/3"
          >
            © {currentYear} fynly - Alle Rechte vorbehalten
          </Text>
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
