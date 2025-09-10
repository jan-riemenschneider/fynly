'use client'
import ProductGrid from '@/components/grids/productGrid'
import { Section } from '@/components/sections/Section'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import {
  categoryTranslations,
  getProductsByCategory,
  ProductCategory,
} from '@/data/products'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '../../components/ui/button'

export default function Category() {
  const { id } = useParams<{ id: string }>()

  const validCategoryId = id as ProductCategory | undefined

  const products = validCategoryId ? getProductsByCategory(validCategoryId) : []

  console.log(validCategoryId)

  const categoryName = validCategoryId
    ? categoryTranslations[validCategoryId]
    : 'Kategorie'

  if (!products) {
    return (
      <div className="col-span-12 container py-16 text-center">
        <h1 className="mb-4 text-3xl">Produkt nicht gefunden</h1>
        <p className="mb-8">
          Das gesuchte Produktkategorie konnte leider nicht gefunden werden.
        </p>
        <Button asChild>
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    )
  }
  return (
    <Section>
      <div className="col-span-12 mb-14 text-center md:text-left">
        <Heading level={1} variant="lg" className="mb-4">
          {categoryName}
        </Heading>
        <Text level="p" variant="muted">
          Entdecken Sie unsere handgefertigten {categoryName} aus hochwertigen
          Materialien, perfekt für Ihren kleinen Liebling.
        </Text>
      </div>
      <ProductGrid products={products} />
    </Section>
  )
}
