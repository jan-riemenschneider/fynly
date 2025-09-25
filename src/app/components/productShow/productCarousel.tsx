import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Product } from '@/data/products'
import { CldImage } from 'next-cloudinary'

interface ProduktCarouselProps {
  product: Product
  onImageClick?: (imageIndex: number, imageSrc: string) => void
}

export function ProduktCarousel({
  product,
  onImageClick,
}: ProduktCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {product.publicId.map((slide, index) => (
          <CarouselItem key={index} className="h-130 basis-1/1">
            <CldImage
              src={slide}
              alt={product.name}
              className="aspect-square h-full w-full cursor-pointer bg-gray-100 object-scale-down"
              width={900}
              height={700}
              quality="85"
              format="auto"
              loading="eager"
              onClick={event => {
                event.preventDefault()
                onImageClick?.(index, slide)
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-foreground left-3" variant="link" />
      <CarouselNext className="text-foreground right-3" variant="link" />
    </Carousel>
  )
}
