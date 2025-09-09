import { Product } from '@/data/products'
import clsx from 'clsx'
import { CldImage } from 'next-cloudinary'

interface ProduktGalleryProps {
  product: Product
  className: string
}

export function ProduktGallery({ product, className }: ProduktGalleryProps) {
  return (
    <div className={clsx(className)}>
      {product.publicId.map((slide, index) => (
        <CldImage
          key={index}
          src={slide}
          alt={product.name}
          className="mb-1 h-screen w-full cursor-pointer bg-gray-50 object-cover last:mb-0"
          width={1200}
          height={1600}
          quality="auto"
          format="auto"
          loading={index === 0 ? 'eager' : 'lazy'}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ))}
    </div>
  )
}
