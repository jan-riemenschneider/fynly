'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react'
import {
  getProductById,
  categoryTranslations,
  getImagesById,
  products,
} from '@/data/products'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import AccordionProdukt from '../../components/custom/Accordion'
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
    <div className="max-w-6xl flex-1 lg:mx-auto">
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
            className="mb-8 w-full md:mb-16"
            size="lg"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="h-8 w-8" />
            {product.inStock}In den Warenkorb
          </Button>
          <div className="mb-6 w-full space-y-2 md:mb-8 md:space-y-4">
            <h2 className="">Beschreibung</h2>
            <p className="">{product.description}</p>
          </div>

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
        <AccordionProdukt />
      </div>
      <ProduktCarousel products={products} autoplay={true} />
    </div>
  )
}
