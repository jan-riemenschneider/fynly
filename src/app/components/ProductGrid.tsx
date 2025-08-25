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
    <div className="container mx-auto px-6 md:px-0">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
