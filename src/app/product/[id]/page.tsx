'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart, ArrowLeft } from 'lucide-react'
import {
  getProductById,
  categoryTranslations,
  getImagesById,
  getAllImages,
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
  const allImages = getAllImages()
  if (!product) {
    return (
      <div className="container-custom bg-gray-50 py-16 text-center">
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
    <div className="flex-1 bg-gray-50 p-6">
      <Button variant="ghost" className="mb-6 pl-0" onClick={router.back}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
      </Button>
      <LightBoxCarousel slides={getImages} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-6">
            <Link
              href={`/category/${product.category}`}
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              {categoryTranslations[product.category]}
            </Link>
            <h1 className="heading-lg mt-2">{product.name}</h1>
            <p className="mt-2 text-2xl font-bold">
              {product.price.toFixed(2)} €
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 font-medium">Beschreibung</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <Button
            className="mt-4 w-full gap-2"
            size="lg"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="h-5 w-5" />
            {product.inStock ? 'In den Warenkorb' : 'Nicht verfügbar'}
          </Button>

          <div className="text-muted-foreground mt-6 text-sm">
            <p>✓ Handgefertigt mit Liebe</p>
            <p>✓ Aus hochwertigen Materialien</p>
            <p>✓ Sicher für Babys und Kleinkinder</p>
          </div>
        </div>
      </div>
      <AccordionProdukt />
      <h2>Das könnte dir gefallen</h2>
      <ProduktCarousel images={allImages} autoplay={true} />
    </div>
  )
}
