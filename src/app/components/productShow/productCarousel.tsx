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
}

export function ProduktCarousel({ product }: ProduktCarouselProps) {
  return (
    <Carousel>
      <CarouselContent>
        {product.publicId.map((slide, index) => (
          <CarouselItem key={index} className="h-130 basis-1/1">
            <CldImage
              src={slide}
              alt={product.name}
              className="aspect-square h-full w-full cursor-pointer bg-gray-100 object-cover"
              width={200}
              height={200}
              quality="auto"
              format="auto"
              loading="eager"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-foreground left-3" variant="link" />
      <CarouselNext className="text-foreground right-3" variant="link" />
    </Carousel>
  )
}
