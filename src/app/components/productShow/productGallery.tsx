import { Product } from '@/data/products'
import { CldImage } from 'next-cloudinary'
import { RefObject } from 'react'

interface ProduktGalleryProps {
  product: Product
  galleryRef: RefObject<HTMLImageElement>
}

export function ProduktGallery({ product, galleryRef }: ProduktGalleryProps) {
  return (
    <div className="flex flex-col">
      {product.publicId.map((slide, index) => (
        <CldImage
          key={index}
          src={slide}
          alt={product.name}
          className="aspect-square h-full w-full cursor-pointer bg-gray-100 object-cover"
          width={200}
          height={200}
          quality="auto"
          format="auto"
          loading="eager"
          ref={galleryRef}
        />
      ))}
    </div>
  )
}
