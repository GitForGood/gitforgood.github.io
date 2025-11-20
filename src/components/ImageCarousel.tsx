import { Carousel, CarouselItem } from 'actify'
import { useState, useEffect } from 'react'

interface ImageSlide {
  src?: string
  alt?: string
  placeholder?: string
  suggestion?: string
}

interface ImageCarouselProps {
  images: ImageSlide[]
  itemsPerSlide?: {
    mobile?: number
    desktop?: number
  }
  alwaysSingleImage?: boolean
}

export function ImageCarousel({ images, itemsPerSlide = { mobile: 1, desktop: 2 }, alwaysSingleImage = false }: ImageCarouselProps) {
  const { mobile = 1, desktop = 2 } = itemsPerSlide
  const [carouselHeight, setCarouselHeight] = useState<number>(600)
  const [imageAspectRatio, setImageAspectRatio] = useState<number>(1)

  // Group images based on screen size
  const groupImages = (count: number) => {
    const grouped = []
    for (let i = 0; i < images.length; i += count) {
      grouped.push(images.slice(i, i + count))
    }
    return grouped
  }
  const desktopGroups = groupImages(desktop)

  // Load first image to get its aspect ratio
  useEffect(() => {
    if (images[0]?.src) {
      const img = new Image()
      img.onload = () => {
        setImageAspectRatio(img.height / img.width)
      }
      img.src = images[0].src
    }
  }, [images])

  // Calculate carousel height based on window size and image aspect ratio
  useEffect(() => {
    const calculateHeight = () => {
      if (typeof window === 'undefined') return 600

      const isMobile = window.innerWidth < 640 // md breakpoint (matching sm:hidden/sm:block)
      const containerWidth = Math.min(window.innerWidth - 64, 1024) // Account for padding, max-w-4xl

      // Calculate the actual display width of images
      // 80% of available width (matching w-[80%] class)
      const imageDisplayWidth = (isMobile || alwaysSingleImage)
        ? containerWidth * 0.8
        : (containerWidth / 2) * 0.8 // Half width for desktop (2 images side by side)

      // Calculate height from aspect ratio, add padding
      const calculatedHeight = imageDisplayWidth * imageAspectRatio + 32

      // Reasonable bounds
      return Math.min(Math.max(calculatedHeight, 400), 900)
    }

    const updateHeight = () => {
      setCarouselHeight(calculateHeight())
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [imageAspectRatio, alwaysSingleImage])

  // If alwaysSingleImage is true, always show single image carousel
  if (alwaysSingleImage) {
    return (
      <div className="mb-8">
        <Carousel indicator infinite className="rounded-lg overflow-hidden bg-surface-container-low" style={{ height: `${carouselHeight}px` }}>
          {images.map((image, index) => (
            <CarouselItem key={`single-${index}`}>
              <div className="flex justify-center items-center p-4 w-full h-full">
                {image.src ? (
                  <img
                    src={image.src}
                    alt={image.alt || `Screenshot ${index + 1}`}
                    className="w-[80%] h-auto rounded-lg shadow-lg max-h-full object-contain"
                  />
                ) : (
                  <div className="bg-surface-container-high rounded-lg p-12 text-center h-96 flex flex-col items-center justify-center">
                    <p className="text-on-surface-variant text-lg mb-3">
                      {image.placeholder}
                    </p>
                    <p className="text-on-surface-variant text-sm max-w-2xl">
                      {image.suggestion}
                    </p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    )
  }

  return (
    <>
      {/* Mobile carousel - 1 image per slide */}
      <div className="sm:hidden mb-8">
        <Carousel indicator infinite className="rounded-lg overflow-hidden bg-surface-container-low" style={{ height: `${carouselHeight}px` }}>
          {images.map((image, index) => (
            <CarouselItem key={`mobile-${index}`}>
              <div className="flex justify-center items-center p-4 w-full h-full">
                {image.src ? (
                  <img
                    src={image.src}
                    alt={image.alt || `Screenshot ${index + 1}`}
                    className="w-[80%] h-auto rounded-lg shadow-lg max-h-full object-contain"
                  />
                ) : (
                  <div className="bg-surface-container-high rounded-lg p-12 text-center h-96 flex flex-col items-center justify-center">
                    <p className="text-on-surface-variant text-lg mb-3">
                      {image.placeholder}
                    </p>
                    <p className="text-on-surface-variant text-sm max-w-2xl">
                      {image.suggestion}
                    </p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      {/* Desktop carousel - 2 images per slide */}
      <div className="hidden sm:block mb-8">
        <Carousel indicator infinite className="rounded-lg overflow-hidden bg-surface-container-low" style={{ height: `${carouselHeight}px` }}>
          {desktopGroups.map((group, groupIndex) => (
            <CarouselItem key={`desktop-${groupIndex}`}>
              <div className="flex gap-0 p-4 justify-center items-center w-full h-full">
                {group.map((image, imageIndex) => (
                  <div key={imageIndex} className="flex-1 flex justify-center">
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.alt || `Screenshot ${groupIndex * desktop + imageIndex + 1}`}
                        className="w-[80%] h-auto rounded-lg shadow-lg max-h-full object-contain"
                      />
                    ) : (
                      <div className="bg-surface-container-high rounded-lg p-12 text-center h-96 flex flex-col items-center justify-center w-full">
                        <p className="text-on-surface-variant text-lg mb-3">
                          {image.placeholder}
                        </p>
                        <p className="text-on-surface-variant text-sm max-w-2xl">
                          {image.suggestion}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </>
  )
}
