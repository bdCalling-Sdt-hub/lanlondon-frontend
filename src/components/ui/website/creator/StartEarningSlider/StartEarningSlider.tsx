"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "Iva Ryan",
    title: "TikToker",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-video.mp4",
    quote:
      "We have enjoyed working with BB for years now. We've worked together on redesigning our complete product offering, including mobile apps, chat-widget, helpdesk, and web app. Our collaboration has been effortless as we speak.",
    metadata: "10x Return, Authentic works, fast-paced",
  },
  {
    name: "Iva Ryan",
    title: "TikToker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jdx2CrkUyOdW11s2iIo2MgBAExOHlG.png",
    quote:
      "We have enjoyed working with BB for years now. We've worked together on redesigning our complete product offering, including mobile apps, chat-widget, helpdesk, and web app. Our collaboration has been effortless as we speak.",
    metadata: "10x Return, Authentic works, fast-paced",
  },
  // Add more testimonials as needed
]

const StartEarningSlider = () => {
    return (
        <div>
            <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="text-center text-xl md:text-2xl font-medium mb-8">
        Our goal is to provide a good opportunities for
        <br />
        the Content creator to start earning
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="relative px-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-purple-50 rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt=""
                      className="w-full rounded-lg aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <span className="text-gray-600">{testimonial.title}</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.metadata}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full shadow-lg">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full shadow-lg">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="swiper-pagination flex justify-center gap-2 mt-6" />
      </div>
    </div>  
        </div>
    );
};

export default StartEarningSlider;