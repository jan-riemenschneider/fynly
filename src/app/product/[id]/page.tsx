'use client'
import { QuantitySelector } from '@/components/business/QuantitySelector'
import { ProduktCarousel } from '@/components/productShow/productCarousel'
import { ProduktGallery } from '@/components/productShow/productGallery'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { InfoAccordion } from '@/components/ui/InfoAccordion'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useCart } from '@/context/CartContext'
import { categoryTranslations, getProductById } from '@/data/products'
import { useGSAP } from '@gsap/react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'

export default function Product() {
  const galleryRef = useRef(null)
  const detailsRef = useRef(null)
  const [amount, setAmount] = useState<number>(1)
  const [custom, setCustom] = useState<string>('')
  const [showInput, setShowInput] = useState(false)
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()
  const product = id ? getProductById(id) : null

    useGSAP(() => {
      

    })

  const handleAddToCart = () => {
    addItem(product, amount, custom)
    setAmount(1)
  }

  const handleToggle = () => {
    setShowInput(prev => !prev)
    setCustom('')
  }

  const MotionButton = motion(Button)

  if (!product) {
    return (
      <div className="text-center">
        <h1 className="mb-4">Produkt nicht gefunden</h1>
        <p className="mb-8">
          Das gesuchte Produkt konnte leider nicht gefunden werden.
        </p>
        <Button asChild>
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 md:hidden">
          <ProduktCarousel product={product} />
        </div>

        <div className="hidden md:col-span-6 md:block">
          <ProduktGallery product={product} galleryRef={galleryRef} />
        </div>

        <div className="col-span-12 flex flex-col items-start justify-start px-6 md:col-span-6">
          <div ref={detailsRef}>
            <Button variant="link" size="link" className="mt-4 mb-2">
              {categoryTranslations[product.category]}
            </Button>
            <Heading level={1} variant="lg" className="mb-4">
              {product.name}
            </Heading>
            <Text level="span" variant="price" className="mb-4">
              {product.price.toFixed(2)}€
            </Text>

            <Text level="p" variant="body" className="mb-2">
              {product.description}
            </Text>
            <Text level="small" variant="small" className="mb-8">
              Voraussichtliche Lieferung 3-5 Tage
            </Text>

            <div className="mb-10 flex w-full flex-col gap-3 rounded-xs border bg-gray-50 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Switch id="personalize" onCheckedChange={handleToggle} />
                <label
                  htmlFor="personalize"
                  className="text-base font-semibold"
                >
                  Dein Produkt personalisieren (+ 5,00€)
                </label>
              </div>
              <small>Trage hier deinen Wunschnamen ein (max. 8 Zeichen)</small>
              {showInput && (
                <Input
                  className="w-full"
                  placeholder="Hier Name eingeben..."
                  maxLength={8}
                  onChange={e => setCustom(e.target.value)}
                />
              )}
            </div>
            <div className="mb-10 flex w-full items-center space-x-4">
              <QuantitySelector amount={amount} setAmount={setAmount} />
              <MotionButton
                variant="default"
                size="lg"
                className="flex-1"
                onClick={() => handleAddToCart()}
                whileTap={{ scale: 0.95 }}
              >
                {product.inStock} In den Warenkorb
              </MotionButton>
            </div>
            <InfoAccordion
              className="pb-16 md:pb-24 lg:pb-32"
              firstTitle="Produktbeschreibung"
              firstText="Detaillierte Beschreibung des Produkts, Materialien, Besonderheiten, Verwendungszweck und warum es einzigartig ist."
              secondTitle="Größe & Maße"
              secondText="Abmessungen: 15cm x 10cm x 2cm. Gewicht: 150g. Verfügbare Größen: S, M, L, XL. Größentabelle beachten."
              thirdTitle="Versand & Rückgabe"
              thirdText="Kostenloser Versand ab 50€. Lieferzeit 2-5 Werktage. 30 Tage Rückgaberecht. Originalverpackung erforderlich."
            />
          </div>
        </div>
      </div>
    </>
  )
}
