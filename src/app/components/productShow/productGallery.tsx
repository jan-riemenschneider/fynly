import { Product } from '@/data/products'
import clsx from 'clsx'
import { CldImage } from 'next-cloudinary'
import { RefObject } from 'react'

interface ProduktGalleryProps {
  product: Product
  className: string
  containerRef: RefObject<HTMLDivElement>
  onImageClick: (imageIndex: number, imageSrc: string) => void
}

export function ProduktGallery({
  product,
  className,
  containerRef,
  onImageClick,
}: ProduktGalleryProps) {
  return (
    <div className={clsx(className)} ref={containerRef}>
      {product.publicId.map((slide, index) => (
        <CldImage
          key={index}
          src={slide}
          alt={product.name}
          className="mb-1 h-screen cursor-pointer bg-gray-50 object-scale-down last:mb-0"
          width={1000}
          height={1400}
          quality="auto"
          format="auto"
          loading={index === 0 ? 'eager' : 'lazy'}
          sizes="(max-width: 768px) 100vw, 50vw"
          onClick={event => {
            event.preventDefault()
            onImageClick?.(index, slide)
          }}
        />
      ))}
    </div>
  )
}
