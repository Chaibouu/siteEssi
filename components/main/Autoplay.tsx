import Autoplay from "embla-carousel-autoplay"
import {
  Carousel
} from "@/components/ui/carousel"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}
