import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CldImage } from 'next-cloudinary'

interface LightBoxProps {
  publicId: string[]
  name: string
}

export function LightBox({ publicId, name }: LightBoxProps) {
  return (
    <Dialog>
      <DialogContent className="max-w-7xl border-none bg-transparent p-0">
        {/* <DialogTitle></DialogTitle> */}
        <Carousel className="h-full w-full pr-4">
          <CarouselContent className="h-full w-full">
            {publicId.map((slide, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <CldImage
                  src={slide}
                  alt={name}
                  className="aspect-square h-full w-full rounded-lg bg-gray-200 object-cover"
                  width={500}
                  height={500}
                  quality="auto"
                  format="auto"
                  loading="eager"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
      </DialogContent>
      <DialogTrigger>Open</DialogTrigger>
    </Dialog>
  )
}

/*   <CldImage
          src={publicId[0]}
          alt={name}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-90 xl:aspect-7/8"
          width={500}
          height={500}
          quality="auto"
          format="auto"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-gray-200 object-cover group-hover:opacity-90 xl:aspect-7/8">
          <Loader2Icon className="animate-spin" />
        </div>
      )} */
