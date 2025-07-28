import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '../../lib/utils'
import { Product } from '../../data/products'
import ProductCard from '../ProductCart'

interface ProduktCarouselProps {
  products: Product[]
  className?: string
  autoplay: boolean
}

function ProduktCarousel({
  products = [],
  className,
  autoplay,
}: ProduktCarouselProps) {
  return (
    <Carousel
      className={cn('mx-auto w-100%', className)}
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]
          : undefined
      }
    >
      <CarouselContent className="">
        {products.map(product => (
          <CarouselItem key={product.id} className="basis-4/5 lg:basis-1/4">
            <ProductCard key={product.id} product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}

export default ProduktCarousel
