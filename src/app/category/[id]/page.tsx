'use client'
import ProductGrid from '@/components/ProductGrid'
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

  const categoryName = validCategoryId
    ? categoryTranslations[validCategoryId]
    : 'Kategorie'

  if (!products) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4">Produkt nicht gefunden</h1>
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
    <div className="container mx-auto py-6">
      <header className="mb-10 text-center">
        <h1 className="mb-4">{categoryName}</h1>
        <p className="text-muted-foreground mx-auto">
          Entdecken Sie unsere handgefertigten {categoryName} aus hochwertigen
          Materialien, perfekt für Ihren kleinen Liebling.
        </p>
      </header>
      <ProductGrid products={products} />
    </div>
  )
}
