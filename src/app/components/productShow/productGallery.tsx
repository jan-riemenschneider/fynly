import { Product } from '@/data/products'
import clsx from 'clsx'
import { CldImage } from 'next-cloudinary'

interface ProduktGalleryProps {
  product: Product
  className: string
}

export function ProduktGallery({ product, className }: ProduktGalleryProps) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {product.publicId.map((slide, index) => (
        <CldImage
          key={index}
          src={slide}
          alt={product.name}
          className="h-screen w-full cursor-pointer bg-gray-50 object-cover"
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
