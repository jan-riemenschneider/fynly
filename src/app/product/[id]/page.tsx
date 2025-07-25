'use client'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import {
  categoryTranslations,
  getImagesById,
  getProductById,
  products,
} from '@/data/products'
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { InfoAccordion } from '../../components/custom/InfoAccordion'
import LightBoxCarousel from '../../components/custom/LightBoxCarousel'
import ProduktCarousel from '../../components/custom/ProduktCarousel'

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { addItem } = useCart()
  const product = id ? getProductById(id) : null
  const getImages = getImagesById(id)
  if (!product) {
    return (
      <div className="container-custom bg-gray-50 text-center">
        <h1 className="heading-lg mb-4">Produkt nicht gefunden</h1>
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
    <div className="container flex-1 lg:mx-auto">
      <div className="grid-cols-2 gap-4 lg:grid">
        <div>
          <Button
            variant="link"
            size="link"
            className="mb-4"
            onClick={router.back}
          >
            <ArrowLeft className="h-4 w-4" /> Zurück
          </Button>
          <LightBoxCarousel slides={getImages} />
        </div>

        <div className="flex w-full flex-col items-start justify-center">
          <Button variant="link" size="link" className="mb-4">
            {categoryTranslations[product.category]}
          </Button>

          <h1 className="mb-4 md:mb-6">{product.name}</h1>

          <div className="mb-6 space-x-2 md:mb-8">
            <span className="price">{product.price.toFixed(2)}€</span>
            <small>inkl. MwSt.</small>
          </div>

          <Button
            className="mb-8 w-full md:mb-10"
            size="lg"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="h-8 w-8" />
            {product.inStock}In den Warenkorb
          </Button>
          <small className="mb-4 md:mb-6">
            Voraussichtliche Lieferung 3-5 Tage
          </small>
          <div className="bg-card mb-4 w-full rounded-lg p-4 shadow-sm transition-all hover:shadow-md">
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
        </div>
      </div>

      <div className="mb-8 w-full md:mb-16">
        <InfoAccordion
          firstTitle="Produktbeschreibung"
          firstText="Detaillierte Beschreibung des Produkts, Materialien, Besonderheiten, Verwendungszweck und warum es einzigartig ist."
          secondTitle="Größe & Maße"
          secondText="Abmessungen: 15cm x 10cm x 2cm. Gewicht: 150g. Verfügbare Größen: S, M, L, XL. Größentabelle beachten."
          thirdTitle="Versand & Rückgabe"
          thirdText="Kostenloser Versand ab 50€. Lieferzeit 2-5 Werktage. 30 Tage Rückgaberecht. Originalverpackung erforderlich."
        />
      </div>
      <ProduktCarousel products={products} autoplay={true} />
    </div>
  )
}
