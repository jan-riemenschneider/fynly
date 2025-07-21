import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '../../lib/utils'
import Image from 'next/image'

interface ImageData {
  src: string
  alt: string
}

interface ProduktCarouselProps {
  className?: string
  itemCount?: number
  images: ImageData[]
  autoplay: boolean
  itemsPerView?: '1/1' | '1/2' | '1/3' | '1/4'
}

function ProduktCarousel({
  className,
  itemsPerView = '1/2',
  autoplay,
  images,
}: ProduktCarouselProps) {
  const basisClass = {
    '1/1': 'basis-1/1',
    '1/2': 'basis-1/2',
    '1/3': 'basis-1/3',
    '1/4': 'basis-1/4',
  }

  return (
    <Carousel
      className={cn('mx-auto max-w-2xl', className)}
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
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={`pl-1 ${basisClass[itemsPerView]}`}
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image.src}
                    height={400}
                    width={400}
                    alt={image.alt}
                    className={''}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}

export default ProduktCarousel
