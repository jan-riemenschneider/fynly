import { CldImage } from "next-cloudinary";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Dialog, DialogContent, DialogTitle } from "./dialog";

interface LightBoxProps {
  publicId: string[];
  name: string;
  startIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function LightBox({
  publicId,
  name,
  startIndex,
  isOpen,
  onClose,
}: LightBoxProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl border-none bg-transparent pr-4 pl-4">
        <DialogTitle className="sr-only">{name}</DialogTitle>
        <Carousel
          opts={{
            loop: true,
            startIndex: startIndex,
          }}
        >
          <CarouselContent>
            {publicId.map((slide, index) => (
              <CarouselItem key={index} className="flex h-full justify-center">
                <CldImage
                  src={slide}
                  alt={`${name} - Bild ${index + 1}`}
                  className="aspect-square rounded-lg bg-gray-50 object-contain"
                  width={1000}
                  height={1000}
                  quality="80"
                  loading="eager"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
