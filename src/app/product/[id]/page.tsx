'use client'
import { Checkmark } from '@/components/custom/Checkmark'
import { InfoAccordion } from '@/components/custom/InfoAccordion'
import LightBoxCarousel from '@/components/custom/LightBoxCarousel'
import ProduktCarousel from '@/components/custom/ProduktCarousel'
import { QuantitySelector } from '@/components/custom/QuantitySelector'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { categoryTranslations, getProductById, products } from '@/data/products'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Product() {
  const [amount, setAmount] = useState<number>(1)
  const [urls, setUrls] = useState([])
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { addItem } = useCart()
  const product = id ? getProductById(id) : null

  const handleAddToCart = () => {
    addItem(product, amount)
    setAmount(1)
  }

  useEffect(() => {
    async function getUrl() {
      const path = product.folderParth
      const data = await fetch(`/api/${path}`)
      const url = await data.json()
      console.log(url)
      setUrls(url)
    }
    getUrl()
  }, [product.folderParth])

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
      <div className="container mx-auto max-w-6xl p-6">
        <div className="max-w-6xl grid-cols-2 gap-4 lg:grid">
          <div className="relative">
            <Button
              variant="link"
              size="link"
              className="absolute top-2 left-2"
              onClick={router.back}
            >
              <ArrowLeft className="h-4 w-4" /> Zurück
            </Button>
            <LightBoxCarousel slides={urls} />
          </div>

          <div className="flex w-full flex-col items-start justify-start">
            <Button variant="link" size="link" className="mt-2 mb-4">
              {categoryTranslations[product.category]}
            </Button>
            <h1 className="mb-4 md:mb-6">{product.name}</h1>
            <div className="mb-6 space-x-2 md:mb-8">
              <span className="price">{product.price.toFixed(2)}€</span>
              <small>inkl. MwSt.</small>
            </div>
            <div className="mb-8 flex w-full items-center space-x-4 md:mb-10">
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
            <div className="flex flex-col space-y-1">
              <span className="">Kostenloser Versand ab 29€</span>
              <span className="mb-4 md:mb-6">Geschenkverpackung verfügbar</span>
            </div>
            <small className="mb-4 md:mb-6">
              Voraussichtliche Lieferung 3-5 Tage
            </small>
            <div className="bg-card flex w-full flex-col gap-6 rounded-lg p-4 shadow-sm transition-all hover:shadow-md">
              <div className="flex gap-2">
                <Checkmark />
                <p> Aus hochwertigen Materialien</p>
              </div>
              <div className="flex gap-2">
                <Checkmark />
                <p>Sicher für Babys und Kleinkinder</p>
              </div>
              <div className="flex gap-2">
                <Checkmark />
                <p>Individuell personalisierbar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 w-full md:mb-10">
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
      <div className="w-full px-6">
        <ProduktCarousel products={products} autoplay={true} />
      </div>
    </>
  )
}
