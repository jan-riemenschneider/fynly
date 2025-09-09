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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Product() {
  const [amount, setAmount] = useState<number>(1)
  const [custom, setCustom] = useState<string>('')
  const [showInput, setShowInput] = useState(false)
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()
  const product = id ? getProductById(id) : null
  const containerRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const container = containerRef.current
    const right = rightRef.current

    if (window.innerWidth >= 768) {
      const st = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        pin: right,
        pinSpacing: true,
      })
      return () => st.kill()
    }
  })

  const handleAddToCart = () => {
    addItem(product, amount, custom)
    setAmount(1)
  }

  const handleToggle = () => {
    setShowInput(prev => !prev)
    setCustom('')
  }

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
      <div className="col-span-12 grid grid-cols-12 bg-white pb-16 md:bg-gray-50 md:pb-0">
        <div className="col-span-12 md:col-span-6 md:hidden">
          <ProduktCarousel product={product} />
        </div>

        <ProduktGallery
          product={product}
          className={'hidden md:col-span-6 md:block'}
        />

        <div
          className="col-span-12 flex flex-col items-start justify-start bg-white px-6 md:col-span-6 md:h-screen md:items-center md:justify-center md:p-40"
          ref={rightRef}
        >
          <div>
            <Button variant="link" size="link" className="mb:mt-0 mt-4 mb-2">
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
              <Button
                variant="default"
                size="lg"
                className="flex-1"
                onClick={() => handleAddToCart()}
              >
                {product.inStock} In den Warenkorb
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden h-screen md:col-span-6 md:block">
          <CldImage
            src={product.publicId[0]}
            alt={product.name}
            className="aspect-square h-screen w-full cursor-pointer bg-white object-cover"
            width={200}
            height={200}
            quality="auto"
            format="auto"
            loading="eager"
          />
        </div>

        <div className="col-span-12 flex items-center justify-center bg-white px-6 md:col-span-6 md:h-screen md:bg-gray-50 md:p-40">
          <InfoAccordion
            className="pb-16 md:pb-0"
            firstTitle="Produktbeschreibung"
            firstText="Detaillierte Beschreibung des Produkts, Materialien, Besonderheiten, Verwendungszweck und warum es einzigartig ist."
            secondTitle="Größe & Maße"
            secondText="Abmessungen: 15cm x 10cm x 2cm. Gewicht: 150g. Verfügbare Größen: S, M, L, XL. Größentabelle beachten."
            thirdTitle="Versand & Rückgabe"
            thirdText="Kostenloser Versand ab 50€. Lieferzeit 2-5 Werktage. 30 Tage Rückgaberecht. Originalverpackung erforderlich."
          />
        </div>
      </div>
    </>
  )
}
