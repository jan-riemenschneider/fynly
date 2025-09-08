import { Product } from '@/data/products'
import { CldImage } from 'next-cloudinary'

interface ProduktGalleryProps {
  product: Product
}

export function ProduktGallery({ product }: ProduktGalleryProps) {
  return (
    <div className="flex flex-col gap-1">
      {product.publicId.map((slide, index) => (
        <CldImage
          key={index}
          src={slide}
          alt={product.name}
          className="aspect-square h-screen w-full cursor-pointer bg-gray-100 object-cover"
          width={200}
          height={200}
          quality="auto"
          format="auto"
          loading="eager"
        />
      ))}
    </div>
  )
}
