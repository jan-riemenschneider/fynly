'use client'
import type { Product } from '@/data/products'
import { useProductsUrls } from '@/hooks/useProductUrls'
import { Loader2Icon } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const urls = useProductsUrls(product.folderPath)
  return (
    <a href={`/product/${product.id}`} className="group relative">
      {urls.length > 0 ? (
        <CldImage
          src={urls[0].src}
          alt={product.name}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-90 xl:aspect-7/8"
          width={500}
          height={500}
          quality="auto"
          format="auto"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-gray-200 object-cover group-hover:opacity-90 xl:aspect-7/8">
          <Loader2Icon className="animate-spin" />
        </div>
      )}
      <h3 className="mt-2 text-base">{product.name}</h3>
      <span className="block text-lg font-medium text-gray-900">
        {product.price}€
      </span>
      <div className="absolute top-3 right-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          Auf Lager
        </span>
      </div>
    </a>
  )
}

export default ProductCard
