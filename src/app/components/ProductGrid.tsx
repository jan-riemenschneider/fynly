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
    <div className="col-span-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
