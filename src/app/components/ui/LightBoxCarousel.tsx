import NextJsImage from '@/components/ui/nextJsImage'
import { Loader2Icon, X } from 'lucide-react'
import * as React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import 'yet-another-react-lightbox/styles.css'

interface Slide {
  src: string
}

interface LightBoxCarouselProps {
  slides: Slide[]
}

export default function LightBoxCarousel({ slides }: LightBoxCarouselProps) {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  const toggleOpen = (state: boolean) => () => setOpen(state)

  const updateIndex =
    (when: boolean) =>
    ({ index: current }: { index: number }) => {
      if (when === open) {
        setIndex(current)
      }
    }

  const InlineCustomCounter = () => {
    return (
      <small className="absolute top-2 right-2">
        {index + 1} / {slides.length}
      </small>
    )
  }

  return (
    <>
      {slides.length > 0 ? (
        <div className="relative mb-6 bg-gray-50">
          <InlineCustomCounter />
          <Lightbox
            index={index}
            slides={slides}
            render={{ slide: NextJsImage }}
            plugins={[Inline]}
            on={{
              view: updateIndex(false),
              click: toggleOpen(true),
            }}
            carousel={{}}
            inline={{
              style: {
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                aspectRatio: '4 / 4',
                backgroundColor: 'oklch(98.5% 0.002 247.839)',
              },
            }}
            styles={{
              container: {
                backgroundColor: 'oklch(98.5% 0.002 247.839)',
              },
              navigationPrev: {
                display: 'none',
              },
              navigationNext: {
                display: 'none',
              },
            }}
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-50">
          <Loader2Icon className="animate-spin" />
        </div>
      )}
      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        inline={{
          style: {
            width: '100%',
            maxWidth: '100%',
            aspectRatio: '3 / 4',
            margin: '0 auto',
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        }}
        styles={{
          root: {
            '--yarl__color_backdrop': 'oklch(1 0 0)',
          },
          navigationPrev: {
            display: 'none',
          },
          navigationNext: {
            display: 'none',
          },
        }}
        toolbar={{
          buttons: [
            <div
              key={1}
              className="flex w-screen items-center justify-between space-x-4"
            >
              <span key="counter" className="pl-4">
                {index + 1} / {slides.length}
              </span>

              <button
                key="close"
                onClick={toggleOpen(false)}
                aria-label="Close"
              >
                <X className="text-foreground" size={32} />
              </button>
            </div>,
          ],
        }}
        render={{
          slide: NextJsImage,
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        slides={slides}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 0 }}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
        }}
      />
    </>
  )
}
