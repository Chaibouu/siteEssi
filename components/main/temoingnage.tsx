"use client"
import React, { useEffect, useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
// import { EmblaCarouselType } from "embla-carousel-react"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardTestimonial from "../CardTestimonial/CardTestimonial"

const Temoignage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })])
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", () => {
      // Do something on select
    })
  }, [emblaApi])

  return (
    <div className="relative py-14">
             <div className="relative z-10 max-w-screen-xl mx-auto  ">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Hear from our customers
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
                    </p>
                </div>
                <Carousel 
                    plugins={[plugin.current]}
                    onMouseEnter={() => plugin.current.stop()}
                    onMouseLeave={() => plugin.current.reset()}
                    className="w-full ">
                    <CarouselContent className="-ml-1 w-full ">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
                            <div className="">
                                <CardTestimonial />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/*       <CarouselPrevious />
                        <CarouselNext /> */}
                </Carousel>
            </div>
            <div className="absolute top-0 w-full h-[350px]" style={{ background: "linear-gradient(152.92deg, rgba(10, 107, 112, 0.2) 4.54%, rgba(10, 107, 112, 0.17) 34.2%, rgba(10, 107, 112, 0.1) 77.55%)" }}></div>
   
    </div>
  )
}

export default Temoignage
