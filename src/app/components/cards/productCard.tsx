'use client'
import type { Product } from '@/data/products'
import { Loader2Icon } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, publicId } = product

  return (
    <a href={`/product/${id}`} className="group relative">
      {publicId.length > 0 ? (
        <CldImage
          src={publicId[0]}
          alt={name}
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
      <h3 className="mt-2 text-base font-normal">{name}</h3>
      <span className="block text-lg font-semibold text-gray-900">
        {price}€
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
