import { Carousel, CarouselItem } from 'actify'

interface ImageSlide {
  placeholder: string
  suggestion: string
}

interface ImageCarouselProps {
  images: ImageSlide[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel className="mb-8 rounded-lg overflow-hidden">
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <div className="bg-surface-container-high rounded-lg p-12 text-center h-96 flex flex-col items-center justify-center">
            <p className="text-on-surface-variant text-lg mb-3">
              {image.placeholder}
            </p>
            <p className="text-on-surface-variant text-sm max-w-2xl">
              {image.suggestion}
            </p>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  )
}
