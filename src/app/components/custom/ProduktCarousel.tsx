import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "../../lib/utils";
import Image from "next/image";

// Interface statt Class (für reine Datenstruktur)
interface ImageData {
  src: string;
  height: number;
  width: number;
  alt: string;
  className?: string;
}

interface ProduktCarouselProps {
  className?: string;
  itemCount?: number;
  images: ImageData[];
  autoplay: boolean;
  itemsPerView?: "1/2" | "1/3" | "1/4";
}

function ProduktCarousel({
  className,
  itemsPerView = "1/2",
  autoplay,
  images,
  itemCount,
}: ProduktCarouselProps) {
  const basisClass = {
    "1/2": "basis-1/2",
    "1/3": "basis-1/3",
    "1/4": "basis-1/4",
  };

  // Verwende entweder images.length oder itemCount
  const totalItems = itemCount || images.length;

  return (
    <Carousel
      className={cn("mx-auto max-w-2xl", className)}
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
        {Array.from({ length: totalItems }).map((_, index) => (
          <CarouselItem
            key={index}
            className={`pl-1 ${basisClass[itemsPerView]}`}
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {images[index] ? (
                    <Image
                      src={images[index].src}
                      height={images[index].height}
                      width={images[index].width}
                      alt={images[index].alt}
                      className={
                        images[index].className || "object-cover rounded"
                      }
                    />
                  ) : (
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" /> 
      <CarouselNext className="right-2" /> 
    </Carousel>
  );
}

export default ProduktCarousel;
