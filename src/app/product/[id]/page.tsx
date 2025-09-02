'use client'
import { QuantitySelector } from '@/components/business/QuantitySelector'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { InfoAccordion } from '@/components/ui/InfoAccordion'
import { Input } from '@/components/ui/input'
import ProduktCarousel from '@/components/ui/ProduktCarousel'
import { Switch } from '@/components/ui/switch'
import { useCart } from '@/context/CartContext'
import { getFeaturedProducts, getProductById } from '@/data/products'
import { CircleCheck, ShoppingBag } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Product() {
  const [amount, setAmount] = useState<number>(1)
  const [custom, setCustom] = useState<string>('')
  const [showInput, setShowInput] = useState(false)
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { addItem } = useCart()
  const product = id ? getProductById(id) : null

  const featuredProducts = getFeaturedProducts()

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
      <div className="col-span-12 mx-auto grid max-w-6xl grid-cols-12 gap-6 lg:grid">
        <div className="col-span-12 grid gap-4 md:col-span-5">
          <div className="flex flex-col gap-4">
            <CldImage
              src={product.publicId[0]}
              alt={product.name}
              className="aspect-square w-full rounded-sm bg-gray-200 object-cover"
              width={500}
              height={500}
              quality="auto"
              format="auto"
              loading="eager"
            />

            <Carousel className="w-full">
              <CarouselContent className="flex gap-4">
                {product.publicId.map((slide, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/4 sm:basis-1/6 md:basis-1/8"
                  >
                    <CldImage
                      src={slide}
                      alt={product.name}
                      className="aspect-square h-full w-full cursor-pointer rounded-sm bg-gray-200 object-cover"
                      width={200}
                      height={200}
                      quality="auto"
                      format="auto"
                      loading="eager"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="col-span-12 flex flex-col items-start justify-start md:col-span-7">
          <Heading level={1} variant="lg" className="mb-6">
            {product.name}
          </Heading>
          <div className="mb-8 space-x-2">
            <Text level="span" variant="price">
              {product.price.toFixed(2)}€
            </Text>
            <Text variant="small" level="small">
              inkl. MwSt.
            </Text>
          </div>

          <div className="mb-10 flex flex-col gap-4">
            <Text
              level="span"
              variant="inline"
              className="flex items-center gap-2"
            >
              <CircleCheck className="text-primary size-4" />
              Kostenloser Versand ab 29€
            </Text>
            <Text
              level="span"
              variant="inline"
              className="flex items-center gap-2"
            >
              <CircleCheck className="text-primary size-4" />
              Geschenkverpackung verfügbar
            </Text>
          </div>

          <div className="mb-10 flex w-full flex-col gap-3 rounded-sm border bg-gray-50 p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Switch id="personalize" onCheckedChange={handleToggle} />
              <label htmlFor="personalize" className="text-base font-semibold">
                Deine Produkt personalisieren (+ 5,00€)
              </label>
            </div>
            <small>Trage hier deinen Wunschnamen ein (max. 8 Zeichen)</small>
            {showInput && (
              <Input
                className="w-full"
                placeholder="Hier eingeben..."
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
              <ShoppingBag className="h-8 w-8" />
              {product.inStock}In den Warenkorb
            </Button>
          </div>
          <small className="mb-6">Voraussichtliche Lieferung 3-5 Tage</small>
          <InfoAccordion
            firstTitle="Produktbeschreibung"
            firstText="Detaillierte Beschreibung des Produkts, Materialien, Besonderheiten, Verwendungszweck und warum es einzigartig ist."
            secondTitle="Größe & Maße"
            secondText="Abmessungen: 15cm x 10cm x 2cm. Gewicht: 150g. Verfügbare Größen: S, M, L, XL. Größentabelle beachten."
            thirdTitle="Versand & Rückgabe"
            thirdText="Kostenloser Versand ab 50€. Lieferzeit 2-5 Werktage. 30 Tage Rückgaberecht. Originalverpackung erforderlich."
          />
        </div>
      </div>

      <section className="col-span-12">
        <div className="container mx-auto mt-0 mb-16 grid grid-cols-12 items-center px-6 md:mb-24 lg:mb-32">
          <Heading level={2} variant="lg" className="col-span-12 mb-6">
            Das Könnte dir auch noch gefallen
          </Heading>
          <div className="col-span-12 mb-16 border-t-2"></div>
          <div className="col-span-12">
            <ProduktCarousel
              autoplay
              products={featuredProducts}
            ></ProduktCarousel>
          </div>
        </div>
      </section>
    </>
  )
}
