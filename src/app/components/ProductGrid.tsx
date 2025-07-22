'use client'
import type { Product } from '../data/products'
import ProductCard from './ProductCart'

interface ProductGridProps {
  products: Product[]
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (!products.length) {
    return <p className="py-10 text-center">Keine Produkte gefunden.</p>
  }

  return (
    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
